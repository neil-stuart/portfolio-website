import { NotionAPI } from 'notion-client'


export async function GET(req, { params }) {
    const id = params.id
    
    const notion = new NotionAPI({ 
        authToken: process.env.NOTION_TOKEN_V2,
        activeUser: process.env.NOTION_USERID
    })

    const recordMap = await notion.getPage(id)
    
    if (recordMap === null) {
        return Response.json({ status: 404, body: { error: 'Not Found' } })
    }

    return Response.json({ recordMap })
}