import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { PaletteOptions } from "@mui/material/styles/createPalette";
import { light, dark } from "./palette";
import { EThemeMode } from "interfaces/Theme";
// import MUIRichTextEditor from "mui-rte";

const getTheme = (mode: any) =>
  responsiveFontSizes(
    createTheme({
      palette: (mode === EThemeMode.LIGHT ? light : dark) as PaletteOptions,
      //@ts-ignore
      layout: {
        contentWidth: 1236,
      },
      typography: {
        fontFamily: "Lato",
      },
      zIndex: {
        appBar: 1200,
        drawer: 1100,
      },
      overrides: {},
    })
  );

export default getTheme;
