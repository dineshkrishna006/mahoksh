import { Profile } from "@/components/profile";
import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center h-screen w-[100vw] bg-mbackg">
      <div className="flex items-center justify-center">
        <Profile />
      </div>
    </div>
  );
};

export default page;
