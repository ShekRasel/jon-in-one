import { jobCategories } from "@/data/job.catecories";
import Link from "next/link";

const Page = () => {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-14 text-center">
          <h1 className="text-5xl font-bold tracking-tight">
            Job Hub Dashboard
          </h1>

          <p className="mt-4 text-lg text-slate-400">
            Discover local, global, remote jobs and company career pages from a
            single place.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {jobCategories.map((category) => (
            <Link key={category.title} href={category.href} className="group">
              <div
                className={`
                  h-full overflow-hidden rounded-md
                  bg-gradient-to-br ${category.gradient}
                  p-[1px]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_25px_80px_-35px_rgba(249,115,22,0.75)]
                `}
              >
                <div className="h-full rounded-[1.65rem] bg-slate-950/95 p-8 backdrop-blur-sm">
                  <div className="mb-6 text-5xl text-orange-400 transition-transform duration-300 group-hover:-translate-y-0.5">
                    {category.icon}
                  </div>

                  <h2 className="text-2xl font-semibold tracking-tight text-white">
                    {category.title}
                  </h2>

                  <p className="mt-4 text-sm leading-6 text-slate-400">
                    {category.description}
                  </p>

                  <div className="mt-8 flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-300">
                      {category.count}
                    </span>
                    <span className="text-white transition-transform duration-300 group-hover:translate-x-1">
                      View →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
