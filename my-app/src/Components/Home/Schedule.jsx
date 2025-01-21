import React from "react";
import Image from "next/image";

const Schedule = () => {
  return (
    <div>
      <section
        className="md:w-[75%] w-full mx-auto mt-12 md:py-12 md:mb-0 mb-4 px-4"
       
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Article Section */}
          <article className="flex-1 w-full">
            <h1 className="text-xl md:text-3xl font-bold px-1 md:px-2 text-primary ">
              Don&apos;t Let a Busy Schedule Hold You Back - Our Online Class Help At
              British PhD Writers  is Here to Assist
            </h1>
            <p className="pt-4 px-2 text-sm text-gray">
              Unlock academic success and reach your full potential with our
              online class experts. Whether you&apos;re struggling to keep up with
              coursework or just want to improve your grades, our team of highly
              qualified professionals is here to support you every step of the
              way. &quot;Hire someone to take my online class!&quot; Say goodbye to stress
              and frustration and hello to high grades and confidence. With our
              help, achieving your desired grades has never been easier.
            </p>

            <section className="text-primary pt-4">
              <div className="max-w-6xl mx-auto flex  md:flex-row items-center justify-between md:px-4 gap-2 md:gap-4">
                {/* First Feature */}
                <div className="flex items-center gap-4 border-r border-primary md:pr-8 pr-4">
                  <div>
                    <h1 className="font-bold text-center text-xl md:text-3xl leading-5">
                    8k
                    </h1>
                    <p className="text-sm  text-gray">Students Hired Us</p>
                  </div>
                </div>

                {/* Second Feature */}
                <div className="flex items-center gap-4 border-r border-primary md:pr-8 pr-4">
                  <div>
                    <h1 className="font-bold text-xl text-center md:text-3xl leading-5">
                    100%
                    </h1>
                    <p className="text-sm  text-gray">Approval Rate</p>
                  </div>
                </div>

                {/* Third Feature */}
                <div className="flex items-center gap-4">
                  <div>
                    <h1 className="font-bold text-xl text-center md:text-3xl leading-5">
                    98%
                    </h1>
                    <p className="text-sm  text-gray">Student Satisfaction</p>
                  </div>
                </div>
              </div>
            </section>
          </article>

          {/* Image Section */}
          <div className="flex-1 w-full hidden md:block">
            <Image
              src="/student-image.webp"
              alt="student-image"
              className="w-[450px] "
              width={350}
              height={350}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
