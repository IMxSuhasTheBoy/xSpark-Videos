"use client";

import { ModeToggle } from "@/components/ui/mode-toggle";
import { MdMenu } from "react-icons/md";
import IconButton from "../IconButton";
import Logo from "../Logo";
import { Separator } from "@/components/ui/separator";
const NavigationHeader = () => {
  return (
    <div className="flex flex-row items-center">
      <IconButton className="mr-2">
        <MdMenu className="h-6 w-6" />
      </IconButton>
      <Separator orientation="vertical" decorative={true} />
      <Logo />
      <ModeToggle />
    </div>
  );
};

export default NavigationHeader;
