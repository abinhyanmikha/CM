import { Anvil } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getAuthsession } from "@/lib/auth";
import Image from "next/image";
import Signout from "./signout";

export default async function Navbar() {
  const session = await getAuthsession(); // ‼️  may be null
  const user = session?.user; // safe extraction

  return (
    <div className="w-full flex justify-between px-8 h-10 items-center">
      <Link href="/" className="flex gap-2 items-center">
        <Anvil />
        <span className="font-extrabold">GeekCms</span>
      </Link>

      {user /* ← show menu only if logged in */ ? (
        <UserModalComponent user={user} />
      ) : (
        <Link href="/sign-in">Sign in</Link>
      )}
    </div>
  );
}

const UserModalComponent = ({ user }) => (
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Image
        src={
          user.image?.trim() ||
          "https://lh3.googleusercontent.com/a/default-user"
        }
        width={40}
        height={40}
        alt={user.name ?? "avatar"}
        className="rounded-full border-2 border-green-400"
      />
    </DropdownMenuTrigger>

    <DropdownMenuContent>
      <DropdownMenuLabel>Hi, {user.name}</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Link href={`/profile/${user.username}`}>Profile</Link>
      </DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
      <DropdownMenuItem>Team</DropdownMenuItem>
      <DropdownMenuItem>Subscription</DropdownMenuItem>
      <DropdownMenuItem>
        <Signout />
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);
