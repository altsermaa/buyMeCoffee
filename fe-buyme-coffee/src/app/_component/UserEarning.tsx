import { Button } from "@/components/ui/button";
import { Layers2 } from "lucide-react";
import Image from "next/image";
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

export const UserEarning = () => {
  return (
    <div className="w-[901px] h-fit p-6 flex flex-col gap-4 border border-gray-200 rounded-2xl mx-auto">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div className="w-[48px] h-[48px] relative">
            <Image src="/Circle.png" fill objectFit="cover" alt="image" />
          </div>
          <div>
            <h1 className="font-black">Jake</h1>
            <p>buymeacoffee.com/baconpancakes1</p>
          </div>
        </div>

        <Button>
          <Layers2 /> Share page link
        </Button>
      </div>
      <div className="border border-gray-200 my-4"></div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-2">
          <h1 className="font-black text-2xl">Earnings</h1>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Last 30 days">Last 30 days</SelectItem>
                <SelectItem value="Last 90 days">Last 90 days</SelectItem>
                <SelectItem value="All time">All time</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <p className="font-black text-5xl">$450</p>
      </div>
    </div>
  );
};
