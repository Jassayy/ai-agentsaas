import { cn } from "@/lib/utils";
import { Attendee } from "@prisma/client";
import React from "react";

type Props = {
     customer: Attendee;
     tags: string[];
     className?: string;
};
const UserInfoCard = ({ customer, tags, className }: Props) => {
     return (
          <div
               className={cn(
                    "flex flex-col w-fit text-white p-3 pr-10 gap-3 rounded-xl border border-slate-600 backdrop-blur-[20px] bg-slate-900/10",
                    className
               )}
          >
               <h3 className="font-semibold text-xs">{customer.name}</h3>
               <p className="text-sm">{customer.email}</p>
               <div className="flex flex-wrap gap-2">
                    {tags.map((tag, idx) => (
                         <span
                              key={idx}
                              className="text-white px-3 py-1 rounded-md border border-slate-600"
                         >
                              {tag}
                         </span>
                    ))}
               </div>
          </div>
     );
};

export default UserInfoCard;
