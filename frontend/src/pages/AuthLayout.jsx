import { Outlet } from "react-router";
import { Toolbar, Box, CssBaseline, Container, Card } from "@mui/material";

const AuthLayout = () => {
    return (
        <>
            <CssBaseline />
            <Toolbar />
            <Container maxWidth="sm">
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ mt: 5 }}
                >
                    <Card sx={{ width: "100%", borderRadius: 3, p: 5 }}>
                        <Outlet />
                    </Card>
                </Box>
            </Container>
        </>
    );
};

export default AuthLayout;
