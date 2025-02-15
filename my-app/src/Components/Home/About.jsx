import Image from "next/image";
import React, { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  return (
    <section
      className="layout mt-8 md:mt-2 md:py-10 md:mb-4"
      ref={ref}
      id="about"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Article Section */}

        {/* Image Section */}
        <div className="flex-1  hidden lg:block">
          <Image
            src="/bidwise-laptop.webp"
            alt="laptop"
            className=""
            width={500}
            height={500}
          />
        </div>
        <article className="flex-1 w-full">
          <h1 className="text-2xl md:text-4xl font-bold  text-primary pb-4 ">
            How we create successful PPC campaigns
          </h1>
          <p className="py-2 text-lg">
            Whether you started your business yesterday or you’ve been going for
            decades, PPC will turbocharge your brand awareness and give you an
            edge.
          </p>
          <p className="pb-2 text-lg">
            Of course, PPC must be done right to be effective. Our specialists
            get to know your brand, your business, and your competitive
            landscape.
          </p>
          <p className=" text-lg">
            We shape the PPC strategy around your marketing goals—not the other
            way round.
          </p>
        </article>
      </div>
    </section>
  );
});

// Assign display name for debugging
About.displayName = "About";

export default About;
