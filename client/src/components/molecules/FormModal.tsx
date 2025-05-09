"use client";
import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import DropdownComponent from "../atoms/DropDown";
import ButtonComponent from "../atoms/Button";
import { classNames } from "primereact/utils";
import { InputNumber } from "primereact/inputnumber";

type UserFormProps = {
  onSubmit: (user: {
    id: number;
    usuario: string;
    estado: string;
    sector: number;
  }) => void;
  onClose: () => void;
};

const estados = [
  { label: "ACTIVO", value: "ACTIVO" },
  { label: "INACTIVO", value: "INACTIVO" },
];

const sectores = [
  { label: "Administración", value: 4000 },
  { label: "Recursos Humanos", value: 4000 },
  { label: "Desarrollo", value: 4000 },
  { label: "Soporte", value: 4000 },
];

export default function FormModal({ onClose, onSubmit }: UserFormProps) {
  const [id, setId] = useState<number | undefined>(undefined);
  const [usuario, setUsuario] = useState("");
  const [estado, setEstado] = useState("");
  const [sector, setSector] = useState<number | undefined>(undefined);
  const [isIdEditable, setIsIdEditable] = useState(true);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const userId = localStorage.getItem("selectedUserId");
    if (userId) {
      setId(Number(userId));
      setIsIdEditable(false);
    } else {
      setIsIdEditable(true);
    }
  }, []);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    const numericId = Number(id);

    if (!id || isNaN(numericId) || numericId <= 0)
      newErrors.id = "ID inválido. Debe ser un número positivo.";
    if (!usuario || usuario.trim().length < 3)
      newErrors.usuario = "El nombre debe tener al menos 3 caracteres.";
    if (!estado) newErrors.estado = "Debe seleccionar un estado.";
    if (!sector) newErrors.sector = "Debe seleccionar un sector.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    const numericId = Number(id);
    if (!validate()) return;

    onSubmit({ id: numericId, usuario, estado, sector: sector! });
    setId(0);
    setUsuario("");
    setEstado("");
    setSector(undefined);
    setErrors({});
  };
  return (
    <div>
      <div className="flex flex-column gap-3 p-4">
        <span className="flex flex-column gap-2">
          <label className="text-2xl" htmlFor="id">
            ID
          </label>
          <InputNumber
            id="id"
            value={id || 0}
            placeholder={
              isIdEditable
                ? "Ingrese el ID del usuario"
                : "ID generado automáticamente"
            }
            onChange={(e) => setId(e.value as number)}
            disabled={!isIdEditable}
            className={classNames({ "p-invalid": errors.id })}
            inputId="withoutgrouping"
            useGrouping={false}
          />
          {errors.id && <small className="p-error">{errors.id}</small>}
        </span>

        <span className="flex flex-column gap-2">
          <label className="text-2xl" htmlFor="usuario">
            Nombre de Usuario
          </label>
          <InputText
            id="usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            className={classNames({ "p-invalid": errors.usuario })}
          />
          {errors.usuario && (
            <small className="p-error">{errors.usuario}</small>
          )}
        </span>

        <span className="flex flex-column gap-2">
          <label className="text-2xl" htmlFor="estado">
            Estado:
          </label>
          <DropdownComponent
            id="estado"
            value={estado}
            placeholder="Seleccionar Estado"
            options={estados}
            onChange={(e) => setEstado(e.value)}
            className={classNames({ "p-invalid": errors.estado })}
          />
          {errors.estado && <small className="p-error">{errors.estado}</small>}
        </span>

        <span className="flex flex-column gap-2">
          <label className="text-2xl" htmlFor="sector">
            Sector:
          </label>
          <DropdownComponent
            id="sector"
            value={sector}
            placeholder="Seleccionar Sector"
            options={sectores}
            onChange={(e) => setSector(e.value)}
            className={classNames({ "p-invalid": errors.sector })}
          />
          {errors.sector && <small className="p-error">{errors.sector}</small>}
        </span>

        <div className="flex justify-content-center gap-2">
          <ButtonComponent
            label="Crear"
            icon="pi pi-check"
            onClick={handleSubmit}
            className=""
            severity="info"
          />
          <ButtonComponent
            label="Cancelar"
            icon="pi pi-times"
            onClick={onClose}
            className="ml-2"
            severity="danger"
          />
        </div>
      </div>
    </div>
  );
}
