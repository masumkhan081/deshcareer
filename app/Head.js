"use client";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import Logo from "./resource/deshcareer-logo.png";

export default function Head() {
  const [display, setDisplay] = useState("hidden");
  const func = useCallback(
    (what) => {
      setDisplay((prev) => {
        if (prev == "hidden") {
          return "block";
        } else {
          return "hidden";
        }
      });
    },
    [display]
  );

  const head_link_cls_names =
    "sm:w-fit w-1/2 px-2 rounded-lg drop-shadow-lg hover:shadow-sm hover:bg-yellow-100 font-semibold";

  return (
    <nav className=" flex items-center justify-between mx-auto flex-wrap py-5 lg:px-8 ">
      <a href="/">
        <Image
          src={Logo}
          className=" h-12 w-32  drop-shadow-lg mr-8 flex-shrink-0"
          width="54"
          height="54"
        ></Image>
      </a>

      <div className="block md:hidden">
        <button
          onClick={func}
          className="flex items-center px-3 py-1 border rounded text-xl text- font-bold border-teal-800  border-opacity-50 hover:border-opacity-100"
        >
          <svg
            className=" h-4 w-4  "
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={
          " lg:shadow-none shadow-amber-500 shadow-md w-full md:block flex-grow lg:flex lg:items-center lg:w-auto md:pb-0 pb-2  md:ps-0 text-amber-700 rounded-lg ps-5 " +
          display
        }
      >
        <div className="lg:text-lg md:text-base sm:text-sm lg:flex-grow flex sm:flex-row lg:justify-end sm:justify-center sm:gap-5 gap-1 flex-col lg:pe-4 sm:pt-0 pt-2 ">
          <a href="/privacy-policy" className={head_link_cls_names}>
            Privacy Policy
          </a>
          <a href="/terms-condition" className={head_link_cls_names}>
            Terms & Condition
          </a>
          <a href="/advertisement" className={head_link_cls_names}>
            Advertise
          </a>
          <a href="/about-us" className={head_link_cls_names}>
            About Us
          </a>
          <a href="/contact-us" className={head_link_cls_names}>
            Contact Us
          </a>
        </div>
        <div className="sm:text-center lg:my-0 mt-3 mb-3 sm:ps-0 ps-2  ">
          <a
            href="/"
            className=" text-md px-4 lg:py-2 py-1 rounded-lg text-amber-700 font-bold outline-double hover:bg-yellow-100 "
          >
            Join Now
          </a>
        </div>
      </div>
    </nav>
  );
}
