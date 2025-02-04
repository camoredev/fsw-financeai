import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import SummaryCards from "./_components/summary-cards";
import TimeSelect from "./_components/time-select";
import Navbar from "../_components/navbar";
import { isMatch } from "date-fns";
import TransactionsPieChats from "./_components/transactions-pie-chats";
import getDashboard from "../_data/get-dashboard";
import ExpensesPerCategory from "./_components/expenses-per-category";
import LastTransactions from "./_components/last-transactions";

interface HomeProps {
  searchParams: {
    month: string;
  };
}

export default async function Home({ searchParams: { month } }: HomeProps) {
  const { userId } = auth();
  if (!userId) {
    redirect("/login");
  }

  const monthIsInvalid = !month || !isMatch(month, "MM");

  if (monthIsInvalid) redirect("?month=01");

  const pieChartData = await getDashboard(JSON.parse(JSON.stringify(month)));
  console.log("data", pieChartData);
  return (
    <>
      <Navbar />
      <div className="flex flex-col overflow-hidden">
        <div className="flex w-full flex-row justify-between px-6 py-6">
          <h1>Dashboard</h1>
          <h1></h1>
          <TimeSelect />
        </div>
        <main className="grid grid-cols-[2fr_1fr] gap-4 overflow-hidden px-3">
          <div className="flex flex-col gap-4 overflow-hidden">
            <div>
              <SummaryCards month={month} {...pieChartData} />
            </div>

            <div className="grid grid-cols-[1fr_1fr] gap-2 overflow-hidden">
              <TransactionsPieChats {...pieChartData} />
              <ExpensesPerCategory
                expensesPerCategory={pieChartData.totalExpensePerCategory}
              />
            </div>
          </div>
          <aside className="flex flex-col overflow-hidden">
            <LastTransactions
              lastTransactions={pieChartData.LastTransactions}
            />
          </aside>
        </main>
        {/* 
        <footer className="flex items-center justify-center overflow-hidden py-6">
          <div className="text-sm text-muted-foreground">
            © 2025 Finance AI from Camore
          </div>
        </footer> */}
      </div>
    </>
  );
}
