import { useQuestionsStore } from '../../store/questions';
import { Question } from './../';

export function Game() {
    const questions = useQuestionsStore(state => state.questions);
    const currentQuestion = useQuestionsStore(state => state.currentQuestion);

    const questionInfo = questions[currentQuestion];

    return (
        <>
            <Question info={questionInfo} />
        </>
    );
}
