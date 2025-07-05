import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import { Delete, PencilIcon, Zap } from "lucide-react";
import { Icons } from "@/components/icons";
import Blogs from "./blogs/page";
import Link from "next/link";
export default function Layout() {
  return (
    <main className="w-full   ">
      <section className="flex justify-center w-full h-[50vh] sm:h-[70vh] ">
        <div className="flex flex-col gap-4 justify-center items-center text-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-5xl p-6">
              Manage content
            </h1>
            <p className="text-gray-400 max-w-[700px] mx-auto">
              {" "}
              Streamline your content workflow,publish with confidence
            </p>
          </div>

          <div className="flex gap-2 mt-4 ">
            <Button variant={"default"}>
              <Link href="/sign-in">Get started</Link>
            </Button>
            <Button variant={"outline"}>Try it out</Button>
          </div>
        </div>
      </section>
      <section className="min-h-screen sm:min-h-[80vh] bg-gray-600/10">
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-3 ml-[5vw]">
          <span className="">
            <Icons.BlogCustomIcon className="w-20 h-20 text-white" />
            <h3>Edit</h3>
            <p> eidt the content</p>
          </span>
          <span className="">
            <Delete size={50} />
            <h3>Delete</h3>
            <p> delete the content</p>
          </span>
          <span className="">
            <Zap size={50} />
            <h3>Rename</h3>
            <p> Rename the content</p>
          </span>
        </div>
      </section>
      <section className="h-[60vh] sm:h-[50vh] w-full flex justify-center flex-col  items-start">
        <div className="max-w-[50%] mx-auto space-y-3">
          <h4 className="font-bold text-2xl">Ready to embrace change?</h4>
          <p className="text-sm text-gray-500">
            {" "}
            Join this to begin your fitness journey
          </p>
          <input
            className="bg-zinc-800 focus:outline-none rounded-md px-2 text-sm text-gray-200 "
            type="text"
            placeholder="Email here"
          />
          <Button>sumbmit</Button>
        </div>
      </section>
      <section>
        <Blogs />
      </section>
    </main>
  );
}
