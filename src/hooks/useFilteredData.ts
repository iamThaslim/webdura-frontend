import { useMemo } from "react";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

/**
 * Returns a filtered list of requests, filtered by the given status and serviceId.
 *
 * @param {string} status - The status of the requests to filter by.
 * @param {string} serviceId - The ID of the service to filter by.
 * @returns {ServiceRequest[]} - The filtered list of requests.
 */

export const useFilteredData = (
  status: "request" | "service" | "payment",
  serviceId: string
) => {
  const data = useSelector((state: RootState) => state.requests.data);

  const filteredData = useMemo(
    () =>
      data.filter((request) => request.status === status && request.serviceId === serviceId),
    [data, status, serviceId]
  );

  return filteredData;
};
