import { Card, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { type Question } from '../../types/question';

interface Props {
    info: Question
}

export function Question({ info }: Props) {
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
                        <ListItemButton>
                            <ListItemText primary={answer} sx={{ textAlign: 'center' }} />
                        </ListItemButton>
                    </ListItem>
                )}
            </List>
        </Card>
    );
}
