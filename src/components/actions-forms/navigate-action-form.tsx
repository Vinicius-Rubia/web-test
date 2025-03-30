import { InputField } from "../fields/input-field";
import { CollapsibleContent } from "../ui/collapsible";
import { Separator } from "../ui/separator";

interface NavigateActionFormProps {
  control: any;
  index: number;
}

export const NavigateActionForm = ({
  control,
  index,
}: NavigateActionFormProps) => {
  return (
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
  );
};
