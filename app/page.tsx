import Image from "next/image";
import { Button } from "./_components/ui/button";
import { SignOutButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = auth();
  if (!userId) {
    redirect("/login");
  }
  return (
    <div className="flex h-full w-full flex-col">
      <header className="flex h-16 w-full bg-gray-900 justify-between">
        <Image
          src={"/logo-home.svg"}
          width={173}
          height={39}
          alt="logo"
          className="p-4"
        />
        <ul className="flex gap-4">
          <li>Dashboard</li>
          <li>Transações</li>
          <li>Assinatura</li>
        </ul>
        <div>caio moraes</div>
      </header>
      <main>
        <h1 className="text-green-500">Olá mundo!</h1>
        <SignOutButton>
          <Button>Sair</Button>
        </SignOutButton>
      </main>
    </div>
  );
}
