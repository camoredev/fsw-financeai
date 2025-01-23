import React from "react";
import Navbar from "../_components/navbar";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

export default async function page() {
  const { userId } = auth();
  if (!userId) {
    redirect("/login");
  }
  return (
    <div>
      <Navbar />
    </div>
  );
}
