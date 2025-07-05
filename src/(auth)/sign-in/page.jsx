"use client";
import { Toaster, toast } from "sonner";
import { Icons } from "@/components/Icons";
import { Anvil } from "lucide-react";
import { signIn } from "next-auth/react";
import { buttonVariants } from "@/components/ui/button";
import { useState } from "react";

export default function Signin() {
  const [loading, setloading] = useState(false);
  const onSignin = async () => {
    try {
      setloading(true);
      await signIn("google");
    } catch (error) {
      console.log(error.message);
      toast.error("failed signing in");
    } finally {
      setloading(false);
    }
  };
  return (
    <section className="w-full h-screen flex  justify-center items-center">
      <div className="w-full  sm:w-1/2 md:w-1/5 p-4 rounded-lg mx-4 bg-zinc-800  justify-center flex flex-col items-center gap-4">
        <Anvil className="size-16 text-gray-300" />
        <p className="text-center text-sm text-gary-200"> Welcome user </p>
        <button
          onClick={onSignin}
          className="flex gap-2 items-center bg-gray-800/50 px-10 py-1 rounded font-bold text-lg hover:bg-gray-200 transition-colors duration-200"
        >
          <Icons.COmpLogo className="size-8 " />{" "}
          {loading ? "loading..." : "sign in"}
        </button>
      </div>
    </section>
  );
}
