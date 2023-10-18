import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./DestinationCollection.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-125":{"id":"e-125","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GROW_EFFECT","instant":false,"config":{"actionListId":"growIn","autoStopEventId":"e-126"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5e4d8b5-c0e1-53b8-bcb9-a61c89431330","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5e4d8b5-c0e1-53b8-bcb9-a61c89431330","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1694330373025}},"actionLists":{"growIn":{"id":"growIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0.7500000000000001,"yValue":0.7500000000000001}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":1,"yValue":1}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function DestinationCollection({
  as: _Component = _Builtin.NotSupported,
}) {
  _interactions.useInteractions(_interactionsData, _styles);
  return (
    <_Component _atom="DynamoWrapper">
      <_Builtin.NotSupported _atom="DynamoList" />
      <_Builtin.NotSupported _atom="DynamoEmpty" />
    </_Component>
  );
}
