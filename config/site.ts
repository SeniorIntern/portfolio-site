export const siteConfig = {
  name: 'Nikhil Thapa',
  url: 'https://nikhilthapa.vercel.app/',
  ogImage: 'https://github.com/SeniorIntern.png',
  description: 'Nikhil Thapa | Portfolio website',
  links: {
    twitter: 'https://twitter.com/senior1ntern/',
    github: 'https://www.linkedin.com/in/nikhildotjs/'
  }
} as const;

export type SiteConfig = typeof siteConfig;
