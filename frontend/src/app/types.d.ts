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