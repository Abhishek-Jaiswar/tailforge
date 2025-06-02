import React, { Dispatch, SetStateAction } from "react";
import Breadcum from "./Breadcum";
import { MenuIcon } from "lucide-react";

interface HeaderT {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ setIsOpen }: HeaderT) => {
  return (
    <div className="min-h-12 bg-neutral-800/30 border-b border-neutral-700 flex items-center px-6 text-sm text-white w-full">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-center gap-2 cursor-pointer">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle sidebar"
            className="focus:outline-none"
          >
            <MenuIcon className="w-5 h-5 text-neutral-300" />
          </button>
          <Breadcum />
        </div>
        <div>user</div>
      </div>
    </div>
  );
};

export default Header;
