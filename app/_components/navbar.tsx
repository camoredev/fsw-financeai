"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="flex justify-between border-b border-solid bg-gray-900 px-8 py-4">
      <Image src={"/logo-home.svg"} width={173} height={39} alt="logo" />
      <nav className="flex items-center gap-10">
        <Link
          href="/"
          className={
            pathname === "/"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className={
            pathname === "/transactions"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Transações
        </Link>
        <Link
          href="/subscriptions"
          className={
            pathname === "/subscriptions"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Assinatura
        </Link>
      </nav>
      <UserButton showName />
    </header>
  );
}
