import { Globe, Trash, Triangle } from "lucide-react";
import { InputField } from "../fields/input-field";
import { Button } from "../ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Separator } from "../ui/separator";

interface NavigateActionFormProps {
  control: any;
  index: number;
  removeAction: (index: number) => void;
}

export const NavigateActionForm = ({
  control,
  index,
  removeAction,
}: NavigateActionFormProps) => {
  return (
    <Collapsible defaultOpen>
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <h4 className="flex items-center gap-2">
            <Globe className="stroke-cyan-500" />
            Navegar
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
          <InputField
            fieldControl={control}
            fieldName={`actions.${index}.url`}
            label="URL"
            contentClass="w-full"
            placeholder="https://example.com"
          />
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
