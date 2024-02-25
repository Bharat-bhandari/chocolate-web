import React from "react";

import image from "@/assets/images/HomePage/main.webp";
import "@/assets/styles/globals.css";

const Hero = () => {
  return (
    <>
      <div className="h-screen">
        <div
          style={{
            // use the src property of the image object
            backgroundImage: `url(${image.src})`,
            // other styles
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "91vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <div className="mb-0 text-center text-9xl">YOUR SEVEN STAR</div>
            <div className="mt-0 text-center text-9xl">CONCIERGE TEA CO.</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
