
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import serviceData from '@/data/db';
import { ServiceState, ServiceStatus } from '@/types/service.types';
import { updateServiceStatus } from '@/lib/utils/serviceUtils';

const initialState: ServiceState = {
  data: serviceData,
}

const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    /**
     * Updates the status of a service request with the given ID and current status.
     * The new status is determined by the updateServiceStatus function.
     * @param {{ requestId: string; currentStatus: ServiceStatus }} payload - The request ID
     * and current status of the service request to update.
     */
    setServiceStatus: (
      state,
      action: PayloadAction<{ requestId: string; currentStatus: ServiceStatus }>
    ) => {
      const { requestId, currentStatus } = action.payload;
      const request = state.data.find((r) => r.id === requestId);
      if (request) {
        request.status = updateServiceStatus(request, currentStatus);
      }
    },
  },
});

export const { setServiceStatus } = serviceSlice.actions;
export default serviceSlice.reducer;
