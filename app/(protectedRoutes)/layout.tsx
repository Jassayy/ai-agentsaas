import { onAuthenticateUser } from "@/actions/auth";
import Header from "@/components/Reusablecomponents/LayoutComponents/Header";
import Sidebar from "@/components/Reusablecomponents/LayoutComponents/Sidebar";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
     children: React.ReactNode;
};

//layout only rerenders once so even if the user logs out it will show cached data
const Layout = async ({ children }: Props) => {
     const userExists = await onAuthenticateUser();

     if (!userExists.user) {
          redirect("/sign-in");
     }

     return (
          <div className="flex w-full min-h-screen">
               <Sidebar />

               <div className="flex flex-col w-full h-screen overflow-auto px-4  container mx-auto">
                    <Header user={userExists.user} />
                    {children}
               </div>
          </div>
     );
};

export default Layout;
