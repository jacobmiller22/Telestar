import React, { useState, useEffect } from "react";
import getTheme from "theme";

/** Interfaces/Types */
import { EThemeMode } from "interfaces/Theme";

/** Components */
import { ThemeProvider } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

export const useDarkMode = () => {
  const [themeMode, setTheme] = useState<EThemeMode>(EThemeMode.LIGHT);
  const [mountedComponent, setMountedComponent] = useState(false);

  const setMode = (mode: any) => {
    window.localStorage.setItem("themeMode", mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    themeMode === EThemeMode.LIGHT
      ? setMode(EThemeMode.DARK)
      : setMode(EThemeMode.LIGHT);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("themeMode");
    localTheme ? setTheme(localTheme as EThemeMode) : setMode(EThemeMode.LIGHT);
    setMountedComponent(true);
  }, []);

  return [themeMode, themeToggler, mountedComponent];
};

const WithLayout = ({ component: Component, layout: Layout, ...rest }) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles!.parentElement!.removeChild(jssStyles);
    }
  }, []);

  const [themeMode, themeToggler, mountedComponent] = useDarkMode();

  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={getTheme(themeMode)}>
      <CssBaseline />
      <Paper elevation={0}>
        <Layout themeMode={themeMode} themeToggler={themeToggler}>
          <Component themeMode={themeMode} {...rest} />
        </Layout>
      </Paper>
    </ThemeProvider>
  );
};

export default WithLayout;
