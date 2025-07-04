"use client";
import { Button } from "@/components/ui/button";
import { Coffee, Link } from "lucide-react";
import { usePathname } from "next/navigation";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuth } from "./UserProvider";
import axios from "axios";

export const Header = () => {
  const { user } = useAuth();
  const path = usePathname();
  const arr = ["/login", "/signUp"];

  if (arr.includes(path)) {
    return;
  }

  const differentHeader = ["/", "/accountSet", "/explore", "viewPage"];

  // const getUserInfo = async () => {
  //   const response = await axios.post();
  // };

  return (
    <div className="flex justify-between w-[1280px] my-2 mx-auto">
      <div className="flex gap-1">
        <Coffee />
        <p className="font-black">Buy Me Coffee</p>
      </div>

      {
        // differentHeader.includes(!path) ? (<Button variant="secondary">Log out</Button>) :
      }
    </div>
  );
};
