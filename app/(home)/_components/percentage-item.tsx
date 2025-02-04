import React from "react";

interface PercentageItemProps {
  icon: React.ReactNode;
  title: string;
  value: number;
}

export default function PercentageItem({
  icon,
  title,
  value,
}: PercentageItemProps) {
  return (
    <>
      <div className="flex items-center justify-between">
        {/* Icone */}
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-white bg-opacity-[3%] p-4">{icon}</div>
          <p className="text-lg font-semibold text-muted-foreground">{title}</p>
        </div>
        <p className="text-sm font-bold">{value}%</p>
      </div>
    </>
  );
}
