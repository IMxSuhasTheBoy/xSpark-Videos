"use client";

import { signOut } from "next-auth/react";
import MenuItem from "./MenuItem";

import { PiUserSquareFill, PiYoutubeLogo, PiSignOut } from "react-icons/pi";

interface UserMenuProps {
  onClose: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ onClose }) => {
  return (
    <>
      <div
        className="h-screen w-screen fixed z-30 bg-black/50"
        onClick={onClose}
      />
      <div className="absolute rounded-md shadow-md w-72 bg-white dark:bg-zinc-800 right-2 top-16 text-sm flex flex-col overflow-hidden z-40">
        <MenuItem
          attributes={{ title: "Your Channel" }}
          logo={<PiUserSquareFill className="h-7 w-7 mr-4" />}
          label="Channel"
        />
        <MenuItem
          attributes={{ title: "Your Studio" }}
          logo={<PiYoutubeLogo className="h-7 w-7 mr-4" />}
          label="Studio"
        />
        <MenuItem
          attributes={{ title: "Sign out" }}
          logo={<PiSignOut className="h-7 w-7 mr-4" />}
          label="SignOut"
          onClick={() => {
            signOut();
            onClose();
          }}
        />
      </div>
    </>
  );
};

export default UserMenu;
