import { Button, Stack } from "@mui/material";
import { useQuestionsData } from "../../hooks/useQuestionsData";
import { useQuestionsStore } from "../../store/questions";

export function Footer() {
    const { correct, incorrect, unanswered } = useQuestionsData();
    const reset = useQuestionsStore(state => state.reset);

    const handleOnClickReset = () => reset();

    return (
        <footer>
            <Stack direction='column' spacing={1} alignItems='center' justifyContent='center'>
                <strong>{`✅ ${correct} correctas - ❌ ${incorrect} incorrectas - ❔ ${unanswered} sin responder`}</strong>
                <Button onClick={handleOnClickReset}>Resetear Juego</Button>
            </Stack>
        </footer>
    );
}
