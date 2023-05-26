import {
//  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
//  CalendarIcon,
//  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import profilepic from '../images/cropped_axe_head.jpg';
import porfolioImage1 from '../images/portfolio/kesselrun-logo.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/DoD.png';
import porfolioImage4 from '../images/portfolio/US-WhiteHouse-Logo.svg.png';
import porfolioImage5 from '../images/portfolio/pif.png';
import porfolioImage6 from '../images/portfolio/NASA_logo.svg.webp';
import porfolioImage7 from '../images/portfolio/black_pearl_logo_640.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import testimonialImage from '../images/testimonial.webp';
//import paper_resume from './KenKatoResume.pdf'
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/wedding_night.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Home of KenKato.me',
  description: "A place for saying what's beyond my resume",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hello, I'm Ken Kato.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      For over a decade, I’ve been at the forefront of leading transformative and sustainable change in highly regulated industries by breaking down barriers along the way. 
      My technical expertise, unique insights, clear ideas, and sound judgment allow me to navigate complex business landscapes with confidence and precision. 
      Working in dynamic and challenging environments has honed my ability to excel in identifying opportunities for growth and innovation.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg"> 
      Throughout my journey, I’ve focused on cultivating strong leadership skills and fostering collaborative relationships across diverse teams. 
      By promoting open communication and nurturing a shared vision, I am able to rally teams toward achieving ambitious goals. 
      <strong className="text-stone-100"> I firmly believe that by empowering individuals and fostering a culture of collaboration, 
      we can drive meaningful change and achieve remarkable outcomes.</strong></p>
      
    </>
  ),
  actions: [
    {
      //href: paper_resume,
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I’m driven by a relentless passion for pushing boundaries and making a positive impact. 
  I thrive on the thrill of taking calculated risks, embracing challenges, and inspiring others to think creatively and strategically. 
  Outside of my professional achievements, I cherish being a husband, a self-taught watchmaker, an animal lover, a cyclist, 
  a competitive axe thrower, and a tinkerer. Additionally, I strongly believe in giving back to the community through my involvement in civic technology initiatives.`,
  aboutItems: [
    {label: 'Location', text: 'Washington, DC', Icon: MapIcon},
    //{label: 'Age', text: '29', Icon: CalendarIcon},
    //{label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon},
    {label: 'Interests', text: 'Axe Throwing, Watch Making, Fur Babies', Icon: SparklesIcon},
    //{label: 'Study', text: 'University of Victoria', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'White House Presidential Innovation Fellowship', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */

export const experience: TimelineItem[] = [
  {
    date: 'October 2019 ~ Present',
    company: 'White House Presidential Innovation Fellowship',
    title: 'Entrepreneur in Residence',
    location: 'Washington, DC', 
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'October 2019 ~ February 2022',
    company: 'Black Pearl, Department of the Navy',
    title: 'Director & Founder',
    location: 'Washington, DC',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'October 2016 ~ September 2019',
    company: 'Kessel Run, US Air Force',
    title: 'Enterprise Architect, Cloud & Platform',
    location: 'Boston, MA',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'January 2015 ~ September 2019',
    company: 'Mitre',
    title: 'Sr. DevOps & Cybersecurity Engineer',
    location: 'Bedford & Boston, MA',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'February 2014 ~ January 2015',
    company: 'Massachusetts Institute of Technology Lincoln Labs',
    title: 'Sr. DevOps & Cybersecurity Engineer',
    location: 'Lexington, MA',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'January 2012 ~ February 2016',
    company: 'Ken Kato Consulting',
    title: 'Founder & CEO',
    location: 'Somerville, MA',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Looking forward to hearing what you want to tell me.',
  items: [
    {
      type: ContactType.Email,
      text: 'ken@kenkato.me',
      href: 'mailto:ken@kenkato.me',
    },
    {
      type: ContactType.Location,
      text: 'Washington, DC',
      href: 'https://www.google.com/maps/place/Washington,+District+of+Columbia/@38.893716,-77.0969762,12z',
    },
    {
      type: ContactType.LinkedIn,
      text: '@devsecops-kkato',
      href: 'https://www.linkedin.com/in/devsecops-kkato/',
    },{
      type: ContactType.Github,
      text: 'kenk667',
      href: 'https://github.com/kenk667',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/kenk667'},
 // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/devsecops-kkato/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tacosanddoggos/'},
 // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
