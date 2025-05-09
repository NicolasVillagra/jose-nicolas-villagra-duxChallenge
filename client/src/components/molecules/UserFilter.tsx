"use client";

import ButtonComponent from "../atoms/Button";
import DropdownComponent from "../atoms/DropDown";
import InputTextComponent from "../atoms/InputText";

interface Option {
  label: string;
  value: string | null;
}

interface Props {
  search: string;
  onSearchChange: (value: string) => void;
  sector: number | null;
  onSectorChange: (value: number | null) => void;
  estado: string | null;
  onEstadoChange: (value: string | null) => void;
  sectorOptions: Option[];
  estadoOptions: Option[];
}

export default function UserFilters({
  search,
  onSearchChange,
  sector,
  onSectorChange,
  estado,
  onEstadoChange,
  sectorOptions,
  estadoOptions,
}: Props) {
  const handleClearFilters = () => {
    onSearchChange("");
    onSectorChange(null);
    onEstadoChange(null);
  };

  return (
    <div className="flex gap-3 mb-3 flex-wrap items-end">
      <div className="flex-1">
        <InputTextComponent
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Buscar"
        />
      </div>

      <div className="flex-1">
        <DropdownComponent
          id=""
          value={estado}
          options={estadoOptions}
          onChange={(e) => onEstadoChange(e.value)}
          placeholder="Filtrar por Estado"
          className="w-full"
        />
      </div>

      <div className="flex-1">
        <DropdownComponent
          id=""
          value={sector}
          options={sectorOptions}
          onChange={(e) => onSectorChange(e.value)}
          placeholder="Filtrar por Sector"
          className="w-full"
        />
      </div>

      <div>
        <ButtonComponent
          label=""
          icon="pi pi-filter-slash"
          className="p-button-secondary text-white"
          onClick={handleClearFilters}
          severity="secondary"
        />
      </div>
    </div>
  );
}
