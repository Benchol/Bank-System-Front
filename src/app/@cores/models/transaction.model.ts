import { User } from "./user.model";

export type TransactionType = "transfer" | "depot" | "withdraw";

export interface Transaction {
    id: string;
    sender: User;
    receiver: User;
    transaction_type: TransactionType;
    transaction_date: Date;
    amount: number;
}