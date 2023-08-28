import { useQuestionsData } from "../../hooks/useQuestionsData";

export function Footer() {
    const { correct, incorrect, unanswered } = useQuestionsData();

    return (
        <footer>
            <strong>{`✅ ${correct} correctas - ❌ ${incorrect} incorrectas - ❔ ${unanswered} sin responder`}</strong>
        </footer>
    );
}
