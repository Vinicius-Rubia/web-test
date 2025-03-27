import { InventoryAction } from "@/constants/inventory";
import { ActionState } from "@/hooks/use-inventory";
import { LockKeyholeIcon } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { ScrollArea } from "../ui/scroll-area";
import { TabsContent } from "../ui/tabs";

interface InventoryActionsProps {
  handleToggleAction: (sectionName: string, actionName: string) => void;
  action: InventoryAction;
  actions: ActionState[];
}

export function InventoryActions({
  handleToggleAction,
  action,
  actions,
}: InventoryActionsProps) {
  return (
    <TabsContent
      key={action.identifier}
      value={action.identifier}
      className="basis-9/12 pr-4"
    >
      <h4 className="text-sm text-muted-foreground mb-2">
        {action.description}
      </h4>
      <ScrollArea className="h-[calc(90vh-350px)]">
        <div className="grid grid-cols-3 gap-4">
          {action.actions.map((ac, index) => (
            <label
              className={`${ac.inSoon && "pointer-events-none opacity-50"} relative inset-0 border border-input bg-input/40 cursor-pointer rounded-md text-muted-foreground p-4 select-none`}
              key={index}
            >
              
              <span className="flex items-center gap-2">
                <h4 className="text-foreground">{ac.title}</h4>
                {ac.inSoon && <LockKeyholeIcon className="stroke-emerald-500 size-4" />}
              </span>
              <p className="text-sm">{ac.description}</p>
              <Checkbox
                className="absolute top-2 right-2"
                onCheckedChange={() =>
                  handleToggleAction(action.section, ac.title)
                }
                checked={actions.some((a) => a.actionName === ac.title)}
              />
            </label>
          ))}
        </div>
      </ScrollArea>
    </TabsContent>
  );
}
