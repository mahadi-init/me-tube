import Link from "next/link";
import { FolderUp, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 bg-[var(--background-color)] z-10 p-4 flex items-center justify-between">
      <div className="flex-1 max-w-2xl mx-auto">
        <form className="flex">
          <input
            type="search"
            placeholder="Search"
            className="flex-grow bg-[#222222] border border-r-2 border-[var(--surface-color)] rounded-l-full px-4 py-2 text-white placeholder:text-[var(--text-secondary)] outline-none"
          />
          <button
            className="bg-[#222222] border border-l-0 border-[var(--surface-color)] rounded-r-full px-5 hover:bg-[var(--surface-color)]"
            type="button"
          >
            <Link href="/search">
              <Search />
            </Link>
          </button>
        </form>
      </div>

      <div className="flex items-center gap-4">
        <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-800 text-white">
          <Link href="/upload">
            <FolderUp />
          </Link>
        </button>
        <Link href="/profile">
          <picture>
            <img
              src={
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBc_LiSFwpD9Tv-btRVIpRfVLwAk3K-e2hL-pmyjhYkoUsfO2DxjV2dkjO_5TQBDyciICc_8PW_hMqEYlOTKpBycKW-B-V6GhEpPMRYgqj3K2ejpe6X5sJiydpH-ASczMpTBcaZIvusqW_wAzm-9pHfFdbb_c905-orXBZEWKL_INpL6cphZqYEVv-FT5YCpZBr2uvYfxH_jvyX4xG8PVTTboY6EsmuhJTJ5W1GLGsCnQVEDM9x0wfEdfX_9xsvgQgxKikOWa1Vmfs"
              }
              alt="img"
              className="h-8 w-8 rounded-full"
            />
          </picture>
        </Link>
      </div>
    </header>
  );
}
