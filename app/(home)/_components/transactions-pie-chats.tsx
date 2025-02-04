"use client";

import React from "react";

import { Pie, PieChart } from "recharts";
import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";
import { TransactionType } from "@prisma/client";
import PercentageItem from "./percentage-item";
import { TransactionPercentagePerType } from "@/app/_data/get-dashboard/types";

const chartConfig = {
  [TransactionType.INVESTMENT]: {
    label: "Investido",
    color: "#FFFFFF",
  },
  [TransactionType.DEPOSIT]: {
    label: "Receita",
    color: "#55B02E",
  },
  [TransactionType.EXPENSE]: {
    label: "Despesas",
    color: "#E93030",
  },
} satisfies ChartConfig;

interface TransactionPieChartProps {
  balance: number;
  investmentsTotal: number;
  expensesTotal: number;
  depositsTotal: number;
  typesPercentage: TransactionPercentagePerType;
}

export default function TransactionsPieChats({
  investmentsTotal,
  expensesTotal,
  depositsTotal,
  typesPercentage,
}: TransactionPieChartProps) {
  const chartData = [
    {
      type: TransactionType.DEPOSIT,
      amount: depositsTotal,
      fill: "#55B02E",
    },
    {
      type: TransactionType.EXPENSE,
      amount: expensesTotal,
      fill: "#E93030",
    },
    {
      type: TransactionType.INVESTMENT,
      amount: investmentsTotal,
      fill: "#FFFFFF",
    },
  ];

  return (
    <Card className="flex flex-col p-6">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Donut</CardTitle>
        <CardDescription>Gastos de Janeiro</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="type"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
        <div className="space-y-3 px-10">
          <PercentageItem
            icon={<TrendingUpIcon size={20} className="text-primary" />}
            title="Receita"
            value={typesPercentage[TransactionType.DEPOSIT]}
          />
          <PercentageItem
            icon={<TrendingDownIcon size={20} className="text-red-500" />}
            title="Despesas"
            value={typesPercentage[TransactionType.EXPENSE]}
          />
          <PercentageItem
            icon={<PiggyBankIcon size={20} />}
            title="Investido"
            value={typesPercentage[TransactionType.INVESTMENT]}
          />
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm"></CardFooter>
    </Card>
  );
}
