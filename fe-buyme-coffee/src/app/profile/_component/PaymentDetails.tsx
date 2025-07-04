"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import axios from "axios";
import { useAuth } from "@/app/_component/UserProvider";
import { getYear, formatISO } from "date-fns";
import { useRouter } from "next/navigation";

const paymentDetailsSchema = z.object({
  country: z.string().nonempty("Select country to continue"),
  firstName: z.string().nonempty("First name must match"),
  lastName: z.string().nonempty("Last name must match"),
  cardNumber: z.string().nonempty("Invalid card number"),
  expiryMonth: z.string().nonempty("Invalid month"),
  expiryYear: z.string().nonempty("Invalid year"),
  cvc: z.string().nonempty("Invalid CVC"),
});

export const PaymentDetails = () => {
  const { user } = useAuth();
  const router = useRouter();
  const form = useForm<z.infer<typeof paymentDetailsSchema>>({
    resolver: zodResolver(paymentDetailsSchema),
    defaultValues: {
      country: "",
      firstName: "",
      lastName: "",
      cardNumber: "",
      expiryMonth: "",
      expiryYear: "",
      cvc: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof paymentDetailsSchema>) => {
    const date = new Date(
      Number(values.expiryYear),
      Number(values.expiryMonth),
      1
    );

    const isoDateString = formatISO(date);

    try {
      await axios.post("http://localhost:8000/createBankCard", {
        country: values.country,
        firstName: values.firstName,
        lastName: values.lastName,
        cardNumber: values.cardNumber,
        expiryDate: isoDateString,
        userId: user,
      });
      router.push("/");
    } catch (err: any) {
      alert(err?.response?.data?.message);
    }
  };

  const buttonDisabled =
    !form.watch("country") ||
    !form.watch("firstName") ||
    !form.watch("lastName") ||
    !form.watch("cardNumber") ||
    !form.watch("expiryMonth") ||
    !form.watch("expiryYear") ||
    !form.watch("cvc");

  const months = [
    { label: "January", value: 1 },
    { label: "February", value: 2 },
    { label: "March", value: 3 },
    { label: "April", value: 4 },
    { label: "May", value: 5 },
    { label: "June", value: 6 },
    { label: "July", value: 7 },
    { label: "August", value: 8 },
    { label: "September", value: 9 },
    { label: "October", value: 10 },
    { label: "November", value: 11 },
    { label: "December", value: 12 },
  ];

  const startYear = getYear(new Date());
  const expiryYear = Array.from({ length: 5 }, (_, i) => startYear + i);

  return (
    <Card className="w-[510px] mx-auto mt-22">
      <CardHeader>
        <CardTitle>How would you like to be paid?</CardTitle>
        <CardDescription>Enter location and payment details</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select country</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="w-full">
                      <SelectItem value="United States">
                        United States
                      </SelectItem>
                      <SelectItem value="Australia">Australia</SelectItem>
                      <SelectItem value="Mongolia">Mongolia</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-1">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name here" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name here" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="cardNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter card number</FormLabel>
                  <FormControl>
                    <Input placeholder="XXXX-XXXX-XXXX-XXXX" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-1">
              <FormField
                control={form.control}
                name="expiryMonth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expiry month</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Month" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {months.map((month) => (
                          <SelectItem value={month.value.toString()}>
                            {month.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="expiryYear"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expiry year</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Year" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {expiryYear.map((year) => (
                          <SelectItem value={year.toString()}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cvc"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CVC</FormLabel>
                    <FormControl>
                      <Input placeholder="CVC" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              variant="secondary"
              className="w-[246px]"
              disabled={buttonDisabled}
            >
              Continue
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
