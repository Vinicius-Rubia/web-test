// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { Separator } from "@/components/ui/separator";
// import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
// import { cn } from "@/lib/utils";
// import { BugPlay, Check, ChevronsUpDown, Clock, Image, MousePointer, Plus, Reply, Save, Search, Text, Timer } from "lucide-react";
// import { useEffect, useMemo, useState } from "react";

// type Dependency = {
//   parentActionId: string;
// };

// type Action = {
//   actionId: string;
//   actionType: string;
//   requiredElement: boolean;
//   requiredInputValue: boolean;
//   instructionText: string;
//   dependencies: Dependency[];
// };

// type Selector = {
//   selectorId: string;
//   selectorType: string;
//   selectorValue: string;
// };

// type AuxAction = {
//   auxActionId: string;
//   auxActionName: string;
//   auxDescription: string;
//   requiredInputValue: boolean;
// }

// const actions: Action[] = [
//   {
//     actionId: "5efacd0d-17af-4be7-bc7c-d7b164a01456",
//     actionType: "Encontrar um elemento",
//     requiredElement: true,
//     requiredInputValue: true,
//     instructionText: "Qual é o valor do seletor?",
//     dependencies: [],
//   },
//   {
//     actionId: "f26a8a07-420e-469a-b9d2-f28984f35ad9",
//     actionType: "Clicar em um elemento",
//     requiredElement: false,
//     requiredInputValue: false,
//     instructionText: "Clica em um elemento encontrado",
//     dependencies: [
//       {
//         parentActionId: "5efacd0d-17af-4be7-bc7c-d7b164a01456",
//       },
//     ],
//   },
//   {
//     actionId: "f26b8a07-420e-469a-b9d2-f28984f35ad9",
//     actionType: "Escreve um texto",
//     requiredElement: false,
//     requiredInputValue: true,
//     instructionText: "Qual texto quer escrever?",
//     dependencies: [
//       {
//         parentActionId: "f26a8a07-420e-469a-b9d2-f28984f35ad9",
//       },
//     ],
//   },
// ];

// const selectors: Selector[] = [
//   {
//     selectorId: "1",
//     selectorType: "style",
//     selectorValue: ".user>#username>img",
//   },
//   {
//     selectorId: "2",
//     selectorType: "xpath",
//     selectorValue: "//div[@class='example-class']",
//   },
//   {
//     selectorId: "3",
//     selectorType: "class",
//     selectorValue: ".login-user.isactive",
//   },
//   {
//     selectorId: "4",
//     selectorType: "id",
//     selectorValue: "#contact-value",
//   },
// ];

// const auxiliaryActions: AuxAction[] = [
//   {
//     auxActionId: "1",
//     auxActionName: "Print de tela",
//     auxDescription: "Esta ação tira um print da imagem do teste que está acontecendo no momento.",
//     requiredInputValue: false,
//   },
//   {
//     auxActionId: "2",
//     auxActionName: "Tempo de ação",
//     auxDescription: "Esta ação define um tempo máximo para ser esperado antes de executar a próxima ação.",
//     requiredInputValue: true,
//   },
//   {
//     auxActionId: "3",
//     auxActionName: "Tempo de elemento",
//     auxDescription: "Esta ação define um tempo máximo para tentar encontrar um elemento.",
//     requiredInputValue: true
//   },
//   {
//     auxActionId: "4",
//     auxActionName: "Redirecionar",
//     auxDescription: "Esta ação você define a url para onde o teste deve ser redirecionado.",
//     requiredInputValue: true
//   },
// ]


