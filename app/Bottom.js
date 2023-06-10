"use client";
import React from "react";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import Logo from "./resource/deshcareer-logo.png";

export default function Bottom() {
  const btm_link_cls_names =
    "text-blue-600 hover:first-letter:font-bold hover:first-letter:bg-white hover:text-amber-600 hover:first-letter:px-1 hover:first-letter:rounded-lg";

  return (
    <div className="bg-amber-100 flex flex-col py-6 sm:py-8">
      <div className="flex justify-center gap-7 ">
        <a href="https://www.facebook.com/deshcareer">
          <FaFacebook size={30} className="text-amber-700 drop-shadow-md" />
        </a>
        <a href="https://www.youtube.com/channel/UCQB33GJ0C3pL3IpxpVFQS2Q">
          <FaYoutube size={34} className="text-amber-700 drop-shadow-md" />
        </a>
        <a
          href="https://www.linkedin.com/company/deshcareer"
          className="hover:border-b-2"
        >
          <FaLinkedin size={30} className="text-amber-700 drop-shadow-md" />
        </a>
      </div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 py-4 sm:py-6 gap-y-5 border-b-2  border-amber-800 rounded-md sm:mt-10 mt-3 md:mx-4 sm:px-2 lg:mx-8">
        <div className="flex-col first-letter:">
          <Image
            src={Logo}
            className=" h-12 w-28 drop-shadow-md mx-auto"
            width="54"
            height="54"
          ></Image>
          <span className="text-center block">
            Desh Career is Career based newsletter in Bengali language. This
            newsletter has published weekly. This is published in every Saturday
            at 12.00 PM.
          </span>
        </div>

        <div className="flex flex-col gap-y-3">
          <span className="block text-center text-amber-700 font-bold text-xl drop-shadow-md">
            Privacy And Terms
          </span>
          <ul className="flex flex-col justify-center  items-center gap-2  py-2">
            <li className={btm_link_cls_names}>
              <a href="/terms-condition">Privacy Policy</a>
            </li>
            <li className={btm_link_cls_names}>
              <a href="/terms-condition">Terms Condition</a>
            </li>
            <li className={btm_link_cls_names}>
              <a href="/privacy-policy">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-3">
          <span className="block text-center text-amber-700 font-bold text-xl drop-shadow-md">
            Support
          </span>
          <ul className="flex flex-col justify-center  items-center gap-2 py-2">
            <li className={btm_link_cls_names}>
              <a href="/terms-condition">Terms</a>
            </li>
            <li className={btm_link_cls_names}>
              <a href="/terms-condition">Cookie Policy</a>
            </li>
            <li className={btm_link_cls_names}>
              <a href="/privacy-policy">Privacy</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="   flex md:flex-row flex-col items-center justify-between md:px-8 sm:px-2 py-2">
        <span>© 2023 Newsletter E-mail Service: All Copy right reserved</span>
        <ul className="flex flex-grow justify-center lg:justify-end gap-4   ">
          <li className="text-blue-600">
            <a href="/terms-condition">Terms</a>
          </li>
          <li className="text-blue-600">
            <a href="/terms-condition">Cookie Policy</a>
          </li>
          <li className="text-blue-600">
            <a href="/privacy-policy">Privacy</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
