"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { ShowProfile } from "./_component/ShowProfile";

export type ProfilesType = {
  name: string;
  about: string;
  avatarImage: string;
  socialMediaURL: string;
  userId: number;
};
const ExplorePage = () => {
  const [profiles, setProfiles] = useState<ProfilesType[]>([]);

  useEffect(() => {
    const getAllUsers = async () => {
      const response = await axios.get("http://localhost:8000/getAllUsers");
      setProfiles(response.data.allUsersProfiles);
    };

    getAllUsers();
  }, []);

  return (
    <div>
      {profiles.map((profile) => {
        return (
          <ShowProfile
            key={profile.userId}
            name={profile.name}
            about={profile.about}
            socialMediaURL={profile.socialMediaURL}
            avatarImage={profile.avatarImage}
            userId={profile.userId}
          />
        );
      })}
    </div>
  );
};

export default ExplorePage;