export function Panel() {
//   const [selectedAction, setSelectedAction] = useState<string | null>(null);
//   const [dependencyChain, setDependencyChain] = useState<Action[]>([]);
//   const [selectedSelector, setSelectedSelector] = useState<string>("");
//   const [selectedAuxActions, setSelectedAuxActions] = useState<string[]>([]);

//   const [open, setOpen] = useState(false);
//   const [openSelector, setOpenSelector] = useState(false);

//   const currentSelector = useMemo(() =>
//     selectors.find((item) => item.selectorType === selectedSelector)
//   , [selectedSelector]);

//   const auxActions = useMemo(() =>
//     auxiliaryActions.filter(x => selectedAuxActions.some(a => a === x.auxActionId))
//   , [selectedAuxActions]);

//   useEffect(() => {
//     if (selectedAction) {
//       const action = actions.find((act) => act.actionType === selectedAction);
//       if (action) {
//         const chain = buildDependencyChain(action);
//         setDependencyChain(chain);
//       }
//     } else {
//       setDependencyChain([]);
//     }
//   }, [selectedAction]);

//   const buildDependencyChain = (action: Action): Action[] => {
//     const chain: Action[] = [];
//     let currentAction = action;

//     while (currentAction.dependencies.length > 0) {
//       const depAction = actions.find((act) => act.actionId === currentAction.dependencies[0].parentActionId);
//       if (depAction) {
//         chain.unshift(depAction);
//         currentAction = depAction;
//       } else {
//         break;
//       }
//     }

//     chain.push(action);
//     return chain;
//   };

//   const generatePythonScript = () => {
//     return `
//       # teste.py
// from playwright.sync_api import sync_playwright

// def run(playwright):
//     # Inicializa o navegador (use headless=True se não precisar ver a execução)
//     browser = playwright.chromium.launch(headless=False)
//     page = browser.new_page()

//     # 1. Navegar para a URL alvo (substitua pelo endereço real do teste)
//     page.goto("http://seu-endereco-de-teste.com")

//     # --- AÇÕES PRINCIPAIS ---

//     # Passo 1: Encontrar um elemento
//     # Supondo que o usuário tenha informado o seletor "css" com o valor ".user>#username>img"
//     elemento = page.wait_for_selector(".user>#username>img", timeout=5000)
    
//     # Passo 2: Clicar em um elemento
//     # Se o passo de clicar depende do anterior, usamos o elemento encontrado.
//     if elemento:
//         elemento.click()

//     # Passo 3: Escrever um texto
//     # Aqui, assumimos que o usuário informou um valor para preencher um campo (por exemplo, um input de e-mail).
//     # Atualize o seletor do input conforme o contexto do teste.
//     page.fill("input[name='email']", "exemplo@dominio.com")

//     # --- AÇÕES AUXILIARES (se configuradas) ---

//     # Exemplo de ação auxiliar: Print de tela
//     page.screenshot(path="print_tela.png")

//     # Exemplo de ação auxiliar: Tempo de ação (aguarda 40 segundos, por exemplo)
//     page.wait_for_timeout(40000)  # valor em milissegundos

//     # Exemplo de ação auxiliar: Redirecionar para uma nova URL
//     page.goto("http://nova-url-para-teste.com")

//     # Fecha o navegador
//     browser.close()

// with sync_playwright() as playwright:
//     run(playwright)
//     `;
//   }

//   const handleAddAction = () => {
//     const scriptContent = generatePythonScript();
//     const blob = new Blob([scriptContent], { type: "text/plain;charset=utf-8" });
//     const url = window.URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = "teste.py";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     window.URL.revokeObjectURL(url);
//   };

  return (
    <div>Painel</div>
    // <div className="mt-10">
    //   <h1 className="text-3xl">Novo caso de teste</h1>
    //   <p className="text-muted-foreground mt-1">Crie um novo caso de teste.</p>
    //   <Separator className="my-4" />

    //   <Card>
    //     <CardHeader>
    //       <div className="flex justify-between items-start">
    //         <div>
    //           <CardTitle>Passos</CardTitle>
    //           <CardDescription>
    //             Defina suas ações passo a passo.
    //           </CardDescription>
    //           <ToggleGroup type="multiple" variant="outline" className="gap-4 mt-2" onValueChange={(value) => setSelectedAuxActions(value)}>
    //             {auxiliaryActions.map((auxAction) => (
    //               <ToggleGroupItem
    //                 key={auxAction.auxActionId}
    //                 value={auxAction.auxActionId}
    //                 aria-label={auxAction.auxActionName}
    //                 className="rounded-md !border flex-none data-[state=on]:bg-white data-[state=on]:text-accent"
    //               >
    //                 {auxAction.auxActionName}
    //               </ToggleGroupItem>
    //             ))}
    //           </ToggleGroup>
    //         </div>
    //         <div className="flex items-center gap-4">
    //           <Button>
    //             <Save className="size-4 mr-1" />
    //             Salvar
    //           </Button>
    //           <Button>
    //             <BugPlay className="size-4 mr-1" />
    //             Salvar e Executar
    //           </Button>
    //         </div>
    //       </div>
    //     </CardHeader>
    //     <CardContent className="space-y-4 pl-6 pr-40">
    //       <div className="flex items-start justify-between">
    //         <div className="space-y-4 w-[600px] pt-0">
    //           <div>
    //             <Label htmlFor="name">Nome</Label>
    //             <Input id="name" placeholder="Nome" className="mt-1" />
    //           </div>
    //           <div className="space-y-2">
    //             <Label>Selecione uma ação</Label>
    //             <Popover open={open} onOpenChange={setOpen}>
    //               <PopoverTrigger asChild>
    //                 <Button
    //                   variant="outline"
    //                   role="combobox"
    //                   aria-expanded={open}
    //                   className="w-[300px] justify-between"
    //                 >
    //                   {selectedAction ?? "Escolha uma ação"}
    //                   <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
    //                 </Button>
    //               </PopoverTrigger>
    //               <PopoverContent className="w-[300px] p-0">
    //                 <Command>
    //                   <CommandInput placeholder="Procure uma ação" />
    //                   <CommandList>
    //                     <CommandEmpty>Ação não encontrada.</CommandEmpty>
    //                     <CommandGroup>
    //                       {actions.map((action) => (
    //                         <CommandItem
    //                           key={action.actionId}
    //                           value={action.actionType}
    //                           onSelect={(currentValue) => {
    //                             setSelectedAction(currentValue);
    //                             setOpen(false);
    //                           }}
    //                         >
    //                           <Check
    //                             className={cn(
    //                               "mr-2 h-4 w-4",
    //                               selectedAction === action.actionType
    //                                 ? "opacity-100"
    //                                 : "opacity-0"
    //                             )}
    //                           />
    //                           {action.actionType}
    //                         </CommandItem>
    //                       ))}
    //                     </CommandGroup>
    //                   </CommandList>
    //                 </Command>
    //               </PopoverContent>
    //             </Popover>
    //           </div>

    //           {dependencyChain.map((action) => (
    //             <div key={action.actionId}>
    //               {action.requiredElement && (
    //                 <>
    //                   <Label>Selecione um seletor</Label>
    //                   <Popover open={openSelector} onOpenChange={setOpenSelector}>
    //                     <PopoverTrigger asChild>
    //                       <Button
    //                         variant="outline"
    //                         role="combobox"
    //                         aria-expanded={openSelector}
    //                         className="w-[300px] justify-between mt-2"
    //                       >
    //                         {selectedSelector
    //                           ? selectedSelector
    //                           : "Escolha um seletor"}
    //                         <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
    //                       </Button>
    //                     </PopoverTrigger>
    //                     <PopoverContent className="w-[300px] p-0">
    //                       <Command>
    //                         <CommandInput placeholder="Procure um seletor" />
    //                         <CommandList>
    //                           <CommandEmpty>Seletor não encontrado.</CommandEmpty>
    //                           <CommandGroup>
    //                             {selectors.map((selector) => (
    //                               <CommandItem
    //                                 key={selector.selectorId}
    //                                 value={selector.selectorType}
    //                                 onSelect={(currentValue) => {
    //                                   setSelectedSelector(currentValue);
    //                                   setOpenSelector(false);
    //                                 }}
    //                               >
    //                                 <Check
    //                                   className={cn(
    //                                     "mr-2 h-4 w-4",
    //                                     selectedSelector === selector.selectorType
    //                                       ? "opacity-100"
    //                                       : "opacity-0"
    //                                   )}
    //                                 />
    //                                 {selector.selectorType}
    //                               </CommandItem>
    //                             ))}
    //                           </CommandGroup>
    //                         </CommandList>
    //                       </Command>
    //                     </PopoverContent>
    //                   </Popover>
    //                 </>
    //               )}
    //               {action.requiredInputValue && (
    //                 <div className="w-[300px] space-y-2 mt-4">
    //                   <Label>{action.instructionText}</Label>
    //                   <Input
    //                     placeholder={
    //                       action.requiredElement
    //                         ? currentSelector?.selectorValue ??
    //                           "Informe o valor do seletor"
    //                         : "Informe o valor"
    //                     }
    //                   />
    //                 </div>
    //               )}
    //             </div>
    //           ))}

    //           {auxActions.length > 0 && (
    //             <>
    //               <Separator />
    //               {auxActions.map((auxAction) => (
    //                 <div key={auxAction.auxActionId}>
    //                   {!auxAction.requiredInputValue && (
    //                     <div className="border rounded-md p-4">
    //                       <h3>A ação <strong className="text-cyan-500">{auxAction.auxActionName}</strong> foi adicionada.</h3>
    //                       <p className="text-muted-foreground text-sm">{auxAction.auxDescription}</p>
    //                     </div>
    //                   )}
    //                   {auxAction.requiredInputValue && (
    //                     <div className="space-y-1">
    //                       <Label>{auxAction.auxActionName}</Label>
    //                       <Input placeholder="Valor" />
    //                       <p className="text-muted-foreground text-xs">{auxAction.auxDescription}</p>
    //                     </div>
    //                   )}

    //                 </div>
    //               ))}
    //             </>
    //           )}

    //           <Button className="w-[300px] mt-4" onClick={handleAddAction}>
    //             <Plus className="size-4 mr-1" />
    //             Adicionar ação
    //           </Button>
    //         </div>

    //         <section>
    //           <h4>Todos os passos</h4>
    //           <p className="text-muted-foreground text-sm mb-2">Clique em um passo para poder editá-lo.</p>
    //           <div className="space-y-2">
    //             <div className="hover:bg-muted-foreground/10 p-2 rounded-md cursor-pointer space-y-2">
    //               <div className="flex items-center gap-4">
    //                 <span className="rounded-md size-8 bg-input/30 border border-input text-white flex items-center justify-center">1°</span>
    //                 <Button variant="outline">
    //                   <Search className="stroke-cyan-500" />
    //                   Procurar o elemento de e-mail
    //                   <span className="flex items-center gap-2 text-yellow-500">
    //                     <Image />
    //                   </span>
    //                   <span className="flex items-center gap-2 text-red-500">
    //                   <Timer /> 40s
    //                   </span>
    //                 </Button>
    //               </div>

    //               <div className="flex items-center gap-4 ml-4">
    //                 <span className="rounded-md size-8 bg-input/30 border border-input text-white flex items-center justify-center">
    //                   <Reply className="rotate-180 size-4" />
    //                 </span>
    //                 <Button variant="outline" className="text-green-500">
    //                   <Clock />
    //                   Aguardar 30s
    //                 </Button>
    //               </div>
    //             </div>
    //             <div className="flex items-center gap-4 hover:bg-muted-foreground/20 p-2 rounded-md cursor-pointer">
    //               <span className="rounded-md size-8 bg-input/30 border border-input text-white flex items-center justify-center">2°</span>
    //               <Button variant="outline">
    //                 <Text className="stroke-cyan-500" />
    //                 Escrever o endereço de e-mail
    //                 <span className="flex items-center gap-2 text-yellow-500">
    //                   <Image />
    //                 </span>
    //               </Button>
    //             </div>
    //             <div className="flex items-center gap-4 hover:bg-muted-foreground/20 p-2 rounded-md cursor-pointer">
    //               <span className="rounded-md size-8 bg-input/30 border border-input text-white flex items-center justify-center">3°</span>
    //               <Button variant="outline">
    //                 <MousePointer className="stroke-cyan-500" />
    //                 Clicar no botão "Login"
    //                 <span className="flex items-center gap-2 text-red-500">
    //                 <Timer /> 30s
    //                 </span>
    //               </Button>
    //             </div>
    //           </div>
    //         </section>
    //       </div>
    //     </CardContent>
    //   </Card>
    // </div>
  );
}
