"use client";
import React, { useState } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const router = useRouter();

  

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
        "https://be.scopusjournalpublication.org/api/signup.php",
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
        setMessage("")


        // Manually construct the query string to avoid encoding the email field
      const queryString = `name=${encodeURIComponent(name)}&email=${email}&phone=${encodeURIComponent(phone)}`;
        
        // // Update Tawk.to before navigation
        if (typeof window.Tawk_API !== "undefined") {
          window.Tawk_API.addEvent("page", {
            title: "Thank You - Scopus Journal Publication.",
            url: `${window.location.origin}/thankyou?${queryString}`,
          });
        }

        router.push(`/thankyou?${queryString}`);
      } else {
        console.error("Error:", err);
      }
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      

      <div className="max-w-md  border border-primary bg-tertiary bg-opacity-60 rounded-lg shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
        <h1 className="text-primary px-6 text-start  py-2 text-2xl font-bold ">
        Have any questions?
        </h1>
        <h1 className="text-white px-6 text-start  text-2xl font-bold ">
        Get Free Audit
        </h1>
       
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-xl border border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
            </div>
            <div className="">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-xl border border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
            </div>
            <div>
              <div className="w-full rounded-xl border border-primary">
                <PhoneInput
                  country={"us"}
                  value={phone}
                  onChange={setPhone}
                  placeholder="Phone Number"
                  inputStyle={{
                    border: "none",
                    borderRadius: "12px",
                    width: "100%",
                    height: "40px",
                    paddingLeft: "52px", // Adjust for flag dropdown spacing
                  }}
                  buttonStyle={{
                    border: "none",
                    backgroundColor: "transparent",
                    paddingLeft: "10px", // Adjust as needed
                  }}
                  containerClass="w-full rounded-xl"
                  inputClass="w-full rounded-xl px-4 py-2"
                  required
                />
              </div>
            </div>

            <div>
              {" "}
              {/* Added textarea */}
              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 rounded-xl border border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                rows={2}
                required
              />
            </div>


            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-xl font-bold"
              disabled={isLoading} // Disable button when loading
            >
              {isLoading ? "Submitting..." : "Get My Free Quote"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
