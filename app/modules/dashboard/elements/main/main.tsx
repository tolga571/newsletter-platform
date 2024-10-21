"use client";

import DashboardOverviewCard from "@/app/shared/components/cards/overview.card";
import { useUser } from "@clerk/nextjs";

const Main = () => {
  const { user } = useUser();

  return (
    <div className="p-5 w-full h-screen bg-[#f9fafb]">
      <h1 className="text-2xl text-surface-900 font-medium">
        Hi {user?.fullName} 👋🏻
      </h1>
      <p className="opacity-[.7] text-sm pt-2">
        Here&apos;s how your publication is doing
      </p>
      <div className="w-full flex">
        <div className="w-[65%] min-h-[88vh] pr-5">
          <br />
          <DashboardOverviewCard />
        </div>
      </div>
    </div>
  );
};

export default Main;
