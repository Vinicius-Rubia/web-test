import { DialogCreateProject } from "@/components/projects/dialog-create-project";
import { DialogEditProject } from "@/components/projects/dialog-edit-project";
import { DialogRemoveProject } from "@/components/projects/dialog-remove-project";
import { RootState } from "@/store";
import { FolderOpenDot } from "lucide-react";
import { useSelector } from "react-redux";

export const Projects = () => {
  const { projects } = useSelector((state: RootState) => state.projectsModel);

  return (
    <main>
      <section className="flex items-start justify-between">
        <div>
          <h2 className="text-xl">Novo projeto</h2>
          <p className="text-muted-foreground text-sm">
            Depois que um projeto é criado, os casos de testes podem ser
            atrelados ao projeto criado ou a outro já existente.
          </p>
        </div>
        {projects.length > 0 && <DialogCreateProject />}
      </section>

      {projects.length > 0 ? (
        <>
          <div className="flex items-center gap-10 mt-6 px-4 font-bold uppercase">
            <h4 className="w-80">Nome</h4>
            <h4 className="flex-1">Descrição</h4>
            <h4 className="w-18">Ações</h4>
          </div>
          <section className="mt-6 space-y-4">
            {projects.map((projects, index) => (
              <div key={index} className="border rounded-md p-4 even:bg-muted/30 flex justify-between items-center gap-10">
                <h3 className="font-semibold w-80 truncate">{projects.name}</h3>
                <p className="text-muted-foreground overflow-ellipsis flex-1 line-clamp-1">{projects.description ? projects.description : <span className="italic opacity-40">Sem descrição</span>}</p>
                <div className="space-x-4">
                  <DialogEditProject index={index} />
                  <DialogRemoveProject index={index} />
                </div>
              </div>
            ))}
          </section>
        </>
      ) : (
        <section className="border border-dashed flex flex-col justify-center items-center text-center py-20 rounded-md space-y-2 mt-6">
          <FolderOpenDot className="size-9 stroke-muted-foreground" />
          <h4 className="text-lg font-semibold tracking-tight">
            Nenhuma projeto adicionado
          </h4>
          <p className="text-muted-foreground text-sm">
            Você não adicionou nenhum projeto. Adicione um abaixo.
          </p>
          <DialogCreateProject />
        </section>
      )}
    </main>
  );
};
