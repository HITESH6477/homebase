import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function NavLinks() {
  const router = useRouter();
  return (
    <>
      <div className="flex lg:flex-row flex-col gap-y-8 lg:gap-x-6 items-center ">
        <Link
          href={"/"}
          className={` border-b-2  text-[20px] lg:text-[16px] font-normal font-instrument leading-[150%] transition-all duration-300 ease-in-out hover:text-[#163930] hover:border-[#163930] ${
            router.pathname === "/"
              ? "text-[#163930] border-[#163930]"
              : "text-[#000F0B]/70 border-transparent"
          }`}
        >
          Home
        </Link>{" "}
        <Link
          href={"#"}
          className={` text-[20px] lg:text-[16px]  border-b-2 font-normal font-instrument leading-[150%] transition-all duration-300 ease-in-out hover:text-[#163930] hover:border-[#163930] ${
            router.pathname === "/about-us"
              ? "text-[#163930] border-[#163930]"
              : "text-[#000F0B]/70 border-transparent"
          }`}
        >
          About Us
        </Link>{" "}
        <Link
          href="#"
          className={` text-[20px] lg:text-[16px]  border-b-2 font-normal font-instrument leading-[150%] transition-all duration-300 ease-in-out hover:text-[#163930] hover:border-[#163930] ${
            router.pathname === "/Features"
              ? "text-[#163930] border-[#163930]"
              : "text-[#000F0B]/70 border-transparent"
          }`}
        >
          Features
        </Link>{" "}
        <Link
          href={"#"}
          className={` text-[20px] lg:text-[16px]  border-b-2 font-normal font-instrument leading-[150%] transition-all duration-300 ease-in-out hover:text-[#163930] hover:border-[#163930] ${
            router.pathname === "/testimonials"
              ? "text-[#163930] border-[#163930]"
              : "text-[#000F0B]/70 border-transparent"
          }`}
        >
          Testimonials
        </Link>{" "}
        <Link
          href="#"
          className={` text-[20px] lg:text-[16px]  border-b-2 font-normal font-instrument leading-[150%] transition-all duration-300 ease-in-out hover:text-[#163930] hover:border-[#163930] ${
            router.pathname === "/faq"
              ? "text-[#163930] border-[#163930]"
              : "text-[#000F0B]/70 border-transparent"
          }`}
        >
          FAQ’s
        </Link>
      </div>
    </>
  );
}

export default NavLinks;
