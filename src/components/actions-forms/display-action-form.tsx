import { TestCaseActionsType } from "@/types/action-forms";
import { ClickActionForm } from "./click-action-form";
import { HoverActionForm } from "./hover-action-form";
import { NavigateActionForm } from "./navigate-action-form";
import { ScrollElementActionForm } from "./scroll-element-action-form";
import { TypeActionForm } from "./type-action-form";

interface ActionFormProps {
  control: any;
  index: number;
  actionType: TestCaseActionsType["type"];
  removeAction: (index: number) => void;
}

export const DisplayActionForm = ({ control, index, actionType, removeAction }: ActionFormProps) => {
  switch (actionType) {
    case "click":
      return <ClickActionForm control={control} index={index} removeAction={removeAction} />;
    case "type":
      return <TypeActionForm control={control} index={index} removeAction={removeAction} />;
    case "navigate":
      return <NavigateActionForm control={control} index={index} removeAction={removeAction} />;
    case "hover":
      return <HoverActionForm control={control} index={index} removeAction={removeAction} />;
    case "scroll":
      return <ScrollElementActionForm control={control} index={index} removeAction={removeAction} />;
    default:
      return null;
  }
};
