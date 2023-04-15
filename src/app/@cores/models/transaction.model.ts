export type TransactionType = "transfer" | "depot" | "withdraw";

export interface Transaction {
    id: string;
    sender_id: string;
    receiver_id: string;
    transaction_type: TransactionType;
    transaction_date: Date;
    amount: number;
}