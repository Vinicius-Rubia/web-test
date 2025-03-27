export type TestCaseActionsType =
  | ActionClick
  | ActionType
  | ActionNavigate
  | ActionHover;

type ActionClick = {
  type: "click";
  name: string;
  clickType: "left" | "right" | "double";
  selectorType: "id" | "name" | "css" | "xpath" | "link-text";
  selectorValue: string;
};

type ActionType = {
  type: "type";
  name: string;
  selectorType: "id" | "name" | "css" | "xpath" | "link-text";
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
  selectorType: "id" | "name" | "css" | "xpath" | "link-text";
  selectorValue: string;
};
