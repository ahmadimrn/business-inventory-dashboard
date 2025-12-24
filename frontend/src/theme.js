import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        mode: "dark",

        primary: {
            main: "#9aa5ce",
        },

        secondary: {
            main: "#f6ececff",
        },

        background: {
            default: "#2a2a2a",
            secondary: "#1a1a1a",
            navbar: "#08080cff",
        },

        divider: "#3e3d3dff",

        text: {
            primary: "#e0e0e0",
        },
    },

    typography: {
        fontFamily: "Poppins, Arial, sans-serif",
    },
});

export default theme;
