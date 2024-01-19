import { GreenCircleIcon, YelloCircleIcon } from "../helper/Icon";
import Faqquestion from "../helper/Faqquestion";

interface Props {
  children?: React.ReactNode;
}
const Faq: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full pt-[90px] sm:pt-[152px] pb-[98px] relative">
      <div className="max-w-[782px] w-full mx-auto px-3 xl:px-0 flex flex-col gap-[52px] ">
        <div className="flex flex-col gap-3">
          <div>
            <h2 className="text-center text-[#163930] text-[35px] leading-[40px] sm:text-[48px] sm:leading-[52px] font-instrument font-bold">
              FAQ<span className="text-[#000F0B]">s</span>
            </h2>
          </div>
          <div>
            <p className="text-center opacity-80 tetx-[#111] font-instrument font-normal text-[16px] leading-6">
              Suspendisse potenti. Vestibulum gravida turpis ut ipsum efficitur,
              id ullamcorper sem semper
            </p>
          </div>
        </div>
        <div>
          <Faqquestion />
        </div>
        <div className="absolute top-[241px] left-[110px] z-[-1]">
          <YelloCircleIcon />
        </div>
        <div className="absolute bottom-[146px] right-[65px] z-[-1]">
          <GreenCircleIcon />
        </div>
      </div>
    </div>
  );
};

export default Faq;
