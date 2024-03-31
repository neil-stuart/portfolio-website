import {MongoClient} from 'mongodb';

export async function GET(req) {
    const client = new MongoClient(process.env.MONGO_URI_PV3);
    await client.connect();
    const db = client.db("content");

    const collection = db.collection('results');
    const results = await collection.find({}).toArray();

    await client.close();
    
    if (results.length == 0) {
        return Response.json({
            status: 404,
            body: {
                message: 'No results found'
            }
        });
    }
    
    return Response.json({
        status: 200,
        body: results
    });
}