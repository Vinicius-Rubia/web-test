import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { INVENTORY_ACTIONS } from "@/constants/inventory";
import { useInventory } from "@/hooks/use-inventory";
import { setActionsSelected } from "@/store/slices/inventory-slice";
import { Package } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { InventoryActions } from "./inventory-actions";
import { SelectedInventoryItems } from "./selected-inventory-items";

export function Inventory() {
  const [open, setOpen] = useState(false);

  const {
    actions,
    setActions,
    groupActionsBySection,
    handleToggleAction,
    isThereAnyAction,
    actionsSelected,
  } = useInventory();

  const dispatch = useDispatch();

  const handleAddItems = () => {
    dispatch(setActionsSelected(actionsSelected));
    setActions([]);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Package />
          Inventário
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[90vw] h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Seu Inventário</DialogTitle>
          <DialogDescription>
            Escolha tudo que você precisa para realizar seu caso de teste. Fique
            tranquilo que você pode voltar aqui quando quiser.
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="actions" className="flex h-full">
          <TabsList>
            {INVENTORY_ACTIONS.map((action) => (
              <TabsTrigger key={action.identifier} value={action.identifier}>
                {action.section} ({action.actions.length})
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="flex items-start border-t mt-4 pt-4 flex-1">
            {INVENTORY_ACTIONS.map((action) => (
              <InventoryActions
                key={action.identifier}
                action={action}
                actions={actions}
                handleToggleAction={handleToggleAction}
              />
            ))}

            <SelectedInventoryItems
              actions={actions}
              handleToggleAction={handleToggleAction}
              groupActionsBySection={groupActionsBySection}
            />
          </div>
        </Tabs>

        <div className="flex items-end justify-between border-t mt-auto pt-4 h-24">
          <div>
            <h3 className="text-xl">Observações</h3>
            <p className="text-muted-foreground text-sm w-200">
              Após selecionar as ações, você poderá ajustar sua ordem
              posteriormente, conforme necessário.
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2 text-center">
              {isThereAnyAction && `Total de itens: (${actions.length})`}
            </p>
            <DialogClose asChild>
              <Button disabled={!isThereAnyAction} onClick={handleAddItems}>
                Adicionar itens
              </Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
