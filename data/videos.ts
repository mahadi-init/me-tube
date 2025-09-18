interface VideoType {
  name: string;
  avatar: string;
  title: string;
  slug: string;
  thumbnail: string;
  views: string;
}

export const videos: VideoType[] = [
  {
    name: "Brewing Enthusiasts",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-LgZzm-louF_Ec1px2WRds38qUO5eHfmU4R1p7kZwyELoTJDZDEWMSTCZyVMlbKDGJ13Ask_csoqwfTPkC23UfddsZwKTij8l1HPhxXiHOD3mB3Wwcpy7fDh28a8D3C2qWJsp593eup5pI_9M_JeyMKDmz-gRoJAKHzH3fLSo6fEaTBApa7fPpAeB0LET4fJONXZs_9QWl0aIWOHfpIGruwsDIQRfILcZzo2OXvgXAZHBrJ6CmOEt-b4u_tSmKXmlT3n1t9iAhf4",
    title: "The Ultimate Guide to Home Brewing",
    slug: "the-ultimate-guide-to-home-brewing",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJTqruA-9_EBPh9e3SElXq5jl_1sRgzzYKxA0r8d1JyeaDGFdDueU05K-SbIfdJ1-q7BU_8uVbgKlQSOw3NHMWquYOX9kpxQKO22gJVNhWFy1Wa3M2XXIWp5Be3r8zYJLNCm7j-tz59JXsbusv7hkaNKbPyo1MQaJhr07VKNf5Wt_vHQ99bSzqDcDdZpBlwEj3vVbfpfoywTM76UHzYrPT0XI9__iGVfTkfTWbBgJ3U8wzYLVpc_RkusvZmAlhSp3o4K1oVaTxc9I",
    views: "1.2M views • 2 weeks ago",
  },
  {
    name: "Travel Explorers",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBjGyBqMHuIKnrLssdgLtUuPrki13iqrTvyv_y2BIfUEk2z3MuptfgzFwL741rYO___6lDuvX0nmP33MJ8SgNUOQi8IgXJcVKuFLcaimZ5jqHMG6l6_G7gBr6T3alp4VJ9kqf3ZF9PuRheOA15G3iVFo-R7qP_CodzVUVK2W-G_E1iUFXhI5_ZKk3Tb5id1O_8sDYMYZcpVXHbGTlkZ2aFeWanAE9_0G_GtDkdQz8KwsKafSBj0K2E2nVuXnjIc40_QtrXB43GgOKs",
    title: "Exploring the Hidden Gems of the Pacific Northwest",
    slug: "exploring-the-hidden-gems-of-the-pacific-northwest",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBfMUY6bpJAGgNA3PeI6qnA6Cyg_wg8yhHRnfygRDFrpaoO9qzS0njp5jDPFqdQlpF0rpKzXONnpXmjdDiNGg1oeWbPT4Rf3HNehGICcxXsr2GCgpN-T1GVuuRw-qzclcUxDdx7rvQzsOk32KhT2dGy4GbnL6nSW4VfPk6gn7iaIqPmTbt4jYEHmspHWnco91jxasIifRiaCH9D6tCpLaAYKjRRM9XM2xeWuUsG4V1Sj9hzBDA0vLg5IFNQPHGEEfJWxJp6GLXzLDQ",
    views: "3M views • 1 month ago",
  },
  {
    name: "Urban Lens",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD_etuGD4JJflo1jsfoT9jnYT8La-bgKbEjRys1_EMPiu7YgRVsktylUPEGKtw4Gft_NyFnZSRs-y0S5MreLcl8-Vg_IYrjlGrcqfhcpzVHUn2C7QhWZBY7pG_dFkddZMXRyfbxI8vVT-A_YjKxE6DQhzjnNeFHhowgzCncXOJdNLZSvnyAvSBs4ZlI4_t3VwtyEqDwYBdxxFOU6Mm3vy7inUI23aHq_v7Prp_4cfgqy2ZHwgqSiTN5lSx2FOEEsIU73FsuOyAXkow",
    title: "Mastering the Art of Street Photography",
    slug: "mastering-the-art-of-street-photography",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAdNu4bPTM4kTNzZKhNssJCR0Ovkeh5kUz1TCC5w3djnCKeOPyWyrZ8RLMC2qb7G5uZ4rUpA_b15Ynj6nPxZq-YRMTNSOUjKyWbQlVek8sBXQ6UsmBy0zn3yBfBtWH9LlqiISrse-eUvRym3p6TGz1CAUBiZYd-jhioI2zpeOKhQJ1WYs3K_9qa_cNoG49KAA9YalklAvRAXeA42n5PHE21XaGTIbWsQiGqot2ttM8bogTkZt9G-Ejx91yNeNaCASSOtj5HzZ4lRsw",
    views: "540K views • 3 weeks ago",
  },
  {
    name: "Wild Encounters",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBS3qP16tI3_5t90l9wSp4JCNYWlJIOynIV2JptM7Spou8vvQxL32LfJyS2f788NMYcF4_fBJpZRj9GuvCnrW7zoCsNUw8XRoYx_m2GfCQnQ5DDYlLUBRgG9BleaL6I4Y7yken43EcIH-olei9cG04i4oVNQzwxgVT2Vu_nM_LHlZDPQ3OBMSy7GCFkG7-KSu9znpG27I69oyAPY7j8hiPEHK-GEHk9Y499G_QhJl1pJvhjBtFsSBaanlDg0F8vFb245T0qTuJVIVg",
    title: "A Day in the Life of a Wildlife Photographer",
    slug: "a-day-in-the-life-of-a-wildlife-photographer",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCsJrK_xbppD9d_nReGGvnBo59GYNoHQkhA2StVASQ6NXE7a94BNMAEaRv88JUU6SaZuSZzopbdyeefXMOJRv0uq5PVblkTpX91_TWvcDlZyYxg5yLGfaUD1HOoYcm3vQCZhtj1Bz_xST7rJZkpT4VxPP7maPj88RI21j1xPLJTO0Pjq0J75nBQddQ-LNs4Dw51Lt9BQHqyZJYdJVJf2CNlKJi4F08H57J_RMzMeBOo8V8SZK3zfgHq-waqG89Qvg1081TdGLmITOc",
    views: "890K views • 1 day ago",
  },
  {
    name: "Coffee Connoisseurs",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA3p4xSZt5OxJnishBzfuRE7J2dQp9OvWX3Zoy-8GqMe7IgVRy060wYkJtjR5Q3AEDfOSHg6FFbgoXrBbPguYx4pHR9abTNZBr-4hvinrHDq1Zq18DD1ihU6oXJ0L629cUhyeRB2xMX1YMYbRm8R5E37WEOn7mKKQpKXEJ7aRwrucdf_9kJYtyRjeiN-2x2UgcJFxz9VWFIpm4C6NGW3oMI-L6H23rvVz8IijHSxEqCJeLMVxf20F4XvuVTRxcq8GmUCmGI0Lte_CE",
    title: "The Science Behind Perfect Coffee Brewing",
    slug: "the-science-behind-perfect-coffee-brewing",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBGVKJ1Ck8Ufnigo8NawlA0iJCiqr8j0ag1suQYRYju4A-4fFOGBP3BGWbO89VCbGubNJcCH1SOJUqwXYYTbBUh6xVKgL4zekoTj5YJvqD6oP_jqnliqvMn21zUI8ICc9WmydCnjNImUc2-jOwfepZbumSpt4IZVUi0dHuXM-TfQ0TmAvlHswmxo38e4rekETgaWXuZ-wiN-Py7ucmlyOlAQDzrJrzkQmpXG5VPiPhS4wa_vY6Wtf9X8a-yODGkiRQrfDttx0zlDqA",
    views: "2.5M views • 4 months ago",
  },
  {
    name: "Eco Living",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPJXa3QL9V59TIvs2o4RSmD43wjHIpuscpr2cuSjfXJyXRJyAnggxzp3ZJEkjEBAPqKveimYmIu5LEMmtOZJm8p_bDhsamxs_ZbcIpbydgxVkBvUVHPq6V6ro10lDrQdIeZDfhrjCLZ941mwgeUv4ds9n3CUtzSVLgWxDkJbYbPXkdH_WYQtGt1GLXhEwojqAzgDJZHK6x338KFJ_CBkJiR3NjSXcUw58_nRInh8yf1_uzVrz57cV50HV6ckf9cP1pq1BMP42xfqg",
    title: "Building a Sustainable Home: Tips and Tricks",
    slug: "building-a-sustainable-home-tips-and-tricks",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDBJMDi3BiDvrl8u5oYDwJjdN16tPnhMTdHngVLy7b8_HkEW-RiCZh54xSccty9iq5GwolewSySctUaXZOwpg39-M7D58gDTA_23Lv6sbA6-_gYEOAfucVjr9FTbvOMz5jqSvOivDYmEjC3yxAwL2FjaZnoJhhmtwGK4G2-4g3FcRApRfbG-8HZnRt29VypWpW6v7XtY9ykVk2xA2kfqTDW35ellJ0Pe0OXkU5cf94_B-JMc_PvLDJRCEV48XWbMxPa84L3of0bSmg",
    views: "789K views • 1 week ago",
  },
  {
    name: "Tech Trends",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYv5yCdjdS_GVJ0y0Iql4D3H2AbPt5ENMhKoyMhswIhauunlO9h-uJmmIQcrwjYeIvJXnkVrzRDkjH1RElAgNM7sGejBHNZeRIvsJXsA8CurnfieLnwPAP5Fk19VvHQef42kh36FqK3mRHAVAk0YdmkZhhJEcpuYj7nemLH-ke0sGCXiFVgJhBA0ImzRK7aw98z-9--IbjJ0PcLrFGC6YGVwRj9PrBd2o29F5sWafKCFyJsjfejNIznaMtRgLu59KvfECjkRi48aM",
    title: "The Future of Electric Vehicles: A Deep Dive",
    slug: "the-future-of-electric-vehicles-a-deep-dive",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBkS11vpe3Su6G0dhnRBPAUnWIY4PxoLiN6i7AsEsoJlRGvlfIgZu7K_qUM1FEhXhcOKnV6QnvyeeLHazrd55Sb_u3TfeCWH6qac33JVdEHlk06FpUxIn8B6Ekr7Lgpm0N9Rz7nkPtdSy7hw7HR88b_Eq0VQhPdHaOPmerTy_wqp-OasqjQV_LA0J84Ur6OsyfXU-fVFWhTSEsORdsDrB_EFMQr9QxDjJtdOSCxrPDn7jGuBvxwQv0Kq9l1wvOGjk6yv-4UTvpXAcQ",
    views: "4.1M views • 2 days ago",
  },
  {
    name: "Cosmic Captures",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCTUXKi76UW-Nf630fzF2UfmgWe40Ia1CBQyaxAWSpxDJDJKuUcx7F8PEob9L7zaEJVsjsDrC4QTOJBdJmsM--xp_Po96YBOVVmv9oC9yZhejM-0zASNtBTYiA_61gCcEOJmzw3p2CW0AMIsKtvDU9EAhwTFxSRMhkVGXWQQtQQm7m95-AHCRlkXkJ-QLrp6kN8vM37YkCs9m2c7gVlGsoTUqzgLhKUaTkurTGnTwdfhVpPuMU_sH8U8ttOTbxgM4HNwApxQ2IPvVM",
    title: "A Beginner's Guide to Astrophotography",
    slug: "a-beginners-guide-to-astrophotography",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD6EIE2p93hF1zoKkv30G0WCh9cH4fg9_rrre4o51AG5T-0yTPsDlKayMT33KDpsT0Bhfj5c3JoqIks4eoM06lQuiIqMQ_S3P2fcmRxMpCgLCCnZsyIclqpelKxOxSLQLe9CXWtQsmZS770BsvnCza26nN8T5UNBInoQBJrYupKVO33n4r1Fx3yuRoPoFFSiA4Zsxide134Kbp4E8LSK71PgSmjQChV28X7CuyriOozmrKFnMYhalnrTGjamPPrLgWQ03KVRwSyz3c",
    views: "312K views • 5 days ago",
  },
];
