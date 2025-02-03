import { Button } from "@/app/_components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { TRANSACTION_PAYMENT_METHOD_ICONS } from "@/app/_constants/transactions";
import { Transaction } from "@prisma/client";
import React from "react";
import Image from "next/image";
import { formatCurrency } from "@/app/_utils/currency";
import Link from "next/link";

interface LastTransactionsProps {
  lastTransactions: Transaction[];
}

export default function LastTransactions({
  lastTransactions,
}: LastTransactionsProps) {
  const getPriceColor = (type: string) => {
    if (type === "EXPENSE") {
      return "text-red-500";
    }
    if (type === "DEPOSIT") {
      return "text-green-500";
    }

    return "text-white";
  };

  const getPrefixAmount = (type: string) => {
    if (type === "EXPENSE") {
      return "-";
    }

    return "+";
  };

  return (
    <ScrollArea className="h-full rounded-md border">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="font-bold">Ultimas Transações</CardTitle>
        <Button variant={"outline"} className="rounded-full font-bold" asChild>
          <Link href="/transactions">Ver todas</Link>
        </Button>
      </CardHeader>
      <hr className="py-2" />
      <CardContent className="space-y-3">
        {lastTransactions.map((transaction) => (
          <div
            key={transaction.id}
            className="item-center flex justify-between"
          >
            <div className="flex w-full items-center gap-2">
              <div className="rounded-lg bg-white bg-opacity-[3%] p-4">
                <Image
                  src={
                    TRANSACTION_PAYMENT_METHOD_ICONS[transaction.paymentMethod]
                  }
                  width={20}
                  height={20}
                  alt={transaction.name}
                />
              </div>
              <div className="flex flex-col justify-between gap-1">
                <p className="text-small font-bold">{transaction.name}</p>
                <p className="text-small text-muted-foreground">
                  {new Date(transaction.date).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p
                className={`flex flex-row text-sm font-bold ${getPriceColor(transaction.type)}`}
              >
                <span> {getPrefixAmount(transaction.type)}</span>
                {formatCurrency(Number(transaction.amount))}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </ScrollArea>
  );
}
