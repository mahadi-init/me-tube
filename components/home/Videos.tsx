import { videos } from "@/data/videos";
import Link from "next/link";

export default function Videos() {
  return (
    <div className="p-6 grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-x-4 gap-y-8">
      {videos.map((item, index) => (
        <Link
          key={index}
          href={`/video/${item.slug}`}
          className="flex flex-col gap-3"
        >
          <picture>
            <img
              alt="channel avatar"
              src={item.thumbnail}
              className="w-full object-cover object-center aspect-video rounded-xl"
            />
          </picture>

          <div className="flex gap-3">
            <picture>
              <img
                alt="channel avatar"
                className="max-w-9 max-h-9 rounded-full mt-1 object-cover object-center"
                src={item.avatar}
              />
            </picture>
            <div>
              <h3 className="text-base font-medium leading-tight">
                {item.title}
              </h3>
              <p className="text-[var(--text-secondary)] text-sm mt-1">
                {item.name}
              </p>
              <p className="text-[var(--text-secondary)] text-sm">
                {item.views}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
