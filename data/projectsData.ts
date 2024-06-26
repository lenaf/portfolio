interface Project {
  title: string
  description: string
  descriptionSecondLine?: string
  stack: string
  href?: string
  desktopImgSrc?: string
  mobileImgSrc?: string
  github?: string
}

const projectsData: Project[] = [
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
    href: 'https://www.hulu.com',
  },
  {
    title: 'Mariposa Gallery',
    description: `UX Design, Developer`,
    descriptionSecondLine: `Built and designed.`,
    stack: `Gatsby, Tailwind`,
    desktopImgSrc: '/static/images/projects/mariposa-desktop.png',
    mobileImgSrc: '/static/images/projects/mariposa-mobile.png',
    href: 'https://www.mariposa.gallery',
    github: '',
  },
  {
    title: 'Loondog Ceramics',
    description: `UX Design, UI Design, Developer, Ceramic Artist`,
    stack: `Hydrogen, Shopify`,
    desktopImgSrc: '/static/images/projects/loondog-desktop.png',
    mobileImgSrc: '/static/images/projects/loondog-mobile.png',
    href: 'https://www.loondog.com',
  },
  {
    title: 'Interpretelle',
    description: `UX Design, UI Design, Developer`,
    stack: `Gatsby, Tailwind`,
    desktopImgSrc: '/static/images/projects/interpretelle-desktop.png',
    mobileImgSrc: '/static/images/projects/interpretelle-mobile.png',
    href: 'https://www.interpretelle.com',
  },
]

export default projectsData
