import React from "react";

const stats = [
    {
      number: "160+",
      label: "Happy Clients",
    },
    {
      number: "220+",
      label: "Projects Completed",
    },
    {
      number: "7+",
      label: "Years of Experience",
    },
  ]

const DigitalPresence = () => {
  return (
    <div className="bg-digitalPresence bg-cover bg-center w-full ">
      <div className="layout py-16">
        <div className="flex flex-col items-center lg:flex-row justify-between">
          <div className="lg:w-[52%] w-full">
            <h1 className="text-4xl md:text-5xl text-white font-bold">
              Elevate Your Digital Presence with Premier Web Development Agency
            </h1>
            <p className="para text-white py-4">
              From front-end developers to back-end engineers, our talent is the
              heartbeat of our success. We thrive on executing complex web
              projects while embracing out-of-the-box business models.
            </p>
            <p className="para text-white">
              Our web team boasts expertise in a range of languages and
              frameworks, including PHP, Java, Python, JavaScript, C#, C++,
              Ruby, Codeigniter, and Laravel. From real estate, healthcare,
              restaurants, and delivery services, to auto repair, SaaS,
              entertainment, education, and fashion. We gravitate to
              collaborating with any industry.
            </p>
          </div>

          <div>
          <div className="max-w-3xl mx-auto space-y-16">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              <div className="flex items-center justify-between gap-4">
                <span
                  className="counter text-white text-4xl lg:text-6xl font-bold"
                  data-target={stat.number}
                >
                  {stat.number}
                </span>
                <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-medium">{stat.label}</h2>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-white/80 to-transparent" />
            </div>
          ))}
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalPresence;
