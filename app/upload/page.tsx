import { UploadCloud } from "lucide-react";

export default function Upload() {
  return (
    <div className="w-full p-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Upload video</h1>
        <p className="text-gray-400">Publish your content to the world.</p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-700 p-12 text-center">
          <UploadCloud size={48} />
          <p className="mt-4 text-lg font-semibold">
            Drag and drop video files to upload
          </p>
          <p className="mt-1 text-sm text-gray-400">
            Your videos will be private until you publish them.
          </p>
          <button className="mt-6 rounded-md bg-[var(--primary-color)] px-6 py-2 text-sm font-bold text-white hover:bg-red-700">
            Select files
          </button>
        </div>
        <div className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-300"
            >
              Title (required)
            </label>
            <input
              className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 p-3 text-white placeholder-gray-500 focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)]"
              id="title"
              placeholder="Add a title that describes your video"
              type="text"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-300"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="mt-1 block w-full resize-none rounded-md border-gray-700 bg-gray-800 p-3 text-white placeholder-gray-500 focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)]"
              id="description"
              placeholder="Tell viewers about your video"
              rows={4}
            ></textarea>
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-300"
              htmlFor="tags"
            >
              Tags
            </label>
            <input
              className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 p-3 text-white placeholder-gray-500 focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)]"
              id="tags"
              placeholder="Add tags separated by commas"
              type="text"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-300">Uploading...</p>
              <p className="text-sm text-gray-400">video_final.mp4</p>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-700">
              <div
                className="h-2 rounded-full bg-[var(--primary-color)]"
                style={{ width: "45%" }}
              />
            </div>
            <p className="text-right text-xs text-gray-400">45% complete</p>
          </div>
          <div className="flex justify-end pt-4">
            <button className="rounded-md bg-[var(--primary-color)] px-8 py-2.5 text-sm font-bold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50">
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
