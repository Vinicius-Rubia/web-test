import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { removeProject } from "@/store/slices/projects-slice";
import { Trash } from "lucide-react";
import { useDispatch } from "react-redux";
import { Button } from "../ui/button";

interface DialogRemoveProjectProps {
  index: number;
}

export function DialogRemoveProject({ index }: DialogRemoveProjectProps) {
  const dispatch = useDispatch();

  const handleRemoveProject = () => {
    dispatch(removeProject(index));
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="icon" variant="destructive">
          <Trash />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Você tem certeza absoluta?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta ação não poderá ser desfeita. Isso excluirá permanentemente
            todos seu projeto.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button variant="destructive" className="text-white" onClick={handleRemoveProject}>
              Excluir
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
