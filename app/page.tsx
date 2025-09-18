import VideoOptions from "@/components/home/VideoOptions";
import Videos from "@/components/home/Videos";

export default function Home() {
  return (
    <div className="border-t border-[var(--surface-color)]">
      <VideoOptions />
      <Videos />
    </div>
  );
}
