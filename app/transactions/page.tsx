import React from "react";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns/index";
import AddTransactionButton from "../_components/add-transaction-button";
import Navbar from "../_components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import SummaryCard from "../(home)/_components/summary-card";
import { PiggyBankIcon } from "lucide-react";

export default async function TransactionsPage() {
  const { userId } = auth();
  if (!userId) {
    redirect("/login");
  }
  const transactions = await db.transaction.findMany({
    where: {
      userId,
    },
  });

  return (
    <>
      <Navbar />

      <section className="flex flex-row items-center gap-6 px-6 py-6">
        <SummaryCard
          icon={<PiggyBankIcon size={16} />}
          title="Saldo"
          value={1000}
        />
        <SummaryCard
          icon={<PiggyBankIcon size={16} />}
          title="Depósitos"
          value={1000}
        />

        <SummaryCard
          icon={<PiggyBankIcon size={16} />}
          title="Investidos"
          value={1000}
        />

        <SummaryCard
          icon={<PiggyBankIcon size={16} />}
          title="Despesas"
          value={1000}
        />
      </section>
      <div className="space-y-6 p-6">
        <div className="flex w-full items-center justify-between">
          <h2 className="text-2xl font-bold">Transações</h2>
          <AddTransactionButton />
        </div>
        <DataTable columns={transactionColumns} data={transactions} />
      </div>
    </>
  );
}
