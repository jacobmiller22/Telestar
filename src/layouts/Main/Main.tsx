/** Components */
import { AppBar } from "@material-ui/core";

const Main = ({ children }) => {
  return (
    <div>
      <AppBar color="primary">
        <div>Covid-19 Projections</div>
      </AppBar>
      {children}
    </div>
  );
};

export default Main;
