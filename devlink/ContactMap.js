import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ContactMap.module.css";

export function ContactMap({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "div-block-50")} tag="div">
      <_Builtin.MapWidget
        zoom={12}
        latlng="20.593684,78.96288"
        mapStyle="roadmap"
        enableScroll={false}
        enableTouch={true}
        apiKey={process.env.DEVLINK_ENV_GOOGLE_MAPS_API_KEY}
      />
    </_Component>
  );
}
