"use client";

import { Cookie } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";
import { sidebarData } from "@/lib/data";
import {
     Tooltip,
     TooltipProvider,
     TooltipTrigger,
     TooltipContent,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";

const Sidebar = () => {
     const pathname = usePathname();

     return (
          <div
               className="w-16 md:w-20 h-screen sticky top-0 py-8 px-2 
      bg-background border-r border-gray-200 dark:border-gray-700 
      flex flex-col items-center justify-start gap-8"
          >
               {/* Logo */}
               <div className="mb-4">
                    <Cookie className="w-6 h-6 text-primary" />
               </div>

               {/* Navigation Items */}
               <div className="flex-1 w-full flex flex-col items-center justify-between">
                    <div className="w-full flex flex-col items-center gap-3">
                         {sidebarData.map((item) => (
                              <TooltipProvider
                                   key={item.id}
                                   delayDuration={100}
                              >
                                   <Tooltip>
                                        <TooltipTrigger asChild>
                                             <Link
                                                  href={item.link}
                                                  className={cn(
                                                       "flex items-center justify-center w-10 h-10 rounded-lg transition-colors",
                                                       "hover:bg-gray-100 dark:hover:bg-gray-800",
                                                       "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                                                       pathname.includes(
                                                            item.link
                                                       )
                                                            ? "bg-primary/10 text-primary"
                                                            : "text-gray-600 dark:text-gray-400"
                                                  )}
                                             >
                                                  <item.icon className="w-5 h-5" />
                                                  <span className="sr-only">
                                                       {item.title}
                                                  </span>
                                             </Link>
                                        </TooltipTrigger>
                                        <TooltipContent
                                             side="right"
                                             className="text-xs "
                                        >
                                             {item.title}
                                        </TooltipContent>
                                   </Tooltip>
                              </TooltipProvider>
                         ))}
                    </div>

                    {/* Bottom area (for future use) */}
                    <div>
                         <UserButton />
                    </div>
               </div>
          </div>
     );
};

export default Sidebar;
