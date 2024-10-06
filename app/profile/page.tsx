import { Profile } from "@/components/profile";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ] bg-mbackg">

      <div className="flex items-center justify-center bg-mbackg p-2">
        <Profile />
      </div>
    </div>
  );
};

export default page;
