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

export default function Navbar() {
  const auth = true;
  const tempUser = { name: "sam", username: "@sam" };
  return (
    <div className="w-full flex justify-between px-8 h-10">
      <Link href="/" className="flex gap-2">
        <Anvil />
        <span className="font-extrabold ">GeekCms</span>
      </Link>
      {auth ? (
        <UserModalComponent user={tempUser} />
      ) : (
        <Link href="/sign-in">Sign in</Link>
      )}
    </div>
  );
}
const UserModalComponent = ({ user }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>User</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Hi, Mr {user.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={"/profile/{user.username}"}>profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
