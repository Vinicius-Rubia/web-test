import { BaseField, DataSelected } from "@/interfaces";
import { ComponentProps } from "react";
import { FieldValues } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface SelectFieldProps<T extends FieldValues> extends BaseField<T>, ComponentProps<typeof Select> {
  label?: string;
  placeholder?: string;
  contentClass?: string;
  unSelected?: boolean;
  className?: string;
  data: DataSelected[];
}

export const SelectField = <T extends FieldValues>(props: SelectFieldProps<T>) => {
  const {
    fieldControl,
    fieldName,
    placeholder,
    unSelected = false,
    data,
    label,
    className,
    contentClass,
    defaultValue,
    ...selectProps
  } = props;

  return (
    <FormField
      control={fieldControl}
      name={fieldName}
      render={({ field }) => (
        <FormItem className={contentClass}>
          {label && <FormLabel>{label}</FormLabel>}
          <Select
            onValueChange={field.onChange}
            value={field.value}
            {...selectProps}
          >
            <FormControl>
              <SelectTrigger className={className} id="trigger">
                <SelectValue placeholder={placeholder ?? "Selecione"} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {unSelected && <SelectItem value="none">Nenhum</SelectItem>}
              {data.map((p, index) => (
                <SelectItem key={p.key ?? index} value={p.value}>
                  {p.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
