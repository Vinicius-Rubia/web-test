import { ActionState } from "@/hooks/use-inventory";
import { Triangle } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { ScrollArea } from "../ui/scroll-area";

interface SelectedInventoryItemsProps {
  handleToggleAction: (sectionName: string, actionName: string) => void;
  actions: ActionState[];
  groupActionsBySection: () => {
    sectionName: string;
    actions: string[];
  }[];
}

export function SelectedInventoryItems({
  handleToggleAction,
  actions,
  groupActionsBySection,
}: SelectedInventoryItemsProps) {
  return (
    <div className="border-l h-full basis-3/12 p-4 pt-0">
      <h4 className="text-xl">Seus itens selecionados</h4>
      <p className="text-muted-foreground text-sm">
        Todos os itens abaixo serão adicionados.
      </p>

      <ScrollArea className="h-[calc(90vh-360px)] pt-2">
        <div className="mt-4 text-sm text-muted-foreground space-y-4">
          {groupActionsBySection().map((item, index) => (
            <Collapsible key={index} defaultOpen>
              <CollapsibleTrigger
                asChild
                className="data-[state=closed]:[&>svg]:rotate-90"
              >
                <Button variant="outline" size="sm">
                  <Triangle className="rotate-180 size-3 transition-all" />
                  {item.sectionName}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="grid gap-2 mt-4">
                {item.actions.map((action, actionIndex) => (
                  <label
                    key={actionIndex}
                    className="space-x-2 ml-4 flex items-center"
                  >
                    <Checkbox
                      onCheckedChange={() =>
                        handleToggleAction(item.sectionName, action)
                      }
                      checked={actions.some((a) => a.actionName === action)}
                    />
                    <span>{action}</span>
                  </label>
                ))}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
