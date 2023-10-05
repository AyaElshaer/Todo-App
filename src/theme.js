import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Josefin Sans,  sans-serif",
  }
})

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}> {children} </ThemeProvider>;
}
