import type { ChangeEvent } from "react";
import type React from "react";

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
