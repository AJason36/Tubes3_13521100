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
// })
export async function POST(req: Request) {
    try {
        await db.chatSession.create({
            data: {
                name: "New Chat",
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


