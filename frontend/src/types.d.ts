import type { ChangeEvent } from "react";
import type React from "react";

export interface children {
  children: React.ReactNode;
}

export interface AuthData {
  username: string;
  nama: string;
  iat: number;
  exp: number;
}

export interface children {
  children: React.ReactNode;
}

export interface InputProps {
  type?: string;
  value?: string;
  placeHolder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface LoginData {
  username: string;
  password: string;
}

export interface RegisterData {
  username: string;
  name: string;
  email: string;
  password: string;
}

export type LoginResult = (data: LoginData) => Promise<{ message: string }>;
export type HandleLogin = (data: LoginData) => Promise<void>;

export type RegisterResult = (
  data: RegisterData
) => Promise<{ message: string }>;
export type HandleRegister = (data: RegisterData) => Promise<void>;

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
