import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type Question } from "../types/question";
import { getQuestions } from "../services/getQuestions";

export interface QuestionsState {
    questions: Question[]
    currentQuestion: number
    fetchQuestions: (limit: number) => Promise<void>
    selectAnswer: (questionId: number, answerIndex: number) => void
    goNextQuestion: () => void
    goPreviousQuestion: () => void
    reset: () => void
}

export const useQuestionsStore = create<QuestionsState>()(persist((set, get) => ({
    questions: [],
    currentQuestion: 0,
    fetchQuestions: async (limit: number) => {
        const questions = await getQuestions(limit);
        set({ questions });
    },
    selectAnswer: (questionId: number, answerIndex: number) => {
        const { questions } = get();
        const newQuestions = structuredClone(questions);
        const questionIndex = newQuestions.findIndex(q => q.id === questionId);
        const questionInfo = newQuestions[questionIndex];
        const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex;
        newQuestions[questionIndex] = {
            ...questionInfo,
            isCorrectUserAnswer,
            userSelectedAnswer: answerIndex,
        };
        set({ questions: newQuestions });
    },
    goNextQuestion: () => {
        const { currentQuestion, questions } = get();
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) set({ currentQuestion: nextQuestion });
    },
    goPreviousQuestion: () => {
        const { currentQuestion } = get();
        const previousQuestion = currentQuestion - 1;
        if (previousQuestion >= 0) set({ currentQuestion: previousQuestion });
    },
    reset: () => {
        set({ questions: [], currentQuestion: 0 });
    },
}), {
    name: 'questions',
}));
