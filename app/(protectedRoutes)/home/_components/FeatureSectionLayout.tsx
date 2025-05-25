import { cn } from "@/lib/utils";
import { MoveRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
     children?: React.ReactNode;
     heading: string;
     description?: string;
     link: string;
     className?: string;
};

const FeatureSectionLayout = ({
     children,
     heading,
     description,
     link,
     className,
}: Props) => {
     return (
          <div
               className={cn(
                    "p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-slate-800",
                    className
               )}
          >
               {children}
               <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                    <div className="space-y-4 max-w-2xl">
                         <h3 className="font-semibold text-3xl text-slate-200">
                              {heading}
                         </h3>
                         {description && (
                              <p className="text-slate-400 text-lg">
                                   {description}
                              </p>
                         )}
                    </div>
                    <Link
                         href={link}
                         className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors"
                    >
                         <span className="text-slate-200 font-medium">
                              View
                         </span>
                         <MoveRightIcon className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                    </Link>
               </div>
          </div>
     );
};

export default FeatureSectionLayout;
