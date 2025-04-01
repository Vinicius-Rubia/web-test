import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

interface DialogRemoveActionsProps {
  removeActions: () => void;
}

export function DialogRemoveActions({ removeActions }: DialogRemoveActionsProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant="destructive">
          Excluir
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Você tem certeza absoluta?</DialogTitle>
          <DialogDescription>
            Esta ação não poderá ser desfeita. Isso excluirá permanentemente
            todos suas ações para este teste.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild >
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="destructive" onClick={removeActions}>
              Excluir
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
