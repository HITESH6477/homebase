import React, { useState } from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";
import { CloseIcon } from "../helper/Icon";
interface Props {
  activeNavOverlay: boolean;
  setActiveNavOverlay: any;
}
const MobileNav: React.FC<Props> = ({
  activeNavOverlay,
  setActiveNavOverlay,
}) => {
  return (
    <>
      <div
        className={`fixed lg:hidden  bg-[#F8FCD0]  top-0 h-screen  transition-all duration-200 ease-in z-[41] w-full overflow-y-auto mobile_nav_scrollbar ${
          activeNavOverlay ? "left-0" : "-left-[104%] "
        }`}
      >
        <div className="absolute top-0 left-0 py-4 px-6 h-screen sm:p-6 z-40 flex flex-col items-center justify-center  w-full shadow-lg">
          <div className="flex flex-col mb-8">
            <div className="flex items-center justify-between">
              <div className=""></div>
              <button
                className="absolute top-4 text-[28px] right-5 hover:rotate-180 transition duration-300 ease-in-out text-[#163930] "
                onClick={() => setActiveNavOverlay(false)}
              >
                <CloseIcon />
              </button>
            </div>
          </div>
          <NavLinks />
        </div>
      </div>
    </>
  );
};

export default MobileNav;
