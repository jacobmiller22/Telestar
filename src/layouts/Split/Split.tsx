import React from "react";
import Default from "../Base/Default";

interface ISplitProps {
  children: React.ReactNode;
  topbarItems?: React.ReactNode[];
  [rest: string]: any;
}

const Split = ({ children, topbarItems, ...rest }: ISplitProps) => {
  return <Default topbarItems={topbarItems}>{children}</Default>;
};

export default Split;
