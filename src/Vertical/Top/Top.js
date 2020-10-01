import React from "react";
import BlockTitle from "../../BlockTitle/BlockTitle";
import SubContent from "../../SubContent/SubContent";

import { Tabs } from "rtabs";

import makeTabs from "../../hooks/makeTabs";

export default function Top({ data }) {
  const tabs = makeTabs(data);
  return (
    <SubContent>
      <BlockTitle>Top Layout</BlockTitle>

      <pre>
        {`
        <Tabs 
           config={{
            layout: "vertical",
           }}
        >
            {tabs}
        </Tabs>
        `}
      </pre>

      <Tabs
        config={{
          layout: "vertical",
        }}
      >
        {tabs}
      </Tabs>
    </SubContent>
  );
}
