"use server";

import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCard from "./summary-card";
import AddTransactionButton from "@/app/_components/add-transaction-button";

interface SummaryCardsProps {
  month: string;
  balance: number;
  investmentsTotal: number;
  expensesTotal: number;
  depositsTotal: number;
}

export default async function SummaryCards({
  balance,
  investmentsTotal,
  expensesTotal,
  depositsTotal,
}: SummaryCardsProps) {
  console.log("Investidos: ", investmentsTotal);

  return (
    <div className="space-y-6">
      <Card className="bg-green-500 bg-opacity-[3%]">
        <CardHeader className="flex flex-row items-center gap-2">
          <WalletIcon size={16} />
          <p className="text-mute-foreground font-bold">Saldo</p>
        </CardHeader>
        <CardContent className="flex justify-between">
          <p className="text-2xl font-bold">
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(balance)}
          </p>
          <AddTransactionButton />
        </CardContent>
      </Card>

      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          icon={<PiggyBankIcon size={16} />}
          title="Investidos"
          value={investmentsTotal}
        />
        <SummaryCard
          icon={<TrendingUpIcon size={16} className="text-green-500" />}
          title="Receita"
          value={depositsTotal}
        />
        <SummaryCard
          icon={<TrendingDownIcon size={16} className="text-red-500" />}
          title="Despesas"
          value={expensesTotal}
        />
      </div>
    </div>
  );
}
