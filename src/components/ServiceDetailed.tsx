"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setServiceStatus } from "@/store/slices/serviceSlice";
import { AppDispatch } from "@/store/store";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Handshake } from "lucide-react";
import { ReceiptText } from "lucide-react";
import StepIndicator from "./StepIndicator";
import { ServiceAlert } from "./ServiceAlert";
import { useAlert } from "@/hooks/useAlert";
import { useCountByStatus } from "@/hooks/useCountByStatus";
import { useFilteredData } from "@/hooks/useFilteredData";
import { ServiceStatus } from "@/types/service.types";

/**
 * A component that displays detailed information about a specific service.
 * 
 * @param {Object} props - The component props.
 * @param {string} props.id - The ID of the service to display.
 * 
 * @returns {JSX.Element} The rendered service details component.
 * 
 * The component utilizes several hooks to manage state and data:
 * - `useDispatch` and `useRouter` for dispatching Redux actions and navigation.
 * - `useAlert`, `useCountByStatus`, and `useFilteredData` for UI alerts, counting
 *   requests by status, and filtering data, respectively.
 * 
 * The UI includes:
 * - A step indicator and tab navigation for different service statuses.
 * - Buttons to handle status changes, load more items, and perform specific actions
 *   for each status.
 * - An alert message displayed when the "service" tab is active.
 * - A list of service requests with options to view more or take actions like
 *   rescheduling, accepting requests, checking in, generating invoices, and more.
 */

interface ServiceDetailedProps {
  id: string;
}

const ServiceDetailed: React.FC<ServiceDetailedProps> = ({ id }) => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { showAlert, triggerAlert, resetAlert } = useAlert();
  const [visibleCount, setVisibleCount] = useState(5);
  const [loading, setLoading] = useState(false);

  const [activeTab, setActiveTab] = useState<ServiceStatus>(
    "request"
  );

  const filteredData = useFilteredData(activeTab, id);

  const { request: requestCount, service: serviceCount, payment: paymentCount } =
    useCountByStatus(id);



  const handleStatusChange =
    (requestId: string, currentStatus: ServiceStatus) => {
      if (currentStatus === "service") {
        triggerAlert();
        setActiveTab("service");
      }
      dispatch(setServiceStatus({ requestId, currentStatus }));
    };

  const handleTabChange = (tab: ServiceStatus) => {
    setActiveTab(tab);
    if (tab !== "service") {
      resetAlert();;
    }
  };

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prevCount) => prevCount + 5);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="mx-auto">
      <div className="mb-4 flex items-center bg-[#3C85B6] relative justify-between px-4 py-2">
        <div className="">
          <ChevronLeft
            className="text-white"
            onClick={() => router.push("/home")}
          />
        </div>

        <div className="max-w-[425px] font-bold text-xs mx-auto flex justify-between space-x-10">
          {["request", "service", "payment"].map((tab) => (
            <button
              key={tab}
              className={`py-2  rounded-lg transition-all duration-300 ${activeTab === tab ? " text-white" : " text-gray-700"
                }`}
              onClick={() => {
                handleTabChange(tab as ServiceStatus);
                setVisibleCount(5);
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              <span className="absolute top-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                {tab === "request"
                  ? requestCount
                  : tab === "service"
                    ? serviceCount
                    : paymentCount}
              </span>
            </button>
          ))}
        </div>
      </div>
      {showAlert && activeTab === "service" && (
        <ServiceAlert
          message="These are your upcoming Services. You could scan your customer's QR Code before services to check-in, or scan QR Code to generate invoice for payments."
          onClose={() => resetAlert()}
        />
      )}
      <div className="max-w-4xl mx-auto px-4">
        {filteredData.length > 0 ? (
          <>
            {filteredData.slice(0, visibleCount).map((request) => (
              <div
                key={request.id}
                className="bg-white shadow-lg border rounded-lg p-6 mb-6"
              >
                <div className="flex justify-between mb-4"> 
                  <div>
                    <p className="text-[#D88B53] text-xs font-bold">
                      {request.status === "request" && "Pending Request"}
                      {request.status === "service" && "Upcoming Services"}
                      {request.status === "payment" && "Pending Payment"}
                    </p>
                    <p className="text-xs text-gray-500">{request.timestamp}</p>
                  </div>
                  <StepIndicator currentStep={request.status} />
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={request.customer.profileImage}
                      alt={`${request.customer.name}'s profile`}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-xs">
                        {request.customer.name}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {request.customer.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 pl-4 gap-2">
                    <Handshake className="text-[#3C85B6] h-10 w-10" />
                    <p className="text-xs font-bold">
                      you and {request.customer.name} had 12 deals before
                    </p>
                  </div>
                </div>
                <p className="font-bold text-[8px] text-gray-500 mb-2">
                  service is complete please confirm the payment amount
                </p>
                <div className="flex flex-col pt-3">
                  <div className="flex items-center gap-2">
                    <ReceiptText className="text-[#3C85B6] w-3 h-3" />
                    <p className="text-xs font-bold">Invoice item</p>
                  </div>
                  <div className="flex justify-between pl-5 pt-3">
                    <p className="text-xs ">session price</p>
                    <p className="text-sm text-orange-500 font-bold">$ {request.sessionPrice}</p>
                  </div>
                </div>
                <div className="mt-4">
                  {request.status === "request" && (
                    <>
                      <div className="flex gap-4">
                        <button
                          onClick={() =>
                            handleStatusChange(request.id, "request")
                          }
                          className="h-7 px-4 border text-[#3C85B6] border-[#3C85B6]  rounded-lg transition-all duration-300"
                        >
                          Re-schedule
                        </button>
                        <button
                          onClick={() =>
                            handleStatusChange(request.id, "request")
                          }
                          className="h-7 px-4 bg-[#3C85B6] text-white rounded-lg transition-all duration-300"
                        >
                          Accept Request
                        </button>
                      </div>
                    </>
                  )}
                  {request.status === "service" && (
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleStatusChange(request.id, "service")}
                        className="h-7 px-4 border text-[#3C85B6] border-[#3C85B6] rounded-lg transition-all duration-300"
                      >
                        Check in
                      </button>
                      <button
                        onClick={() => handleStatusChange(request.id, "service")}
                        className="h-7 px-4 bg-[#3C85B6] text-white rounded-lg transition-all duration-300"
                      >
                        Generate Invoice
                      </button>
                    </div>
                  )}
                  {request.status === "payment" && (
                    <div className="flex gap-4">
                      <button className="h-7 px-4 border text-[#3C85B6] border-[#3C85B6] rounded-lg transition-all duration-300">
                        Start a chat
                      </button>
                      <button className="h-7 px-4 bg-[#3C85B6] text-white rounded-lg transition-all duration-300">
                        Resend Invoice
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {visibleCount < filteredData.length ? (
              <div className="flex items-center justify-center mx-0">
                {loading ? (
                  <span className="text-gray-500">Loading...</span>
                ) : (
                  <button
                    onClick={loadMore}
                    className="text-center text-sm px-4 py-2 bg-white text-gray-800 rounded mt-2 mb-8 hover:bg-gray-300 hover:text-gray-700 transition-colors duration-300"
                  >
                    View More
                  </button>
                )}
              </div>
            ) : (
              <p className="text-center text-gray-500 mt-4">
                No more {activeTab} items.
              </p>
            )}
          </>
        ) : (
          <p className="text-center text-gray-500 mt-4">No data available.</p>
        )}
      </div>
    </div>
  );
};

export default ServiceDetailed;
