import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const Other = () => {
  return (
    <div>
      <ThemeProvider theme={createTheme()}>
        <CssBaseline />
        This is the Another Page
      </ThemeProvider>
    </div>
  );
};
