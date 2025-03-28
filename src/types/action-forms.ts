import { EClickTypes, ESelectorTypes } from "@/enums/actions";

export type ActionTypes = "type" | "click" | "navigate" | "hover" | "scroll";

type ActionClick = {
  type: "click";
  name: string;
  clickType: EClickTypes;
  selectorType: ESelectorTypes;
  selectorValue: string;
};

type ActionType = {
  type: "type";
  name: string;
  selectorType: ESelectorTypes;
  selectorValue: string;
  text: string;
};

type ActionNavigate = {
  type: "navigate";
  name: string;
  url: string;
};

type ActionHover = {
  type: "hover";
  name: string;
  selectorType: ESelectorTypes;
  selectorValue: string;
};

type ActionScroll = {
  type: "scroll";
  name: string;
  selectorType: ESelectorTypes;
  selectorValue: string;
};

export type TestCaseActionsType =
  | ActionClick
  | ActionType
  | ActionNavigate
  | ActionHover
  | ActionScroll;
