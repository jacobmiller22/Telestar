import type { NextPage } from "next";
import { Split } from "layouts";
import { GoalNew } from "views";

/** Components */
import TopbarGroup from "components/Atomics/TopbarGroup";
import { DEFAULT_TOPBAR_ITEMS } from "consts";

const GoalsPage: NextPage = () => (
  <Split topbarItems={TopbarGroup({ items: DEFAULT_TOPBAR_ITEMS })}>
    <GoalNew />
  </Split>
);

export default GoalsPage;
