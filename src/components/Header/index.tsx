import { Container, Stack, Typography } from '@mui/material';
import { JavaScriptLogo } from './../';

export function Header() {
    return (
        <header>
            <Container maxWidth='sm'>
                <Stack direction='row' gap={2} alignItems='center' justifyContent='center'>
                    <JavaScriptLogo />
                    <Typography variant='h2' component='h1'>
                        JavaScript Quiz
                    </Typography>
                </Stack>
            </Container>
        </header>
    );
}
