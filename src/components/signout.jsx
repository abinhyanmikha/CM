"use client";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export default function Signout() {
  return (
    <div
      onClick={() => signOut({ callbackUrl: "/sign-in" })}
      className="flex items-center gap-2 cursor-pointer"
    >
      <LogOut className="w-4 h-4" />
      <span>Logout</span>
    </div>
  );
}
