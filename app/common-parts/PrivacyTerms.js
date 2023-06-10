"use client";
import React from "react";
import { animated, useSpring } from "@react-spring/web";

//
export default function PrivacyAndTerms({ title }) {
  const springs_h1 = useSpring({
    from: {
      textAlign: "left",
      transitionDuration: "3s",
    },
    to: {
      textAlign: "center",
      transitionDuration: "3s",
    },
  });

  return (
    <>
      <section className="block font-mono text-base text-start sm:mt-6 mt-4">
        <animated.h1
          style={{ ...springs_h1 }}
          className="sm:text-4xl text-3xl text-orange-900 font-bold font-sans text-center mb-3"
        >
          {title}
        </animated.h1>
        <p>
          Effective date: April 04, 2023. Bangla Puzzle Limited ("us", "we", or
          "our") operates the www.deshcareer.com website (the "Service"). This
          page informs you of our policies regarding the collection, use, and
          disclosure of personal data when you use our Service and the choices
          you have associated with that data. Our Privacy Policy for Desh Career
          is created. We use your data to provide and improve the Service. By
          using the Service, you agree to this policy's collection and use of
          information. Unless otherwise defined in this Privacy Policy, terms
          used in this Privacy Policy have the same meanings as in our Terms and
          Conditions, accessible from www.deshcareer.com
        </p>
      </section>
      <div className="flex flex-col gap-6">
        <section>
          <h2 className="sm:text-2xl text-xl font-semibold text-amber-800 font-serif">
            Information Collection And Use
          </h2>
          <p>
            Information Collection And Use We collect several different types of
            information for various purposes to provide and improve our Service
            to you.
          </p>
        </section>

        <section>
          <h2 className="sm:text-2xl text-xl font-semibold text-amber-800 font-serif">
            Types of Data Collected
          </h2>
          <section className="sm:ps-6 ps-3 mt-3">
            <h3 className="sm:text-xl text-lg font-semibold text-amber-700  drop-shadow-lg ">
              Personal Data
            </h3>
            <p>
              While using our Service, we may ask you to provide us with certain
              personally identifiable information that can be used to contact or
              identify you ("Personal Data"). Personally, identifiable
              information may include, but is not limited to:
            </p>
            <ul className="list-inside list-disc hover:list-decimal w-fit border-t-4 border-b-2 py-2 px-10 my-2 bg-amber-100 border-amber-200">
              <li> Email address</li>
              <li> Your mobile number</li>
              <li> Professional Info </li>
              <li>Cookies and Usage Data</li>
            </ul>
          </section>
          <section className="sm:ps-6 ps-3 mt-3">
            <h3 className="sm:text-xl text-lg font-semibold text-amber-700 drop-shadow-lg ">
              Usage Data
            </h3>
            <p>
              We may also collect information on how the Service is accessed and
              used ("Usage Data"). This Usage Data may include information such
              as your computer's Internet Protocol address (e.g. IP address),
              browser type, browser version, the pages of our Service that you
              visit, the time and date of your visit, the time spent on those
              pages, unique device identifiers and other diagnostic data.
            </p>
          </section>
          <section className="sm:ps-6 ps-3 mt-3">
            <h3 className="sm:text-xl text-lg font-semibold text-amber-700  drop-shadow-lg ">
              Tracking & Cookies Data
            </h3>
            <p>
              We use cookies and similar tracking technologies to track the
              activity on our Service and hold certain information.
            </p>
            <p>
              Cookies are files with a small amount of data that may include an
              anonymous unique identifier. Cookies are sent to your browser from
              a website and stored on your device. Tracking technologies also
              used are beacons, tags, and scripts to collect and track
              information and to improve and analyze our Service.
            </p>
            <p>
              You can instruct your browser to refuse all cookies or to indicate
              when a cookie is being sent. However, if you do not accept
              cookies, you may not be able to use some portions of our Service.
            </p>
          </section>
          <section className="sm:ps-6 ps-3 mt-3">
            <h3 className="sm:text-xl text-lg font-semibold text-amber-700  drop-shadow-lg ">
              Examples of Cookies we use:
            </h3>
            <ul className="list-inside list-disc hover:list-decimal w-fit border-t-4 border-b-2 py-2 px-10 my-2 bg-amber-100 border-amber-200">
              <li>
                Session Cookies. We use Session Cookies to operate our Service.
              </li>
              <li>
                Preference Cookies. We use Preference Cookies to remember your
                preferences and various settings
              </li>
              <li>
                Security Cookies. We use Security Cookies for security purposes.
              </li>
            </ul>
          </section>
        </section>
        <section>
          <h2 className="sm:text-2xl text-xl font-semibold text-amber-800 font-serif">
            Use Of Data
          </h2>
          <span className="">
            Desh Career uses the collected data for various purposes:
          </span>
          <ul className="list-inside list-disc hover:list-decimal w-fit border-t-4 border-b-2 py-2 px-10 my-2 bg-amber-100 border-amber-200">
            <li>To provide and maintain the Service</li>
            <li> To notify you about changes to our Service</li>
            <li>
              To allow you to participate in interactive features of our Service
              when you choose to do so
            </li>
            <li>To provide customer care and support</li>
            <li>
              To provide analysis or valuable information so that we can improve
              the Service
            </li>
            <li>To monitor the usage of the Service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>
        </section>
        <section>
          <h2 className="sm:text-2xl text-xl font-semibold text-amber-800 font-serif">
            Transfer Of Data
          </h2>
          <p>
            Your information, including Personal Data, may be transferred to —
            and maintained on — computers located outside of your state,
            province, country, or other governmental jurisdiction where the data
            protection laws may differ from those of your jurisdiction.
          </p>
          <p>
            If you are located outside Bangladesh and choose to provide
            information to us, please note that we transfer the data, including
            Personal Data, to Bangladesh and process it there.
          </p>
          <p>
            Your consent to this Privacy Policy followed by your submission of
            such information represents your agreement to that transfer.
          </p>
          <p>
            Desh Career will take all steps reasonably necessary to ensure that
            your data is treated securely and by this Privacy Policy and no
            transfer of your Personal Data will take place to an organization or
            a country unless there are adequate controls in place including the
            security of your data and other personal information.
          </p>
        </section>
        <section>
          <h2 className="sm:text-2xl text-xl font-semibold text-amber-800 font-serif">
            Disclosure Of Data
          </h2>
          <section className="sm:ps-6 ps-3 mt-3">
            <h3 className="sm:text-xl text-lg font-semibold text-amber-700  drop-shadow-lg ">
              Legal Requirements
            </h3>
            <span>
              Desh Career may disclose your Data in the good faith belief that
              such action is necessary to:
            </span>
            <ul className="list-inside list-disc hover:list-decimal w-fit border-t-6 border-b-4 py-2 px-5 my-2 bg-amber-100 border-amber-200">
              <li>To comply with a legal obligation</li>
              <li>
                To protect and defend the rights or property of{" "}
                <a href="https://deshcareer.com/privacy/www.banglapuzzle.com">
                  Bangla Puzzle
                </a>
              </li>
              <li>
                To prevent or investigate possible wrongdoing in connection with
                the Service
              </li>
              <li>
                To protect the personal safety of users of the Service or the
                public
              </li>
              <li>
                To provide analysis or valuable information so that we can
                improve the Service
              </li>
              <li>To protect against legal liability</li>
            </ul>
          </section>
          <section className="sm:ps-6 ps-3 mt-3">
            <h3 className="sm:text-xl text-lg font-semibold text-amber-700  drop-shadow-lg ">
              Security Of Data
            </h3>
            <p>
              The security of your data is important to us, but remember that no
              method of transmission over the Internet, or method of electronic
              storage is 100% secure. While we strive to use commercially
              acceptable means to protect your Personal Data, we cannot
              guarantee its absolute security.
            </p>
          </section>
          <section className="sm:ps-6 ps-3 mt-3">
            <h3 className="sm:text-xl text-lg font-semibold text-amber-700  drop-shadow-lg ">
              Service Providers
            </h3>
            <p>
              We may employ third-party companies and individuals to facilitate
              our Service ("Service Providers"), to provide the Service on our
              behalf, perform Service-related services, or assist us in
              analyzing how our Service is used.
            </p>
            <p>
              These third parties have access to your Personal Data only to
              perform these tasks on our behalf and are obligated not to
              disclose or use it for any other purpose.
            </p>
          </section>
          <section className="sm:ps-6 ps-3 mt-3">
            <h3 className="sm:text-xl text-lg font-semibold text-amber-700  drop-shadow-lg ">
              Links To Other Sites
            </h3>
            <p>
              Our Service may contain links to other sites that are not operated
              by us. If you click on a third-party link, you will be directed to
              that third party's site. We strongly advise you to review the
              Privacy Policy of every site you visit.
            </p>
            <p>
              We have no control over and assume no responsibility for the
              content, privacy policies, or practices of any third-party sites
              or services.
            </p>
          </section>
          <section className="sm:ps-6 ps-3 mt-3">
            <h3 className="sm:text-xl text-lg font-semibold text-amber-700  drop-shadow-lg ">
              Changes To This Privacy Policy
            </h3>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
            </p>
            <p>
              We will let you know via email and/or a prominent notice on our
              Service before the change becomes effective and update the
              "effective date" at the top of this Privacy Policy.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>
          </section>
        </section>
      </div>
    </>
  );
}
