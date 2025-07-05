import Image from "next/image";
import dateFormat from "./../../../utils/dateFormat";
import { Calendar } from "lucide-react";

function SingleBlog() {
  const tempTags = ["SpaceX", "Nasa", "Exploration"];
  const tempHtml = "<p>Demo content</p>";
  return (
    <section>
      <div className="flex flex-col items-center gap-5">
        <Image
          className="rounded border w-[90%] md:w-[700px]"
          src="/dreams.png"
          width={500}
          height={250}
          alt="page title"
        />
        <div className="flex gap-2 items-center">
          <Calendar className="text-gray-400 size-4" />
          <p className="text-gray-400 text-xs">
            created on: {dateFormat(new Date())}
          </p>
        </div>
        <div className="text-xs flex items-center gap-2">
          <p>Categories:</p>
          {tempTags.map((tag) => {
            return (
              <p className="badge border border-gray-600 w-fit px-2 py-1 rounded bg-gray-600/40">
                {tag}
              </p>
            );
          })}
        </div>
        {/* <div className="content">{tempHtml}</div> */}
        <p className="text-sm w-[90%] md:w-2/3 text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error magni
          mollitia corrupti accusantium. Dolorem magni repellat iste debitis nam
          nostrum sapiente culpa a vitae. Vitae expedita optio obcaecati officia
          dolores!
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          molestiae quo id distinctio illo, atque ducimus optio dolor vero
          dolorem tempore quae ab delectus nam non exercitationem neque quidem
          consequuntur.
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
          itaque laborum, obcaecati saepe quos autem accusantium ab temporibus
          ea. In voluptatibus quas pariatur et quis vero, sapiente nisi optio
          consequuntur.{" "}
        </p>
      </div>
    </section>
  );
}

export default SingleBlog;
