import { useQuestionsStore } from "../store/questions";

export function useQuestionsData() {
    const questions = useQuestionsStore(state => state.questions);

    const [correct, incorrect, unanswered] = questions.reduce((accumulator, currentValue) => {
        const { userSelectedAnswer, correctAnswer } = currentValue;
        if (userSelectedAnswer === correctAnswer) accumulator[0]++;
        else if (userSelectedAnswer != null && userSelectedAnswer !== correctAnswer) accumulator[1]++;
        else accumulator[2]++;
        return accumulator;
    }, [0, 0, 0]);

    return {
        correct,
        incorrect, 
        unanswered,
    };
}
