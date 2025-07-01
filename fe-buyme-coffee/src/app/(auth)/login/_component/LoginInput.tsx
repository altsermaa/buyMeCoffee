import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export const LoginInput = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <div className="absolute top-8 right-20 ">
        <Link href="/signUp">
          <Button variant="secondary">Sign up</Button>
        </Link>
      </div>
      <div className="w-[416px] m-auto flex gap-6 flex-col justify-center">
        <div className="flex flex-col gap-1">
          <h1 className="font-black text-2xl">Welcome back </h1>
        </div>

        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Label htmlFor="username">Email</Label>
            <Input name="username" placeholder="Enter email here" />
            <div className="text-red-500"></div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="username">Password</Label>
            <Input name="username" placeholder="Enter your password here" />
            <div className="text-red-500"></div>
          </div>

          <Button variant="secondary" type="submit">
            Continue
          </Button>
        </form>
      </div>
    </div>
  );
};
