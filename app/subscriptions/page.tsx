export default function Subscriptions() {
  return (
    <div className="p-4 overflow-x-auto">
      <div className="flex gap-3 pb-4 overflow-x-auto">
        <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white text-black px-4">
          <p className="text-sm font-medium leading-normal">All</p>
        </button>
        <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors px-4">
          <p className="text-white text-sm font-medium leading-normal">
            Recently uploaded
          </p>
        </button>
        <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors px-4">
          <p className="text-white text-sm font-medium leading-normal">
            Watched
          </p>
        </button>
        <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors px-4">
          <p className="text-white text-sm font-medium leading-normal">
            Unwatched
          </p>
        </button>
        <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors px-4">
          <p className="text-white text-sm font-medium leading-normal">Live</p>
        </button>
        <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors px-4">
          <p className="text-white text-sm font-medium leading-normal">
            Continue watching
          </p>
        </button>
      </div>
      <div className="space-y-8">
        <div>
          <h3 className="text-white text-xl font-bold leading-tight tracking-tight px-4 pb-4">
            Today
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl mb-3"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBQhMXyNE6gYELU4C4O8BH4_GZaqbOPUPWyPElzX_9oryH3lTg_fgURCWuibdAv7R0OpuMoClMYjH_TLXdIRbwbHJ6EJJf5EU8k2LB0UWMh_kMJun74pNi-sD2WkqpKaYFlYHHIGNrq5uHEl1GZcCZeCzZrH0N_lzva90PXioCjLeeGGlXfJoiIWZdGD2lJ81THO0KYyXEYh4dt50FW3Zrewvf72ryn2_YnT0uKdZCXIFiM4laE2vdecy3eQhtbmK1dD9lz4WBjEig")`,
                }}
              />
              <div className="flex gap-3 items-start">
                <picture>
                  <img
                    alt="Channel avatar"
                    className="w-9 h-9 rounded-full"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJBURoWFaIq1ycpKrr0IAg2n2oNdixMKgPPEs5IDsVNBZE8GobE3Z9feaHbT8EKqx50bIgQ7CNYT3yafJDf4nyGDlvKCm4x5GFJV7nCCyP2IN6wLFVmiO_D3QxKvig06yXPQGWBkXLA2mK9PJcZra723ddScoZ6oIdkfMNIo4wSRLXYbfjKXmUVvkkU6mMGTbO7_yGzCM29ueU-89NKkGTLhQa2C8zeQ7w9Oicohwc0NHl-uLUTBy8VEkmOWiphaBJIYXTYouBlqM"
                  />
                </picture>
                <div>
                  <p className="text-white text-base font-bold leading-snug group-hover:text-red-400 transition-colors">
                    Exploring the Hidden Gems of the Pacific Northwest
                  </p>
                  <p className="text-zinc-400 text-sm font-normal leading-normal">
                    TravelVlogger
                  </p>
                  <p className="text-zinc-400 text-sm font-normal leading-normal">
                    20K views · 2 hours ago
                  </p>
                </div>
              </div>
            </div>
            <div className="group">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl mb-3"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuC0TDEKGew9cV37j62LBEqewIJeHz3L3wKxmAQ2rtBFoabVVxT08fKEA9HKq4Vdi_uc1bi1_BtjyKlp5zS5AV42ZpPK-xqjYPfUr7E2ZoVv1JRzToKBMva8Bm1h7ywxvBv6qx9dsUD0om_Y2rAM5-tlmlPbNyp4tJSISKZzqBiGxI72RH4YilnyOp-bCceCgMwN1k2xRU6RWuav09Lx_QiOoaAVetS1VSHOmRU32PKLSzea9UFHjr7fFIEmpDzWlJAdLVUCWlOcspk")`,
                }}
              />
              <div className="flex gap-3 items-start">
                <picture>
                  <img
                    alt="Channel avatar"
                    className="w-9 h-9 rounded-full"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4YDDFnILIWszvsvKGsMDU87RoC1qmtWR3188Gfeo3blJmz2LHjuGC-QL0qJnlYUH4Rmw0egTIVx7LjZz3lDqOW9IPfXvTgOA3VuJesGB0O-wHWm4rYtf3Wm8Za-9DxIH2wQww_Qm4M6Dij85RXUq-m_WuOBLRHyvj9t6orqSaaY8nUbV7oPO3O1khZ2VC3TF9WNQuxZvdC0A0ys_TIpbs4xK94ere51CAI0qgrGcdNAU8MEMS5ARvEd4W2Z3aThKK6AA3GM4yols"
                  />
                </picture>
                <div>
                  <p className="text-white text-base font-bold leading-snug group-hover:text-red-400 transition-colors">
                    Mastering the Art of Italian Cooking
                  </p>
                  <p className="text-zinc-400 text-sm font-normal leading-normal">
                    Chef Isabella Rossi
                  </p>
                  <p className="text-zinc-400 text-sm font-normal leading-normal">
                    15K views · 3 hours ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-white text-xl font-bold leading-tight tracking-tight px-4 pb-4">
            Yesterday
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl mb-3"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuD7FQfl9hL_KbHt-n7YpN6hGgc_gPyWUaiz8ByZSSapBmOz1SCcEDpffgt5GUW9F4cTJ6lScEnwNXI-7j5654AhlII9T-z1CZLHcBNoFR3bVOzcVkdN6HWdoiWHjoDaxv2CSameYbf8oYDWNK9gSvqmN2HsrF106j9dNn0Rg3h7zysrQ3MnyA6bZlYWuMGT3BUWl2hjcmU8D3X_Hek_ryirqERcmpcie_B5Xk8qMTxPKv_U7mL3izPbbD7qITWYWXnXNlI9VlH82v0")`,
                }}
              />
              <div className="flex gap-3 items-start">
                <picture>
                  <img
                    alt="Channel avatar"
                    className="w-9 h-9 rounded-full"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMhUDkZeiLCjaLM2iTp7atCsP956HCWlEJO6JUl9wu9vvOHoHVnQtGi7v7HbQ4tRc28W_rGcVuV6T75zsYlplzeEY1m2SHTOe1WsGjR2ESmsYZ4GeTsuwVkqBml8y0OsoC_XEGxuyAPqye2ZRyC2Pn6q7TcUxXQUw74n8K_HQmbw4pcp7WyDTe1nXJ-bwRybl21eI3e2o_OYHHBoNgtC6xie2cOvb_wDGka0ndLSC0RDbYMCjrDlVm5qavAbmBThuyMxIamUWteEI"
                  />
                </picture>
                <div>
                  <p className="text-white text-base font-bold leading-snug group-hover:text-red-400 transition-colors">
                    The Future of Renewable Energy
                  </p>
                  <p className="text-zinc-400 text-sm font-normal leading-normal">
                    TechInnovator
                  </p>
                  <p className="text-zinc-400 text-sm font-normal leading-normal">
                    25K views · 1 day ago
                  </p>
                </div>
              </div>
            </div>
            <div className="group">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl mb-3"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCkyZE4l56fzbMEU2Lny8Q1hix1Y0nhscWiSBPS-7-ixHrLt-am6yQpPtMblceTVVShM0M7wA6NlmyvpicBARh2Nno30epI7GhIhKUuHeASzhCH_dKvzCbp5M1HP0Rro6_o4UNCrZNYKhvSIMJa7wV8okl30C9BT6vXMNWY7q-d3WJJfihj7CerkBZDNqEXX5tXI2KiAoTpFw9o1kSAFw-oVvPRSSLqOYUTs12nlWP84VJicSNiJA605ezIJVN3ZlVIkMMxxPuRL00")`,
                }}
              />
              <div className="flex gap-3 items-start">
                <picture>
                  <img
                    alt="Channel avatar"
                    className="w-9 h-9 rounded-full"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvGp2mMDGH6HhiJZBptdo4bJq1OclOLbvdUBug6NwAVhRo2VfrAFA6f6uJeIFq_Dj8KPUp7QIhF-540oFgViHtSO2_UWdVMNaIJ6RgdrXpbbAFcaYSm1c-W4i8umfRwKs-6naDNOpZjMsnLcOHLtKzpDUjLp0a9H-30ipZ9x2wPdUA7cSoIItZ8N5xYlTjMUiqe0XieM1_jcjId1YT0RGk3jkc5TdurSJ7nQjMze18Mtmi2nX2c-QyLrMHGR3taRHngJpLNC9HeWo"
                  />
                </picture>
                <div>
                  <p className="text-white text-base font-bold leading-snug group-hover:text-red-400 transition-colors">
                    A Day in the Life of a Wildlife Photographer
                  </p>
                  <p className="text-zinc-400 text-sm font-normal leading-normal">
                    NatureExplorer
                  </p>
                  <p className="text-zinc-400 text-sm font-normal leading-normal">
                    12K views · 1 day ago
                  </p>
                </div>
              </div>
            </div>
            <div className="group">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl mb-3"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDp9vtnKeR1hZcn6bLr5CgsgmdR3SHu7MQZN7PqOrXV3MDKzR-DKnOsA1EEGgbvEjkFSIdo7qgBssxhC__aZ9rJthPjzcw-hELeYwFTdIZLpj_5DlNjAK92HZby3F_aP26BtkhCEMzcMs90LyINzFzVzqWw6u-v5BQKz1PDkOnxIqIAq5MLxTjZO5U6Va7zcLMOauXTT5YLh-2U9m1vyG1iSGte7KK_LRX_-iEKHpxjaSqKtTynGecqFhKLlG-ZkKpUeAZ9qGJ97yA")`,
                }}
              />
              <div className="flex gap-3 items-start">
                <picture>
                  <img
                    alt="Channel avatar"
                    className="w-9 h-9 rounded-full"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHIe-0_3Ym0EdjEi-PmPWoSi_1X4lpvykK6mGUAFak2_rBvMPCsYtS9fVg0WyopEvHwZswjqGLLzz136tH8pNBUEh8-K_F_g7u72RvFVkxIaGY-_My2P-DT1-pRit__opdZpryS7o2S9dTtpB3AOwe4zchE1cRKkYfZ6LBVhH6KwR6sT6p_1zS2wSuCYncCHjXr3uwueTBvHiTVnq5o0HS_zDJqigYmySwbjcn0LmZF_3JggF7_aZff4BEEBLcvXcTxlWVHkh9iHE"
                  />
                </picture>
                <div>
                  <p className="text-white text-base font-bold leading-snug group-hover:text-red-400 transition-colors">
                    Building a Smart Home System from Scratch
                  </p>
                  <p className="text-zinc-400 text-sm font-normal leading-normal">
                    DIYTech
                  </p>
                  <p className="text-zinc-400 text-sm font-normal leading-normal">
                    18K views · 1 day ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-white text-xl font-bold leading-tight tracking-tight px-4 pb-4">
            2 days ago
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl mb-3"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTubgqj2NKCNXNRDc4t4pc-WJ6C8KlKOCXBWTKijg8wmnE8pzfMITNr4nGbvnJWspJw3jmujVI2VYZ6mLjwi449or9wi30xJ24AQbFTYxTQSAnJwXDilGDSrXVYmIt4OppK3S5zQLX01WZUuv8DsYE3qbm7hEGyVtrqcgNBTYWawnio1tozw4SUDDRrMLTc4zDltTjzObxVbTskQqNghtLUiJLrdy60IgqjJ0-NYv2jcoJ86RTp1crmoGvVdfN9svX6PNlBMGzuHo")`,
                }}
              />
              <div className="flex gap-3 items-start">
                <picture>
                  <img
                    alt="Channel avatar"
                    className="w-9 h-9 rounded-full"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcdfQHj90srQpfYTcNqYrRsDYJR6nM8F1DdKtSxCTIKwkqVGiDBkqSSaaWHMXAABBModU8PeRxpUcjm85EDk3ASeKKgtqu4p7JKMU8wkjyS55KQF5R-ast84QQe3Tdrs6IQmxthhuAfIVeILs6yfbjSSWbQVLEJoOaPMNY0xa3f7jcx6jTkb4KJ-uluMV7gkyWAPd0Ab8yJ2UkYwc50iqJtXcNPMSeZ0vvkoxMIxiNGm9kgUIb0eFc1xLTFX5Wcs-jApNjnpH76vY"
                  />
                </picture>
                <div>
                  <p className="text-white text-base font-bold leading-snug group-hover:text-red-400 transition-colors">
                    The Ultimate Guide to Productivity
                  </p>
                  <p className="text-zinc-400 text-sm font-normal leading-normal">
                    ProductivityGuru
                  </p>
                  <p className="text-zinc-400 text-sm font-normal leading-normal">
                    30K views · 2 days ago
                  </p>
                </div>
              </div>
            </div>
            <div className="group">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl mb-3"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTOXoO4eJ4gjCO9AnRBe9dcRxN-G3lH2ja3XhWTkJUjOW7y7ctPcYdUkeoGS_Q9ZkpbHpTR-QxGgTnNtxbN1xcT_7IDjKjIGaeK1zsZKTLKRt7FnZ8X-0yhzA1p-sx7t0pmBbdytRf3k_a6tnRSadgwIyu97hRB9fav_JJi28aaYHVoPxWCwoz-UONKT2QWPY6eb40h66YulCVW0eRRsQtBqkzXiznM9m6ifyAK5cfjhetaEGD0ErvbSdoWqjYnCRHdjUPincxbxs")`,
                }}
              />
              <div className="flex gap-3 items-start">
                <picture>
                  <img
                    alt="Channel avatar"
                    className="w-9 h-9 rounded-full"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG4EMOtp4a5SDquVavuEcEy-ldlPbIwIqjqDGj42GlTPNpfNADs8YZrCxGspAFoXfxsr7owim9g2mFmr95nbHJJ-OL0m2qDoh2mo4ZHQ-uU_K8zWQt2CSH-RbGP8jaRVI9yvWUkkUJnAI_7nSzO6J78LPVN9QKJpZlpZRiJ72XUdfHG469t6oW7ZVav3GSwQXbtF6gGKolqHJTuHdW79a6G85XD0jPgdUmfg0X07LZ63i5hBfs3LRBmVhHhINqTOqg0TqUCx7k3R8"
                  />
                </picture>
                <div>
                  <p className="text-white text-base font-bold leading-snug group-hover:text-red-400 transition-colors">
                    Exploring Ancient Ruins in South America
                  </p>
                  <p className="text-zinc-400 text-sm font-normal leading-normal">
                    HistoryBuff
                  </p>
                  <p className="text-zinc-400 text-sm font-normal leading-normal">
                    14K views · 2 days ago
                  </p>
                </div>
              </div>
            </div>
            <div className="group">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl mb-3"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBUVPrMJMSm4JfrIyVvAaO-cPsN9IzzvvcVv8LOMjPvnhkwRkZcAcdDupFVL8DX0W-eY8eEhC3AJWd_rQJWATInsTmIBiRl9sR-PMqm-NThXXXYgLa9OWdyDpObwPraSbDy06YnXvzWU4XvI7LD3WakdPZcZzWTlzTMz9tgqECiovfTEoHz4AFAPq0g5qh9jUISXLIQH4yagpA1u2_Tbo57YhxKl2W-F5VgEzxv18UUnz2J-3j1CvS3el0JXNYdXkdu2xXzG2vqsmI")`,
                }}
              />
              <div className="flex gap-3 items-start">
                <picture>
                  <img
                    alt="Channel avatar"
                    className="w-9 h-9 rounded-full"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpOMh664_tLACKEBJydJ5BdMLYTDIL5UYt4F_bZOsDjz62VC9cNLZ-_iYfCSNEVkUdPhqrlHmcjaBLfDmRiwVUFZlRVVECi6s_cHdFRTfw-4HdWDc7eFYcdIyt5zZjiYKvviAfpDvekx0LxaCYXqQzSi99l93IOpcwGqooSQCHDAxNPIqlLNeFye4K5s7G9NBJ4UE4c0JjthkdULAyjAymuZniFkS5O0KtCrFa7sypNVoo1H4-NbmLc22hngNGwzokmNVg89THPQM"
                  />
                </picture>
                <div>
                  <p className="text-white text-base font-bold leading-snug group-hover:text-red-400 transition-colors">
                    The Latest in Gaming Technology
                  </p>
                  <p className="text-zinc-400 text-sm font-normal leading-normal">
                    GameOn
                  </p>
                  <p className="text-zinc-400 text-sm font-normal leading-normal">
                    22K views · 2 days ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
