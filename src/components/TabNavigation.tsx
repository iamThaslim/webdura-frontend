import React from "react";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { ServiceStatus } from "@/types/service.types";

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: ServiceStatus) => void;
  router: ReturnType<typeof useRouter>;
  counts: {
    requestCount: number;
    serviceCount: number;
    paymentCount: number;
  };
}

/**
 * A navigation component that displays a tabbed interface with
 * request, service, and payment counts. When a tab is clicked, the
 * `setActiveTab` callback is called with the new active tab.
 *
 * @param {TabNavigationProps} props
 * @returns {React.ReactElement}
 */

const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  setActiveTab,
  router,
  counts,
}) => {
  const tabs = ["request", "service", "payment"];

  return (
    <div className="mb-4 flex items-center bg-[#3C85B6] relative justify-between px-[2vw] py-1">
      <ChevronLeft className="text-white" onClick={() => router.push("/home")} />
      <div className="max-w-[425px] font-bold text-xs mx-auto flex justify-between space-x-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-2 rounded-lg transition-all duration-300 ${
              activeTab === tab ? "text-white" : "text-gray-700"
            }`}
            onClick={() => setActiveTab(tab as ServiceStatus)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}{" "}
            <span className="absolute top-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
              {tab === "request"
                ? counts.requestCount
                : tab === "service"
                ? counts.serviceCount
                : counts.paymentCount}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;
