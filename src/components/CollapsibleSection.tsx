"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ReactNode } from "react";
import { FiArrowDown } from "react-icons/fi";

type Props = {
  title: string;
  children: ReactNode;
};

const CollapsibleSection = ({ title, children }: Props) => {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="rounded-xl group">
          <DisclosureButton className="w-full flex justify-between items-center p-3 rounded-xl bg-[#2c3841] z-20 relative hover:bg-[#3b4955]">
            <h2 className="text-xl md:text-3xl font-bold">{title}</h2>
            <FiArrowDown
              className={`text-xl ${open && "rotate-180"} transition-all`}
            />
          </DisclosureButton>
          <div className="overflow-hidden rounded-b-xl -translate-y-3">
            <DisclosurePanel
              transition
              className="bg-[#1f2930] z-10 p-3 pt-6 origin-top transition duration-200 data-[enter]:data-[closed]:-translate-y-full data-[leave]:data-[closed]:-translate-y-full"
            >
              {children}
            </DisclosurePanel>
          </div>
        </div>
      )}
    </Disclosure>
  );
};
export default CollapsibleSection;
