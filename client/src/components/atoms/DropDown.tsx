"use client";

import { Dropdown } from "primereact/dropdown";

interface Props {
  id:string
  value: string | number | undefined | null;
  options: { label: string; value: string | number | null }[];
  onChange: (e: any) => void;
  placeholder?: string;
  className?: string;
  leftIcon?: string;
  rightIcon?: string;
}

export default function DropdownComponent({
  id,
  value,
  options,
  onChange,
  placeholder,
  className,
  leftIcon = "pi pi-search",
  rightIcon = "pi pi-chevron-down"
}: Props) {
  return (
    <div className="p-inputgroup">
      {leftIcon && (
        <span className="p-inputgroup-addon">
          <i className={leftIcon}></i>
        </span>
      )}
      
      <Dropdown
      id={id}
        value={value}
        options={options}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        dropdownIcon={rightIcon}
      />
    </div>
  );
}