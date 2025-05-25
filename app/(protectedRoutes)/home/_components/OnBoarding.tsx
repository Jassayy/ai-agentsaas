import { onBoardingSteps } from "@/lib/data";
import { CircleCheck } from "lucide-react";
import Link from "next/link";
import React from "react";

const OnBoarding = () => {
     return (
          <div className="flex flex-col gap-4 items-start justify-start">
               {onBoardingSteps.map((step, idx) => (
                    <Link
                         key={idx}
                         href={step.link}
                         className="group flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 hover:bg-slate-800/50 transition-colors w-full"
                    >
                         <div className="p-2 rounded-lg bg-slate-800 group-hover:bg-slate-700 transition-colors">
                              <CircleCheck className="w-5 h-5 text-green-400" />
                         </div>
                         <p className="text-slate-300 group-hover:text-white transition-colors">
                              {step.title}
                         </p>
                    </Link>
               ))}
          </div>
     );
};

export default OnBoarding;
