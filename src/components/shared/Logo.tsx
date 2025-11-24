"use client";

import Image from "next/image";
import Link from "next/link";
import { GiComputing } from "react-icons/gi";
import { GiAllForOne } from "react-icons/gi";

const Logo = () => {
  return (
    <Link href="/" className="flex text-red-500">
      {/* <GiComputing className="hidden cursor-pointer text-4xl mx-4 sm:block " /> */}
      <GiAllForOne className="hidden cursor-pointer text-2xl sm:block mr-1" />
      <span className="hidden cursor-pointer sm:block">xSpark</span>
    </Link>
  );
};

export default Logo;
