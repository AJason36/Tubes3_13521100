import { db } from "lib/db";

// Delete Question
// Contoh Cara Manggil:
// const question = "Ini Pertanyaan?";
// const response = await fetch(`/api/question/${encodeURIComponent(question)}`, {
//     method: 'DELETE',
// });
export async function DELETE(req: Request, { params, }: { params: { question: string }; }) {
    // Get Question from params
    const question = params.question;

    // Empty Validation
    if (!question) return new Response(JSON.stringify({ message: "Pertanyaan tidak boleh kosong" }))

    // Get Question ID
    const questionId = await db.question.findFirst({
        where: {
            question: question,
        },
        select: {
            id: true,
        },
    });

    // If Question Not Found
    if (!questionId) return new Response(JSON.stringify({ message: "Pertanyaan tidak ditemukan" }))

    // Database Query
    await db.question.delete({
        where: {
            id: questionId.id,
        },
    });

    return new Response(JSON.stringify({ message: "Pertanyaan berhasil dihapus" }));
}
