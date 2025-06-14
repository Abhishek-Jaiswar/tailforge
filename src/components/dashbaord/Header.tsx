import React, { Dispatch, SetStateAction } from "react";
import Breadcum from "./Breadcum";
import { MenuIcon } from "lucide-react";

interface HeaderT {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ setIsOpen }: HeaderT) => {
  return (
    <div className="h-12 bg-neutral-800/30 border-b border-neutral-700">
      <div className="flex items-center justify-between h-full px-6 text-sm text-white">
        <div className="flex items-center justify-center gap-2">
          {/* Menu button - visible on all devices */}
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
