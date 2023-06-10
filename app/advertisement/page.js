"use client";
import React from "react";
import ContactUs from "../contact-us/page";
import { animated, useSpring } from "@react-spring/web";
import { FaPhone } from "react-icons/fa";
import { FcCellPhone } from "react-icons/fc";
import { MdEmail } from "react-icons/md";

//

export default function page() {
  const springs_text = useSpring({
    from: {
      opacity: 0.4,
    },
    to: {
      opacity: 1,
    },
  });
  const springs_h1 = useSpring({
    from: {
      textAlign: "left",
      transitionDuration: "5s",
    },
    to: {
      textAlign: "center",
      transitionDuration: "5s",
    },
  });

  return (
    <div className="container mx-auto pt-10 md:px-0 px-2 h-full w-full">
      <animated.h1
        style={{ ...springs_h1 }}
        className="sm:text-4xl text-3xl text-orange-900 font-bold font-sans text-center"
      >
        Advertisement
      </animated.h1>
      <animated.section
        style={{ ...springs_text }}
        className="block font-mono text-base text-start sm:mt-10 mt-6"
      >
        <p>
          Our audience age is 20-35 Year. We focus on Career related content. If
          you want to promote your product to our audience, you can give
          advertisement, Sponsored Content.
        </p>
      </animated.section>
      <ContactUs props=" h-fit  mt-24 bg-yellow-50 " />
    </div>
  );
}
