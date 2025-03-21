import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { INVENTORY_ACTIONS } from "@/constants/inventory";
import { useInventory } from "@/hooks/use-inventory";
import { Package } from "lucide-react";
import { InventoryActions } from "./inventory-actions";
import { SelectedInventoryItems } from "./selected-inventory-items";

export function Inventory() {
  const {
    actions,
    groupActionsBySection,
    handleToggleAction,
    isThereAnyAction,
  } = useInventory();

  return (
    <Dialog>
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
              A ordem que você seleciona os itens quee aparece na lateral desta
              seção é a ordem que os itens serão adicionados ao seu caso de
              teste. Você mudar a ordem antes de adicionar ou depois de
              adicioná-los.
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2 text-center">
              {isThereAnyAction && `Total de itens: (${actions.length})`}
            </p>
            <Button disabled={!isThereAnyAction}>Adicionar itens</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
