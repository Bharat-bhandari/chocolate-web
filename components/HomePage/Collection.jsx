"use client";

import React, { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import spoon from "@/assets/images/HomePage/spoon.webp";
import Image from "next/image";

const Collection = () => {
  return (
    <section className="h-[165vh] flex flex-col justify-between">
      <div className="flex flex-col items-center">
        <div>
          <p className="mb-16 text-2xl cursor-pointer mt-60 text1">
            Boutique Blended Loose Tea
          </p>
        </div>
        <div>
          <div className="mb-12 text-center text-9xl">INDULGE IN</div>
          <div className="text-center text-9xl">THE LUXURY</div>
        </div>

        <div>
          <p className="text-[#757575] mb-1 mt-12 text-[14px] text-center">
            Bold, vibrant flavors, expertly blended with luxurious tea leaves to
          </p>
          <p className="text-[#757575] mb-12 mt-0 text-[14px] text-center">
            bring you an unparalleled experience.
          </p>
        </div>
        <div>
          <a
            href=""
            className="p-4 text-sm duration-300 text-white no-underline hover:text-[#131313] transition border border-solid rounded-full hover:bg-white button"
          >
            VIEW OUR COLLECTION
          </a>
        </div>
      </div>

      <div className="flex justify-center w-[60%] mx-auto overflow-hidden">
        <Image
          src={spoon}
          alt="spoon"
          className="object-cover w-[80%] spoon1"
        />
      </div>
    </section>
  );
};

export default Collection;
