import { EClickTypes, ESelectorTypes } from "@/enums/actions";
import { TestCaseActionsType } from "@/types/action-forms";

export const addAction = (type: TestCaseActionsType["type"]) => {
    let newAction: TestCaseActionsType;
    switch (type) {
      case "click":
        newAction = { type, clickType: EClickTypes.LEFT, selectorType: ESelectorTypes.ID, selectorValue: "", name: "" };
        break;
      case "type":
        newAction = { type, text: "", selectorType: ESelectorTypes.ID, selectorValue: "", name: "" };
        break;
      case "navigate":
        newAction = { type, url: "", name: "" };
        break;
      case "hover":
        newAction = { type, selectorType: ESelectorTypes.ID, selectorValue: "", name: "" };
        break;
      case "scroll":
        newAction = { type, selectorType: ESelectorTypes.ID, selectorValue: "", name: "" };
        break;
      default:
        return;
    }
    return newAction;
  };