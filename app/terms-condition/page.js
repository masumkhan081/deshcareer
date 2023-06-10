"use client";
import React from "react";
import PrivacyAndTerms from "../common-parts/PrivacyTerms";
import ContactUs from "../contact-us/page";
//
export default function page() {
  return (
    <div className="container mx-auto pt-10 md:px-0 px-2 h-full w-full flex flex-col gap-8">
      <PrivacyAndTerms title="Terms And Condition"/>
      <ContactUs props=" h-fit  mt-18 bg-yellow-50 " />
    </div>
  );
}
