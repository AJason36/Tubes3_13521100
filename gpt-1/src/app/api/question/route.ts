import { db } from "../../../lib/db";

// Contoh Cara Manggil:
// const response = await fetch('/api/question', {
//     method: 'GET',
// })
export async function GET(req: Request) {
    // Database Query
    const questions = await db.question.findMany();
    // console.log(questions)

    return new Response(JSON.stringify(questions));
}

// Contoh Cara Manggil:
// const response = await fetch('/api/question', {
//     method: 'POST',
//     body: JSON.stringify({ question: "Ini Pertanyaan?", answer: "Ini Jawaban" }),
// })
export async function POST(req: Request) {
    // JSON Parsing from Request Body
    const { question, answer } = await req.json();
    
    // Empty Validation
    if (!question) return new Response(JSON.stringify({ message: "Pertanyaan tidak boleh kosong" }))
    if (!answer) return new Response(JSON.stringify({ message: "Jawaban tidak boleh kosong" }))

    // Database Query
    try {
        await db.question.create({
          data: {
            question: question,
            answer: answer,
          },
        });

        return new Response(JSON.stringify({ response: "Pertanyaan berhasil ditambahkan" }));
    } catch (e: any) {
        if (e.code === "P2002") {
            // Unique Constraint Error
            return new Response(JSON.stringify({
                message: "Pertanyaan sudah ada di database. Hapus pertanyaan sebelumnya terlebih dahulu bila ingin mengganti jawaban"
            }));
        }
        
        throw e;
    }
}