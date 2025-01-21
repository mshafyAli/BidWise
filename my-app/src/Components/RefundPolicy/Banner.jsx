import React from "react";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="relative">
      <div className="w-full bg-primary  h-[18rem] flex justify-center items-center">
        <h1 className="text-white text-4xl font-bold">Refund Policy</h1>
      </div>

      <div className="md:w-[70%] w-full mx-auto">
        <div className="p-8 space-y-8">
          {/* Our Commitment To Your Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-primary">
              Our Commitment To Your Refund Policy
            </h2>
            <p className="mt-4  text-gray-700">
              If, for any reason, which is quite unlikely, we are unable to
              satisfy our potential consumers with the calibre of your
              assignments, we provide a return policy. Please read the
              British Phd Writers. Return Policy before placing an order. You can always
              count on our attentive support team to find a quick solution to
              any issues.
            </p>
          </section>

          {/* Information Collection Protocols */}
          <section>
            <p className="mt-4 text-gray-700">
              Any claims for a complete refund won&apos;t be taken into account.
              By placing an order, you merely declare that you agree with
              British Phd Writers return policy. 100% of the amount will be retained by
              the business as service fees. It is only feasible to authorise a
              complete refund when a student obtains a failing grade. The
              consumer might ask for a complete refund if a dissertation writing
              comprises more than 30% plagiarism.
            </p>
            <p className="mt-2  text-gray-700">
              After 30 days from the date of delivery, there won&apos;t be any
              refunds. The owner of the business will choose how much money will
              be reimbursed. The number of services you ordered, including
              rewrite and proofreading, will affect the size of the return. Each
              order that seeks a refund will be thoroughly investigated by the
              team. It could take this process up to 30 days.
            </p>
          </section>

          {/* What Information We Collect? */}
          <section>
            
            <p className="mt-4  text-gray-700">
              Only students who can produce legitimate proof will be eligible
              for refunds. There is no right to a compensation for any
              dissertation with a 10-day or less deadline. Orders with a 48-hour
              or shorter deadline cannot be refunded. Although it is improbable,
              no task we deliver is subpar and has to be revised. However,
              students are free to make any alterations or modifications they
              would like to their papers. On the portal, our help is always
              accessible to answer your questions and meet your demands. You can
              simply connect with us via live chat or WhatsApp for more
              information.
            </p>
           
          </section>

        
        </div>
      </div>
    </div>
  );
};

export default Banner;
