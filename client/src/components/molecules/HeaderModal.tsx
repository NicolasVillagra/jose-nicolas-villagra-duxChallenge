"use client";
import React from "react";
import ButtonComponent from "../atoms/Button";
import style from "@/styles/userModal.module.css";

interface HeaderModalProps {
  onClose: () => void;
}

const HeaderModal = ({ onClose }: HeaderModalProps) => {
  return (
    <div className={style.headerModal}>
      <h1 className="text-white">Usuario</h1>
      <div className="flex gap-2">
        <ButtonComponent
          label=""
          icon="pi pi-cog"
          className="bg-blue-500 text-xs"
          onClick={onClose}
          severity="info"
        />
        <ButtonComponent
          label=""
          icon="pi pi-minus"
          className=" bg-blue-500 text-xs"
          onClick={() => onClose()}
          severity="info"
        />
      </div>
    </div>
  );
};

export default HeaderModal;
