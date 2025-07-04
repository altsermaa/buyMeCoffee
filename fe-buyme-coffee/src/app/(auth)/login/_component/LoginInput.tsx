"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod/v4";
import axios from "axios";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(6)
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
});

export const LoginInput = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof loginSchema>) => {
    try {
      const response = await axios.post("http://localhost:8000/login", {
        email: values.email,
        password: values.password,
      });
      console.log(response.data);
      localStorage.setItem("token", response.data.token);

      if (response.data.profile === true && response.data.bankCard === true) {
        router.push("/");
      } else {
        router.push("/profile");
      }
    } catch (err: any) {
      alert(err.response.data.message);
    }
  };

  const buttonDisabled = !form.watch("email") || !form.watch("password");

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
