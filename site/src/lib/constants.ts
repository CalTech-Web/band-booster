export const SITE = {
  name: "Groveport Madison Band Boosters",
  shortName: "GM Band Boosters",
  domain: "gmbandboosters.org",
  url: "https://gmbandboosters.org",
  description:
    "An Independent Nonprofit Entity Supporting the Groveport Madison Bands. A 501(c)(3) nonprofit providing moral and financial support to band students.",
  tagline: "Supporting the Groveport Madison Bands",
  facebook: "https://www.facebook.com/gminstrumentalmusic",
  donateUrl: "https://square.link/u/jjFE8mif?src=sheet",
  email: "FORM_RECEIVER_EMAIL",
  copyright: `© ${new Date().getFullYear()} Groveport Madison Band Boosters. All Rights Reserved.`,
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
] as const;
