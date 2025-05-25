import { CallStatusEnum } from "@prisma/client";
import { Brain, Citrus, House, Settings, Webcam } from "lucide-react";

export const sidebarData = [
     {
          id: 1,
          title: "Home",
          icon: House,
          link: "/home",
     },
     {
          id: 2,
          title: "Webinars",
          icon: Webcam,
          link: "/webinars",
     },
     {
          id: 3,
          title: "Leads",
          icon: Citrus,
          link: "/lead",
     },
     {
          id: 4,
          title: "AI agents",
          icon: Brain,
          link: "/ai-agents",
     },
     {
          id: 5,
          title: "Settings",
          icon: Settings,
          link: "/settings",
     },
];

export const onBoardingSteps = [
     {
          id: 1,
          title: "Create a Webinar",
          complete: false,
          link: "",
     },
     {
          id: 2,
          title: "Get Leads",
          complete: false,
          link: "",
     },
     {
          id: 3,
          title: "Conversion status",
          complete: false,
          link: "",
     },
];

export const potentialCustomer = [
     {
          id: "1",
          name: "John Doe",
          email: "johndoe@gmail.com",
          clerkId: "1",
          profileImage: "/vercel.svg",
          isActive: true,
          lastLoginAt: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null,
          tags: ["new", "lead"],
          callStatus: CallStatusEnum.COMPLETED,
     },
     {
          id: "2",
          name: "Jane Smith",
          email: "janesmith@gmail.com",
          clerkId: "2",
          profileImage: "/vercel.svg",
          isActive: true,
          lastLoginAt: new Date("2023-05-15"),
          createdAt: new Date("2023-01-10"),
          updatedAt: new Date("2023-05-15"),
          deletedAt: null,
          tags: ["regular", "premium"],
          callStatus: CallStatusEnum.COMPLETED,
     },
     {
          id: "3",
          name: "Robert Johnson",
          email: "robertj@yahoo.com",
          clerkId: "3",
          profileImage: "/vercel.svg",
          isActive: false,
          lastLoginAt: new Date("2023-03-22"),
          createdAt: new Date("2022-11-05"),
          updatedAt: new Date("2023-04-30"),
          deletedAt: new Date("2023-04-30"),
          tags: ["inactive", "former"],
          callStatus: CallStatusEnum.COMPLETED,
     },
];
