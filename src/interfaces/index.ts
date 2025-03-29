import { Control, FieldValues, Path } from "react-hook-form";

export interface BaseField<T extends FieldValues> {
  fieldName: Path<T>;
  fieldControl: Control<T>;
}

export interface DataSelected {
  label: string;
  value: string;
  key?: string;
}