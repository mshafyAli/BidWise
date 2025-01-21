"use client";
import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";
import axios from "axios";

const DiscountModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 30000); // 10 seconds

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      name,
      email,
      phone,
    };

    try {
      const response = await axios.post(
        "https://be.britishphdwriters.co.uk/api/signup.php",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        // Clear form fields
        setName("");
        setEmail("");
        setPhone("");
        console.log(response);
        const queryString = `name=${encodeURIComponent(
          name
        )}&email=${email}&phone=${encodeURIComponent(phone)}`;
        // Update Tawk.to before navigation
        if (typeof window.Tawk_API !== "undefined") {
          window.Tawk_API.addEvent("page", {
            title: "Thank You - British PhD Writers.",
            url: `${window.location.origin}/thankyou?${queryString}`,
          });
        }

        router.push(`/thankyou?${queryString}`);
      } else {
        console.error("Error:", response);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-secondary w-[90%] md:w-[400px] p-6 rounded-lg shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 bg-primary rounded-full p-1"
        >
          <IoClose size={20} className="text-white" />
        </button>

        {/* Form */}
        <div>
          <h2 className="text-lg font-bold text-center mb-4 text-primary">
            50% OFF Act Fast - Save Big!
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 text-primary">
            <div>
              <label className="block text-sm font-medium mb-1">Name*</label>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-primary rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address*
              </label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-full border border-primary focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number*
              </label>
              <input
                type="phone"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 rounded-full border border-primary focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <button
              className="bg-primary  uppercase  w-full  rounded-full   py-2 px-16 text-white"
              disabled={isLoading}
              type="submit"
            >
              <span className="uppercase">
                {isLoading ? "Submitting..." : "SUBMIT"}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DiscountModal;
