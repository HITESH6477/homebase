import Image from "next/image";
import React from "react";
import { FacebookIcon, InstagramIcon, TwiterIcon } from "../helper/Icon";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-[url(/img/Footer-bg.png)] bg-top bg-cover bg-no-repeat px-3 xl:px-0">
      <div className="max-w-[1140px] w-full mx-auto pt-[110px]  md:pt-[150px] lg:pt-[248px]">
        <div className="flex justify-between lg:flex-row flex-col items-center gap-[50px] ">
          <div className="max-w-[364px] w-full flex flex-col max-lg:text-center max-lg:items-center">
            <Image
              className="sm:w-[268px] sm:h-[60px] w-[109px] h-[24px] "
              src="/img/footer-logo.png"
              height={60}
              width={268}
              alt=""
            />
            <p className="mt-5 text-[#FAFAFA] opacity-[0.8] text-[12px] sm:text-[16px] font-normal font-instrument">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of
            </p>
            <div className="flex mt-[24px] gap-4">
              <Link
                href="https://www.facebook.com/"
                className="hover:scale-110"
              >
                <FacebookIcon />
              </Link>
              <Link href="https://twitter.com/" className="hover:scale-110">
                <TwiterIcon />
              </Link>
              <Link
                href="https://www.instagram.com/"
                className="hover:scale-110"
              >
                <InstagramIcon />
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-[50px] md:gap-[124px] ">
            <div className="flex flex-col gap-[15px]">
              <h3 className="text-white font-instrument text-[14px] sm:text-[20px]  font-medium leading-[28px]">
                Ouick Links
              </h3>
              <Link
                href=""
                className="text-[#FAFAFA] opacity-[0.7] hover:text-white  hover:opacity-100 text-[16px] font-normal leading-[24px]"
              >
                Home
              </Link>
              <Link
                href=""
                className="text-[#FAFAFA] opacity-[0.7] hover:text-white  hover:opacity-100 text-[16px] font-normal leading-[24px]"
              >
                About
              </Link>
              <Link
                href=""
                className="text-[#FAFAFA] opacity-[0.7] hover:text-white  hover:opacity-100 text-[16px] font-normal leading-[24px]"
              >
                Products
              </Link>
              <Link
                href=""
                className="text-[#FAFAFA] opacity-[0.7] hover:text-white  hover:opacity-100 text-[16px] font-normal leading-[24px]"
              >
                Services
              </Link>
            </div>
            <div className="flex flex-col gap-[15px]">
              <h3 className="text-white font-instrument text-[14px] sm:text-[20px] font-medium leading-[28px]">
                Support
              </h3>
              <Link
                href=""
                className="text-[#FAFAFA] opacity-[0.7] hover:text-white  hover:opacity-100 text-[16px] font-normal leading-[24px]"
              >
                +0 00 000 0000
              </Link>
              <Link
                href=""
                className="text-[#FAFAFA] opacity-[0.7] hover:text-white  hover:opacity-100 text-[16px] font-normal leading-[24px]"
              >
                info@hbmc.com
              </Link>
              <Link
                href=""
                className="text-[#FAFAFA] opacity-[0.7] hover:text-white  hover:opacity-100 text-[16px] font-normal leading-[24px]"
              >
                Contact
              </Link>
              <Link
                href=""
                className="text-[#FAFAFA] opacity-[0.7] hover:text-white  hover:opacity-100 text-[16px] font-normal leading-[24px]"
              >
                FAQ
              </Link>
            </div>
            <div className="flex flex-col gap-[15px]">
              <h3 className="text-white font-instrument text-[14px] sm:text-[20px] font-medium leading-[28px]">
                Legal
              </h3>
              <Link
                href=""
                className="text-[#FAFAFA] opacity-[0.7] hover:text-white  hover:opacity-100 text-[16px] font-normal leading-[24px]"
              >
                Terms of Service
              </Link>
              <Link
                href=""
                className="text-[#FAFAFA] opacity-[0.7] hover:text-white  hover:opacity-100 text-[16px] font-normal leading-[24px]"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        <hr className="bg-white opacity-[0.5] mt-[70px] sm:mt-[103px]" />
      </div>
      <div className="py-[24px] text-center ">
        <p className="text-white font-instrument text-[12px] sm:text-[16px] font-normal leading-[25px]">
          HomeBese © {year} | All Rights Reserved
        </p>
      </div>
    </div>
  );
};
export default Footer;
