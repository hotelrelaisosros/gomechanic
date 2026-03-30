// import React from 'react';

import { Box, Button, Typography, Container } from '@mui/material';

const Login = () => {
    return (
        <Container component="main" maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
                <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={() => alert("This is just a dummy login page for testing redirection.")}
                >
                    Sign In
                </Button>
            </Box>
        </Container>
    );
};

export default Login;
