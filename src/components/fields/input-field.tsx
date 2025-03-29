import { BaseField } from "@/interfaces";
import { InputHTMLAttributes } from "react";
import { FieldValues, PathValue } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

interface InputFieldProps<T extends FieldValues> extends BaseField<T>, InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  contentClass?: string;
  description?: string;
  errorMessage?: boolean;
}

export const InputField = <T extends FieldValues>(props: InputFieldProps<T>) => {
  const {
    fieldControl,
    fieldName,
    label,
    description,
    contentClass,
    defaultValue,
    errorMessage = true,
    ...inputProps
  } = props;

  const computedDefaultValue =
    (defaultValue as PathValue<T, typeof fieldName>) ||
    ("" as PathValue<T, typeof fieldName>);

  return (
    <FormField
      control={fieldControl}
      name={fieldName}
      defaultValue={computedDefaultValue}
      render={({ field }) => (
        <FormItem className={contentClass}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input {...field} {...inputProps} />
          </FormControl>
          {description && (
            <FormDescription className="text-xs italic">
              {description}
            </FormDescription>
          )}
          {errorMessage && <FormMessage />}
        </FormItem>
      )}
    />
  );
};
