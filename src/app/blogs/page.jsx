import Image from "next/image";
import Link from "next/link";

const blogConfig = [
  {
    title: "React vs NextJs",
    go: " Lets start NextJs",
    image: "/react-v-next.png",
    url: "/demo-slug",
  },
  {
    title: "Dare to dream big",
    go: "do you dare",
    image: "/dreams.png",
    url: "/demo-slug",
  },
  {
    title: "How to become a backend dev?",
    go: " Lets become backend devs",
    image: "/become-backend-dev.png",
    url: "/demo-slug",
  },
];
const BlogCard = ({ title, go, image, url }) => {
  return (
    <div className="bg-gray-600/20 rounded-lg border flex flex-col p-1 gap-1 hover:scale-[1.03] transition-all delay-100 duration-300 ">
      <Image
        className="w-full rounded "
        src={image}
        width={300}
        height={150}
        alt="title"
      />
      <h2 className="text-3xl font-semibold text-gray-200 ">{title}</h2>
      <p className="text-sm text-gray-400">{go}</p>
      <Link
        className="bg-zinc-600/70 py-2 px-3 rounded w-fit text-xs"
        href={"/blog/${url}"}
      >
        Read MOre
      </Link>
    </div>
  );
};

export default function Blogs() {
  return (
    <section className="grid gap-4 grid-cols-2 md:grid-cols-3 ">
      {blogConfig.map((blog, index) => {
        return (
          <BlogCard
            key={index}
            title={blog.title}
            go={blog.go}
            image={blog.image}
            url={blog.url}
          />
        );
      })}
    </section>
  );
}
