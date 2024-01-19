import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,

      cssEase: "linear",
    };
    return (
      <Slider {...settings}>
        <div>
          <div className="max-w-[1140px] w-full mx-auto relative px-3 sm:px-[55px] pt-[55px] pb-[50px] sm:pb-[100px]">
            <Image
              className="max-sm:w-0 max-sm:h-0 absolute left-3 md:left-[77px] bottom-2 md:bottom-[55px] "
              src="/img/Client11.png"
              height={80}
              width={80}
              alt="bottom left person"
            />
            <Image
              className="max-sm:w-0 max-sm:h-0 absolute left-10 md:left-[227px] top-[97px]  "
              src="/img/Client12.png"
              height={55}
              width={55}
              alt="top left person"
            />
            <Image
              className="max-sm:w-0 max-sm:h-0 absolute right-1 sm:right-10 md:right-[215px] top-[192px]  "
              src="/img/Client14.png"
              height={48}
              width={48}
              alt="right middle person"
            />
            <Image
              className="max-sm:w-0 max-sm:h-0 absolute right-7 md:right-[74px] top-[97px]  "
              src="/img/Client15.png"
              height={60}
              width={60}
              alt="right top person"
            />
            <Image
              className="max-sm:w-0 max-sm:h-0 absolute right-[65px] bottom-[30px]  "
              src="/img/Client16.png"
              height={69}
              width={69}
              alt="bottom right person"
            />
            <div className="text-center flex flex-col  items-center gap-4 max-w-[671px] mx-auto w-full">
              <Image
                src="/img/Ralphimg.png"
                height={102}
                width={102}
                alt="top middle person"
              />
              <div className="flex flex-col gap-1 items-center">
                <h2 className="text-[#163930] text-[24px] font-semibold leading-[33px] font-Raleway">
                  Ralph Edwards
                </h2>
                <p className="text-black opacity-[0.8] font-Raleway text-[16px] font-normal leading-[24px]">
                  Senior SEO Executive
                </p>
                <Image
                  src="/img/star.png"
                  height={102}
                  width={102}
                  alt="stars"
                />
              </div>
              <p className="text-black opacity-[0.8] font-Raleway text-[16px] font-normal leading-[24px]">
                I am absolutely delighted to share my positive experience as a
                client. From the moment I engaged with the company, I was met
                with exceptional professionalism and dedication to ensuring my
                satisfaction. The level of service provided was truly
                outstanding, and every interaction I had with the team was
                characterized by their unwavering commitment to excellence.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="max-w-[1140px] w-full mx-auto relative px-3 sm:px-[55px] pt-[55px] pb-[50px] sm:pb-[100px]">
            <Image
              className="max-sm:w-0 max-sm:h-0 absolute left-3 md:left-[77px] bottom-2 md:bottom-[55px] "
              src="/img/Client11.png"
              height={80}
              width={80}
              alt="bottom left person"
            />
            <Image
              className="max-sm:w-0 max-sm:h-0 absolute left-10 md:left-[227px] top-[97px]  "
              src="/img/Client12.png"
              height={55}
              width={55}
              alt="top left person"
            />
            <Image
              className="max-sm:w-0 max-sm:h-0 absolute right-1 sm:right-10 md:right-[215px] top-[192px]  "
              src="/img/Client14.png"
              height={48}
              width={48}
              alt="right middle person"
            />
            <Image
              className="max-sm:w-0 max-sm:h-0 absolute right-7 md:right-[74px] top-[97px]  "
              src="/img/Client15.png"
              height={60}
              width={60}
              alt="right top person"
            />
            <Image
              className="max-sm:w-0 max-sm:h-0 absolute right-[65px] bottom-[30px]  "
              src="/img/Client16.png"
              height={69}
              width={69}
              alt="bottom right person"
            />
            <div className="text-center flex flex-col  items-center gap-4 max-w-[671px] mx-auto w-full">
              <Image
                src="/img/Ralphimg.png"
                height={102}
                width={102}
                alt="top middle person"
              />
              <div className="flex flex-col gap-1 items-center">
                <h2 className="text-[#163930] text-[24px] font-semibold leading-[33px] font-Raleway">
                  Ralph Edwards
                </h2>
                <p className="text-black opacity-[0.8] font-Raleway text-[16px] font-normal leading-[24px]">
                  Senior SEO Executive
                </p>
                <Image
                  src="/img/star.png"
                  height={102}
                  width={102}
                  alt="stars"
                />
              </div>
              <p className="text-black opacity-[0.8] font-Raleway text-[16px] font-normal leading-[24px]">
                I am absolutely delighted to share my positive experience as a
                client. From the moment I engaged with the company, I was met
                with exceptional professionalism and dedication to ensuring my
                satisfaction. The level of service provided was truly
                outstanding, and every interaction I had with the team was
                characterized by their unwavering commitment to excellence.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="max-w-[1140px] w-full mx-auto relative px-3 sm:px-[55px] pt-[55px] pb-[50px] sm:pb-[100px]">
            <Image
              className="max-sm:w-0 max-sm:h-0 absolute left-3 md:left-[77px] bottom-2 md:bottom-[55px] "
              src="/img/Client11.png"
              height={80}
              width={80}
              alt="bottom left person"
            />
            <Image
              className="max-sm:w-0 max-sm:h-0 absolute left-10 md:left-[227px] top-[97px]  "
              src="/img/Client12.png"
              height={55}
              width={55}
              alt="top left person"
            />
            <Image
              className="max-sm:w-0 max-sm:h-0 absolute right-1 sm:right-10 md:right-[215px] top-[192px]  "
              src="/img/Client14.png"
              height={48}
              width={48}
              alt="right middle person"
            />
            <Image
              className="max-sm:w-0 max-sm:h-0 absolute right-7 md:right-[74px] top-[97px]  "
              src="/img/Client15.png"
              height={60}
              width={60}
              alt="right top person"
            />
            <Image
              className="max-sm:w-0 max-sm:h-0 absolute right-[65px] bottom-[30px]  "
              src="/img/Client16.png"
              height={69}
              width={69}
              alt="bottom right person"
            />
            <div className="text-center flex flex-col  items-center gap-4 max-w-[671px] mx-auto w-full">
              <Image
                src="/img/Ralphimg.png"
                height={102}
                width={102}
                alt="top middle person"
              />
              <div className="flex flex-col gap-1 items-center">
                <h2 className="text-[#163930] text-[24px] font-semibold leading-[33px] font-Raleway">
                  Ralph Edwards
                </h2>
                <p className="text-black opacity-[0.8] font-Raleway text-[16px] font-normal leading-[24px]">
                  Senior SEO Executive
                </p>
                <Image
                  src="/img/star.png"
                  height={102}
                  width={102}
                  alt="stars"
                />
              </div>
              <p className="text-black opacity-[0.8] font-Raleway text-[16px] font-normal leading-[24px]">
                I am absolutely delighted to share my positive experience as a
                client. From the moment I engaged with the company, I was met
                with exceptional professionalism and dedication to ensuring my
                satisfaction. The level of service provided was truly
                outstanding, and every interaction I had with the team was
                characterized by their unwavering commitment to excellence.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="max-w-[1140px] w-full mx-auto relative px-3 sm:px-[55px] pt-[55px] pb-[50px] sm:pb-[100px]">
            <Image
              className="max-sm:w-0 max-sm:h-0 absolute left-3 md:left-[77px] bottom-2 md:bottom-[55px] "
              src="/img/Client11.png"
              height={80}
              width={80}
              alt="bottom left person"
            />
            <Image
              className="max-sm:w-0 max-sm:h-0 absolute left-10 md:left-[227px] top-[97px]  "
              src="/img/Client12.png"
              height={55}
              width={55}
              alt="top left person"
            />
            <Image
              className="max-sm:w-0 max-sm:h-0 absolute right-1 sm:right-10 md:right-[215px] top-[192px]  "
              src="/img/Client14.png"
              height={48}
              width={48}
              alt="right middle person"
            />
            <Image
              className="max-sm:w-0 max-sm:h-0 absolute right-7 md:right-[74px] top-[97px]  "
              src="/img/Client15.png"
              height={60}
              width={60}
              alt="right top person"
            />
            <Image
              className="max-sm:w-0 max-sm:h-0 absolute right-[65px] bottom-[30px]  "
              src="/img/Client16.png"
              height={69}
              width={69}
              alt="bottom right person"
            />
            <div className="text-center flex flex-col  items-center gap-4 max-w-[671px] mx-auto w-full">
              <Image
                src="/img/Ralphimg.png"
                height={102}
                width={102}
                alt="top middle person"
              />
              <div className="flex flex-col gap-1 items-center">
                <h2 className="text-[#163930] text-[24px] font-semibold leading-[33px] font-Raleway">
                  Ralph Edwards
                </h2>
                <p className="text-black opacity-[0.8] font-Raleway text-[16px] font-normal leading-[24px]">
                  Senior SEO Executive
                </p>
                <Image
                  src="/img/star.png"
                  height={102}
                  width={102}
                  alt="stars"
                />
              </div>
              <p className="text-black opacity-[0.8] font-Raleway text-[16px] font-normal leading-[24px]">
                I am absolutely delighted to share my positive experience as a
                client. From the moment I engaged with the company, I was met
                with exceptional professionalism and dedication to ensuring my
                satisfaction. The level of service provided was truly
                outstanding, and every interaction I had with the team was
                characterized by their unwavering commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}
