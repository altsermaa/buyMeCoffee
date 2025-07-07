"use client";
import { useEffect, useState } from "react";
import { useAuth } from "../_component/UserProvider";
import { Left } from "./_component/Left";
import { Right } from "./_component/Right";
import axios from "axios";
import { ProfilesType } from "../explore/page";

const ViewPage = () => {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState<ProfilesType>();
  console.log(userInfo);

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
    <div className="flex gap-2">
      <Left
        avatarImage={userInfo?.avatarImage}
        profileName={userInfo?.name}
        about={userInfo?.about}
        socialMediaURL={userInfo?.socialMediaURL}
        userId={userInfo?.userId}
      />

      <Right />
    </div>
  );
};

export default ViewPage;
