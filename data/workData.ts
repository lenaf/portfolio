interface Work {
  title: string
  description: string
  descriptionSecondLine?: string
  stack: string
  href?: string
  desktopImgSrc?: string
  mobileImgSrc?: string
  github?: string
}

const workData: Work[] = [
  {
    title: 'Hulu',
    description: `Developer`,
    descriptionSecondLine: `Built and designed.`,
    stack: `Gatsby, Tailwind`,
    desktopImgSrc: '/static/images/projects/hulu-desktop.png',
    href: 'https://www.hulu.com',
  },
  {
    title: 'Kangarootime',
    description: `UX Design, Developer`,
    descriptionSecondLine: `Built and designed.`,
    stack: `Gatsby, Tailwind`,
    desktopImgSrc: '/static/images/projects/kangarootime-desktop.png',
    href: 'https://k2.kangarootime.com/',
  },
  {
    title: 'Mariposa Gallery',
    description: `UX Design, Developer`,
    descriptionSecondLine: `Built and designed.`,
    stack: `Gatsby, Tailwind`,
    desktopImgSrc: '/static/images/projects/mariposa-desktop.png',
    mobileImgSrc: '/static/images/projects/mariposa-mobile.png',
    href: 'https://www.mariposa.gallery',
    github: 'https://github.com/lenaf/mariposa',
  },
  {
    title: 'Loondog Ceramics',
    description: `UX Design, UI Design, Developer, Ceramic Artist`,
    stack: `Hydrogen, Shopify`,
    desktopImgSrc: '/static/images/projects/loondog-desktop.png',
    mobileImgSrc: '/static/images/projects/loondog-mobile.png',
    href: 'https://www.loondog.com',
    github: 'https://github.com/lenaf/hydrogen-loondog',
  },
  {
    title: 'Interpretelle',
    description: `UX Design, UI Design, Developer`,
    stack: `Gatsby, Tailwind`,
    desktopImgSrc: '/static/images/projects/interpretelle-desktop.png',
    mobileImgSrc: '/static/images/projects/interpretelle-mobile.png',
    href: 'https://interpretelle-git-main-lenaforti.vercel.app/',
    github: 'https://github.com/lenaf/interpretelle',
  },
]

export default workData
