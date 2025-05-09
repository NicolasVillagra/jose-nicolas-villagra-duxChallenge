import React from "react";
import HeaderModal from "../molecules/HeaderModal";
import FormModal from "../molecules/FormModal";
import { createUser, updateUser } from "@/services/userService";

interface ModalUserCreateProps {
  onClose: () => void;
  state: boolean;
}

const ModalUserCreate = ({ onClose, state }: ModalUserCreateProps) => {
  const handleSubmit = async (user: {
    id: number;
    usuario: string;
    estado: string;
    sector: number;
  }) => {
    const userId = localStorage.getItem("selectedUserId");
    try {
      if (state === true && userId) {
        await updateUser(Number(userId), {
          usuario: user.usuario,
          estado: user.estado,
        });
      } else {
        await createUser({ usuario: user.usuario, estado: user.estado });
      }

      onClose();
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <HeaderModal onClose={onClose} />
      <div className="p-2">
              <FormModal onClose={onClose} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default ModalUserCreate;
