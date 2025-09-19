export default async function Search(props: {
  searchParams: Promise<{
    query: string;
  }>;
}) {
  const { query } = await props.searchParams;
  console.log(query);

  return (
    <div className="overflow-y-auto p-4">
      <div className="border-b border-neutral-800 pb-4">
        <h2 className="text-xl font-bold text-white mb-4 flex gap-6">
          Filters{" "}
          <span className="text-gray-600 font-normal italic">
            Looking for{" "}
            <span className="text-gray-400">&quot;{query}&quot;</span>
          </span>
        </h2>
        <div className="flex gap-3 flex-wrap">
          <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-neutral-800 px-4 text-white hover:bg-neutral-700">
            <p className="text-sm font-medium leading-normal">All</p>
          </button>
          <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-neutral-800 px-4 text-white hover:bg-neutral-700">
            <p className="text-sm font-medium leading-normal">Last hour</p>
          </button>
          <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-neutral-800 px-4 text-white hover:bg-neutral-700">
            <p className="text-sm font-medium leading-normal">Today</p>
          </button>
          <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-neutral-800 px-4 text-white hover:bg-neutral-700">
            <p className="text-sm font-medium leading-normal">This week</p>
          </button>
          <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-neutral-800 px-4 text-white hover:bg-neutral-700">
            <p className="text-sm font-medium leading-normal">
              Under 4 minutes
            </p>
          </button>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-4">
        <div className="flex gap-4">
          <a className="shrink-0" href="#">
            <div
              className="bg-center bg-no-repeat aspect-video bg-cover rounded-md h-48 w-80"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBXYGUeZk1AvujMM33DMUki3ybcvMpaWWkCrYWXlQ2EpUrzb8anL-qXcEoLOpPLNbNqWrHyM3JXuPtBJ5x8N24iPZ-cl097DbCa3tfQ3dyeFrxJAN8S6H2ElOeBLyssI466OaJ928ZPQ5uuCdccshOStBP99Ma3K04mj2vznMWepq4y361utLMVDxxvdwfdpyq90IduwNmYDxgbD7Rc-mBDLIrRWY5UrAG0VZLf4uWedXlYBrnvCF5Jys2GosUfakk5nslP3tFrKDU")`,
              }}
            />
          </a>
          <div className="flex flex-col">
            <a
              className="text-lg font-medium text-white hover:underline"
              href="#"
            >
              Best Tech of 2023
            </a>
            <p className="text-sm text-neutral-400">10K views · 1 year ago</p>
            <div className="flex items-center gap-2 mt-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCiTHxba7kA4Q8tZKJOAivFxCmkJViBUavWzCeueRBuYqO5YP1qtqB3nUd5sHlIcQc0ibden2ePZhKv02oDzah2EV-MegirLSl-g0jBCoPEXS2c2HTDPDx0lGXXeT9JmijqjUnGsyODgfJixXjshe-JfPE-QGrTo_8Phlc1nKJoG-ac3bFDilZNUB4nHSZDvaRWZagkt4pFPcBV_eO19G3tqUJvogdZOGmcr9ztGMSWeUWzSGIJYFDFiGdSm5dyRWsAfvK81Q13Wl0")`,
                }}
              />
              <p className="text-sm text-neutral-400">Tech Reviews</p>
            </div>
            <p className="text-sm text-neutral-400 mt-2 line-clamp-2">
              A comprehensive review of the best technology released in 2023,
              from smartphones to laptops and more.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <a className="shrink-0" href="#">
            <div
              className="bg-center bg-no-repeat aspect-video bg-cover rounded-md h-48 w-80"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAA1DSUMRwNbdReRA1L-qI3a9BsepMd4LCq7rhW15La2Ul2fSTFyuJhtMWj-QVdxICxA8XczKbQyEMQ7oyg9QnDxBC9QoXhXRvYGNo_JWM9wkR86Vfjqp0KeqsAb1RwyiHkfbf0nLa_6wFOp9Yom2marw-PaIowhA3P26TaWltObNxcb40KQDuQgdVTIvqkKLx0798lZfJr3DVJ19Z2E-t540cGp-mRNeGxNs-28OORHRA5mUCQfWCW6NruLN2aLBZvBeodobnrgO4")`,
              }}
            />
          </a>
          <div className="flex flex-col">
            <a
              className="text-lg font-medium text-white hover:underline"
              href="#"
            >
              Top 5 Gadgets You Need
            </a>
            <p className="text-sm text-neutral-400">5K views · 6 months ago</p>
            <div className="flex items-center gap-2 mt-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCiTHxba7kA4Q8tZKJOAivFxCmkJViBUavWzCeueRBuYqO5YP1qtqB3nUd5sHlIcQc0ibden2ePZhKv02oDzah2EV-MegirLSl-g0jBCoPEXS2c2HTDPDx0lGXXeT9JmijqjUnGsyODgfJixXjshe-JfPE-QGrTo_8Phlc1nKJoG-ac3bFDilZNUB4nHSZDvaRWZagkt4pFPcBV_eO19G3tqUJvogdZOGmcr9ztGMSWeUWzSGIJYFDFiGdSm5dyRWsAfvK81Q13Wl0")`,
                }}
              />
              <p className="text-sm text-neutral-400">Gadget Guru</p>
            </div>
            <p className="text-sm text-neutral-400 mt-2 line-clamp-2">
              Discover the must-have gadgets of the year that will make your
              life easier and more fun.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <a className="shrink-0" href="#">
            <div
              className="bg-center bg-no-repeat aspect-video bg-cover rounded-md h-48 w-80"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCnRUl1-3EgYwNXSr8YYNIzxw1zw26nmDgFEu6c5Gnog-qHIskB2nkdSwrgGGe9JvwOgrncoYDly3DIwaVP4u_toCqOXqLxg8yoO6WlevCiKRtMBn4BS65VbIv__xKyGXpV1vGRztH-Q-Lab9LYiUtN8HJJUtky1QfoY3dg6DQ_WuecMPZj0_i9MvlzPfX4UmQGlxmhe7m476dz7KS_BBaa_RsC_INXsznEKw9cAKiCqgYx7XcLOkLYotrrvQBG579DuYkSRgOmJSY")`,
              }}
            />
          </a>
          <div className="flex flex-col">
            <a
              className="text-lg font-medium text-white hover:underline"
              href="#"
            >
              Tech Review: Latest Smartphone
            </a>
            <p className="text-sm text-neutral-400">20K views · 2 years ago</p>
            <div className="flex items-center gap-2 mt-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCiTHxba7kA4Q8tZKJOAivFxCmkJViBUavWzCeueRBuYqO5YP1qtqB3nUd5sHlIcQc0ibden2ePZhKv02oDzah2EV-MegirLSl-g0jBCoPEXS2c2HTDPDx0lGXXeT9JmijqjUnGsyODgfJixXjshe-JfPE-QGrTo_8Phlc1nKJoG-ac3bFDilZNUB4nHSZDvaRWZagkt4pFPcBV_eO19G3tqUJvogdZOGmcr9ztGMSWeUWzSGIJYFDFiGdSm5dyRWsAfvK81Q13Wl0")`,
                }}
              />
              <p className="text-sm text-neutral-400">Mobile Central</p>
            </div>
            <p className="text-sm text-neutral-400 mt-2 line-clamp-2">
              An in-depth look at the newest smartphone on the market, covering
              its features, performance, and camera quality.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <a className="shrink-0" href="#">
            <div
              className="bg-center bg-no-repeat aspect-video bg-cover rounded-md h-48 w-80"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAKtVOtTE_quhezzTb0i4rpw046P1veInJ8KcbLo_FOL8M32wEAsvbQcbRwfv8YuzwAIPhSnOI-RBIuOkIalgBakmJIKVJs37iCl22k2BEqzoJw-Z5m6800noZcu6LsF4yrZEQ2T59HTRHwonSIwkBVbAdItIGEdg6DfW2fRLGvAOl5GS-wq5iXuVUH6272wxoHYUbBPODOczanYNsU7qdAAsAO33EnyG6MoSSQISA1V2ZJKXT7Bh7y3ChEUHc4k9xA333NuIvrLzc")`,
              }}
            />
          </a>
          <div className="flex flex-col">
            <a
              className="text-lg font-medium text-white hover:underline"
              href="#"
            >
              Tech Review: Wireless Headphones
            </a>
            <p className="text-sm text-neutral-400">15K views · 1 year ago</p>
            <div className="flex items-center gap-2 mt-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCiTHxba7kA4Q8tZKJOAivFxCmkJViBUavWzCeueRBuYqO5YP1qtqB3nUd5sHlIcQc0ibden2ePZhKv02oDzah2EV-MegirLSl-g0jBCoPEXS2c2HTDPDx0lGXXeT9JmijqjUnGsyODgfJixXjshe-JfPE-QGrTo_8Phlc1nKJoG-ac3bFDilZNUB4nHSZDvaRWZagkt4pFPcBV_eO19G3tqUJvogdZOGmcr9ztGMSWeUWzSGIJYFDFiGdSm5dyRWsAfvK81Q13Wl0")`,
                }}
              />
              <p className="text-sm text-neutral-400">Audiofile</p>
            </div>
            <p className="text-sm text-neutral-400 mt-2 line-clamp-2">
              Finding the perfect pair of wireless headphones can be tough. We
              tested the top models to help you decide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
