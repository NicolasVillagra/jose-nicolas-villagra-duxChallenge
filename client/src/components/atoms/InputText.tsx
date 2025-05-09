'use client';

import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export default function InputTextComponent({ value, onChange, placeholder }: Props) {
  return (
    <div >
    <IconField iconPosition="left">
        <InputIcon className="pi pi-search"> </InputIcon>
        <InputText
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full text-gray-700 focus:ring-2 focus:ring-blue-500"
      />
    </IconField>
</div>
    
  );
}