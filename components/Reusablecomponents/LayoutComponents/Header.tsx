"use client";

import { Button } from "@/components/ui/button";
import { User } from "@prisma/client";
import { ArrowLeft, Plus, Zap } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import CreateWebinarButton from "../CreateWebinarButton/CreateWebinarButton";

type Props = {
     user: User;
};

const Header = ({ user }: Props) => {
     const pathname = usePathname();
     const router = useRouter();
     const isPipeline = pathname.includes("pipeline");

     return (
          <header className="w-full px-6 py-4 sticky top-0 z-10 bg-transparent backdrop-blur-lg border-b border-gray-700 dark:border-gray-800">
               <div className="flex items-center justify-between gap-4 mx-auto max-w-[1800px]">
                    {/* Left side */}
                    <div className="flex items-center gap-4">
                         {isPipeline ? (
                              <Button
                                   variant={"ghost"}
                                   className="gap-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                                   onClick={() => router.push("/webinar")}
                              >
                                   <ArrowLeft className="h-4 w-4" />
                                   <span className="hidden sm:inline">
                                        Back to webinars
                                   </span>
                              </Button>
                         ) : (
                              <h1 className="text-sm text-gray-900 dark:text-gray-100 px-2 py-1 capitalize border border-gray-700 rounded-lg">
                                   {pathname.split("/")[1] || "Dashboard"}
                              </h1>
                         )}
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-2">
                         <Button
                              variant="ghost"
                              size="icon"
                              className="rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                              aria-label="Quick actions"
                         >
                              <Zap className="h-[18px] w-[18px]" />
                         </Button>

                         <CreateWebinarButton />
                    </div>
               </div>
          </header>
     );
};

export default Header;
