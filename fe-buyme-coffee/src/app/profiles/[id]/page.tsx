"use client";
import axios from "axios";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ExploreOthersProfile = () => {
  const { id } = useParams();

  const [othersProfile, setOthersProfile] = useState();

  useEffect(() => {
    const getOtherPersonData = async () => {
      const response = await axios.get(
        `http://localhost:8000/getUserInfo/${id}`
      );
      setOthersProfile(response.data.userInfo);
    };
    getOtherPersonData();
  }, []);

  return <div></div>;
};

export default ExploreOthersProfile;
