import { NextResponse } from 'next/server';
import { NotionAPI } from 'notion-client'


export async function POST(request) {

    const notion = new NotionAPI({ 
        authToken: process.env.NOTION_TOKEN_V2,
        activeUser: process.env.NOTION_USERID
    })
    
    const data = await notion.getCollectionData(process.env.NOTION_COLLECTIONID,process.env.NOTION_COLLECTIONVIEWID)

    const blockMap = data.recordMap.block;
    // Initialize an array to store the extracted data
    const extractedData = [];

    // Iterate over blockIds to extract relevant information
    data.result.reducerResults.collection_group_results.blockIds.forEach(blockId => {


        const block = blockMap[blockId].value;
        const properties = block.properties;
        if (!properties) return;
        
        // Extract id, title, slug, and description
        const id = properties['|NBx'] ? properties['|NBx'][0][0] : '';
        if (!id) return; // Only return pages with an ID.

        const title = properties.title ? properties.title[0][0] : '';

        const slug = properties['{{~J'] ? properties['{{~J'][0][0] : '';

        const description = properties['kRtc'] ? properties['kRtc'][0][0] : '';

        
        // Push extracted data into the array
        extractedData.push({ id, title, slug, description });
    });

    if (data === null) {
        return NextResponse.json({ status: 404, body: { error: 'Not Found' } })
    }

    return NextResponse.json({ body:extractedData })
}