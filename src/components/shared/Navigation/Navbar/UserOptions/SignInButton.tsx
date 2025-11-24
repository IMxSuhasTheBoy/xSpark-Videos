"use client";

import { Button } from "@/components/ui/button";
import { MdOutlineAccountCircle } from "react-icons/md";
import { signIn } from "next-auth/react";

const SignInButton = () => {
  return (
    <Button
      onClick={() => {
        signIn("google");
      }}
      variant="mode"
      className="flex flex-row gap-1 items-center border-[1px] border-slate-700 rounded-full overflow-hidden px-3 py-1.5 text-blue-400 cursor-pointer"
    >
      <MdOutlineAccountCircle className="h-6 w-6" />
      SignIn
    </Button>
  );
};

export default SignInButton;
