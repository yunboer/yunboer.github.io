import React from "react";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border-custom shadow-sm p-4 relative w-full h-fit flex flex-col text-center md:text-left mb-2">
      {children}
    </div>
  );
}
