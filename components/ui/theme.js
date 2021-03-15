import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "rgb(165, 202, 186)" },
    secondary: {
      main: "rgb(99, 169, 142)",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});
export default theme;
