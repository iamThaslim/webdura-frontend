'use client'

import { cn } from '@/lib/common/utils'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'


interface CarouselProps {
  children: React.ReactNode[]
}

/**
 * Carousel component that renders a tabbed interface where each child is a panel.
 * 
 * @param {CarouselProps} props - Properties to configure the Carousel.
 * @param {React.ReactNode[]} props.children - An array of React nodes to be displayed as panels.
 * 
 * @returns A tabbed interface with panels and corresponding tab indicators.
 */

export function Carousel({ children }: CarouselProps) {
    return (
      <TabGroup>
        <TabPanels className="overflow-hidden rounded-xl">
          {children.map((panel, idx) => (
            <TabPanel
              key={idx}
              className={cn(
                'w-full',
                'focus:outline-none'
              )}
            >
              {panel}
            </TabPanel>
          ))}
        </TabPanels>
        <TabList className="flex justify-center gap-2 mt-4">
          {children.map((_, idx) => (
            <Tab
              key={idx}
              className={({ selected }) =>
                cn(
                  'h-3 w-3 rounded-full transition-all ' ,
                  'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary outline-black',
                  selected
                    ? 'bg-gray-300 hover:bg-gray-400 border border-black'
                    : 'bg-primary border border-black' 
                )
              }
            />
          ))}
        </TabList>
      </TabGroup>
    )
  }
