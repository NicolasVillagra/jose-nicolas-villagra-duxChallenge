import { useReducer } from "react";

// Tipos
export type UserTableState = {
  popUp: boolean;
  isEditing: boolean;
  search: string;
  sector: number | null ;
  estado: string | null;
};

export type UserTableAction =
  | { type: "OPEN_MODAL"; isEditing: boolean }
  | { type: "CLOSE_MODAL" }
  | { type: "SET_SEARCH"; payload: string }
  | { type: "SET_SECTOR"; payload: number | null }
  | { type: "SET_ESTADO"; payload: string | null };

// Estado inicial
const initialState: UserTableState = {
  popUp: false,
  isEditing: false,
  search: "",
  sector: null,
  estado: null,
};

// Reducer
function reducer(state: UserTableState, action: UserTableAction): UserTableState {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, popUp: true, isEditing: action.isEditing };
    case "CLOSE_MODAL":
      return { ...state, popUp: false };
    case "SET_SEARCH":
      return { ...state, search: action.payload };
    case "SET_SECTOR":
      return { ...state, sector: action.payload };
    case "SET_ESTADO":
      return { ...state, estado: action.payload };
    default:
      return state;
  }
}

// Hook
export function useUserTableState() {
  return useReducer(reducer, initialState);
}
