## BOOKING MANAGEMENT MODULE
This is a Next.js project that implements a booking management module. It features a responsive, modular design using Redux Toolkit for state management and an external JSON file for data handling.

## Installation and Setup
Follow these steps to set up and run the project locally:

# Prerequisites:
* Node.js installed (v18+ recommended)
* npm or yarn package manager

```bash
npm install
# or
yarn install

npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


booking-management-module/
├── src/                     # Main source folder
│   ├── app/                 # Next.js application folder
│   │   ├── favicon.ico      # Favicon for the app
│   │   ├── globals.css      # Global styles for the application
│   │   ├── layout.tsx       # Main layout component
│   │   ├── page.tsx         # Entry point for the app
│   │   ├── home/            # Home page
│   │   │   └── page.tsx     # Displays product card
│   │   ├── services/        # Services tab
│   │   │   ├── page.tsx     # Lists active services
│   │   │   └── [id]/        # Dynamic routing for individual service details
│   │   │       └── page.tsx # Detailed view of a specific service
│   ├── components/          # Reusable UI components
│   │   ├── Header.tsx       # Header with navigation
│   │   ├── ProductCard.tsx  # Product Card details
│   │   ├── ReduxProvider.tsx  # Product Card details
│   │   ├── ServiceAlert.tsx  # Product Card details
│   │   ├── ServiceDetailed.tsx  # Product Card details
│   │   └── StepIndicator.tsx# Progress indicator for booking stages
│   │   └── TabNavigation.tsx# Progress indicator for booking stages
│   ├── data/                # JSON data for services and bookings
│   │   └── db.ts            # External JSON file for mock data
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   │   └── utils/           # Specific utilities for services
│   │       └──serviceUtils.ts # Slice for service and booking management
│   ├── store/               # Redux store setup
│   │   ├── slices/          # Redux slices
│   │   │   └── serviceSlice.ts # Slice for service and booking management
│   │   └── store.ts         # Redux store configuration
│   ├── types/               # TypeScript type definitions
│   │   └── service.types.ts # Types for services and bookings
└── README.md                # Project documentation

## Technologies Used
* React Framework: Built using Next.js.
* State Management: Redux Toolkit.
* Styling: Tailwind CSS for responsive design.
