from types import ClassMethodDescriptorType
from flask import Flask, jsonify, request, redirect
from pymongo import MongoClient
import os
from bson.objectid import ObjectId
import spotipy
from spotipy.oauth2 import SpotifyOAuth, SpotifyClientCredentials
import datetime
from spotipy.cache_handler import CacheHandler

scope = "user-read-currently-playing,user-read-recently-played"


database = MongoClient(os.environ.get('MONGO_URI_PV3'))

"""
    Handles reading and writing cached Spotify authorization tokens
    as database items on mongodb
"""
class CacheDBHandler(CacheHandler):
    def __init__(self, cache_path=None, username=None, encoder_cls=None):
        super().__init__()
        
    def save_token_to_cache(self, token_info):
        # Save token to database.content.spotify_tokens
        # with object ID 6552529d29751989612f03da
        database.content.spotify_tokens.update_one({'_id': ObjectId('6552529d29751989612f03da')}, {'$set': token_info}, upsert=True)

    def get_cached_token(self):
        # Retrieve the token from the database
        token_info = database.content.spotify_tokens.find_one({})
        return token_info


# Initialize the SpotifyOAuth object without user input
auth_manager = SpotifyOAuth(scope=scope, open_browser=False, cache_handler=CacheDBHandler())
sp = spotipy.Spotify(auth_manager=auth_manager)

auth_key = os.environ.get('USER_AUTH_KEY')


app = Flask(__name__, static_folder='../build', static_url_path='/')


@app.route('/api/spotify/login')
def login():
    auth_header = request.args.get('auth')
    if auth_header is None:
        return jsonify({'error': 'Authorization header missing'}), 401

    if auth_header != auth_key:
        return jsonify({'error': 'Authorization header invalid'}), 401

    auth_url = auth_manager.get_authorize_url()
    return redirect(auth_url)

@app.route('/api/spotify/callback')
def callback():
    if request.args.get("code"):
        auth_manager.get_access_token(request.args.get("code"))
        return redirect('/')
    else:
        return redirect('/api/spotify/login')

# Spotify currently playing
@app.route('/api/spotify/currently-playing', methods=['GET'])
def get_currently_playing():
    results = sp.currently_playing()
    
    if results is None:
        results = sp.current_user_recently_played(limit=1)['items'][0]


        if results is None:
            return jsonify({'error': 'No song currently playing'}), 404
        
        return jsonify({
            'isPlaying': False,
            'href': results['track']['external_urls']['spotify'],
            'title': results['track']['name'],
            'artist': ', '.join(artist['name'] for artist in results['track']['artists']),
            'album': results['track']['album']['name'],
            'albumImageUrl': results['track']['album']['images'][2]['url']
        }), 200
    
    return jsonify({
        'isPlaying': True,
        'title': results['item']['name'],
        'href': results['item']['external_urls']['spotify'],
        'artist': ', '.join(artist['name'] for artist in results['item']['artists']),
        'album': results['item']['album']['name'],
        'albumImageUrl': results['item']['album']['images'][2]['url']
    }), 200


# Define a route to university results
@app.route('/api/results', methods=['GET'])
def get_results():
    results = database.content.results.find()
    result_list = []
    for result in results:
        result_list.append({
            'year': result['year'],
            'name': result['name'],
            'result': result['result'],
        })
    return jsonify(result_list)


@app.route('/api/authenticate', methods=['POST'])
def authenticate():
    auth_header = request.headers.get('Authorization')
    print(auth_header)
    print(auth_key)
    if auth_header is None:
        return jsonify({'error': 'Authorization header missing'}), 401

    if auth_header != auth_key:
        return jsonify({'error': 'Authorization header invalid'}), 401

    return jsonify({'message': 'Authorization successful'}), 200

# Define a route to project titles and IDs.
@app.route('/api/projects/titles', methods=['GET'])
def get_projects():
    res = []
    projects = database.content.projects.find()

    
    for project in projects:
        res.append({
            'id': str(project['_id']),
            'title': project['title'],
            'route': project['route'],
        })
    return jsonify(res)

# Define a route to update/add project by route
@app.route('/api/projects/<route>', methods=['PUT'])
def update_project(route):
    # If authorization present and correct, create a new project
    auth_header = request.headers.get('Authorization')
    
    projects = database.content.projects
    title = request.json['title']
    content = request.json['content']
    route = request.json['route']
    
    if auth_header is None or auth_header != auth_key:
        return jsonify({'error': 'Authorization header missing or invalid'}), 401
    
    if projects.find({'route':route}) == None:
        # Create new project at specified route, if it does not exist
        projects.insert_one({'title': title, 'route': route, 'date': datetime.datetime.now(), 'content': content})
        return jsonify({'message': 'Project created successfully'}), 200

    projects.update_one({'route': route}, {'$set': {'title': title, 'route': route, 'date': datetime.datetime.now(), 'content': content}}, upsert=True)
    return jsonify({'message': 'Project updated successfully'}), 200

# Define a route to get a project
@app.route('/api/projects/<id>', methods=['GET'])
def get_project(id):
    projects = database.content.projects
    project = projects.find_one({'_id': ObjectId(id)})
    if project == None:
        return jsonify({'error': 'Project not found'}), 404
    res = {
        'title': project['title'],
        'date': project['date'],
        'content': project['content'],
        'route': project['route'],
    }
    return jsonify(res)

# Get project by route
@app.route('/api/projects/route/<route>', methods=['GET'])
def get_project_by_route(route):
    projects = database.content.projects
    project = projects.find_one({'route': route})
    if project == None:
        return jsonify({'error': 'Project not found'}), 404
    
    res = {
        'title': project['title'],
        'date': project['date'],
        'content': project['content'],
        'route': project['route'],
    }
    return jsonify(res)


# Delete a project by route
@app.route('/api/projects/<route>', methods=['DELETE'])
def delete_project(route):

    auth_header = request.headers.get('Authorization')
    
    projects = database.content.projects
    
    if auth_header is None or auth_header != auth_key:
        return jsonify({'error': 'Authorization header missing or invalid'}), 401
    
    if projects.find({'route':route}) == None:
        return jsonify({'error': 'Project not found'}), 404
    
    projects.delete_one({'route': route})
    return jsonify({'message': 'Project deleted successfully'}), 200


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


# Define a route to index.html
@app.route('/')
def index():
    return app.send_static_file('index.html')


if __name__ == "__main__":
    app.run()
