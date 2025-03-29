import { EClickTypes, ESelectorTypes } from "@/enums/actions";
import { DataSelected } from "@/interfaces";

export const SELECTORS: DataSelected[] = [
  {
    value: ESelectorTypes.ID,
    label: "ID",
  },
  {
    value: ESelectorTypes.NAME,
    label: "NAME",
  },
  {
    value: ESelectorTypes.CSS,
    label: "CSS",
  },
  {
    value: ESelectorTypes.XPATH,
    label: "XPATH",
  },
  {
    value: ESelectorTypes.LINK_TEXT,
    label: "LINK TEXT",
  },
  {
    value: ESelectorTypes.TAG,
    label: "TAG",
  },
]

export const CLICK_TYPES: DataSelected[] = [
  {
    value: EClickTypes.LEFT,
    label: "Clique Esquerdo",
  },
  {
    value: EClickTypes.RIGHT,
    label: "Clique Direito",
  },
  {
    value: EClickTypes.DOUBLE,
    label: "Duplo Clique",
  },
]