import { Service, ServiceRequest } from "@/types/service.types";

export const services: Service[] = [
  {
    id: 'yoga-pilates',
    title: 'Yoga and Pilate Training',
    category: 'TRAINING • FITNESS',
    description: 'This yoga and pilate training session is designed for all levels of trainees.',
    price: 80.0,
    imageUrl: 'https://images.unsplash.com/photo-1529693662653-9d480530a697?q=80&w=1631&auto=format&fit=crop'
  },
  {
    id: 'personal-training',
    title: 'Personal Training Session',
    category: 'FITNESS • COACHING',
    description: 'Get personalized attention from our certified trainers.',
    price: 100.0,
    imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80'
  }
]

const serviceData: ServiceRequest[] = [
  {
    id: '1',
    status: 'request',
    serviceId: 'yoga-pilates',
    timestamp: '10:22 am, 12/01/2019',
    customer: {
      id: 'ray-1',
      name: 'Request Pressley',
      location: 'San Francisco',
      profileImage:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      dealsCount: 12,
    },
    timeSlots: [
      { date: 'Sunday, December 22nd, 2019', timeRange: '9:00 am — 2:00 pm' },
      { date: 'Sunday, December 29th, 2019', timeRange: '9:00 am — 2:00 pm' },
    ],
    address: '50 Hagiwara Tea Garden Dr, San Francisco, CA 94118',
    sessionPrice: 70.0,
    progress: { request: true, service: false, payment: false },
  },
  {
    id: '2',
    status: 'request',
    serviceId: 'yoga-pilates',
    timestamp: '10:22 am, 12/01/2019',
    customer: {
      id: 'ray-4',
      name: 'Request Dram',
      location: 'San Francisco',
      profileImage:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      dealsCount: 12,
    },
    timeSlots: [
      { date: 'Sunday, December 22nd, 2019', timeRange: '9:00 am — 2:00 pm' },
      { date: 'Sunday, December 29th, 2019', timeRange: '9:00 am — 2:00 pm' },
    ],
    address: '90 Hagiwara Tea Garden Dr, San Francisco, CA 94118',
    sessionPrice: 180.0,
    progress: { request: true, service: true, payment: false },
  },
  {
    id: '3',
    status: 'request',
    serviceId: 'yoga-pilates',
    timestamp: '10:22 am, 12/01/2019',
    customer: {
      id: 'ray-4',
      name: 'Request Dram',
      location: 'San Francisco',
      profileImage:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      dealsCount: 12,
    },
    timeSlots: [
      { date: 'Sunday, December 22nd, 2019', timeRange: '9:00 am — 2:00 pm' },
      { date: 'Sunday, December 29th, 2019', timeRange: '9:00 am — 2:00 pm' },
    ],
    address: '90 Hagiwara Tea Garden Dr, San Francisco, CA 94118',
    sessionPrice: 180.0,
    progress: { request: true, service: true, payment: false },
  },
  {
    id: '4',
    status: 'request',
    serviceId: 'yoga-pilates',
    timestamp: '10:22 am, 12/01/2019',
    customer: {
      id: 'ray-4',
      name: 'Request Dram',
      location: 'San Francisco',
      profileImage:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      dealsCount: 12,
    },
    timeSlots: [
      { date: 'Sunday, December 22nd, 2019', timeRange: '9:00 am — 2:00 pm' },
      { date: 'Sunday, December 29th, 2019', timeRange: '9:00 am — 2:00 pm' },
    ],
    address: '90 Hagiwara Tea Garden Dr, San Francisco, CA 94118',
    sessionPrice: 180.0,
    progress: { request: true, service: true, payment: false },
  },
  {
    id: '5',
    status: 'request',
    serviceId: 'yoga-pilates',
    timestamp: '10:22 am, 12/01/2019',
    customer: {
      id: 'ray-4',
      name: 'Request Dram',
      location: 'San Francisco',
      profileImage:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      dealsCount: 12,
    },
    timeSlots: [
      { date: 'Sunday, December 22nd, 2019', timeRange: '9:00 am — 2:00 pm' },
      { date: 'Sunday, December 29th, 2019', timeRange: '9:00 am — 2:00 pm' },
    ],
    address: '90 Hagiwara Tea Garden Dr, San Francisco, CA 94118',
    sessionPrice: 180.0,
    progress: { request: true, service: true, payment: false },
  },
  {
    id: '6',
    status: 'request',
    serviceId: 'yoga-pilates',
    timestamp: '10:22 am, 12/01/2019',
    customer: {
      id: 'ray-4',
      name: 'Request Dram',
      location: 'San Francisco',
      profileImage:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      dealsCount: 12,
    },
    timeSlots: [
      { date: 'Sunday, December 22nd, 2019', timeRange: '9:00 am — 2:00 pm' },
      { date: 'Sunday, December 29th, 2019', timeRange: '9:00 am — 2:00 pm' },
    ],
    address: '90 Hagiwara Tea Garden Dr, San Francisco, CA 94118',
    sessionPrice: 180.0,
    progress: { request: true, service: true, payment: false },
  },
  {
    id: '7',
    status: 'request',
    serviceId: 'yoga-pilates',
    timestamp: '10:22 am, 12/01/2019',
    customer: {
      id: 'ray-4',
      name: 'Request Dram',
      location: 'San Francisco',
      profileImage:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      dealsCount: 12,
    },
    timeSlots: [
      { date: 'Sunday, December 22nd, 2019', timeRange: '9:00 am — 2:00 pm' },
      { date: 'Sunday, December 29th, 2019', timeRange: '9:00 am — 2:00 pm' },
    ],
    address: '90 Hagiwara Tea Garden Dr, San Francisco, CA 94118',
    sessionPrice: 180.0,
    progress: { request: true, service: true, payment: false },
  },
];

export default serviceData;