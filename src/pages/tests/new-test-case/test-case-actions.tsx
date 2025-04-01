import { DisplayActionForm } from "@/components/actions-forms/display-action-form";
import { DialogRemoveActions } from "@/components/actions/dialog-remove-actions";
import { OverlayAction } from "@/components/actions/overlay-action";
import { InputField } from "@/components/fields/input-field";
import { Inventory } from "@/components/inventory/inventory";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Form } from "@/components/ui/form";
import { Sortable, SortableDragHandle, SortableItem } from "@/components/ui/sortable";
import { RootState } from "@/store";
import { addAction } from "@/utils/add-action";
import { displayAction } from "@/utils/display-action";
import { ActionsSchema } from "@/validators/action-forms-validate";
import { ActionsSchemaType } from "@/validators/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { GripVertical, Shapes, Trash, Triangle } from "lucide-react";
import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useSelector } from "react-redux";

export function TestCaseActions() {
  const actionsSelected = useSelector((state: RootState) => state.inventoryModel.actionsSelected);

  const form = useForm<ActionsSchemaType>({
    resolver: zodResolver(ActionsSchema),
    defaultValues: {
      actions: [],
    },
  });

  const { fields, append, remove, move } = useFieldArray({
    control: form.control,
    name: "actions",
  });

  const removeActions = () => remove(fields.map((_, index) => index));

  useEffect(() => {
    actionsSelected.forEach((action) => {
      const newAction = addAction(action.actionType);
      if (newAction) {
        append(newAction);
      }
    });
  }, [actionsSelected, append]);

  return (
    <div>
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl">Implemente suas ações!</h2>
          <p className="text-muted-foreground text-sm">
            Veja no inventário todas as ações disponíveis para você.
          </p>
        </div>
        {fields.length > 0 && <Inventory />}
      </div>

      {fields.length > 0 ? (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => console.log(data))}
            className="mt-6"
          >
            <h3 className="text-muted-foreground text-sm mb-2">Total de passos ({fields.length})</h3>
            <div className="space-y-4">
              <Sortable
                value={fields}
                onMove={({ activeIndex, overIndex }) =>
                  move(activeIndex, overIndex)
                }
                overlay={<OverlayAction />}
              >
              {fields.map((field, index) => {
                const actionData = displayAction(field.type);

                return (
                  <SortableItem key={field.id} value={field.id} asChild>
                    <div key={field.id} className="border p-4 rounded">
                      <Collapsible defaultOpen={index === 0}>
                        <div className="flex items-center justify-between gap-6">
                          <div className="flex items-center gap-4">
                            <SortableDragHandle type="button" variant="ghost" size="icon">
                              <GripVertical className="size-5 stroke-muted-foreground" />
                            </SortableDragHandle>
                            <h4 className="flex items-center gap-2">
                              {actionData.Icon}
                              {actionData.label}
                            </h4>
                            <InputField
                              fieldControl={form.control}
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
                              onClick={() => remove(index)}
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
                        <DisplayActionForm
                          control={form.control}
                          index={index}
                          actionType={field.type}
                        />
                      </Collapsible>
                    </div>
                  </SortableItem> 
                )
              })} 
              </Sortable>
            </div>

            <div className="flex items-center gap-4 justify-end mt-4">
              <DialogRemoveActions removeActions={removeActions} />
              <Button type="submit">Salvar</Button>
            </div>
          </form>
        </Form>
      ) : (
        <div className="border border-dashed flex flex-col justify-center items-center text-center py-20 rounded-md space-y-2 mt-6">
          <Shapes className="size-9 stroke-muted-foreground" />
          <h4 className="text-lg font-semibold tracking-tight">
            Nenhuma ação adicionada
          </h4>
          <p className="text-muted-foreground text-sm">
            Você não adicionou nenhuma ação. Adicione uma abaixo.
          </p>
          <Inventory />
        </div>
      )}
    </div>
  );
}
