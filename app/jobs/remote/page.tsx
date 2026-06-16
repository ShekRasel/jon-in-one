import BackButton from "@/components/ui/buttons/back-button";
import Link from "next/link";
import { remotePlatforms } from "@/data/remote.platforms";

const Page = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Hero */}
        <div className="mb-14 text-center">
          <div className="mb-14 text-center">
            <div className="grid grid-cols-3 items-center">
              <div className="justify-self-start">
                <BackButton className="hover:bg-violet-500" />
              </div>

              <div className="justify-self-center">
                <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1 text-sm text-violet-400">
                  Remote Job Platforms
                </span>
              </div>
              <div />
            </div>
          </div>

          <h1 className="mt-6 text-5xl font-bold tracking-tight">
            Work From Anywhere
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            Discover remote-first companies and job boards that allow you to
            work from anywhere in the world.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-12 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-3xl font-bold">{remotePlatforms.length}+</h3>
            <p className="text-slate-400">Platforms</p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-3xl font-bold">100%</h3>
            <p className="text-slate-400">Remote Focused</p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-3xl font-bold">Worldwide</h3>
            <p className="text-slate-400">Work Anywhere</p>
          </div>
        </div>

        {/* Platforms */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {remotePlatforms.map((platform) => (
            <div
              key={platform.id}
              className="group rounded-3xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-4xl">{platform.icon}</span>

                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                  {platform.category}
                </span>
              </div>

              <h2 className="text-xl font-semibold">{platform.name}</h2>

              <p className="mt-3 text-slate-400">{platform.description}</p>

              <Link
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center rounded-xl bg-violet-600 px-4 py-2 text-sm font-medium transition hover:bg-violet-500"
              >
                Visit Platform →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
