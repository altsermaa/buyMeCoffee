"use client";
import { useEffect, useState } from "react";
import { CompleteProfile } from "./_component/CompleteProfile";
import { PaymentDetails } from "./_component/PaymentDetails";
import { useAuth } from "../_component/UserProvider";
import axios from "axios";

export type inputPropsType = {
  stepperNext: () => void;
};

const ProfilePage = () => {
  const { user } = useAuth();
  const [profileState, setProfileState] = useState<boolean>(false);

  useEffect(() => {
    const checkInfo = async () => {
      const response = await axios.post(
        "http://localhost:8000/checkDetailInfo",
        {
          userId: user,
        }
      );
      setProfileState(response.data.profile);
    };
    checkInfo();
  }, [user]);

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
    <div>{profileState ? <PaymentDetails /> : <Stepper {...inputProps} />}</div>
  );
};

export default ProfilePage;
