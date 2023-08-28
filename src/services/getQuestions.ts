import { Question } from "../types/question";

const API_URL = import.meta.env.PROD ? 'https://rolando22.github.io/javascript-quiz/' : 'http://localhost:5173/'

export async function getQuestions(limit: number) {
    const res = await fetch(`${API_URL}questions.json`);
    const data: Question[] = await res.json();
    const questions = data.sort(() => Math.random() - 0.5).slice(0, limit);
    return questions;
}
