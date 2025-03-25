"use client";
import { ReactNode, useState } from "react";
import { FiArrowDown, FiX } from "react-icons/fi";

type Props = {
  title: string;
  children: ReactNode;
};

export const CollapsibleSection = ({ title, children }: Props) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <details
      className="bg-[#1f2930] rounded-xl"
      onToggle={() => handleToggle()}
      open={open}
    >
      <summary className="w-full flex justify-between items-center p-3 rounded-xl bg-[#2c3841] z-20 relative cursor-pointer hover:bg-[#3b4955]">
        <h2 className="text-xl md:text-3xl font-bold">{title}</h2>
        {/* <FiArrowDown className={`text-xl ${open && "rotate-180"} transition-all`} /> */}
        {open ? (
          <FiX className={`text-xl transition-all`} />
        ) : (
          <FiArrowDown className={`text-xl transition-all`} />
        )}
      </summary>
      <div className="bg-[#1f2930] p-3 rounded-b-xl">{children}</div>
    </details>
  );
};

export default CollapsibleSection;
