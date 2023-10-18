import React from "react";
import * as _Builtin from "./_Builtin";
import { Navbar } from "./Navbar";
import * as _utils from "./utils";
import _styles from "./Accomodation.module.css";

export function Accomodation({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "heroic")} tag="div">
      <Navbar />
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-33", "mob-text")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-14", "mob-pad")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "heading-15")}
            tag="h1"
            text-split=""
            words-slide-from-right=""
          >
            {"Accomodation, "}
            <br />
            {"that you need"}
          </_Builtin.Heading>
          <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-10")}>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
            }
          </_Builtin.Paragraph>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
