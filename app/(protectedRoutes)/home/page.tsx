import React from "react";
import OnBoarding from "./_components/OnBoarding";
import { Upload, Webcam } from "lucide-react";
import FeatureCard from "./_components/FeatureCard";
import FeatureSectionLayout from "./_components/FeatureSectionLayout";
import Image from "next/image";
import { potentialCustomer } from "@/lib/data";
import UserInfoCard from "@/components/Reusablecomponents/UserInfo";

const page = () => {
     return (
          <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-800 rounded-3xl dark:via-slate-900 dark:to-black transition-colors duration-300">
               {/* Hero Section */}
               <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20">
                         {/* Left Content */}
                         <div className="flex-1 max-w-2xl space-y-8">
                              <div className="space-y-6">
                                   <h1 className="text-slate-900 dark:text-slate-100 font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
                                        Get Maximum
                                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent block">
                                             Conversion
                                        </span>
                                        from your webinars
                                   </h1>
                                   <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                                        Streamline your webinar process and
                                        boost engagement with our powerful
                                        analytics and streaming tools.
                                   </p>
                              </div>
                              <div className="pt-4">
                                   <OnBoarding />
                              </div>
                         </div>

                         {/* Right Feature Cards */}
                         <div className="flex-shrink-0 w-full lg:w-auto lg:max-w-md">
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                                   <FeatureCard
                                        Icon={
                                             <Upload className="w-7 h-7 text-blue-500 dark:text-blue-400" />
                                        }
                                        heading="Upload your pre-recorded webinar"
                                        description="Support for multiple formats and automatic processing"
                                        link="#"
                                        className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-200/60 dark:border-slate-700/60 hover:bg-white/95 dark:hover:bg-slate-800/95 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 hover:-translate-y-1"
                                   />
                                   <FeatureCard
                                        Icon={
                                             <Webcam className="w-7 h-7 text-purple-500 dark:text-purple-400" />
                                        }
                                        heading="Start a live webinar"
                                        description="Real-time streaming with interactive features"
                                        link="/webinars"
                                        className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-200/60 dark:border-slate-700/60 hover:bg-white/95 dark:hover:bg-slate-800/95 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 dark:hover:shadow-purple-400/10 hover:-translate-y-1"
                                   />
                              </div>
                         </div>
                    </div>
               </div>

               {/* Feature Sections */}
               <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24">
                    {/* Customer Journey Tracking */}
                    <FeatureSectionLayout
                         heading="Track Customer Journey & Analytics"
                         description="Get comprehensive insights into audience engagement, conversion metrics, and behavioral patterns"
                         link="/lead"
                         className="group"
                    >
                         <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/80 to-slate-50/80 dark:from-slate-800/80 dark:to-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 p-8 hover:shadow-2xl hover:shadow-slate-500/10 dark:hover:shadow-slate-400/10 transition-all duration-500">
                              {/* Stats Header */}
                              <div className="flex justify-between items-center mb-8">
                                   <div>
                                        <h3 className="text-slate-900 dark:text-slate-100 font-semibold text-lg">
                                             Conversion Analytics
                                        </h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm">
                                             Real-time performance metrics
                                        </p>
                                   </div>
                                   <div className="text-right">
                                        <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                                             50
                                        </div>
                                        <div className="text-sm text-slate-500 dark:text-slate-400">
                                             Conversions
                                        </div>
                                   </div>
                              </div>

                              {/* Feature Images Showcase */}
                              <div className="relative">
                                   {/* Main Feature Image */}
                                   <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 aspect-[16/10] mb-4 group/main">
                                        <Image
                                             src="/featureImage.png"
                                             alt="Main Analytics Dashboard"
                                             width={600}
                                             height={375}
                                             className="w-full h-full object-cover transition-transform duration-700 group-hover/main:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-0 group-hover/main:opacity-100 transition-opacity duration-300" />
                                        <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover/main:opacity-100 transition-opacity duration-300">
                                             <div className="text-sm font-medium">
                                                  Primary Dashboard
                                             </div>
                                        </div>
                                   </div>

                                   {/* Secondary Images */}
                                   <div className="grid grid-cols-2 gap-4">
                                        {Array.from({ length: 2 }).map(
                                             (_, idx) => (
                                                  <div
                                                       key={idx}
                                                       className="group/card relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 aspect-[4/3] hover:scale-[1.02] transition-transform duration-300"
                                                  >
                                                       <Image
                                                            src="/featureImage.png"
                                                            alt={`Analytics View ${
                                                                 idx + 1
                                                            }`}
                                                            width={250}
                                                            height={188}
                                                            className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                                                       />
                                                       <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                                                  </div>
                                             )
                                        )}
                                   </div>
                              </div>

                              {/* Decorative Background Elements */}
                              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-400/10 dark:to-purple-400/10 rounded-full blur-xl" />
                              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-emerald-500/10 to-blue-500/10 dark:from-emerald-400/10 dark:to-blue-400/10 rounded-full blur-xl" />
                         </div>
                    </FeatureSectionLayout>

                    {/* Customer List Section */}
                    <FeatureSectionLayout
                         heading="Customer Pipeline Management"
                         description="Monitor and manage your customer relationships with advanced pipeline tracking"
                         link="/pipeline"
                         className="group"
                    >
                         <div className="relative">
                              {/* Main Container */}
                              <div className="relative rounded-2xl bg-gradient-to-br from-white/80 to-slate-50/80 dark:from-slate-800/80 dark:to-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 p-8 overflow-hidden hover:shadow-2xl hover:shadow-slate-500/10 dark:hover:shadow-slate-400/10 transition-all duration-500">
                                   {/* Section Header */}
                                   <div className="mb-8">
                                        <h3 className="text-slate-900 dark:text-slate-100 font-semibold text-xl mb-2">
                                             Active Customer Pipeline
                                        </h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm">
                                             Track and manage customer
                                             relationships
                                        </p>
                                   </div>

                                   {/* Customer Cards Layout */}
                                   <div className="relative">
                                        {/* Background Glow - Positioned Behind Cards */}
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                             <div className="relative w-80 h-80 opacity-20 dark:opacity-10">
                                                  <Image
                                                       src={"/glowCard.png"}
                                                       alt="Background glow effect"
                                                       width={320}
                                                       height={320}
                                                       className="w-full h-full object-contain mix-blend-soft-light dark:mix-blend-screen"
                                                  />
                                             </div>
                                        </div>

                                        {/* Customer Cards Grid */}
                                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
                                             {potentialCustomer
                                                  .slice(0, 2)
                                                  .map((customer, idx) => (
                                                       <div
                                                            key={idx}
                                                            className="transform hover:scale-[1.02] transition-all duration-300 hover:z-20 relative"
                                                       >
                                                            <UserInfoCard
                                                                 customer={
                                                                      customer
                                                                 }
                                                                 tags={
                                                                      customer.tags
                                                                 }
                                                                 className="bg-white/95 dark:bg-slate-700/95 backdrop-blur-sm border border-slate-200/70 dark:border-slate-600/70 hover:shadow-xl hover:shadow-slate-500/10 dark:hover:shadow-slate-400/10 transition-all duration-300"
                                                            />
                                                       </div>
                                                  ))}
                                        </div>
                                   </div>

                                   {/* Decorative Elements */}
                                   <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-bl from-purple-500/8 to-transparent dark:from-purple-400/8 rounded-full blur-2xl" />
                                   <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-tr from-blue-500/8 to-transparent dark:from-blue-400/8 rounded-full blur-2xl" />
                              </div>
                         </div>
                    </FeatureSectionLayout>
               </div>

               {/* Background Pattern */}
               <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-400/5 dark:to-purple-400/5 rounded-full blur-3xl animate-pulse" />
                    <div
                         className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-emerald-500/5 to-blue-500/5 dark:from-emerald-400/5 dark:to-blue-400/5 rounded-full blur-3xl animate-pulse"
                         style={{ animationDelay: "1s" }}
                    />
               </div>
          </div>
     );
};

export default page;
