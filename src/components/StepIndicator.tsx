import React from "react";
import { Check } from "lucide-react";

interface StepIndicatorProps {
  currentStep: string;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
  const steps = [
    { name: "request", number: "1" },
    { name: "service", number: "2" },
    { name: "payment", number: "3" },
  ];
  return (
    <nav aria-label="Progress" className="w-full max-w-[300px]">
      <ol role="list" className="flex items-center justify-between">
        {steps.map((step, stepIdx) => {
          const isCompleted = steps.findIndex((s) => s.name === currentStep) > stepIdx;
          const isActive = step.name === currentStep;
          return (
            <li key={step.name} className="relative flex-1 mx-1">
              {stepIdx !== steps.length - 1 && (
                <div
                  className="absolute left-[50%] right-0 top-[15px] h-[2px] w-full"
                  aria-hidden="true"
                >
                  <div
                    className={`h-full w-full ${isCompleted ? "bg-[#3C85B6]" : "bg-gray-200"}`}
                  />
                </div>
              )}
              <div className="relative flex flex-col items-center group">
                <div
                  className={`flex h-[30px] w-[30px] items-center justify-center rounded-full ${isCompleted
                    ? "bg-[#3C85B6]"
                    : "bg-white border-2 border-gray-300"
                    }`}
                >
                  {isCompleted ? (
                    <Check className="h-4 w-4 text-white" />
                  ) : (
                    <span
                      className={`text-sm ${isActive ? "text-[#3C85B6]" : "text-gray-500"}`}
                    >
                      {step.number}
                    </span>
                  )}
                </div>
                <span
                  className={`mt-2 text-xs font-medium capitalize ${isCompleted || isActive ? "text-[#3C85B6]" : "text-gray-500"
                    }`}
                >
                  {step.name}
                </span>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  )
};

export default StepIndicator;
