import {
  Clock5,
  FilePlay,
  History,
  House,
  ListVideo,
  SquarePlay,
  TvMinimalPlay,
} from "lucide-react";
import Link from "next/link";

export default function AsideMenu() {
  return (
    <aside className="w-60 bg-[var(--background-color)] flex-shrink-0 p-2">
      <Link href="/" className="flex items-center gap-2 p-4 mb-4">
        <svg
          className="h-8 w-8 text-[var(--primary-color)]"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21.928 7.424a2.918 2.918 0 0 0-2.063-2.064C18.2 4.5 12 4.5 12 4.5s-6.2 0-7.865.86c-1.002.55-1.782 1.33-2.064 2.064C2.1 9.088 2.1 12 2.1 12s0 2.912.863 4.576c.282.734 1.062 1.514 2.064 2.064C6.8 19.5 12 19.5 12 19.5s6.2 0 7.865-.86c1.002-.55 1.782-1.33 2.064-2.064C21.9 14.912 21.9 12 21.9 12s0-2.912-.863-4.576ZM9.9 14.4v-4.8l4.2 2.4-4.2 2.4Z"></path>
        </svg>
        <h1 className="text-xl font-bold">MeTube</h1>
      </Link>
      <nav className="flex flex-col gap-1">
        <Link
          className="flex items-center gap-4 px-4 py-2 rounded-lg active-nav-item"
          href="/"
        >
          <House />
          <span className="text-sm">Home</span>
        </Link>
        <Link
          className="flex items-center gap-4 px-4 py-2 rounded-lg hover:bg-[var(--surface-color)]"
          href="/shorts"
        >
          <SquarePlay />
          <span className="text-sm">Shorts</span>
        </Link>
        <Link
          className="flex items-center gap-4 px-4 py-2 rounded-lg hover:bg-[var(--surface-color)]"
          href="/subscriptions"
        >
          <TvMinimalPlay />
          <span className="text-sm">Subscriptions</span>
        </Link>
        <hr className="border-t border-[var(--surface-color)] my-3" />
        <Link
          className="flex items-center gap-4 px-4 py-2 rounded-lg hover:bg-[var(--surface-color)]"
          href="/library"
        >
          <ListVideo />
          <span className="text-sm">Library</span>
        </Link>
        <Link
          className="flex items-center gap-4 px-4 py-2 rounded-lg hover:bg-[var(--surface-color)]"
          href="/hisory"
        >
          <History />
          <span className="text-sm">History</span>
        </Link>
        <Link
          className="flex items-center gap-4 px-4 py-2 rounded-lg hover:bg-[var(--surface-color)]"
          href="/slideshow"
        >
          <FilePlay />
          <span className="text-sm">Your videos</span>
        </Link>
        <Link
          className="flex items-center gap-4 px-4 py-2 rounded-lg hover:bg-[var(--surface-color)]"
          href="/watch-later"
        >
          <Clock5 />
          <span className="text-sm">Watch later</span>
        </Link>
      </nav>
    </aside>
  );
}
