import { ServiceRequest, ServiceStatus } from "@/types/service.types";

/**
 * Updates the status of a service request based on the current status and the
 * request's existing status. Transitions the status from 'request' to 'service'
 * and from 'service' to 'payment' if applicable.
 *
 * @param {ServiceRequest} request - The service request to update.
 * @param {ServiceStatus} currentStatus - The current status of the service request.
 * @returns {ServiceStatus} - The updated status of the service request.
 */

export const updateServiceStatus = (
    request: ServiceRequest,
    currentStatus: ServiceStatus
): ServiceStatus => {
    if (currentStatus === 'request' && request.status === 'request') {
      return 'service';
    } else if (currentStatus === 'service' && request.status === 'service') {
      return 'payment';
    }
    return request.status;
  };