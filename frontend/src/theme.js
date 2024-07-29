import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            md: 768,
            lg: 1024,
        },
    },
});

export default theme;
