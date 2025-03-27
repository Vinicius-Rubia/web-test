import { TestCaseActionsType } from "@/types/action-forms";

export const addAction = (type: TestCaseActionsType["type"]) => {
    let newAction: TestCaseActionsType;
    switch (type) {
      case "click":
        newAction = { type, clickType: "left", selectorType: "id", selectorValue: "", name: "" };
        break;
      case "type":
        newAction = { type, text: "", selectorType: "id", selectorValue: "", name: "" };
        break;
      case "navigate":
        newAction = { type, url: "", name: "" };
        break;
      case "hover":
        newAction = { type, selectorType: "id", selectorValue: "", name: "" };
        break;
      default:
        return;
    }
    return newAction;
  };