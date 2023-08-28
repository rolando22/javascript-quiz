import { Card, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { type Question } from '../../types/question';
import { useQuestionsStore } from '../../store/questions';

const getBackgroundColor = (info: Question, answerIndex: number) => {
    const { userSelectedAnswer, correctAnswer } = info;
    if (userSelectedAnswer == null) return 'transparent';
    if (answerIndex !== correctAnswer && answerIndex !== userSelectedAnswer) return 'blue';
    if (answerIndex === correctAnswer) return 'green';
    if (answerIndex === userSelectedAnswer) return 'red';
    return 'blue';
};

interface Props {
    info: Question
}

export function Question({ info }: Props) {
    const selectAnswer = useQuestionsStore(state => state.selectAnswer);

    const handlerOnClickSelectAnswer = (answerId: number) => () => selectAnswer(info.id, answerId);

    return (
        <Card variant='outlined' sx={{ bgcolor: '#222', p: 2, textAlign: 'left', marginTop: 4 }}>
            <Typography variant='h5'>
                {info.question}
            </Typography>
            <SyntaxHighlighter language='javascript' style={gradientDark}>
                {info.code}
            </SyntaxHighlighter>
            <List sx={{ bgcolor: '#333' }} disablePadding>
                {info.answers.map((answer, index) => 
                    <ListItem key={index} disablePadding divider>
                        <ListItemButton 
                            sx={{ backgroundColor: getBackgroundColor(info, index) }}
                            onClick={handlerOnClickSelectAnswer(index)}
                            disabled={info.userSelectedAnswer != null}
                        >
                            <ListItemText primary={answer} sx={{ textAlign: 'center' }} />
                        </ListItemButton>
                    </ListItem>
                )}
            </List>
        </Card>
    );
}
