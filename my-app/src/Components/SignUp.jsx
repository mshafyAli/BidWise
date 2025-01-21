

"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = { name, email, phone };

      console.log(data);

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.post(
        `https://be.britishphdwriters.co.uk/api/signup.php`,
        data,
        config
      );

      if (res.status === 201 || res.status === 200) {
        setName("");
        setEmail("");
        setPhone("");
        console.log(res);
        const queryString = `name=${encodeURIComponent(name)}&email=${email}&phone=${encodeURIComponent(phone)}`;
      
       // Update Tawk.to before navigation
      if (typeof window.Tawk_API !== "undefined") {
        window.Tawk_API.addEvent("page", {
          title: "Thank You - British PhD Writers.",
          url: `${window.location.origin}/thankyou?${queryString}`,
        });
      }
        router.push(`/thankyou?${queryString}`);
      } else {
        console.error("Error:", res);
      }
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };
  return (
  

    <div className="w-full md:w-[50%]  ">
      <div className="bg-[#ffffff26]    w-full md:w-[330px] rounded-2xl ">
        <h1 className="bg-green rounded-t-2xl shadow-md text-center text-white text-2xl font-bold  h-12 py-2 w-full -mt-3  ">
          LIMITED TIME OFFER
        </h1>

        <div className="p-6 md:py-4 md:pb-10 md:p-6">
          <div className="flex items-center gap-2 justify-center mb-4 ">
            <h1 className="font-extrabold text-white text-5xl md:text-5xl animate-blink">
              50%
            </h1>
            <h1 className="uppercase text-white text-4xl md:text-3xl font-extrabold">
              Discount
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <input
                className="border-2 border-secondary outline-none p-2 placeholder:text-primary rounded-md focus:border-blue-500"
                type="text"
                placeholder="Full Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="border-2 border-secondary outline-none p-2 placeholder:text-primary rounded-md focus:border-blue-500"
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="border-2 border-secondary outline-none placeholder:text-primary p-2 rounded-md focus:border-blue-500"
                type="tel"
                placeholder="Phone No."
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <button
                className="w-full md:w-auto h-12 text-white bg-secondary font-bold flex items-center justify-center rounded-md uppercase"
                type="submit"
                disabled={loading}
              >
                {loading ? "Submitting..." : "AVAIL NOW"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
