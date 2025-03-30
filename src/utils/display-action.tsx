import { ActionTypes } from "@/types/action-forms";
import { Globe, Mouse, MousePointerClick, Scroll, TextCursorInput } from "lucide-react";

export function displayAction(actionType : ActionTypes) {
  switch (actionType) {
    case "click":
      return {
        label: "Clicar",
        Icon: <MousePointerClick className="stroke-green-500" />
      }
    case "hover":
      return {
        label: "Passar o mouse",
        Icon: <Mouse className="stroke-purple-500" />
      }
    case "navigate":
      return {
        label: "Navegar",
        Icon: <Globe className="stroke-cyan-500" />
      }
    case "scroll":
      return {
        label: "Rola a página",
        Icon: <Scroll className="stroke-rose-500" />
      }
    case "type":
      return {
        label: "Escrever",
        Icon: <TextCursorInput className="stroke-yellow-500" />
      }
    default:
      return {
        label: "Clicar",
        Icon: <MousePointerClick className="stroke-green-500" />
      };
  }
}