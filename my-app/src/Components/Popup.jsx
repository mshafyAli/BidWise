"use client";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";
import axios from "axios";

const Popup = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      name,
      email,
      phone,
      review,
    };

    try {
      const response = await axios.post(
        "https://be.britishphdwriters.co.uk/api/review.php",
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
        setReview("");
        console.log(response);
        const queryString = `name=${encodeURIComponent(
          name
        )}&email=${email}&phone=${encodeURIComponent(phone)}`;
        // // Update Tawk.to before navigation
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
          onClick={onClose}
          className="absolute top-3 right-3 text-white bg-primary rounded-full p-1"
        >
          <IoClose size={20} />
        </button>

        {/* Form */}

        <div className=" ">
          <h2 className="text-lg font-bold text-center mb-4">WRITE A REVIEW</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
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
            <div>
              <label className="block text-sm font-medium mb-1">
                Write a Review*
              </label>
              <textarea
                placeholder="Write your review here"
                value={review}
                onChange={(e) => setReview(e.target.value)}
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

export default Popup;
