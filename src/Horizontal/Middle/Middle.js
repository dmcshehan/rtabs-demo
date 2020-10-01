import React from "react";
import BlockTitle from "../../BlockTitle/BlockTitle";
import SubContent from "../../SubContent/SubContent";

import { Tabs } from "rtabs";

import makeTabs from "../../hooks/makeTabs";

export default function Horizontal({ data }) {
  const tabs = makeTabs(data);
  return (
    <SubContent>
      <BlockTitle>Middle Layout</BlockTitle>

      <pre>
        {`
        <Tabs 
           config={{
             layout: "horizontal",
             alignTitles: "middle"
           }}
        >
            {tabs}
        </Tabs>
        `}
      </pre>

      <Tabs
        config={{
          alignTitles: "middle",
        }}
      >
        {tabs}
      </Tabs>
    </SubContent>
  );
}
