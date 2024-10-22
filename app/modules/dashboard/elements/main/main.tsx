"use client";

import DashboardOverviewCard from "@/app/shared/components/cards/overview.card";
import SubscribersChart from "@/app/shared/components/charts/subscribers.chart";
import { ICONS } from "@/app/shared/utils/icons";
import { useUser } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";
import { useState } from "react";

const Main = () => {
  const { user } = useUser();
  const [copied, setCopied] = useState(false);

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
          <SubscribersChart />
        </div>
        <div className="w-[35%] p-5">
          {/* create newsletter button */}
          <div className="w-full flex justify-end">
            <Button className="bg-black text-white text-lg rounded !px-6">
              <span className="mr-1 ml-[-5px]">{ICONS.write}</span>
              Start Writing
            </Button>
          </div>
          <br />
          {/* resources */}
          <div>
            <h5 className="text-xl font-medium">Resources</h5>
            <div className="w-full bg-white border rounded p-5 my-3">
              {/* home page url */}
              <div>
                <h4 className="font-medium">Home Page</h4>

                <div
                  className="w-full px-2 my-1 h-[38px] bg-transparent border rounded-lg relative flex items-center cursor-pointer"
                  onClick={handleCopyLink}
                >
                  <small
                    className={`w-[70%] text-sm overflow-hidden overflow-ellipsis whitespace-nowrap copy-text ${
                      copied ? "bg-blue-200" : "bg-transparent"
                    }`}
                  >

                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
