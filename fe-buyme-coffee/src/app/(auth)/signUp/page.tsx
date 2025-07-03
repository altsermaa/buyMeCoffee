"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Step1 } from "./_components/Step1";
import { Step2 } from "./_components/Step2";
import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod/v4";

// const signUpSchema = z.object({
//   userName: z.string().min(5).max(50),
//   email: z.email(),
//   password: z
//     .string()
//     .min(6)
//     .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
// });

// type FormType = {
//   userName: string;
//   email: string;
//   password: string;
// };

export type inputPropsType = {
  userName: string;
  setUserName: Dispatch<SetStateAction<string>>;
  stepperNext: () => void;
  // form: UseFormReturn<FormType, any, FormType>;
};

export default function SignUpHomePage() {
  const comp = [Step1, Step2];
  const [index, setIndex] = useState<number>(0);

  const Stepper = comp[index];

  const stepperNext = () => {
    index !== 1 && setIndex((prev) => prev + 1);
  };

  const [userName, setUserName] = useState("");

  // const form = useForm<z.infer<typeof signUpSchema>>({
  //   resolver: zodResolver(signUpSchema),
  //   defaultValues: {
  //     userName: "",
  //     email: "",
  //     password: "",
  //   },
  // });

  const inputProps = {
    userName: userName,
    setUserName: setUserName,
    stepperNext: stepperNext,
    // form: form,
  };

  return <Stepper {...inputProps} />;
}
