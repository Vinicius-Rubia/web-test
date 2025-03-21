import { Inventory } from "@/components/inventory/inventory";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

const products = [
  {
    value: "neo-coelba",
    label: "Neoenergia Coelba",
  },
  {
    value: "neo-cosern",
    label: "Neoenergia Cosern",
  },
  {
    value: "neo-elektro",
    label: "Neoenergia Elektro",
  },
  {
    value: "neo-pernambuco",
    label: "Neoenergia Pernambuco",
  },
  {
    value: "neo-brasilia",
    label: "Neoenergia Brasília",
  },
  {
    value: "sky-cobranca",
    label: "SKY Cobrança",
  },
  {
    value: "sky-welcome",
    label: "SKY Welcome",
  },
  {
    value: "sky-mop",
    label: "SKY MOP",
  },
];

export function NewTestCase() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <section>
      <Tabs defaultValue="general" className="w-full space-y-4">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="general">Geral</TabsTrigger>
            <TabsTrigger value="test-case">Casos de teste</TabsTrigger>
            <TabsTrigger value="preview">Pré-visualização</TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-4">
            <Select defaultValue="preparation">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="preparation">Elaboração</SelectItem>
                <SelectItem value="completed">Concluído</SelectItem>
                <SelectItem value="blocked">Bloqueado</SelectItem>
                <SelectItem value="inactive">Inativo</SelectItem>
              </SelectContent>
            </Select>
            <Inventory />
          </div>
        </div>
        <TabsContent value="general">
          <h2 className="text-xl">Comece por aqui!</h2>
          <p className="text-muted-foreground text-sm">
            Configure abaixo as informações base para o seu teste.
          </p>
          <div className="space-y-4 mt-4">
            <div className="flex items-center gap-4">
              <div className="basis-4/12 space-y-1">
                <Label>Produto</Label>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-full justify-between"
                    >
                      {value
                        ? products.find((product) => product.value === value)
                            ?.label
                        : "Selecione um produto..."}
                      <ChevronsUpDown className="opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className=" p-0">
                    <Command>
                      <CommandInput
                        placeholder="Procure um produto..."
                        className="h-9"
                      />
                      <CommandList>
                        <CommandEmpty>Produto não encontrado.</CommandEmpty>
                        <CommandGroup>
                          {products.map((product) => (
                            <CommandItem
                              key={product.value}
                              value={product.value}
                              onSelect={(currentValue) => {
                                setValue(
                                  currentValue === value ? "" : currentValue
                                );
                                setOpen(false);
                              }}
                            >
                              {product.label}
                              <Check
                                className={cn(
                                  "ml-auto",
                                  value === product.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
              <div className="basis-8/12 space-y-1">
                <Label>Módulo</Label>
                <Input />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="basis-8/12 space-y-1">
                <Label>Nome de caso de teste</Label>
                <Input />
              </div>
              <div className="basis-4/12 space-y-1">
                <Label>Identificador do teste</Label>
                <Input />
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="test-case">Não iniciado.</TabsContent>
        <TabsContent value="preview">Não iniciado.</TabsContent>
      </Tabs>
    </section>
  );
}
