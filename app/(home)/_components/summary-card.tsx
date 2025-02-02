import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import React, { ReactNode } from "react";

interface SummaryCardProps {
  icon: ReactNode;
  title: string;
  value: number;
}

export default function SummaryCard({ icon, title, value }: SummaryCardProps) {
  return (
    <Card>
      <CardHeader className="flex-row items-center gap-4">
        <div className="rounded-lg bg-white bg-opacity-[3%] p-2">{icon}</div>
        <p className="text-mute-foreground font-bold">{title}</p>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(value)}
        </p>
      </CardContent>
    </Card>
  );
}
