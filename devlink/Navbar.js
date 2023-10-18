import Link from "next/link";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Navbar.module.css";

export function Navbar({ as: _Component = _Builtin.NavbarWrapper }) {
  return (
    <_Component
      className={_utils.cx(_styles, "navbar")}
      tag="div"
      config={{
        animation: "default",
        collapse: "medium",
        docHeight: false,
        duration: 400,
        easing: "ease",
        easing2: "ease",
        noScroll: false,
      }}
    >
      <_Builtin.NavbarContainer
        className={_utils.cx(_styles, "container-2")}
        tag="div"
      >
        <_Builtin.NavbarBrand
          // options={{
          //   href: "#",
          // }}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "image-17", "logo", "mob-logo")}
            loading="lazy"
            height="auto"
            alt="__wf_reserved_inherit"
            width="auto"
            src="https://uploads-ssl.webflow.com/64db145c0d43070d1977b449/64de41299c74f5b674db8887_emojione-monotone_hotel.svg"
          />
        </_Builtin.NavbarBrand>
        <_Builtin.NavbarMenu
          className={_utils.cx(_styles, "nav-menu")}
          tag="nav"
          role="navigation"
        >
        
          <_Builtin.NavbarLink
          
          > 
          </_Builtin.NavbarLink>
          <Link href="/" className={_utils.cx(_styles, "nav-link-2")}>{"Overview"}</Link>
        
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "nav-link-2")}
          >
          </_Builtin.NavbarLink>
          <Link href="/accomodation" className={_utils.cx(_styles, "nav-link-2")}>{"Accomodation"}</Link>


          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "nav-link-2")}
          >
          </_Builtin.NavbarLink>
          <Link href="/destination" className={_utils.cx(_styles, "nav-link-2")}>{"Destination"}</Link>

          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "nav-link-2")}
          >
          </_Builtin.NavbarLink>
          <Link href="/contact" className={_utils.cx(_styles, "nav-link-2")}>{"Contact Us"}</Link>

          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "nav-link-2", "btn", "color")}
          >
          {"Sign In"}
          </_Builtin.NavbarLink>
        </_Builtin.NavbarMenu>
        <_Builtin.NavbarButton
          className={_utils.cx(_styles, "menu-button")}
          tag="div"
        >
          <_Builtin.Icon
            className={_utils.cx(_styles, "icon")}
            widget={{
              type: "icon",
              icon: "nav-menu",
            }}
          />
        </_Builtin.NavbarButton>
      </_Builtin.NavbarContainer>
    </_Component>
  );
}
