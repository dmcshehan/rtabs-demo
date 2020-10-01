import React from "react";
import SubTitle from "../SubTitle/SubTittle";

import Left from "./Left/Left";
import Middle from "./Middle/Middle";
import Right from "./Right/Right";

export default function Horizontal({ data }) {
  return (
    <div>
      <SubTitle>Horizontal</SubTitle>
      <Left data={data} />
      <Middle data={data} />
      <Right data={data} />
    </div>
  );
}
