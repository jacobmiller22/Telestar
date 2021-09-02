import { Main } from "layouts";
import React from "react";
import { PlayerView } from "views";
import WithLayout from "WithLayout";

const dashboard = () => {
  return <WithLayout component={PlayerView} layout={Main} />;
};

export default dashboard;
