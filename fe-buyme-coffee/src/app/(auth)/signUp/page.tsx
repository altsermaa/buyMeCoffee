"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { LeftSide } from "./_components/LeftSide";
import { Step1 } from "./_components/Step1";
import { Step2 } from "./_components/Step2";

export type inputPropsType = {
  userName: string;
  setUserName: Dispatch<SetStateAction<string>>;
  stepperNext: () => void;
};

export default function SignUpHomePage() {
  const comp = [Step1, Step2];
  const [index, setIndex] = useState<number>(0);

  const Stepper = comp[index];

  const stepperNext = () => {
    index !== 1 && setIndex((prev) => prev + 1);
  };

  const [userName, setUserName] = useState("");

  const inputProps = {
    userName: userName,
    setUserName: setUserName,
    stepperNext: stepperNext,
  };

  return <Stepper {...inputProps} />;
}
