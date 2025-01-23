import { Button } from "@/app/_components/ui/button";
import UpsertTransactionDialog from "@/app/_components/upset-transaction-dialog";
import { Transaction } from "@prisma/client";
import { Edit } from "lucide-react";
import React, { useState } from "react";

interface EditTransactionButtonProps {
  transaction: Transaction;
}

export default function EditTransactionButton({
  transaction,
}: EditTransactionButtonProps) {
  const [dialogIsOpen, setDialogIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        variant={"ghost"}
        size={"icon"}
        className="text-muted"
        onClick={() => setDialogIsOpen(true)}
      >
        {" "}
        <Edit size={16} />
      </Button>
      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
        defaultValues={{ ...transaction, amount: Number(transaction.amount) }}
        transactionId={transaction.id}
      />
    </>
  );
}
