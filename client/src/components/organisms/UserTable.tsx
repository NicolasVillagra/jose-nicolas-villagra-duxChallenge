'use client'
import { Suspense } from "react";
import { User } from "@/types/user";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useRouter } from "next/navigation";
import UserFilters from "../molecules/UserFilter";
import HeaderCreate from "../molecules/HeaderCreate";
import UserModal from "../molecules/userModal";
import UserActionsCell from "../atoms/UserActionsCell";
import { useFilteredUsers } from "@/hooks/useFilteredUsers";
import { deleteUser } from "@/services/userService";
import UserTablePaginator from "../molecules/UserTablePaginator";
import UserNameCell from "../atoms/UserNameCells";
import { useUserTableState } from "@/hooks/useUserTableState";

interface Props {
  users: User[];
  totalRecord: number;
}

export default function UserTable({ users, totalRecord }: Props) {
  const router = useRouter();
  const [state, dispatch] = useUserTableState();

  const filteredUsers = useFilteredUsers(
    users,
    state.search,
    state.sector ? String(state.sector) : null,
    state.estado ? String(state.estado) : null
  );

  const handleEdit = (userId: number) => {
    localStorage.setItem("selectedUserId", String(userId));
    dispatch({ type: "OPEN_MODAL", isEditing: true });
  };

  const handleCreate = () => {
    dispatch({ type: "OPEN_MODAL", isEditing: false });
  };

  const closeModal = () => {
    localStorage.removeItem("selectedUserId");
    dispatch({ type: "CLOSE_MODAL" });
  };

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm("¿Estás seguro de que deseas eliminar este usuario?");
    if (!confirmed) return;

    try {
      const success = await deleteUser(id);
      if (success) {
        router.refresh();
      }
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
      alert("No se pudo eliminar el usuario. Por favor, inténtalo de nuevo.");
    }
  };

  const sectorOptions = Array.from(
    new Set(users.map((u) => String(u.sector ?? "Otro")))
  ).map((s) => ({
    label: s,
    value: s,
  }));
  const estadoOptions = Array.from(new Set(users.map((u) => u.estado))).map((e) => ({
    label: e,
    value: e,
  }));

  return (
    <Suspense fallback={<div>Cargando usuarios...</div>}>
      <div className="card">
        <HeaderCreate openModal={handleCreate} />
        <UserFilters
          search={state.search}
          onSearchChange={(value) => dispatch({ type: "SET_SEARCH", payload: value })}
          sector={state.sector !== null ? Number(state.sector) : null}
          onSectorChange={(value) => dispatch({ type: "SET_SECTOR", payload: value })}
          estado={state.estado}
          onEstadoChange={(value) => dispatch({ type: "SET_ESTADO", payload: value })}
          sectorOptions={sectorOptions}
          estadoOptions={estadoOptions}
        />
        <DataTable value={filteredUsers} sortMode="multiple">
          <Column field="id" header="ID" sortable />
          <Column
            field="usuario"
            header="Usuario"
            sortable
            body={(rowData) => (
              <UserNameCell user={rowData.usuario} onClick={() => handleEdit(rowData.id)} />
            )}
          />
          <Column field="estado" header="Estado" sortable />
          <Column field="sector" header="Sector" sortable />
          <Column
            header="Acciones"
            body={(rowData) => (
              <UserActionsCell onDelete={() => handleDelete(rowData.id)} />
            )}
          />
        </DataTable>
        <UserTablePaginator totalRecords={totalRecord} />
        <UserModal visible={state.popUp} isEditing={state.isEditing} onClose={closeModal} />
      </div>
    </Suspense>
  );
}
