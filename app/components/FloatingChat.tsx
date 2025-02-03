"use client";

import { useEffect } from "react";

const ChatwayWidget = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement("script");
    script.id = "chatway";
    script.async = true;
    script.src = "https://cdn.chatway.app/widget.js?id=lbCK6gdYvwKj";

    // Append the script to the body
    document.body.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // No visible UI is rendered
};

export default ChatwayWidget;
