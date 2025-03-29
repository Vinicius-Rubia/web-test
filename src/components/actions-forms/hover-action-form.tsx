import { SELECTORS } from "@/constants/actions";
import { Mouse, Trash, Triangle } from "lucide-react";
import { InputField } from "../fields/input-field";
import { SelectField } from "../fields/select-field";
import { Button } from "../ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Separator } from "../ui/separator";

interface HoverActionFormProps {
  control: any;
  index: number;
  removeAction: (index: number) => void;
}

export const HoverActionForm = ({
  control,
  index,
  removeAction,
}: HoverActionFormProps) => {
  return (
    <Collapsible defaultOpen>
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <h4 className="flex items-center gap-2">
            <Mouse className="stroke-purple-500" />
            Passar o mouse
          </h4>
          <InputField
            fieldControl={control}
            fieldName={`actions.${index}.name`}
            contentClass="w-200"
            className="!bg-input/10"
            placeholder="Informe o nome do passo"
            errorMessage={false}
          />
        </div>
        <div className="flex items-center gap-4">
          <Button
            type="button"
            size="icon"
            variant="destructive"
            onClick={() => removeAction(index)}
          >
            <Trash />
          </Button>
          <CollapsibleTrigger
            asChild
            className="data-[state=closed]:[&>svg]:rotate-180"
          >
            <Button type="button" size="icon" variant="secondary">
              <Triangle className="rotate-0 size-3 transition-all" />
            </Button>
          </CollapsibleTrigger>
        </div>
      </div>
      <CollapsibleContent>
        <Separator className="my-6" />
        <div className="space-y-6">
          <div className="flex items-baseline gap-4">
            <SelectField
              fieldControl={control}
              fieldName={`actions.${index}.selectorType`}
              className="w-44"
              label="Tipo de seletor"
              placeholder="Selecione o tipo de seletor"
              data={SELECTORS}
            />
            <InputField
              fieldControl={control}
              contentClass="w-full"
              fieldName={`actions.${index}.selectorValue`}
              label="Valor do seletor"
              placeholder="Valor"
            />
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
