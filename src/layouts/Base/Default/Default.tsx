/** Components */
import { Topbar, Footer } from "./components";
/** Theme */
import getTheme from "theme";
import { ThemeProvider, Paper } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

/** Components */
import Divider from "@mui/material/Divider";
import { EThemeMode } from "interfaces/Theme";

interface IDefaultLayoutProps {
  children: React.ReactNode;
  topbarItems?: React.ReactNode[];
}
const Default = ({ children, topbarItems }: IDefaultLayoutProps) => {
  const theme = getTheme(EThemeMode.LIGHT);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ height: "100%" }}>
        <Topbar
          items={topbarItems}
          // onSidebarOpen={handleSidebarOpen}
          // themeMode={themeMode}
          // themeToggler={themeToggler}
        />
        {/* <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
      /> */}
        <Divider variant="middle" />
        <main
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "0px",
          }}
        >
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Default;
