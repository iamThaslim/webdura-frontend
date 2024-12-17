import { useMemo } from "react";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

/**
 * Returns a count of requests for the given serviceId by status.
 *
 * @param {string} serviceId
 * @returns {Object} with request, service, and payment properties each
 *   containing the count of requests with the given status and serviceId.
 */

export const useCountByStatus = (serviceId: string) => {
  const data = useSelector((state: RootState) => state.requests.data);

  const counts = useMemo(() => {
    return {
      request: data.filter(
        (request) => request.status === "request" && request.serviceId === serviceId
      ).length,
      service: data.filter(
        (request) => request.status === "service" && request.serviceId === serviceId
      ).length,
      payment: data.filter(
        (request) => request.status === "payment" && request.serviceId === serviceId
      ).length,
    };
  }, [data, serviceId]);

  return counts;
};
