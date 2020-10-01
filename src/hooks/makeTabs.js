import React from "react";
import { Tab, TabTitle, TabContent } from "rtabs";

export default function makeTabs(data) {
  return data.map((item, index) => (
    <Tab key={index}>
      <TabTitle>{item.title}</TabTitle>
      <TabContent>{item.description}</TabContent>
    </Tab>
  ));
}
