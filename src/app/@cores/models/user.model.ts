export type Role = "admin" | "user";

export interface User {
    id: string;
    name: string;
    username: string;
    balance: number;
    role: Role;
}