import React from "react";
import {
  ChanageTextIcon,
  ChangeCardTextIcon,
  HeroShadowIcon,
  HeroShadowIcon2,
  HeroShadowIcon3,
} from "../helper/Icon";

const Hero = () => {
  return (
    <div className="lg:h-[893px] max-w-[1920px] mx-auto w-full relative z-40  flex items-end pt-28 lg:py-0 lg:pb-[132px]">
      <span className="absolute z-[-1] left-0 top-0">
        <HeroShadowIcon2 />
      </span>
      <div className="max-w-[1140px] w-full z-50 mx-auto sm:px-3 xl:px-0 flex flex-col justify-between  lg:flex-row lg:items-center gap-9 sm:gap-5 ">
        <div className="z-50 px-3 sm:px-0  relative">
          <div className="relative z-50">
            <h1 className="text-[36px] sm:text-[50px] sm:block hidden md:text-[64px]  font-instrument font-bold leading-[120%] text-[#000F0B] max-w-[632px]   ">
              Discover The <br />
              Perfect{" "}
              <span className="relative z-20  ">
                Charge Card
                <ChangeCardTextIcon />
              </span>{" "}
              <span className="flex items-center flex-col sm:flex-row  gap-5">
                For You{" "}
                <img
                  className="h-[57px] mt-2 rounded-[65px] w-[166px] "
                  src="/img/hero-cards.gif"
                  alt=""
                />{" "}
              </span>
            </h1>
            <h1 className="text-[30px] sm:hidden sm:text-[50px] md:text-[64px]  font-instrument font-bold leading-[130%] text-[#000F0B] max-w-[632px]   ">
              Discover The <br />
              Perfect{" "}
              <span className="relative z-20  ">
                Charge
                <span className="absolute top-2 left-[-5px] z-[-1]">
                  <ChanageTextIcon />
                </span>
              </span>{" "}
              <span className="flex items-center   gap-2">
                Card For You{" "}
                <img
                  className="h-[34px] mt-2 rounded-[65px] w-[110px] "
                  src="/img/hero-cards.gif"
                  alt=""
                />{" "}
              </span>
            </h1>
            <span className="absolute z-[-1] md:block hidden bottom-0 sm:bottom-[-247px] left-0 sm:left-[-150px]">
              <HeroShadowIcon />
            </span>
          </div>
          <p className="text-[14px] sm:text-[16px]  flex relative z-50  font-normal leading-[155%] sm:leading-[150%] font-instrument text-[#000F0B] max-w-[259px] sm:max-w-[558px] mt-4  ">
            Lorem ipsum dolor sit amet consectetur. Risus velit aliquam
            porttitor ullamcorper. Non molestie orci eu justo ac.
          </p>
          <div className="mt-5 flex  sm:hidden items-center gap-3 sm:gap-4">
            <div className="flex items-center">
              <img
                className="w-[36px] sm:w-[48px] "
                src="/img/user-img-1.png"
                alt="user-img-1"
              />
              <img
                className="-ml-[9px] sm:-ml-4 w-[36px] sm:w-[48px]"
                src="/img/user-img-2.png"
                alt="user-img-1"
              />
              <img
                className="-ml-[9px] sm:-ml-4 w-[36px] sm:w-[48px] "
                src="/img/user-img-3.png"
                alt="user-img-1"
              />
            </div>
            <div>
              <h5 className="text-[13px] sm:text-[18px]  font-instrument font-medium leading-[145%] text-black">
                10.2k+
              </h5>
              <p className="text-[10px] sm:text-[14px] font-instrument font-normal leading-[155%] text-[#ADB2B1]    ">
                Active users around the world wide
              </p>
            </div>
          </div>
          <div className="mt-7 sm:mt-[66px] relative z-50  flex sm:flex-row flex-col sm:items-center  gap-4 sm:gap-6">
            <button className="font-semibold leading-[150%] text-[18px] w-full max-w-[328px] sm:max-w-full sm:w-[179px] h-[59px] rounded-[90px] border-2 border-[#163930] transition duration-300 ease-in-out hover:bg-transparent hover:text-[#163930] text-white font-instrument  bg-[#163930]  ">
              Contact Us
            </button>
            <button className="font-semibold leading-[150%] text-[18px] w-full max-w-[328px] sm:max-w-full sm:w-[196px] h-[59px] rounded-[90px] border-2 border-[#163930] transition duration-300 ease-in-out bg-transparent text-[#163930] hover:text-white font-instrument  hover:bg-[#163930]  ">
              Book a Demo
            </button>
          </div>
          <div className="mt-7 sm:mt-[57px]   sm:flex hidden items-center gap-3 sm:gap-4">
            <div className="flex items-center">
              <img
                className="w-[36px] sm:w-[48px] "
                src="/img/user-img-1.png"
                alt="user-img-1"
              />
              <img
                className="-ml-[9px ] sm:-ml-4 w-[36px] sm:w-[48px]"
                src="/img/user-img-2.png"
                alt="user-img-1"
              />
              <img
                className="-ml-[9px ] sm:-ml-4 w-[36px] sm:w-[48px] "
                src="/img/user-img-3.png"
                alt="user-img-1"
              />
            </div>
            <div>
              <h5 className="text-[13px] sm:text-[18px]  font-instrument font-medium leading-[145%] text-black">
                10.2k+
              </h5>
              <p className="text-[10px] sm:text-[14px] font-instrument font-normal leading-[155%] text-[#ADB2B1]    ">
                Active users around the world wide
              </p>
            </div>
          </div>
        </div>
        <div className="lg:hidden flex flex-col items-center">
          <img
            className="w-[208px] md:w-[300px] lg:w-[377px] mb-[-98px] md:mb-[-184px] lg:mb-[-217px]  ml-[-43px] md:ml-[-34px] z-10"
            src="/img/home-base-card-img.png"
            alt="hand img "
          />
          <img
            className="w-[700px] md:block hidden lg:w-[819px]"
            src="/img/hand-img.png"
            alt="hand img "
          />
          <img
            className="max-w-[375px] h-[296px] w-full  md:hidden"
            src="/img/hand-mobile-img.png"
            alt="hand img "
          />
        </div>
      </div>
      <span className="absolute z-[-1]  top-0 right-0">
        <HeroShadowIcon3 />
      </span>

      <div className="absolute hidden  lg:flex items-center flex-col bottom-0 right-0 z-[-1]">
        <img
          className="w-[335px] xl:w-fit mb-[-184px] xl:mb-[-217px] 2xl:mb-[-241px]  xl:ml-[-34px] z-10"
          src="/img/home-base-card-img.png"
          alt="hand img "
        />
        <img
          className="w-[650px] xl:w-[819px] 2xl:w-[913px]"
          src="/img/hand-img.png"
          alt="hand img "
        />
      </div>
    </div>
  );
};

export default Hero;
