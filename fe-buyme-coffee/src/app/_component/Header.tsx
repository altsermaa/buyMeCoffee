"use client";
import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";
import { usePathname } from "next/navigation";
import { useAuth } from "./UserProvider";
import axios from "axios";
import { HeaderName } from "./HeaderName";
import { useEffect, useState } from "react";

export type UserInfoType = {
  name?: string;
  avatarImage?: string;
};

export const Header = () => {
  const { user } = useAuth();
  const path = usePathname();
  const arr = ["/login", "/signUp"];

  if (arr.includes(path)) {
    return;
  }

  const differentHeader = ["/", "/accountSet", "/explore", "viewPage"];

  const [userInfo, setUserInfo] = useState<UserInfoType>();

  useEffect(() => {
    const getUserInfo = async () => {
      const response = await axios.get(
        `http://localhost:8000/getUserInfo/${user}`
      );
      setUserInfo(response.data.userInfo);
    };
    getUserInfo();
  }, [user]);

  return (
    <div className="flex justify-between w-[1280px] my-2 mx-auto">
      <div className="flex gap-1">
        <Coffee />
        <p className="font-black">Buy Me Coffee</p>
      </div>

      {differentHeader.includes(path) ? (
        <HeaderName name={userInfo?.name} avatarImage={userInfo?.avatarImage} />
      ) : (
        <Button variant="secondary">Log out</Button>
      )}
    </div>
  );
};
