import type React from "react";

export interface children {
  children: React.ReactNode;
}

export interface TableResult {
  id: number;
  username: string;
  nama: string;
  email: string;
  created_at: string;
}

export interface DataDelete {
  show: boolean;
  nama: string;
  id: number | null;
}

export interface CardPropsDelete {
  nama: string;
  handleClose: () => void;
  handleDelete: () => void;
}

export interface CardPropsUpdate {
  handleClose: () => void;
  handleUpdate: (data: TableResult) => void;
  DataUpdate;
}

export interface UserDataUpdate {
  username: string;
  nama: string;
  email: string;
  id: number | null;
}

export interface DataUpdate {
  show: boolean;
  data: UserDataUpdate;
}
