import { Button } from "./_components/ui/button";
import { SignOutButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "./_components/navbar";

export default async function Home() {
  const { userId } = auth();
  if (!userId) {
    redirect("/login");
  }
  return (
    <div className="flex h-full w-full flex-col">
      <Navbar />
      <main>
        <h1 className="text-green-500">Olá mundo!</h1>
        <SignOutButton>
          <Button>Sair</Button>
        </SignOutButton>
      </main>
    </div>
  );
}
