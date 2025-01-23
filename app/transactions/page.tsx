import React from "react";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns/index";
import AddTransactionButton from "../_components/add-transaction-button";

export default async function TransactionsPage() {
  const transactions = await db.transaction.findMany({});
  return (
    <div className="space-y-6 p-6">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-2xl font-bold">Transações</h2>
        <AddTransactionButton />
      </div>
      <DataTable
        columns={transactionColumns}
        data={JSON.parse(JSON.stringify(transactions))}
      />
    </div>
  );
}
