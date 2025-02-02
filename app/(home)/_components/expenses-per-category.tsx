import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { TotalExpensePerCategory } from "@/app/_data/get-dashboard/types";
import React from "react";

interface ExpensesPerCategoryProps {
  expensesPerCategory: TotalExpensePerCategory[];
}

export default function ExpensesPerCategory({
  expensesPerCategory,
}: ExpensesPerCategoryProps) {
  return (
    <ScrollArea>
      <CardHeader>
        <CardTitle>Gastos por categoria</CardTitle>
      </CardHeader>
      <hr />
      <CardContent>
        {expensesPerCategory.map((category) => (
          <div key={category.category}>
            <div>{category.category}</div>
          </div>
        ))}
      </CardContent>
    </ScrollArea>
  );
}
