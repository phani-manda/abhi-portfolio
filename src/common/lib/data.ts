import React from 'react';

import filedriveImg from '@/../public/images/file-drive.png';
import portfolioImg from '@/../public/images/portfolio.png';
import project1 from '@/../public/images/project1.png';
import { BookIcon, BriefcaseBusinessIcon } from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Friendsmoo Info Media',
    post: 'Video Editor and Graphic Designer',
    location: 'Banjara Hills Rd Number 3, Hyderabad',
    description:
      'Working in Friendsmoo Info Media as a Video editor and Graphic Designer. Providing professional grade design and editing services',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'April 2025 - Present',
  },
  {
    title: 'Social Post Digital Media',
    post: 'Video Editor and graphic designer',
    location: 'Jubilee Hills, Hyderabad',
    description:
      'Worked in Social Post Digital Media as a Video editor and Graphic Designer',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'August 2023 - March 2025',
  },
  
  {
    title: 'Qube TV',
    post: 'Video Editor and Graphic Designer',
    location: 'Yella Reddy Guda, Hyderabad',
    description:
      'Worked in Qube TV as a Video editor and Graphic Designer. Provided professional grade design and editing services',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'April 2025 - Present',
  }
] as const;

export const images = {
  filedriveImg,
};

export const projectsData = [
  {
    title: 'Yadava Children’s Destruction of Dwarka',
    description: `A straightforward edit focusing on the mythological story the Yadava children fighting among themselves. The video shows the resulting destruction of the great city of Dwarka.`,
    tags: ['Photoshop', 'Primiere pro', 'after effects'],
    imageUrl: project1,
    link: 'https://vimeo.com/1138975221?fl=ip&fe=ec',
  },
  {
    title: 'Poster Design',
    description:
      'Created high-quality visual assets and posters for digital and print media, utilizing advanced compositing techniques in Adobe Creative Suite.',
    tags: [
      'Photoshop',
      'Adobe XD',
      'Adobe Illustrator',
      'Canva'
    ],
    imageUrl: filedriveImg,
    link: 'https://drive.google.com/drive/folders/1Hs6rQvkeTtwhqJDL4zCccILGvink5wNn?usp=drive_link',
  },
  {
    title: 'Portfolio',
    description: `Portfolio that you're currently viewing! This project showcases my work and provides information about me.`,
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Framer Motion',
      'Cloudinary',
      'React Email',
      'Tailwind',
    ],
    imageUrl: portfolioImg,
    link: 'https://github.com/bbyc4kes/portfolio',
  },
] as const;

export const skillsData = [
  ['PhotoShop', '/svgs/photoshop.svg'],
  ['Adobe XD', '/svgs/xd.svg'],
  ['Adobe Illustrator', '/svgs/illustrator.svg'],
  ['Adobe Premiere Pro', '/svgs/premierepro.svg'],
  ['Figma', '/svgs/figma.svg'],
  ['Adobe After Effects', '/svgs/aftereffects.svg'],
  ['MS Word', '/svgs/word.svg'],
  ['MS Excel', '/svgs/excel.svg'],
  ['MS PowerPoint', '/svgs/powerpoint.svg'],
  ['Instagram', '/svgs/instagram2.svg'],
  ['Youtube', '/svgs/youtube2.svg'],
  ['Facebook', '/svgs/facebook.svg']

] as const;
