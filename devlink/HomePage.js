import React from "react";
import * as _Builtin from "./_Builtin";
import { Navbar } from "./Navbar";
import * as _utils from "./utils";
import _styles from "./HomePage.module.css";

export function HomePage({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "hero")} tag="div">
      <Navbar />
      <_Builtin.Block className={_utils.cx(_styles, "cont")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block", "heading")}
          tag="div"
        >
          <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-2")}>
            {"AN UNMATCHED BOUTIQUE HOTEL EXPERIENCE"}
          </_Builtin.Paragraph>
          <_Builtin.Heading
            className={_utils.cx(_styles, "heading-2")}
            tag="h1"
          >
            {"Halifax Tower Hotel"}
            <br />
            {"& "}
          </_Builtin.Heading>
          <_Builtin.Heading
            className={_utils.cx(_styles, "heading-2")}
            tag="h1"
          >
            {"Conference "}
            <br />
            {"Centre"}
          </_Builtin.Heading>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
