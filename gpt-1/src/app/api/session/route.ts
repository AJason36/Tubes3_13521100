import { db } from "lib/db";

// Get All Sessions
// Contoh Cara Manggil:
// const response = await fetch('/api/session', {
//     method: 'GET',
// })
export async function GET(req: Request) {
    // Database Query
    const sessions = await db.chatSession.findMany();

    return new Response(JSON.stringify(sessions));
}

// Create New Session
// Contoh Cara Manggil:
// const response = await fetch('/api/session', {
//     method: 'POST',
//     body: JSON.stringify({ num: <number> }),
// })
export async function POST(req: Request) {
    const { num } = await req.json();

    try {
        await db.chatSession.create({
            data: {
                name: "Chat " + num,
            },
        });

        return new Response(JSON.stringify({ message: "Chat baru berhasil dibuat" }));
    } catch (e: any) {
        if (e.code == "P2002") {
            // Unique Constraint Error
            return new Response(JSON.stringify({
                message: "Ganti nama chat sebelumnya terlebih dahulu"
            }));
        }
    }
}

// Delete All Sessions
// Contoh Cara Manggil:
// const response = await fetch('/api/session', {
//     method: 'DELETE',
// });
export async function DELETE(req: Request) {
    await db.chatSession.deleteMany();

    return new Response(JSON.stringify({ message: "Semua chat berhasil dihapus" }));
}
