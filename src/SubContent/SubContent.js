import React from "react";
import { sub } from "./SubContent.module.css";

export default function SubContent({ children }) {
  return <div className={sub}>{children}</div>;
}
