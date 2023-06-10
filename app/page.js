import Image from "next/image";
import { AiTwotoneMail } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import ContactUs from "./common-parts/ContactUs";

export default function Home() {
  return (
    <main className="container h-full w-full mx-auto transition-opacity pt-10 sm:px-0 px-2 md:my-18 sm:my-10  my-4">
      <h1 className="text-4xl text-orange-900 font-bold font-sans">
        Get Smarter About Your Career
      </h1>

      <form className="w-full max-w-sm mt-10">
        <span className="font-mono text-base">
          Get the 5-minute newsletter keeping about smart career
        </span>
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
