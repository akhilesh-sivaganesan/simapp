import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    blue: {
      main: "#3366CC",
      light: "#335c8c",
      dark: "#001536",
    },
    purple: {
      main: "#990099",
      light: "#6ab5f2",
      dark: "#006698",
    },
    red: {
      main: "#DC3912",
      light: "#fd6d57",
      dark: "#920000",
    },
    green: {
      main: "#109618",
    },
    background: {
      default: "#F5F5F5",
    },
  },
  typography: {
    fontFamily: "Inter Tight, sans-serif",
  },
});

theme.components = {
  MuiButton: {
    styleOverrides: {
      containedPrimary: {
        background: `linear-gradient(45deg, ${theme.palette.primary.main} 70%, ${theme.palette.primary.light} 90%)`,
        "&.Mui-disabled": {
          display: "none",
        },
      },
    },
  },
};

export default theme;
