import { DisplayActionForm } from "@/components/actions-forms/display-action-form";
import { Inventory } from "@/components/inventory/inventory";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { RootState } from "@/store";
import { addAction } from "@/utils/add-action";
import { ActionsSchema } from "@/validators/action-forms-validate";
import { ActionsSchemaType } from "@/validators/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Shapes } from "lucide-react";
import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useSelector } from "react-redux";

export function TestCaseActions() {
  const actionsSelected = useSelector((state: RootState) => state.inventory.actionsSelected);

  const form = useForm<ActionsSchemaType>({
    resolver: zodResolver(ActionsSchema),
    defaultValues: {
      actions: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "actions",
  });

  useEffect(() => {
    actionsSelected.forEach(action => {
      const newAction = addAction(action.actionType);
      if (newAction) {
        append(newAction);
      }
    });
  }, [actionsSelected]);

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

      <Form {...form}>
        <form onSubmit={form.handleSubmit((data) => console.log(data))} className="mt-6">
          {/* <div className="space-x-2 mb-4">
            <Button variant="secondary" type="button" onClick={() => addAction("click")}>
              Adicionar Clique
            </Button>
            <Button variant="secondary" type="button" onClick={() => addAction("type")}>
              Adicionar Digitar
            </Button>
            <Button variant="secondary" type="button" onClick={() => addAction("navigate")}>
              Adicionar Navegar
            </Button>
            <Button variant="secondary" type="button" onClick={() => addAction("hover")}>
              Adicionar Hover
            </Button>
          </div> */}
          <div className="space-y-4">
            {fields.map((field, index) => (
              <div key={field.id} className="border p-4 rounded">
                <DisplayActionForm
                  control={form.control}
                  index={index}
                  actionType={field.type}
                  removeAction={() => remove(index)}
                />
              </div>
            ))}
          </div>
          {fields.length > 0 ? (
            <div className="flex items-center gap-4 justify-end mt-4">
            <Button type="button" variant="destructive">
              Excluir
            </Button>
            <Button type="submit">
              Salvar
            </Button>
            </div>
          ) : (
            <div className="border border-dashed flex flex-col justify-center items-center text-center py-20 rounded-md space-y-2">
              <Shapes className="size-9 stroke-muted-foreground" />
              <h4 className="text-lg font-semibold tracking-tight">Nenhuma ação adicionada</h4>
              <p className="text-muted-foreground text-sm">Você não adicionou nenhuma ação. Adicione uma abaixo.</p>
              <Inventory />
            </div>
          )}
        </form>
      </Form>
    </div>
  );
}