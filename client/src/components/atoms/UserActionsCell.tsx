import ButtonComponent from "./Button";


export default function UserActionsCell({ onDelete }: { onDelete: () => void }) {
  return (
    <ButtonComponent
      label="Eliminar"
      icon="pi pi-trash"
      className="p-button-danger"
      severity="danger"
      onClick={onDelete}
    />
  );
}
