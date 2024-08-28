"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Preloader = () => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      // After the loading is done, start the fade-out effect
      setTimeout(() => setIsVisible(false), 250); // Adjust the timeout to control the speed of the fade-out
    }, 500);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#F85C3A",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        opacity: isLoading ? 1 : 0,
        transition: "opacity 0.5s ease", // Smoothly transition the opacity
        visibility: isVisible ? 'visible' : 'hidden',
      }}
    >
      <img style={{width:"60px"}} src="/images/preloader.gif"/>
    </div>
  );
};

export default Preloader;
