// hooks/useFilteredUsers.ts
import { useEffect, useState } from "react";
import { User } from "@/types/user";

export const useFilteredUsers = (
  users: User[],
  search: string,
  sector: string | null,
  estado: string | null
) => {
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  useEffect(() => {
    const normalizedSearch = search.toLowerCase();

    if (!search && !sector && !estado) {
      setFilteredUsers(users);
      return;
    }

    const result = users.filter((user) => {
      const nombreUsuario = user.usuario?.toLowerCase() ?? "";
      const matchesName = nombreUsuario.includes(normalizedSearch);
      const matchesSector = sector ? String(user.sector) === sector : true;
      const matchesEstado = estado ? user.estado === estado : true;
      return matchesName && matchesSector && matchesEstado;
    });

    setFilteredUsers(result);
  }, [search, sector, estado, users]);

  return filteredUsers;
};