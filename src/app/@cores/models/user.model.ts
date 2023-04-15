export type Role = "admin" | "user";

export interface User {
    id: string;
    name: string;
    username: string;
    pin: number;
    balance: number;
    role: Role;
}