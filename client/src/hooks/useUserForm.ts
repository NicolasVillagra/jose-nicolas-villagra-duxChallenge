import { useState, useEffect } from "react";

export type UserFormValues = {
  id: number;
  usuario: string;
  estado: string;
  sector: number;
};

export function useUserForm(onSubmit: (user: UserFormValues) => void) {
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
    resetForm();
  };

  const resetForm = () => {
    setId(0);
    setUsuario("");
    setEstado("");
    setSector(undefined);
    setErrors({});
  };

  return {
    id,
    usuario,
    estado,
    sector,
    isIdEditable,
    errors,
    setId,
    setUsuario,
    setEstado,
    setSector,
    handleSubmit,
  };
}
