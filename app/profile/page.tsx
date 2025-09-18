export default function Profile() {
  return (
    <main className="p-4 overflow-auto">
      <div
        className="h-48 w-full bg-cover bg-center bg-no-repeat md:h-64"
        style={{
          backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuC-fmTb1ifwiLZbSHbLpz6PsLT5_mz51JiPXxzCW9KwlbIRqeVJDSgkveYLwlvv2d8CEH0uMCAoiaaFftcdW5raYcf1uxurpfs59IFGp-9OH274ALa8tvJzGEjZ6cSd266GUPlqua3MwBb-o5IJ_L-h-PoA9VtN4l35KbRyRU8sRK51bTGwWYYr2Y_3KIAhY0tYrE_x8_seK8DiF0jwvESNJ0LIGl85AXv_-zMO2begf-kdmh3jfY7OeQMjfCqJxGel4PM4kmRbLB0")`,
        }}
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-16 flex items-end gap-6 sm:-mt-20">
          <div
            className="h-32 w-32 shrink-0 rounded-full border-4 border-gray-900 bg-cover bg-center bg-no-repeat sm:h-40 sm:w-40"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDUHPOEcQhQx_nH6mS8K1SWxmec8QRkoF7sCT0KbsVREYfEQCQhkQgNnpVjl2ud5fOMlu-YLIfYA_yjwPULTv0zjNSCidl-J_povgwPgZMt-EddgTr3bMnyMQQ74hIlf1AcmrFOmWNdOm0mCTSr3svm_F3vEBv-yW7dD4Nkp-xTBF6CbU27VW39ushL73z4OA4jKxep8iefAA8qmEeK7q4gKf7nWFoJ0j-WmuIWlrfrQqt7g5v9s8nwS7zjRKk-CfWKwnYvtgUs7hY")`,
            }}
          />
          <div className="pb-4">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Sophia&apos;s Adventures
            </h2>
            <p className="text-sm text-gray-400">
              @sophias_adventures • 1.2M subscribers • 300 videos
            </p>
          </div>
        </div>
        <div className="mt-6 border-b border-gray-800">
          <nav aria-label="Tabs" className="-mb-px flex space-x-8">
            <a
              aria-current="page"
              className="whitespace-nowrap border-b-2 border-[var(--primary-color)] px-1 py-4 text-sm font-medium text-[var(--primary-color)]"
              href="#"
            >
              Videos
            </a>
            <a
              className="whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-400 hover:border-gray-300 hover:text-gray-200"
              href="#"
            >
              Playlists
            </a>
            <a
              className="whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-400 hover:border-gray-300 hover:text-gray-200"
              href="#"
            >
              About
            </a>
          </nav>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <div className="group">
            <div className="aspect-h-9 aspect-w-16 w-full overflow-hidden rounded-lg bg-gray-800">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTpfQq5OMCULfVKb0jESEKADKKRBOx34FFIyPMQFezP_Yv6QamkQEvfauH42NXLH6hcOlMoWwub9TEpCNuKEF_gegYLzr2Zb7G4_Hu8tWakAFWgFnc7SH8huhJVeeu-RLKig2sF5TYZNqjBJn3zuSutzAQPho00oW1cBYOxnspt78eZ9RbIG9BdeqFzeMNUYHczE6WqO5Ef22CqBsP5vij-d6b6ezAj_jnJX1_V_Xuy59BOzLVieIitifLD9MPCB1UHP7EMi-ktno")`,
                }}
              />
            </div>
            <div className="mt-4 flex items-start">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-white">
                  Exploring the Hidden Gems of the Pacific Northwest
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  2.1M views • 2 weeks ago
                </p>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="aspect-h-9 aspect-w-16 w-full overflow-hidden rounded-lg bg-gray-800">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDlDOH3tkPlRlywRbpCmgrd9OKHiuqZYUSKXkGJZL9D2LmprhXYPFcPgLf_MZHA2k88WrCHcQ_6cwnpRVsfx2vSJyL-7dCT6_COiAAF6VvmpbuoQW-Wz1Krz8oKFcp13PXk2gNxsbwIuv4n7Vwf7XXfkMQLXiGW5i6YjwoKjMk_AtZu0KdaXzcWJzFlskdmGvRMJyI2XTiZWSzTCf1Yowk82EBHIif1NCZ9kSCgQsISe94PaFk0TGqR8-2nXsp2DTxm53JcOb9JowM")`,
                }}
              />
            </div>
            <div className="mt-4 flex items-start">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-white">
                  A Day in the Life of a Digital Nomad
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  890K views • 1 month ago
                </p>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="aspect-h-9 aspect-w-16 w-full overflow-hidden rounded-lg bg-gray-800">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCpF1FxKeV6XJVgbEen6p25HsEzQbB7e-F0ZSVIhFMyvjNQu-uzwas4AmY8Oxoc6rtlpTrlQMtDC0C2wQh4JqIAIZ47djXFtLgzidfCbNMh2NmACmK7KVXoMbTK5s7YwJcm3L5vUWTrkJlxKmj6Ig5WqDapdWfZrXJ19id3Mv6jrykbsGKncUQEaWaawNf4XBFJ7k0gsLjn_LlbRtj2KUcMovBjprZNyKc4iD26dx_Pc7n7w0kFyyEuD7rD6S2JyTDciUJrUDk1kO0")`,
                }}
              />
            </div>
            <div className="mt-4 flex items-start">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-white">
                  The Ultimate Guide to Sustainable Travel
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  1.5M views • 2 months ago
                </p>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="aspect-h-9 aspect-w-16 w-full overflow-hidden rounded-lg bg-gray-800">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCtF_h0y_C3zxV9_Ipb37Ra8CaFP0ypmYnJ5SXtbYB6H2DDiTPo7uYkz7NToEL6ozfK2Bg4JtOd0snaR5FTexgIMKEw96zNhRNzBQEmS-EtNsvRKviKN8hrHdhNTkBZXjNqB9pl2GWKpt7wCmWc-GhSQIHTPnKxTK2MaYtjqJhzfoNMDC6fKFEDQdO7chtIsWoRgs_Ml53ctzFRItf04fYe9PFjqMf60zGggl2PEvNys_VJtN49Mll0oMaRn9Y0_M8CxU1WT4kPG4w")`,
                }}
              />
            </div>
            <div className="mt-4 flex items-start">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-white">
                  Solo Female Travel Tips and Tricks
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  980K views • 3 months ago
                </p>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="aspect-h-9 aspect-w-16 w-full overflow-hidden rounded-lg bg-gray-800">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDzmUGU-nprp_x_LDBZ0zFYxJuhUmbZBhcDh6-i6O4Fk_lT-X1LcI_Asik1NUXQrdtn3TqqfJbNHptz67s1MeYnuMB1SU2von0oyQ9zRI5Debibl2Lr0IPPBRkKWq4gza0BWMCwaRTpnGRJDWHvA_3z4eT5J2FdQGrCpuO8NHvZzpxakg9CBW6mLV29Tkoy9Z5sozv-11ZxdtjNmv7iHqnESJg6FAAPs2fCd0nzD6aVDSLPo1y_0aKi7D-fGRYaZIVpu2YsSgupVsc")`,
                }}
              />
            </div>
            <div className="mt-4 flex items-start">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-white">
                  My Favorite Hiking Trails in the Rockies
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  750K views • 4 months ago
                </p>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="aspect-h-9 aspect-w-16 w-full overflow-hidden rounded-lg bg-gray-800">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDp1hhhNP7A8M9-blCrcM9kOSBR57T-4HnvXwVxRFhfgZwGxjMjCbjGBZhPB9RaZNogc0jOz_OYLcoPphFIielpGmeKzHn83QoQr_ZkV-tgEPRMUssoJskOEPsMqHBwTdIK2jgmKXsy9ftYhqqQp74RFa20rE5RXLC-TluHYpDElbnga5-R1nFzvFfu2aPR0kOOc-gyXozOf0S2XOuKaDQtHn80LYfq0x2i5g74qLrbw1Lt681EwpB9GQ-eEtEEG5kJGG34aXYUvK4")`,
                }}
              />
            </div>
            <div className="mt-4 flex items-start">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-white">
                  Budget Travel Hacks for Southeast Asia
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  1.1M views • 5 months ago
                </p>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="aspect-h-9 aspect-w-16 w-full overflow-hidden rounded-lg bg-gray-800">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBxCvLIPxXTpFYni5XqKK_Z2-Rvjj7-VX2YDKViwSuFHyDqfu-Lo0KGyoS95vp6xiE4aodGmpMD6ungmkCaui0E9o1ilR0Vrfsn653CG2QkNjwrjgFQC0BUTmaEdgemO8LniAUjkIqQ1cj7PNRdjrr10CYXxYvjV6CoVeLjN1bt50GeF25V3ERBvqycuiRX5W_4_c8XxtM85hkZvNGhvwLQwxcaMzqVxhFoJR31J-faLp5qfIM9hlKZ6aQ4v1jwoDM4kgOR0ES8z5I");`,
                }}
              />
            </div>
            <div className="mt-4 flex items-start">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-white">
                  Capturing the Beauty of the Swiss Alps
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  650K views • 6 months ago
                </p>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="aspect-h-9 aspect-w-16 w-full overflow-hidden rounded-lg bg-gray-800">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDcxSjT4panuqb7Gcc-DH7pl-uIFuhEREcKmAZ8t6QvFVryGNsAo6XVPeQjaL6s_QDFu78VaiYj2AkmttRhFPz9KWQK6XDbFBhKwYyqKHatAgAPCN6MYt6lBBBdXLPdpFYV7IO26wunyoKlTPIo1BBkcOkgxikCAqx0zjAIe0-8m6TQW8zeOjJ5QKOtL-2FoNR4GkTh7j3LEl6n2jC3yIETpbNXc-S9eQWoEXQvaLYynjWVraO2xwjiENXOg5C4oSS-2hKRbAU4ZNk")`,
                }}
              />
            </div>
            <div className="mt-4 flex items-start">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-white">
                  The Best Street Food in Mexico City
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  800K views • 7 months ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
