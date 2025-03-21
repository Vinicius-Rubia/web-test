import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Image } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

const fileSchema = z
  .instanceof(File)
  .refine(
    (file) => ['image/jpeg', 'image/png', 'image/svg+xml'].includes(file.type),
    { message: 'Apenas arquivos de imagem (JPEG, PNG, SVG) são aceitos.' }
  );

export const NewProject = () => {
  const form = useForm<SchemaProjectFormType>({
    resolver: zodResolver(Project.ProjectFormSchema),
    defaultValues: {
      name: "",
      description: "", 
    },
  });

  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
  const [preview, setPreview] = useState<string>("");
  const [base64Image, setbase64Image] = useState<string>("");

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SchemaProjectFormType> = async (data) => {
    const response = await TestPilotService.setProject({
      description: data.description,
      name: data.name,
      logo: base64Image
    });

    toast({
      title: "Projeto",
      description: response.message,
    });
    navigate("/projects");
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const result = fileSchema.safeParse(file);

    if (result.success && file) {
      const reader = new FileReader();
      form.setValue("logo", file);

      reader.onloadend = () => {
        setbase64Image(reader.result as string);
      };

      reader.onerror = () => {
        form.setError("logo", { message: "Erro ao carregar a logo." });
      };

      reader.readAsDataURL(file)

      setSelectedFile(file);
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    }
  };

  return (
    <>
      <h1 className="text-3xl">Novo projeto</h1>
      <p className="text-muted-foreground mt-1">
        Depois que um projeto é criado, os casos de testes podem ser atrelados
        ao projeto criado ou outro já existente.
      </p>
      <Separator className="my-4" />

      <Link
        to="/projects"
        className="flex items-center gap-2 text-sm hover:underline mb-4"
      >
        Ver projetos
      </Link>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-[600px] space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Nome" {...field} />
                </FormControl>
                <FormDescription>
                  Dê um nome ao seu projeto.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descrição  <span className="text-sm text-muted-foreground">(Opcional)</span></FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Sua descrição..."
                    className="resize-none"
                    rows={5}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Dê uma descrição ao seu projeto.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="logo"
            render={() => (
              <FormItem>
                <FormLabel htmlFor="logo">Logo  <span className="text-sm text-muted-foreground">(Opcional)</span>
                <FormControl>
                  <>
                    <Input
                      id="logo"
                      type="file"
                      accept="image/jpeg, image/png, image/svg+xml"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <div className="flex items-center gap-4">
                      <div className="grid place-content-center mt-1 size-20 p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 transition-all cursor-pointer">
                        {preview ? (
                          <img src={preview} className="size-16 rounded-full" alt="Imagem da logo" />
                        ) : (
                          <Image className="size-10 text-muted-foreground" />
                        )}
                      </div>
                      <p>{selectedFile?.name}</p>
                    </div>
                  </>
                </FormControl>
                </FormLabel>
                <FormDescription>
                  É recomendado que o tamanho da logo do projeto seja 40x40 pixels.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button>Criar projeto</Button>
        </form>
      </Form>
    </>
  );
};
