import { videos } from "@/data/videos";
import { Play, Rss, ThumbsDown, ThumbsUp } from "lucide-react";

export default async function Video(props: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await props.params;
  const video = videos.find((item) => item.slug === slug);

  if (!video) {
    return <div>Video not found</div>;
  }

  return (
    <div className="overflow-y-auto p-4">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-800">
            <div
              className="relative h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${video.thumbnail})` }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <button className="group flex h-16 w-16 items-center justify-center rounded-full bg-black/50 transition-all duration-300 hover:bg-[var(--primary-color)] hover:scale-110">
                  <Play />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h1 className="text-2xl font-bold">{video.title}</h1>
            <p className="mt-1 text-sm text-gray-400">{video.views}</p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                  style={{ backgroundImage: `url(${video.avatar})` }}
                ></div>
                <div>
                  <p className="font-semibold">{video.name}</p>
                  <p className="text-sm text-gray-400">100K subscribers</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 rounded-full bg-gray-800 px-4 py-2 font-semibold transition-colors hover:bg-gray-700">
                  <ThumbsUp />
                  <span>12K</span>
                </button>
                <button className="flex items-center gap-2 rounded-full bg-gray-800 px-4 py-2 font-semibold transition-colors hover:bg-gray-700">
                  <ThumbsDown />
                </button>
                <button className="rounded-full bg-gray-800 px-4 py-2 font-semibold transition-colors hover:bg-gray-700 flex items-center gap-2">
                  <Rss />
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold">Comments (254)</h3>
            <div className="mt-4 space-y-6">
              {Array.from({ length: 25 }).map((_, index) => (
                <div key={index} className="flex gap-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10 shrink-0"
                    style={{ backgroundImage: `url(${video.avatar})` }}
                  ></div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2">
                      <p className="font-semibold">Sarah Miller</p>
                      <p className="text-xs text-gray-400">2 weeks ago</p>
                    </div>
                    <p className="mt-1">
                      This video is so informative and beautifully shot! I
                      learned so much about marine life.
                    </p>
                    <div className="mt-2 flex items-center gap-4 text-sm text-gray-400">
                      <button className="flex items-center gap-1 hover:text-white">
                        <ThumbsUp />
                        <span>120</span>
                      </button>
                      <button className="hover:text-white">
                        <ThumbsDown />
                      </button>
                      <button className="font-semibold hover:text-white">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-4">
          {Array.from({ length: 25 }).map((_, index) => (
            <a
              key={index}
              className="group flex items-start gap-4 rounded-lg p-2 transition-colors hover:bg-gray-800"
            >
              <div
                className="bg-center bg-no-repeat aspect-video bg-cover rounded-md w-40 shrink-0"
                style={{ backgroundImage: `url(${video.thumbnail})` }}
              />
              <div>
                <p className="font-semibold leading-tight group-hover:text-[var(--primary-color)]">
                  The Mystery of the Deep Sea
                </p>
                <p className="mt-1 text-sm text-gray-400">Ocean Wonders</p>
                <p className="text-xs text-gray-400">3M views · 1 year ago</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
