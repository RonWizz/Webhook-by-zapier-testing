import React from "react";
import * as _Builtin from "./_Builtin";
import { Navbar } from "./Navbar";
import * as _utils from "./utils";
import _styles from "./Contact.module.css";

export function Contact({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "div-block-45")} tag="div">
      <Navbar />
      <_Builtin.Block className={_utils.cx(_styles, "div-block-46")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-47")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "heading-38")}
            tag="h1"
          >
            {"Contact Us"}
          </_Builtin.Heading>
          <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-27")}>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
            }
          </_Builtin.Paragraph>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
