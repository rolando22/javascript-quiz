import { create } from "zustand";
import { type Question } from "../types/question";

export interface QuestionsState {
    questions: Question[]
    currentQuestion: number
    fetchQuestions: (limit: number) => Promise<void>
}

export const useQuestionsStore = create<QuestionsState>((set) => ({
    questions: [],
    currentQuestion: 0,
    fetchQuestions: async (limit: number) => {
        const res = await fetch('http://localhost:5173/questions.json');
        const data = await res.json();
        const questions = data.sort(() => Math.random() - 0.5).slice(0, limit);
        set((state) => state.questions = questions );
    },
}));
