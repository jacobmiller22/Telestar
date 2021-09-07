import { Main } from "layouts";
import React from "react";
import { IndexView } from "views";
import WithLayout from "WithLayout";

const dashboard = () => {
  return <WithLayout component={IndexView} layout={Main} />;
};

export default dashboard;
