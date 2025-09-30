export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "ClimatePro HVAC",
  description:
    "Professional HVAC services for residential and commercial properties.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  links: {
    twitter: "https://twitter.com/climatepro",
    github: "https://github.com/climatepro",
    docs: "https://climatepro.com/docs",
  },
}