
"use client"


import { useRef, useState, useEffect } from "react";
import Head from "next/head"; 


import axios from "axios";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import StickyBtn from "@/Components/StickyBtn"


const OrderNowPage = () => {
  const aboutRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [orderNumber, setOrderNumber] = useState(""); // State for order number
  const [lastOrderNumber, setLastOrderNumber] = useState(""); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  

  // Fetch last order number when component mounts
  useEffect(() => {
    const fetchLastOrderNumber = async () => {
      try {
        const response = await axios.get(`https://be.britishphdwriters.co.uk/api/last-order-number.php`, {
          transformResponse: [function (data) {
            try {
              const jsonStart = data.indexOf('{');
              const jsonData = data.slice(jsonStart);
              return JSON.parse(jsonData);
            } catch (e) {
              console.error("Error parsing JSON response: ", e);
              setError("Invalid JSON response from server");
              return {};
            }
          }]
        });

        if (response.status === 200 || response.status === 201) {
          setLastOrderNumber(response.data.order_number); 
          setOrderNumber(response.data.order_number);
        } else {
          setError("Unexpected response status: " + response.status);
        }
      } catch (err) {
        setError("Error fetching last order number: " + err.message);
      }
    };

    fetchLastOrderNumber();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !totalAmount) {
      setError("Please fill in all fields except the order number");
      return;
    }

    setLoading(true);
    setError(null);

    const orderData = {
      name,
      email,
      phone,
      total_amount: totalAmount,
      order_number: orderNumber
    };

    try {
      const response = await axios.post(`https://be.britishphdwriters.co.uk/api/order-now.php`, orderData);

      if (response.status === 201 || response.status === 200) {
        const redirectUrl = `https://webmountx.com/payments/BPW/?&NAME_KEY=${encodeURIComponent(name)}&EMAIL_KEY=${encodeURIComponent(email)}&TOTAL_AMOUNT=${encodeURIComponent(totalAmount)}&ORDER_NUMBER=${encodeURIComponent(orderNumber)}`;
        
        window.location.href = redirectUrl;
      } else {
        setError("Failed to place order. Please try again.");
      }
    } catch (err) {
      setError("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
     
      <Head>
        <title>Order Now - British Phd Writers.</title>
      </Head>
      
      
      <Navbar aboutRef={aboutRef}  />

      
      <div className="bg-white">
        <h1 className="text-2xl font-bold text-center text-black mb-4 pt-10">
          PLACE YOUR ORDER NOW
        </h1>
        <p className="text-center text-black mb-6 w-full max-w-md mx-auto">
          Place your order now at Academians and get the premium quality 100%
          non-plagiarized paper written by our professional experts.
        </p>

        <div className="flex justify-center items-center">
          <div className="bg-gray p-8 rounded-lg shadow-md w-full max-w-md border-4 border-orange-400">
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Input Fields */}
              <div>
                <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-white text-sm font-bold mb-2" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-white text-sm font-bold mb-2" htmlFor="orderNumber">
                  Order Number
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="orderNumber"
                  value={orderNumber}
                  readOnly
                />
              </div>
              <div>
                <label className="block text-white text-sm font-bold mb-2" htmlFor="totalAmount">
                  Total Amount GBP
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="totalAmount"
                  placeholder="Enter total amount in GBP"
                  value={totalAmount}
                  onChange={(e) => setTotalAmount(e.target.value)}
                />
              </div>

              {/* Error Message */}
              {error && <p className="text-red-500 text-sm">{error}</p>}

              {/* Submit Button */}
              <button
                className="w-full py-3 bg-blue-900 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                type="submit"
                disabled={loading}
              >
                {loading ? "Processing..." : "Proceed"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer aboutRef={aboutRef} />
      <StickyBtn/>
    </>
  );
};

export default OrderNowPage;
