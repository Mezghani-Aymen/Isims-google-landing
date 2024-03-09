import { NextResponse } from "next/server";

const API_KEY = process.env.DATA_API_KEY;

export async function GET(URL) {
    const res = await fetch(URL);
    const data = await res.json();
    return NextResponse.json(data);
}
export async function DELETE(URL, id) {
    if (!id) return NextResponse.json({ "message": "No ID provided" });
    await fetch(`${URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'API-KEY': API_KEY,
        }
    });
    return NextResponse.json({ "message": `TODO ${id} deleted` });
}

export async function PUT(URL, id, data, dataFormat) {
    if (!id) return NextResponse.json({ "message": "No ID provided" });
    if (!isValidDataFormat(data, dataFormat)) return NextResponse.json({ "message": "Data does not match the specified format" });
    const res = await fetch(`${URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'API-KEY': API_KEY
        },
        body: data
    });
    const newObject = await res.json();
    return NextResponse.json(newObject);
}

export async function POST(URL, data, dataFormat) {
    if (!isValidDataFormat(data, dataFormat)) return NextResponse.json({ "message": "Data does not match the specified format" });
    const res = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'API-KEY': API_KEY
        },
        body: data
    });
    const newObject = await res.json();
    return NextResponse.json(newObject);
}

function isValidDataFormat(data, dataFormat) {
    if (dataFormat === 'object' && typeof data === 'object') {
        return true;
    }
    return false;
}
