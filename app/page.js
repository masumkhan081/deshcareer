"use client";
import React, { useRef, useState } from "react";
import { AiTwotoneMail } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import ContactUs from "./common-parts/ContactUs";

export default function Home() {
  const [error, setError] = useState("");
  const emalRef = useRef();

  function handleSave(e) {
    e.preventDefault();
    console.log("on handleSave ..");
    const email = emalRef.current.value;
    if (
      email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setError("Let's assume you are joined");
      setTimeout(() => {
        setError("");
      }, 3000);
    } else {
      setError("Invalid email");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  }

  return (
    <main className="container h-full w-full mx-auto transition-opacity pt-10 sm:px-0 px-2 md:my-18 sm:my-10  my-4">
      <h1 className="text-4xl text-orange-900 font-bold font-sans">
        Get Smarter About Your Career
      </h1>

      <form className="w-full max-w-sm mt-10" onSubmit={handleSave}>
        <span className="font-mono text-base">
          Get the 5-minute newsletter keeping about smart career
        </span>
        <div className="flex items-center border-b border-teal-500 py-2">
          <MdEmail className="flex-shrink-0 text-amber-600" size={18} />
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="email"
            ref={emalRef}
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
        <span
          style={{ minHeight: "18px" }}
          className="text-lg text-teal-700 font-semibold"
        >
          {error}
        </span>
      </form>
      <span className="mt-7 block">
        We're committed to your privacy. DashCareer uses the information you
        provide to contact you about our relevant content and services. You may
        unsubscribe from these communications at any time. For more information,
        check out our Privacy Policy.
      </span>
      <ContactUs props=" h-fit  mt-24 bg-yellow-50 " />
    </main>
  );
}
