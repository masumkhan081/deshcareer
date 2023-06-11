"use client";
import React from "react";
import ContactUs from "../contact-us/page";
import { animated, useSpring } from "@react-spring/web";
import { FaPhone } from "react-icons/fa";
import { FcCellPhone } from "react-icons/fc";
import { MdEmail } from "react-icons/md";

//

export default function page() {
  const springs_form = useSpring({
    from: {
      y: 100,
    },
    to: {
      y: 0,
    },
  });
  const springs_h1 = useSpring({
    from: {
      textAlign: "left",
      transitionDuration: "4s",
    },
    to: {
      textAlign: "center",
      transitionDuration: "4s",
    },
  });

  return (
    <div className="container mx-auto pt-10 md:px-0 px-2 h-full w-full">
      <animated.h1
        style={{ ...springs_h1 }}
        className="sm:text-4xl text-3xl text-orange-900 font-bold font-sans text-start"
      >
        Search your Invitation
      </animated.h1>
      <animated.section
        style={{ ...springs_form }}
        className="block font-mono text-base text-center sm:mt-10 mt-6"
      >
        <form className="w-full max-w-sm mt-10 mx-auto">
          <div className="flex items-center border-b border-teal-500 py-2">
            <MdEmail className="flex-shrink-0 text-amber-600" size={18} />
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="email"
              placeholder="Your E-mail Address"
              aria-label="Email Adress"
            />
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="submit"
            >
              Join Free
            </button>
          </div>
        </form>
      </animated.section>
      <ContactUs props=" h-fit  mt-24 bg-yellow-50 " />
    </div>
  );
}
