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
      textAlign: "right",
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
        className="sm:text-4xl text-3xl text-orange-900 font-bold font-sans text-center"
      >
        FAQ's
      </animated.h1>
      <animated.section
        style={{ ...springs_text }}
        className="block  text-base text-start sm:mt-10 mt-6 gap-y-4"
      >
        <section>
          <h3 className="text-2xl">How can i subsribe Desh Career Email?</h3>
          <p className="font-serif">
            You can subscribe this newsletter from . You input you email, then
            follow instruction. After email confirmation, your email address is
            added in our database.{" "}
          </p>
        </section>
        <section>
          <h3 className="text-2xl">
            I am a subscriber of Desh Career, but I don't find your email. Why?
          </h3>
          <p className="font-serif">
            Please check your email. May be our email goes to Promotion tab. If
            you find our email in this tab, please move it to primary tab. Than
            you will find this email in primary tab.
          </p>
        </section>
      </animated.section>
      <ContactUs props=" h-fit  mt-24 bg-yellow-50 " />
    </div>
  );
}
