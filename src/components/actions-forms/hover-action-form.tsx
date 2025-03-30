import { SELECTORS } from "@/constants/actions";
import { InputField } from "../fields/input-field";
import { SelectField } from "../fields/select-field";
import { CollapsibleContent } from "../ui/collapsible";
import { Separator } from "../ui/separator";

interface HoverActionFormProps {
  control: any;
  index: number;
}

export const HoverActionForm = ({ control, index }: HoverActionFormProps) => {
  return (
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
  );
};
