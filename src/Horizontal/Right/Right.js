import React from "react";
import BlockTitle from "../../BlockTitle/BlockTitle";
import SubContent from "../../SubContent/SubContent";

import { Tabs } from "rtabs";

import makeTabs from "../../hooks/makeTabs";

export default function Right({ data }) {
  const tabs = makeTabs(data);
  return (
    <SubContent>
      <BlockTitle>Right Layout</BlockTitle>

      <pre>
        {`
        <Tabs 
           config={{
            layout: "horizontal",
            alignTitles: "right"
           }}
        >
            {tabs}
        </Tabs>
        `}
      </pre>

      <Tabs
        config={{
          alignTitles: "right",
        }}
      >
        {tabs}
      </Tabs>
    </SubContent>
  );
}
