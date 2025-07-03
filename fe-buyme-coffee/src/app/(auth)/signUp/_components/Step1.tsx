"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod/v4";
import { inputPropsType } from "../page";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";

const usernameSchema = z.object({
  userName: z.string().min(5).max(50),
});

export const Step1 = ({ stepperNext, setUserName }: inputPropsType) => {
  const form = useForm<z.infer<typeof usernameSchema>>({
    resolver: zodResolver(usernameSchema),
    defaultValues: {
      userName: "",
    },
  });

  const [userNameExist, setUserNameExist] = useState("");

  const handleSubmit = async (values: z.infer<typeof usernameSchema>) => {
    try {
      const response = await axios.post("http://localhost:8000/checkUserName", {
        username: values.userName,
      });
      console.log(response?.data?.message);
      setUserNameExist(response?.data?.message);
      if (response?.data?.message === "Username available") {
        stepperNext();
      }
    } catch (err: any) {
      alert(err?.response?.data?.message);
      setUserNameExist(err?.response?.data?.message);
    }
    console.log(values);
    setUserName(values.userName);
  };

  const buttonDisabled = !form.watch("userName");

  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <div className="absolute top-8 right-20 ">
        <Link href="/login">
          <Button variant="secondary">Log in</Button>
        </Link>
      </div>
      <div className="w-[416px] m-auto flex gap-6 flex-col justify-center">
        <div className="flex flex-col gap-1">
          <h1 className="font-black text-2xl">Create your account</h1>
          <h3 className="text-lg text-gray-400">
            Choose a username for your page
          </h3>
        </div>

        <Form {...form}>
          <form
            className="space-y-8"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your username here" {...field} />
                  </FormControl>

                  <FormMessage />
                  <div className="text-red-500 text-sm">{userNameExist}</div>
                </FormItem>
              )}
            />
            <Button type="submit" disabled={buttonDisabled}>
              Continue
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
