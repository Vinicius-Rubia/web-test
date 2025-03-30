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
}

export const DisplayActionForm = ({ control, index, actionType }: ActionFormProps) => {
  switch (actionType) {
    case "click":
      return <ClickActionForm control={control} index={index}  />;
    case "type":
      return <TypeActionForm control={control} index={index}  />;
    case "navigate":
      return <NavigateActionForm control={control} index={index}  />;
    case "hover":
      return <HoverActionForm control={control} index={index}  />;
    case "scroll":
      return <ScrollElementActionForm control={control} index={index}  />;
    default:
      return null;
  }
};
