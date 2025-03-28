import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EClickTypes, ESelectorTypes } from "@/enums/actions";
import { MousePointerClick, Trash, Triangle } from "lucide-react";
import { Button } from "../ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

interface ClickActionFormProps {
  control: any;
  index: number;
  removeAction: (index: number) => void;
}

export const ClickActionForm = ({
  control,
  index,
  removeAction,
}: ClickActionFormProps) => {
  return (
    <Collapsible defaultOpen>
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <h4 className="flex items-center gap-2">
            <MousePointerClick className="stroke-green-500" />
            Clicar
          </h4>
          <FormField
            control={control}
            name={`actions.${index}.name`}
            render={({ field }) => (
              <FormItem className="w-200">
                <FormControl>
                  <Input
                    className="!bg-input/10"
                    placeholder="Informe o nome do passo"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
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
            <FormField
              control={control}
              name={`actions.${index}.selectorType`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo de seletor</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-44">
                        <SelectValue placeholder="Selecione o tipo de seletor" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value={ESelectorTypes.ID}>Id</SelectItem>
                      <SelectItem value={ESelectorTypes.NAME}>Name</SelectItem>
                      <SelectItem value={ESelectorTypes.CSS}>CSS Selector</SelectItem>
                      <SelectItem value={ESelectorTypes.XPATH}>XPATH</SelectItem>
                      <SelectItem value={ESelectorTypes.LINK_TEXT}>Link Text</SelectItem>
                      <SelectItem value={ESelectorTypes.TAG}>Tag</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name={`actions.${index}.selectorValue`}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Valor do seletor</FormLabel>
                  <FormControl>
                    <Input placeholder="Valor" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={control}
            name={`actions.${index}.clickType`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de clique</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-44">
                      <SelectValue placeholder="Selecione o tipo de clique" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value={EClickTypes.LEFT}>Clique Esquerdo</SelectItem>
                    <SelectItem value={EClickTypes.RIGHT}>Clique Direito</SelectItem>
                    <SelectItem value={EClickTypes.DOUBLE}>Duplo Clique</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
