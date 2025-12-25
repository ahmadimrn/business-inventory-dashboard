import { useState } from "react";
import {
    TextField,
    Button,
    Stack,
    Typography,
    Alert,
    Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router";

const Register = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        // API call will go here
        console.log("Register payload:", form);
    };

    return (
        <>
            <Typography variant="h5" fontWeight={600} mb={1}>
                Create account
            </Typography>

            <Typography variant="body2" color="text.secondary" mb={3}>
                Start managing your inventory
            </Typography>

            <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                    {error && <Alert severity="error">{error}</Alert>}

                    <TextField
                        label="Full name"
                        name="name"
                        required
                        fullWidth
                        onChange={handleChange}
                    />

                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        required
                        fullWidth
                        onChange={handleChange}
                    />

                    <TextField
                        label="Password"
                        name="password"
                        type="password"
                        required
                        fullWidth
                        helperText="Minimum 8 characters"
                        onChange={handleChange}
                    />

                    <br />

                    <Button type="submit" variant="contained" size="large">
                        Register
                    </Button>

                    <Link
                        component={RouterLink}
                        to="/login"
                        underline="hover"
                        textAlign="center"
                    >
                        Already have an account? Login
                    </Link>
                </Stack>
            </form>
        </>
    );
};

export default Register;
