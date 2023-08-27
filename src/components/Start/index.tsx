import { Button } from "@mui/material";
import { useQuestionsStore } from "../../store/questions";

const LIMIT_QUESTIONS = 10;

export function Start() {
    const fetchQuestions = useQuestionsStore(state => state.fetchQuestions);

    const handleOnClickFetchQuestions = () => fetchQuestions(LIMIT_QUESTIONS);

    return (
        <Button 
            variant='contained'
            onClick={handleOnClickFetchQuestions}
        >
            ¡Empezar!
        </Button>
    );
}
