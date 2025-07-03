"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod/v4";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { inputPropsType } from "../page";
import Link from "next/link";
import axios from "axios";

const signUpSchema = z.object({
  userName: z.string().min(5).max(50),
  email: z.email(),
  password: z
    .string()
    .min(6)
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
});

export const Step2 = ({ userName }: inputPropsType) => {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      userName: "",
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof signUpSchema>) => {
    console.log("hi");
    try {
      const response = await axios.post("http://localhost:8000/signUp", {
        username: userName,
        email: values.email,
        password: values.password,
      });
      console.log(response.data);
    } catch (err: any) {
      alert(err.response.data.message);
    }
  };

  const buttonDisabled = !form.watch("email") || !form.watch("password");

  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <div className="absolute top-8 right-20 ">
        <Link href="/login">
          <Button variant="secondary">Log in</Button>
        </Link>
      </div>
      <div className="w-[416px] m-auto flex gap-6 flex-col justify-center">
        <div className="flex flex-col gap-1">
          <h1 className="font-black text-2xl">Welcome, {userName}</h1>
          <h3 className="text-lg text-gray-400">
            Connect email and set a password
          </h3>
        </div>

        <Form {...form}>
          <form
            className="space-y-8"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email here" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your password here" {...field} />
                  </FormControl>

                  <FormMessage />
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
