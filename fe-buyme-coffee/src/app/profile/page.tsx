"use client";
import { useState } from "react";
import { CompleteProfile } from "./_component/CompleteProfile";
import { PaymentDetails } from "./_component/PaymentDetails";

export type inputPropsType = {
  stepperNext: () => void;
};

const ProfilePage = () => {
  const comp = [CompleteProfile, PaymentDetails];
  const [index, setIndex] = useState<number>(0);

  const Stepper = comp[index];

  const stepperNext = () => {
    index !== 1 && setIndex((prev) => prev + 1);
  };

  const inputProps = {
    stepperNext: stepperNext,
  };

  return (
    <div>
      <Stepper {...inputProps} />
    </div>
  );
};

export default ProfilePage;
