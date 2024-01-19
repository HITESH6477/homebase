import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavLinks from "./NavLinks";
import MobileNav from "./MobielNav";
import { useRouter } from "next/router";
import { MenuIcon } from "../helper/Icon";

function Navbar() {
  const [activeNavOverlay, setActiveNavOverlay] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (activeNavOverlay) {
      document.body.classList.add("overflow-y-hidden");
      document.body.classList.add("h-screen");
    } else if (!activeNavOverlay) {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [activeNavOverlay]);
  return (
    <>
      <div className="absolute top-0 left-[50%] translate-x-[-50%] w-full z-[999] px-6 lg:px-0 custom_container mx-auto">
        <MobileNav
          activeNavOverlay={activeNavOverlay}
          setActiveNavOverlay={setActiveNavOverlay}
        />
      </div>
      <div
        className={` w-full z-50 ${
          router.pathname === "/"
            ? "absolute py-4"
            : "bg-deepspacerodeo nav-bg-img py-4 xl:py-6 "
        }`}
      >
        <div className="max-w-[1140px] mx-auto px-4 xl:px-0 flex justify-between items-center">
          <div className="">
            <Link href={"/"} className="text-white   text-[20px]  ">
              <img
                className="w-[109px] sm:w-[193px] h-[24px] sm:h-[43px] "
                src={"/img/logo.png"}
                alt="logo img"
              />
            </Link>
          </div>
          <div className="hidden lg:flex">
            <NavLinks />
          </div>{" "}
          <div className="hidden sm:flex  ">
            <button className="font-semibold leading-[150%] text-[18px] w-[179px] h-[59px] rounded-[90px] border-2 border-[#163930] transition duration-300 ease-in-out hover:bg-transparent hover:text-[#163930] text-white font-instrument  bg-[#163930]  ">
              Contact Us
            </button>
          </div>
          <button
            onClick={() => setActiveNavOverlay(true)}
            type="button"
            className="inline-flex items-center justify-center rounded-md  lg:hidden ml-4 "
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
