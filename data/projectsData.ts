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
    title: 'Mariposa Gallery Exhibit Static Site',
    description: `UX Design, Developer`,
    descriptionSecondLine: `Built and designed.`,
    stack: `Gatsby, Tailwind`,
    desktopImgSrc: '/static/images/projects/mariposa-deskop.png',
    mobileImgSrc: '/static/images/projects/mariposa-mobile.png',
    href: 'https://www.mariposa.gallery',
    github: '',
  },
  {
    title: 'Loondog Ceramics E-Commerce Site',
    description: `UX Design, UI Design, Developer, Ceramic Artist`,
    stack: `Hydrogen, Shopify`,
    desktopImgSrc: '/static/images/projects/loondog-deskop.png',
    mobileImgSrc: '/static/images/projects/loondog-mobile.png',
    href: 'https://www.loondog.com',
  },
  {
    title: 'Interpretting Business Marketing Static Site',
    description: `UX Design, UI Design, Developer`,
    stack: `Gatsby, Tailwind`,
    desktopImgSrc: '/static/images/projects/interpretelle-deskop.png',
    mobileImgSrc: '/static/images/projects/interpretelle-mobile.png',
    href: 'https://www.interpretelle.com',
  },
]

export default projectsData
