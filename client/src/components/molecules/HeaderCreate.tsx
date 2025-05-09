import React from "react";
import ButtonComponent from "../atoms/Button";

interface Props {
  openModal: () => void;
}

const HeaderCreate = ({ openModal }: Props) => {
  return (
    <div className="flex justify-content-between align-items-center mb-4">
      <h1>Usuarios</h1>
      <ButtonComponent
        label={"Nuevo Usuario"}
        icon={"pi pi-plus"}
        className={"p-button p-button-rounded bg-blue-500 text-white text-xl"}
        onClick={() => {
          openModal();
        }}
        severity="info"
      />
    </div>
  );
};

export default HeaderCreate;
