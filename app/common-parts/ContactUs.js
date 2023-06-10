"use client";
import React from "react";
import { animated, useSpring } from "@react-spring/web";
import { AiTwotoneMail, AiTwotonePhone } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";

export default function ContactUs({ props }) {
  const springs = useSpring({
    from: {
      x: 100,
      y: 100,
      borderRadius: "1px",
    },
    to: {
      x: 0,
      y: 0,
      borderRadius: "10px",
    },
  });

  return (
    <animated.div
      style={{ ...springs }}
      className={
        "lg:px-10 md:px-5 sm:px-2  mx-auto py-18 w-full rounded-md" + props
      }
    >
      <span className="mx-auto block w-fit text-3xl font-serif text-center  px-2 rounded-md  ">
        <hr className="mx-auto w-14 h-2 shadow-lg rounded-lg bg-amber-200 shadow-amber-600"></hr>
        Get In Touch
        <hr className="mx-auto w-14 h-2 shadow-2xl rounded-lg bg-amber-200 shadow-amber-600"></hr>
      </span>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 items-center text-center md:justify-center sm:grid-cols-1 my-12 gap-2">
        <ul className="  text-center">
          <li className="font-bold text-xl mb-2 ">Find Us</li>
          <li>
            <ImLocation2
              size={20}
              className="me-1 inline mb-1 text-amber-700"
            />{" "}
            House: 13/3, Road: 2, Shyamoly, Dhaka-1207
          </li>
        </ul>
        <ul className=" text-center  ">
          <li className="font-bold text-xl mb-2 ">Contact</li>
          <li>
            <AiTwotonePhone
              size={20}
              className="me-1 inline mb-1 text-amber-700"
            />
            +8801880811047
          </li>
        </ul>
        <ul className="  text-center sm:mx-auto">
          <li className="font-bold text-xl  mb-2">Email</li>
          <li>
            <AiTwotoneMail
              size={20}
              className="me-1 inline mb-1 text-amber-700"
            />
            contact.deshcareer@gmail.com
          </li>
        </ul>
      </div>
    </animated.div>
  );
}
