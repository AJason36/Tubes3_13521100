import { db } from "lib/db";

// Get All Messages in Session by Session ID
// Contoh Cara Manggil:
// const id = "ini-id";
// const response = await fetch(`/api/session/${encodeURIComponent(id)}`, {
//     method: 'GET',
// });
export async function GET(req: Request, { params, }: { params: { sessionId: string }; }) {
    // Get Session ID from params
    const sessionId = params.sessionId;

    // Database Query
    const messages = await db.chatMessage.findMany({
        where: {
            sessionId: sessionId,
        },
        select: {
            id: true,
            input: true,
            response: true,
        },
    });

    return new Response(JSON.stringify(messages));
}

// Create New Message in Session by Session ID
// Contoh Cara Manggil:
// const id = "ini-id";
// const response = await fetch(`/api/session/${encodeURIComponent(id)}`, {
//     method: 'POST',
//     body: JSON.stringify({ input: "Ini Input", response: "Ini Response" }),
// })
export async function POST(req: Request, { params, }: { params: { sessionId: string }; }) {
    // Get Session ID from params
    const sessionId = params.sessionId;

    // JSON Parsing from Request Body
    const { input, response } = await req.json();

    // Empty Validation
    if (!input) return new Response(JSON.stringify({ message: "Input tidak boleh kosong" }))
    if (!response) return new Response(JSON.stringify({ message: "Response tidak boleh kosong" }))

    // Database Query
    await db.chatMessage.create({
        data: {
            sessionId: sessionId,
            input: input,
            response: response,
        },
    });

    return new Response(JSON.stringify({ message: "Pesan baru berhasil dibuat" }));
}

// Change Session Name
// Contoh Cara Manggil:
// const id = "ini-id";
// const response = await fetch(`/api/session/${encodeURIComponent(id)}`, {
//     method: 'PUT',
//     body: JSON.stringify({ name: "Ini Nama Session" }),
// })
export async function PUT(req: Request, { params, }: { params: { sessionId: string }; }) {
    // Get Session ID from params
    const sessionId = params.sessionId;

    // JSON Parsing from Request Body
    const { name } = await req.json();

    // Empty Validation
    if (!name) return new Response(JSON.stringify({ message: "Nama sesi tidak boleh kosong" }))

    // Database Query
    await db.chatSession.update({
        where: {
            id: sessionId,
        },
        data: {
            name: name,
        },
    });

    return new Response(JSON.stringify({ message: "Nama sesi berhasil diubah" }));
}

// Delete Session
// Contoh Cara Manggil:
// const id = "ini-id";
// const response = await fetch(`/api/session/${encodeURIComponent(id)}`, {
//     method: 'DELETE',
// });
export async function DELETE(req: Request, { params, }: { params: { sessionId: string }; }) {
    // Get Session ID from params
    const sessionId = params.sessionId;

    // Database Query
    await db.chatSession.delete({
        where: {
            id: sessionId,
        },
    });

    return new Response(JSON.stringify({ message: "Sesi berhasil dihapus" }));
}
