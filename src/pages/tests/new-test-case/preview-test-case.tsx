import { Button } from "@/components/ui/button";
import { Globe, MousePointerClick, TextCursorInput } from "lucide-react";

export function PreviewTestCase() {
  return (
    <div>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-xl">Resumo do seu caso de teste</h2>
          <p className="text-muted-foreground text-sm">
            Veja um resumos do seu caso de testes com suas ações e os passos ordernados.
          </p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <span className="rounded-md size-8 bg-input/30 border border-input text-white flex items-center justify-center">
            1°
          </span>
          <Button variant="outline">
            <Globe className="stroke-cyan-500" />
            Acessar o site de SKY Cobrança
          </Button>
          <p className="text-muted-foreground text-sm">
            URL: <strong>https://campanhas.sky.com.br/</strong>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="rounded-md size-8 bg-input/30 border border-input text-white flex items-center justify-center">
            2°
          </span>
          <Button variant="outline">
            <TextCursorInput className="stroke-yellow-500" />
            Preencher o campo de e-mail
          </Button>
          <p className="text-muted-foreground text-sm">
            Texto do campo: <strong>vinicius.rubia@gmail.com</strong>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="rounded-md size-8 bg-input/30 border border-input text-white flex items-center justify-center">
            3°
          </span>
          <Button variant="outline">
            <TextCursorInput className="stroke-yellow-500" />
            Preencher o campo de senha
          </Button>
          <p className="text-muted-foreground text-sm">
            Texto do campo: <strong>4GhuiD-$dj#xv576Z</strong>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="rounded-md size-8 bg-input/30 border border-input text-white flex items-center justify-center">
            4°
          </span>
          <Button variant="outline">
            <MousePointerClick className="stroke-green-500" />
            Clicar no botão de login
          </Button>
          <p className="text-muted-foreground text-sm">
            Elemento de busca: <strong>document</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
