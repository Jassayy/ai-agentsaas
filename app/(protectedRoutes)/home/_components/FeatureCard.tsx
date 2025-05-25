import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

type Props = {
     Icon: React.ReactNode;
     heading: string;
     description?: string;
     link: string;
};

const FeatureCard = ({ heading, description, link, Icon }: Props) => {
     return (
          <Link
               href={link}
               className="group px-8 py-8 flex flex-col items-start justify-center gap-6 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/20"
          >
               <div className="p-3 rounded-xl bg-slate-800/50 group-hover:bg-slate-800 transition-colors">
                    {Icon}
               </div>
               <div className="space-y-2">
                    <p className="font-semibold text-xl text-slate-200 group-hover:text-white transition-colors">
                         {heading}
                    </p>
                    {description && (
                         <p className="text-slate-400 text-sm">{description}</p>
                    )}
               </div>
          </Link>
     );
};

export default FeatureCard;
