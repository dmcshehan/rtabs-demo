import React from "react";
import SubTitle from "../SubTitle/SubTittle";

import Top from "./Top/Top";

export default function Vertical({ data }) {
  return (
    <div>
      <SubTitle>Vertical Layout</SubTitle>
      <Top data={data} />
    </div>
  );
}
