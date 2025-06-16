import posts from "@/../public/posts.json";
import { Paperclip } from "lucide-react";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
  body: string;
  status?: string;
  attachments?: number;
}

export default function Communication() {
  const ButtonStyles =
    "border-2 border-blue-500 py-2 px-8 rounded-full text-blue-500 font-semibold bg-slate-950/20 cursor-pointer hover:scale-105 duration-500";

  const BorderStyles = (post: Post) => {
    if (post.status === "New") {
      return "flex flex-col w-full gap-5 border-2 border-blue-500 h-fit p-4 rounded-3xl bg-slate-400/10";
    }

    return "flex flex-col w-full gap-5 p-4 rounded-3xl h-fit bg-slate-400/10";
  };
  return (
    <section className="flex w-full flex-col gap-5">
      <h2 className="text-3xl">Communication</h2>
      <div className="flex gap-10 bg-slate-800 p-4 lg:p-8 rounded-3xl">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <input
              type="text"
              className="py-2 px-4 max-w-xs sm:w-xs bg-slate-400/10 rounded-full text-slate-400/50 placeholder:text-slate-400/50"
              placeholder="Search"
            />
            <div className="flex gap-2">
              <button className={ButtonStyles}>Filter</button>
              <button className={ButtonStyles}>Group</button>
            </div>
          </div>
          <div className="flex flex-wrap xl:flex-nowrap gap-5">
            <div className="flex flex-col w-full xl:w-1/2 gap-5">
              {posts.slice(0, 2).map((post: Post) => (
                <article key={post.id} className={BorderStyles(post)}>
                  <div className="flex flex-wrap md:flex-nowrap items-center gap-2">
                    {post.status && (
                      <span className="py-1 h-fit px-4 flex items-center justify-center text-slate-50 bg-blue-800 rounded-full">
                        {post.status}
                      </span>
                    )}
                    <h2 className="text-2xl">{post.title}</h2>
                  </div>
                  <div className="flex gap-2 text-slate-400">
                    <p>{post.author}</p>
                    <p>{"//"}</p>
                    <p>{post.date}</p>
                  </div>
                  <p>{post.body}</p>
                  <Link
                    href="#"
                    className="flex gap-2 py-1 px-4 rounded-full bg-green-800 text-slate-50 w-fit"
                  >
                    <Paperclip size={22} />
                    <p>3 attachments</p>
                  </Link>
                  <button className="bg-blue-500 text-slate-50 w-fit py-2 px-8 rounded-full cursor-pointer duration-500 hover:scale-105">
                    Reply
                  </button>
                </article>
              ))}
            </div>
            <div className="flex flex-col w-full xl:w-1/2 gap-5">
              {posts.slice(2).map((post: Post) => (
                <article key={post.id} className={BorderStyles(post)}>
                  <div className="flex flex-wrap md:flex-nowrap items-center gap-2">
                    {post.status && (
                      <span className="py-1 h-fit px-4 flex items-center justify-center text-slate-50 bg-blue-800 rounded-full">
                        {post.status}
                      </span>
                    )}
                    <h2 className="text-2xl">{post.title}</h2>
                  </div>
                  <div className="flex gap-2 text-slate-400">
                    <p>{post.author}</p>
                    <p>{"//"}</p>
                    <p>{post.date}</p>
                  </div>
                  <p>{post.body}</p>
                  <Link
                    href="#"
                    className="flex gap-2 py-1 px-4 rounded-full bg-green-800 text-slate-50 w-fit"
                  >
                    <Paperclip size={22} />
                    <p>3 attachments</p>
                  </Link>
                  <button className="bg-blue-500 text-slate-50 w-fit py-2 px-8 rounded-full cursor-pointer duration-500 hover:scale-105">
                    Reply
                  </button>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
