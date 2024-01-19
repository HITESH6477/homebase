import { Disclosure, Transition } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "./Icon";
import { queData } from "./Helper";

interface Props {
  children?: React.ReactNode;
}
const Faqquestion: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col gap-4">
      {queData.map((items, index) => (
        <Disclosure key={index}>
          {({ open }) => (
            <div
              className={`mx-auto w-full max-w-[786px] rounded-2xl bg-white p-3 mt-3 ] ${
                open
                  ? "shadow-[0px_0px_24px_0px_rgba(0,0,0,0.08)]"
                  : "border-[0.5px] border-[rgba(0,0,0,0.10)]"
              }`}
            >
              <div className="flex flex-col gap-2">
                <Disclosure.Button className="flex w-full justify-between text-[#111] font-instrument text-[16px] leading-6 font-medium text-left gap-3">
                  <span>{items.que}</span>
                  <div
                    className={` transition-all duration-200 ease-in-out ${
                      open ? "rotate-180 transform" : ""
                    }`}
                  >
                    {open ? <MinusIcon /> : <PlusIcon />}
                  </div>
                </Disclosure.Button>
                <Transition
                  show={open}
                  className="transition-all duration-500 overflow-hidden"
                  enterFrom="transform scale-95 opacity-0 max-h-0"
                  enterTo="transform scale-100 opacity-100 max-h-[1000px]"
                  leaveFrom="transform scale-100 opacity-100 max-h-[1000px]"
                  leaveTo="transform scale-95 opacity-0 max-h-0"
                >
                  <Disclosure.Panel className="text-[#111] font-instrument text-[16px] leading-6 font-normal opacity-80">
                    {items.ans}
                  </Disclosure.Panel>
                </Transition>
              </div>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  );
};

export default Faqquestion;
