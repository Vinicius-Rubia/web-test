import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, Bot, Braces, FolderOpenDot, Settings } from "lucide-react";
import { Button } from "../ui/button";

export function Notifications() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative size-7 aspect-square p-0 rounded-full"
        >
          <Bell className="size-5" />
          <span className="absolute top-0 right-0 block size-2 bg-blue-400 rounded-full" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="left" className="w-[600px] mt-10">
        <DropdownMenuLabel className="flex items-center justify-between">
          Notificações (3)
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-xs py-1 px-2 h-fit"
            >
              Marcar todas como lidas
            </Button>
            <Settings className="size-4 cursor-pointer" />
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="items-start">
            <div className="flex flex-col">
              <div className="flex items-center">
                <Bot className="mr-2 h-4 w-4" />
                <span>Caso de teste</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Um novo caso de teste chamado{" "}
                <span className="text-cyan-400">Login Unicesumar</span> foi
                criado.
              </p>
            </div>
            <DropdownMenuShortcut>há 1 minuto atrás</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="items-start">
            <div className="flex flex-col">
              <div className="flex items-center">
                <FolderOpenDot className="mr-2 h-4 w-4" />
                <span>Projeto</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Um novo projeto chamado{" "}
                <span className="text-cyan-400">Marketplace de vendas</span> foi
                criado.
              </p>
            </div>
            <DropdownMenuShortcut>há 2 minutos atrás</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="items-start">
            <div className="flex flex-col">
              <div className="flex items-center">
                <Braces className="mr-2 h-4 w-4" />
                <span>Variável de ambiente</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Um novo grupo de variável de ambiente chamado{" "}
                <span className="text-cyan-400">Assistpay</span> foi criado.
              </p>
            </div>
            <DropdownMenuShortcut className="w-[150px] text-end">
              há 30 minutos atrás
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
