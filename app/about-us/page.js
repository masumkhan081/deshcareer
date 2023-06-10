"use client";
import React from "react";
import { animated, useSpring } from "@react-spring/web";
import ContactUs from "../contact-us/page";

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
    <main className="container h-full w-full mx-auto transition-opacity pt-10 sm:px-0 px-2">
      <animated.h1
        style={{ ...springs_h1 }}
        className="sm:text-4xl text-3xl text-orange-900 font-bold font-sans text-center"
      >
        About Us
      </animated.h1>
      <animated.section
        style={{ ...springs_text }}
        className="block font-mono text-base text-start sm:mt-10 mt-6"
      >
        <p>
          Desh Career is Career based newsletter in Bengali language. This
          newsletter has published weekly. This is published in every Saturday
          at 12.00 PM. We focus on Career trend, news, smart job etc. If you
          want to contact us: you can send an email to
          contact.deshcareer@gmail.com If you want to meet with us, you can come
          to our office based on an appointment.
        </p>
      </animated.section>
      <ContactUs props=" h-fit  mt-12 bg-yellow-50 " />
    </main>
  );
}
