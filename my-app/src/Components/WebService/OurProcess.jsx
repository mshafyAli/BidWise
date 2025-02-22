import { useState } from "react";
import { FileEdit, Cog, Award, Rocket } from "lucide-react";
import Image from "next/image";

const OurProcess = () => {
  const processes = [
    {
      title: "Planning",
      icon: FileEdit,
      items: [
        "Business analysis",
        "Document specifications",
        "Preparing wireframes",
        "Getting client approval",
      ],
    },
    {
      title: "Development",
      icon: Cog,
      items: [
        "Coding",
        "Mockup & page layout creation",
        "Review",
        "Approval cycle",
      ],
    },
    {
      title: "Testing",
      icon: Award,
      items: [
        "Preparing test cases",
        "Testing",
        "Review by the QA team",
        "Approval cycle",
      ],
    },
    {
      title: "Deployment",
      icon: Rocket,
      items: [
        "Launch",
        "Opinion monitoring",
        "Maintenance",
        "Post-deployment support",
      ],
    },
  ];
  // Function to update selected item

  return (
    <div className="bg-primary w-full h-auto py-12">
      <div className="layout">
        <h1 className="heading  text-white">Our Process</h1>
        <div className="flex flex-col md:flex-row items-center gap-16 justify-between">
          {/* Left side - Image and description */}
          <div className="md:w-1/2 w-full flex flex-col md:justify-start md:items-start justify-center items-center">
            <h2 className="lg:text-4xl text-2xl font-bold text-white ">
              Elevate Your Web Experience with Our Seamless Process
            </h2>
            <p className="text-white text-lg mt-4">
              Our process involves in-depth business analysis, documenting
              specifications, creating wireframes, and obtaining your approval
              before moving forward. Our seasoned web experts guide you through
              every step of the journey, right till the end, ensuring your
              website aligns with your brand’s objectives. Your vision deserves
              nothing less than perfection, and that's exactly what our process
              is designed to achieve.
            </p>
          </div>

          {/* Right side - Grid of expertise */}
          <div className="w-full md:w-1/2">
            <div className="grid gap-6 md:grid-cols-2 ">
              {processes.map((process) => (
                <div
                  key={process.title}
                  className="bg-tertiary shadow-[0_10px_20px_rgba(13,_13,_31,_0.7)] rounded-3xl p-6 transition-transform hover:scale-105"
                >
                  {/* Card Header */}
                  <div className="mb-6">
                    <process.icon className="h-8 w-8 text-white mb-4" />
                    <h2 className="text-white text-xl font-medium">
                      {process.title}
                    </h2>
                  </div>

                  {/* Card Content */}
                  <div>
                    <ul className="space-y-3">
                      {process.items.map((item) => (
                        <li key={item} className="flex items-center space-x-3">
                          <span className="h-2 w-2 rounded-full bg-primary" />
                          <span className="text-white text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
