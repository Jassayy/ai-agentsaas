"use client";

import {
     Dialog,
     DialogContent,
     DialogTitle,
     DialogTrigger,
} from "@/components/ui/dialog";
import { useWebinarStore } from "@/store/useWebinarStore";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import MultiStepForm from "./MultiStepForm";
import BasicInfoStep from "./BasicInfoStep";

const CreateWebinarButton = () => {
     const { isModalOpen, setModalOpen, isComplete, setComplete } =
          useWebinarStore();

     const [webinarLink, setWebinarLink] = useState("");

     const steps = [
          {
               id: "basicInfo",
               title: "Basic Information",
               description:
                    "Please fill out the standard info needed for your webinar",
               component: <BasicInfoStep />,
          },
     ];

     const handleComplete = (webinarId: string) => {
          setComplete(true);
          setWebinarLink(
               `${process.env.NEXT_PUBLIC_BASE_URL}/live-webinar/${webinarId}`
          );
     };
     return (
          <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
               <DialogTrigger asChild>
                    <button
                         className="rounded-xl flex gap-2 items-center hover:cursor-pointer px-4 py-2  border-slate-600 bg-transparent backdrop-blur-sm text-sm font-normal text-white hover:bg-slate-800 transition-all duration-200"
                         onClick={() => setModalOpen(true)}
                    >
                         Create a Webinar
                         <Plus />
                    </button>
               </DialogTrigger>
               <DialogContent className="sm:max-w-[900px] p-0 bg-transparent border-none">
                    {isComplete ? (
                         <div className="bg-muted text-white rounded-3xl overflow-hidden">
                              <DialogTitle className="sr-only">
                                   Webinar Created
                              </DialogTitle>
                              {/* Success Step */}
                         </div>
                    ) : (
                         <>
                              <DialogTitle className="sr-only">
                                   Create Webinar
                              </DialogTitle>
                              <MultiStepForm
                                   steps={steps}
                                   onComplete={handleComplete}
                              />
                         </>
                    )}
               </DialogContent>
          </Dialog>
     );
};

export default CreateWebinarButton;
