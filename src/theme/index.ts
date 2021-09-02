import { createTheme, responsiveFontSizes } from "@material-ui/core";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";
import { light, dark } from "./palette";
import { EThemeMode } from "interfaces/Theme";
// import MUIRichTextEditor from "mui-rte";

const getTheme = (mode) =>
  responsiveFontSizes(
    createTheme({
      palette: (mode === EThemeMode.LIGHT ? light : dark) as PaletteOptions,
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
      overrides: {
        //@ts-expect-error
        MUIRichTextEditor: {
          root: {
            marginTop: 20,
            width: "80%",
          },
          editor: {
            borderBottom: "1px solid gray",
            minHeight: "50vh",
          },
        },
      },
    })
  );

export default getTheme;
