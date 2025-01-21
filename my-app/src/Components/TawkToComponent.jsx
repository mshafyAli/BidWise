
// Tac Tawk.to
//onLoad Code run to target tawktoadmin
"use client";

import { useEffect, useRef } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const TawkToComponent = () => {
  const tawkMessengerRef = useRef(null);

  useEffect(() => {
    const checkTawkToInitialization = () => {
      if (window.Tawk_API && window.Tawk_API.$socket) {
        console.log("Tawk.to widget is initialized.");
      } else {
        console.log("Retrying Tawk.to initialization...");
        setTimeout(checkTawkToInitialization, 500); // Retry every 500ms
      }
    };

    // Ensure `onLoad` is called when Tawk.to is ready
    if (window.Tawk_API) {
      window.Tawk_API.onLoad = () => {
        console.log("Tawk.to widget fully loaded.");
        checkTawkToInitialization(); // Double-check initialization
      };
    }
  }, []);

  return (
    <TawkMessengerReact
      propertyId="64245d674247f20fefe8b0d8" // Replace with your actual propertyId
      widgetId="1gsn0pntc" // Replace with your actual widgetId
      ref={tawkMessengerRef}
    />
  );
};

export default TawkToComponent;











