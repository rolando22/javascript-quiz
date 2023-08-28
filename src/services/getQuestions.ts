import { Question } from "../types/question";

export async function getQuestions(limit: number) {
    const res = await fetch('http://localhost:5173/questions.json');
    const data: Question[] = await res.json();
    const questions = data.sort(() => Math.random() - 0.5).slice(0, limit);
    return questions;
}
