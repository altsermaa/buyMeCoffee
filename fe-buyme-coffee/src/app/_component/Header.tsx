"use client";
import { Button } from "@/components/ui/button";
import { Coffee, Link } from "lucide-react";
import { usePathname } from "next/navigation";

export const Header = () => {
  const path = usePathname();
  const arr = ["/login", "/signUp"];

  if (arr.includes(path)) {
    return;
  }

  return (
    <div className="flex justify-between w-[1280px] my-2 mx-auto">
      <div className="flex gap-1">
        <Coffee />
        <p className="font-black">Buy Me Coffee</p>
      </div>

      <Button variant="secondary">Log out</Button>
    </div>
  );
};
