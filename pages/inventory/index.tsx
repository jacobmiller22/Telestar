import type { NextPage } from "next";

/** Components */
import { Split } from "layouts";
import TopbarGroup from "components/Atomics/TopbarGroup";
import { DEFAULT_TOPBAR_ITEMS } from "consts";
import Inventory from "views/Inventory";

const GoalsPage: NextPage = () => (
  <Split topbarItems={TopbarGroup({ items: DEFAULT_TOPBAR_ITEMS })}>
    <Inventory />
  </Split>
);

export default GoalsPage;
