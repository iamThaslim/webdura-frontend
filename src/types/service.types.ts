export type ServiceStatus = 'request' | 'service' | 'payment';

export interface Customer {
  id: string;
  name: string;
  location: string;
  profileImage: string;
  dealsCount: number;
}

export interface TimeSlot {
  date: string;
  timeRange: string;
}

export interface Progress {
  request: boolean;
  service: boolean;
  payment: boolean;
}

export interface ServiceRequest {
  id: string;
  status: ServiceStatus;
  serviceId: string;
  timestamp: string;
  customer: Customer;
  timeSlots: TimeSlot[];
  address: string;
  sessionPrice: number;
  progress: Progress;
}

export interface ServiceState {
  data: ServiceRequest[];
}

export interface Service {
  id: string
  title: string
  category: string
  description: string
  price: number
  imageUrl: string
}