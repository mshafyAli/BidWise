import React from "react";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="relative">
      <div className="w-full bg-primary h-[18rem] flex justify-center items-center">
        <h1 className="text-white md:text-4xl text-3xl font-bold">Terms and Conditions</h1>
      </div>

      <div className="md:w-[70%] w-full mx-auto">
        <div className="p-8 space-y-8">
          <section>
            <p className=" text-gray-700">
              Welcome everyone to the only platform
              <Link href="/">
                {" "}
                <span className="text-green">britishphdwriters.co.uk</span>
              </Link>{" "}
              where we ensure your complete satisfaction with our services. The
              purpose of this page is to fully make you understand our terms and
              conditions before you collaborate with us or take any services
              from our experts. We highly recommend you read carefully before
              engaging. We&apos;re here to deliver top-notch publication and
              press release services without any risks to your privacy.
            </p>
          </section>

          <section>
            {/* 1. Acceptance Of Terms */}
            <div className="mt-6">
              <h3 className="termsHead">
                1. Acceptance Of Terms
              </h3>
              <p className="termsPara  ">
                Using any of our products or services indicates your acceptance
                to abide by all of our terms and conditions and any applicable
                laws and regulations. Failure to comply with any part of our
                terms will result in termination/ suspension from using our
                platform.
              </p>
            </div>

            {/* 2. Payment And Fees */}
            <div className="mt-6">
              <h3 className="termsHead">
                2. Payment And Fees
              </h3>
              <p className="termsPara  ">
                We offer multiple channels for payment ensuring your comfort and
                ease. Have a look at our pricing page to understand the payment
                method and pricing structure. We reserve the right to change
                pricing at any time, with or without notice.
              </p>
            </div>

            {/* 3. Refund Policy */}
            <div className="mt-6">
              <h3 className="termsHead">
                3. Refund Policy
              </h3>
              <p className="termsPara  ">
                We offer a money-back guarantee to our valuable customers. For
                further details on our refund policy please refer to our
                separate page of refund policy.
              </p>
            </div>

            {/* 4. Intellectual Property */}
            <div className="mt-6">
              <h3 className="termsHead">
                4. Intellectual Property
              </h3>
              <p className="termsPara  ">
                Every content produced by our experts or any resource provided
                to you is owned by BPW. We will transfer all copyrights to you
                once you complete the payment of your purchase clearing all your
                dues.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="termsHead">
                5. Consent
              </h3>
              <p className="termsPara  ">
                By using our services and products you agree to not reproduce,
                distribute, modify, or create any derivative works from any
                content provided by our experts without written consent from
                BPW.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="termsHead">
                6. Prohibited Activities
              </h3>
              <p className="termsPara  ">
                Engaging in any of the activities mentioned below will result in
                ineligibility to use our services:
              </p>
              <ul className="list-disc list-inside mt-2  text-gray-700">
                <li>
                  Engaging in any illegal activities or activities that violate
                  academic integrity.
                </li>
                <li>
                  Misrepresenting your identity or affiliation with any
                  institution.
                </li>
                <li>
                  Uploading or sharing any malicious software, viruses, or
                  harmful content with our support team.
                </li>
                <li>Requirements</li>
                <li>
                  Violating any applicable laws, regulations, or third-party
                  rights.
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="termsHead">
                7. Termination of Services
              </h3>
              <p className="termsPara  ">
                We reserve the right to terminate or suspend your access to our
                services, with or without any prior notice.
              </p>
            </div>
            <div className="mt-6">
              <h3 className="termsHead">
                8. Limitation of Liability
              </h3>
              <p className="termsPara  ">
                BPW. shall not be liable for any damage of any sort if the
                customer is ever found to be using content for any illicit
                activity. We shall not be liable for any direct, indirect,
                incidental, special, or consequential damages resulting from the
                use or inability to use our services.
              </p>
            </div>
            <div className="mt-6">
              <h3 className="termsHead">
                9. Amendments
              </h3>
              <p className="termsPara  ">
                We reserve the right to modify our Terms and Conditions at any
                time without any prior notice. Changes will be effective
                immediately upon posting on our website.
              </p>
            </div>
            <div className="mt-6">
              <h3 className="termsHead">
                10. Contact Information
              </h3>
              <p className="termsPara  ">
                Feel free to contact our team at any time for any queries or
                concerns regarding our Terms and Conditions. You can use any
                communication channel including live chat, WhatsApp, or email to
                reach out.
              </p>
            </div>
            <p className="termsPara font-semibold ">
              By using our services, you acknowledge that you have read,
              understood, and agreed to the above Terms and Conditions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Banner;
