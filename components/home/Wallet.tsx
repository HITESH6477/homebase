import Image from "next/image";
import React from "react";

interface Props {
  children?: React.ReactNode;
}
const Wallet: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className=" max-sm:bg-[#FDFFE8] sm:bg-walletbgimg bg-no-repeat bg-cover  sm:mt-[48px] ">
        <div className="max-w-[1140px] w-full mx-auto px-3 xl:px-0">
          <div className="pt-[50px] sm:pt-[176px] flex flex-col-reverse  items-center  lg:flex-row gap-[40px] sm:gap-[52px]">
            <Image
              src="/img/mobile-card-img.png"
              alt="mobile image"
              width={461}
              height={455}
            />
            <div className="lg:mt-[70px] max-w-[627px] w-full ">
              <p className=" font-instrument font-bold text-[28px] sm:text-[48px] text-black leading-[32px] sm:leading-[52px] capitalize ">
                Join over 20 Million others and open a wallet
              </p>
              <p className=" font-instrument font-normal text-[16px] pt-[16px] text-black leading-[24px] opacity-[0.8]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                auctor facilisis diam a commodo. Curabitur ipsum enim, pulvinar
                id feugiat et, sodales id massa. In tincidunt pulvinar
                sollicitudin. Quisque sodales at massa id venenatis. Donec
                posuere, lacus et ultricies semper, mi tortor porta erat, non
                ultrices sapien nibh vitae eros. Vivamus nec nulla vel arcu
                consequat ultrices. Duis mollis arcu eu felis tincidunt
                consequat. Maecenas quis sodales nulla. Nullam posuere at elit
                ut efficitur. Interdum et malesuada fames ac ante ipsum primis
                in faucibus. Suspendisse ante nunc, consequat et elit in, ornare
                tincidunt lacus. Aenean et neque elit.
              </p>
            </div>
          </div>
          <div className="pt-[50px] sm:pt-[147px] pb-[50px] lg:pb-[219px] flex flex-col items-center gap-[40px] sm:gap-[55px] lg:flex-row  ">
            <div className="max-w-[558px] w-full">
              <p className=" font-instrument font-bold text-[28px] sm:text-[48px] text-black leading-[32px] sm:leading-[52px] capitalize">
                Find a better card deal in few easy steps.
              </p>
              <p className=" font-instrument font-normal mt-[16px] text-[16px] text-black leading-[24px] opacity-[0.8]">
                Vrnean viverra, nulla in sodales semper, urna erat viverra enim,
                eget bibendum lectus erat a ante. Aliquam porttitor eleifend
                vehicula. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Nunc vel nisl sed felis
                tristique semper in nec ligula. Nam auctor rutrum aliquet. Fusce
                porta felis id ultrices elementum. Curabitur a maximus ante, vel
                aliquam nisl. Duis auctor sem quis augue bibendum, non mattis
                leo tempor. Vivamus ac dictum tellus. Pellentesque non quam
                condimentum, pulvinar neque at, imperdiet mauris.{" "}
              </p>
            </div>
            <div>
              <Image
                className=" shadow-xl"
                src="/img/dashboard-card-img.png"
                alt="dashboard image"
                width={500}
                height={419}
              />
              <Image
                className="ml-[-20px] sm:ml-[-65px] mt-[-135px] sm:mt-[-195px]"
                src="/img/Credit-card-img.png"
                alt="card image"
                width={385}
                height={242}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallet;
