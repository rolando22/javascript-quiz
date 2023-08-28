import { IconButton, Stack } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { Question } from './../';
import { useQuestionsStore } from '../../store/questions';

export function Game() {
    const questions = useQuestionsStore(state => state.questions);
    const currentQuestion = useQuestionsStore(state => state.currentQuestion);
    const goNextQuestion = useQuestionsStore(state => state.goNextQuestion);
    const goPreviousQuestion = useQuestionsStore(state => state.goPreviousQuestion);

    const questionInfo = questions[currentQuestion];

    const handlerOnClickGoNextQuestion = () => goNextQuestion();
    const handlerOnClickGoPreviousQuestion = () => goPreviousQuestion();

    return (
        <>
            <Stack direction='row' gap={2} alignItems='center' justifyContent='center'>
                <IconButton onClick={handlerOnClickGoPreviousQuestion} disabled={currentQuestion === 0}>
                    <ArrowBackIosNew />
                </IconButton>
                {currentQuestion + 1} / {questions.length}
                <IconButton onClick={handlerOnClickGoNextQuestion} disabled={currentQuestion >= questions.length -1}>
                    <ArrowForwardIos />
                </IconButton>
            </Stack>
            <Question info={questionInfo} />
        </>
    );
}
