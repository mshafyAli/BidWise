


import Image from "next/image";
import React, { forwardRef } from "react";
import ReviewsAndWhatsApp from "./ReviewsAndWhatsApp";



const About = forwardRef((props, ref) => {
  return (
    <section
      className="md:w-[80%] w-full mx-auto mt-8 md:mt-2 md:py-10 md:mb-4 px-4"
      ref={ref}
      id="about"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
        {/* Article Section */}
        <article className="flex-1 w-full">
          <h1 className="text-xl md:text-3xl font-bold px-1 md:px-2 text-primary ">
            Why Choose Our{" "}
            <span className="text-secondary">Academic Expert</span>{""}?
          </h1>
          <p className="pt-4 px-2 text-sm leading-6">
            British PhD Writers keenly understands the challenges of
            Students life. Everyone is packed up with heaps of different
            concerns about life matters;you are deal those as well as your hang
            out to live your blessed life joyfully. Tons of Paper at a time
            are stopping you to do so? Leave that on us. We will assure that
            your Paper reputation will prosper while you would be paying
            attention to all other important living matters. We are your
            companions, always standing with you for Paper editing. At our
            desk, you will get a Academic consultancy with free guidance and
            100% plagiarism free and proofreaded. We bring all this with an
            extensive range of subject expertise, covering almost every aspect
            comes under your domain.
          </p>

          <ReviewsAndWhatsApp />
        </article>

        {/* Image Section */}
        <div className="flex-1  hidden md:block">
          <Image
            src="/aboutPic.webp"
            alt="About"
            className="w-[330px] mx-auto  object-contain "
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
});

// Assign display name for debugging
About.displayName = "About";

export default About;


// import Image from "next/image";
// import React, { forwardRef } from "react";
// import ReviewsAndWhatsApp from "./ReviewsAndWhatsApp";

// const About = forwardRef((props, ref) => {
//   return (
//     <section
//       className="md:w-[80%] w-full mx-auto mt-8 md:py-12 md:mb-10 px-4"
//       ref={ref}
//       id="about"
//     >
//       <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-16">
//         {/* Article Section */}
//         <article className="flex-1 w-full">
//           <h1 className="text-xl md:text-3xl font-bold px-1 md:px-2 text-primary ">
//             Why Choose Our{" "}
//             <span className="text-secondary">Academic Expert</span>?
//           </h1>
//           <p className="pt-4 px-2 text-sm leading-6">
//             British PhD Writers keenly understands the challenges of student
//             life. Everyone is packed up with heaps of different concerns about
//             life matters; you are dealing with those as well as trying to enjoy
//             your blessed life joyfully. Tons of papers at a time stopping you
//             from doing so? Leave that to us. We will assure you that your paper
//             reputation will prosper while you pay attention to all other
//             important matters. We are your companions, always standing with you
//             for paper editing. At our desk, you will get academic consultancy
//             with free guidance, 100% plagiarism-free content, and proofreading.
//             We bring all this with an extensive range of subject expertise,
//             covering almost every aspect under your domain.
//           </p>

//           <ReviewsAndWhatsApp />
//         </article>

//         {/* Image Section */}
//         <div className="flex-1">
//           <Image
//             src="/aboutPic.webp"
//             alt="About"
//             className="w-full object-contain"
//             width={340}
//             height={300}
//           />
//         </div>
//       </div>
//     </section>
//   );
// });

// // Assign display name for debugging
// About.displayName = "About";

// export default About;
