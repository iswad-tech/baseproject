import { PNG_ICON_TYPES } from '@/constants/devDesignVars';
import HERO_VARIANT_1 from '@/images/js-Images/general/HomePage/HeorVariant1.png';
import HERO_VARIANT_2 from '@/images/js-Images/general/HomePage/HeorVariant2.png';
import HERO_VARIANT_3 from '@/images/js-Images/general/HomePage/HeorVariant3.png';
import HERO_VARIANT_4 from '@/images/js-Images/general/HomePage/HeorVariant4.png';
import HERO_VARIANT_5 from '@/images/js-Images/general/HomePage/HeorVariant5.png';

import Service1 from '@/images/js-Images/general/HomePage/Service1.png';
import Service2 from '@/images/js-Images/general/HomePage/Service2.png';
import Service3 from '@/images/js-Images/general/HomePage/Service3.png';
import Service4 from '@/images/js-Images/general/HomePage/Service4.png';
import Service5 from '@/images/js-Images/general/HomePage/Service5.png';

export const SLIDESHOWS_DURATION = 20000;

export const HERO_SERVICES = [
  { id: 0, title: 'MVP Development' },
  { id: 1, title: 'Web Development & Branding' },
  { id: 2, title: 'Customized App Development' },
  { id: 3, title: 'Team Augmentation & Training' },
  { id: 4, title: 'Counseling / Coaching' }
];

export const HERO_ITEMS = [
  {
    src: HERO_VARIANT_1,
    title: 'MVP Development',
    text: "With ISWAD fast-track your product's journey from concept to market with our agile MVP Development services."
  },
  {
    src: HERO_VARIANT_2,
    title: 'Web Development & Branding',
    text: 'Get tailored web and mobile applications with our agile development process. We offer comprehensive solutions including progress tracking and third-party integrations, optimized for SMEs and startups.'
  },
  {
    src: HERO_VARIANT_3,
    title: 'Customized App Development',
    text: 'Boost your project with our skilled developers, available for immediate integration into your team. We provide top-tier talent across all tech domains, ideal for enhancing your development capabilities.'
  },
  {
    src: HERO_VARIANT_4,
    title: 'Team Augmentation & Training',
    text: 'Advance your SaaS ventures with our expert consultancy and coaching. We guide entrepreneurs from idea refinement to actionable strategies, supporting the launch and growth of innovative solutions.'
  },
  {
    src: HERO_VARIANT_5,
    title: 'Counseling / Coaching',
    text: 'Achieve your goals and get the exact product you need by utilizing our top-notch product development services.'
  }
];

export const SERVICES = [
  {
    id: 0,
    title: 'MVP Development',
    description: [
      'Harnessing agile methodologies, we specialize in crafting bespoke web and mobile applications.',
      'Our solutions empower clients to seamlessly integrate third-party services and track project progress.',
      'Leveraging data analysis and AI-driven technologies, we drive efficiency and innovation for businesses.',
      'Target Audience: Small to medium-sized businesses and startups seeking cost-effective, efficient development solutions.'
    ],
    icon: PNG_ICON_TYPES.gear,
    src: Service1
  },
  {
    id: 1,
    title: 'Custom Web & Mobile App Development',
    description: [
      'Using agile methodologies, we excel in developing customized web and mobile applications.',
      'Our approach ensures seamless integration of third-party services and provides transparent project tracking.',
      'With expertise in data analysis and AI solutions, we empower businesses to thrive in competitive markets.',
      'Target Audience: Small to medium-sized businesses and startups seeking tailored development solutions.'
    ],
    icon: PNG_ICON_TYPES.laptop,
    src: Service2
  },
  {
    id: 2,
    title: 'Coaching & Advisory Services',
    description: [
      'We offer agile coaching and strategic advisory services to optimize web and mobile app development.',
      'Clients benefit from seamless integration of third-party services and transparent project tracking.',
      'Our focus on data analysis and AI-driven insights enhances business outcomes and operational efficiency.',
      'Target Audience: Small to medium-sized businesses and startups seeking strategic development support.'
    ],
    icon: PNG_ICON_TYPES.people,
    src: Service3
  },
  {
    id: 3,
    title: 'Website Development & Branding',
    description: [
      'Specializing in agile website development and branding solutions tailored to client needs.',
      'We ensure seamless integration of third-party services and provide clear project tracking.',
      'Our expertise in data analysis and AI-driven strategies enhances business performance and growth.',
      'Target Audience: Small to medium-sized businesses and startups seeking impactful digital presence.'
    ],
    icon: PNG_ICON_TYPES.cup,
    src: Service4
  },
  {
    id: 4,
    title: 'Team Augmentation & Training',
    description: [
      'We augment teams with skilled professionals and offer training to enhance web and mobile app capabilities.',
      'Clients benefit from seamless integration of third-party services and robust project tracking mechanisms.',
      'Our focus on data analysis and AI solutions drives operational excellence and business success.',
      'Target Audience: Small to medium-sized businesses and startups scaling their development capabilities.'
    ],
    icon: PNG_ICON_TYPES.bracket,
    src: Service5
  }
];

export const UNIQUES = [
  {
    icon: PNG_ICON_TYPES.unique1,
    title: 'Scalability & Clean Code',
    description:
      'We prioritize scalable solutions and clean, maintainable code, ensuring seamless integration and support for your company’s growth over time.'
  },
  {
    icon: PNG_ICON_TYPES.unique2,
    title: 'Cutting-Edge Project Management Tools',
    description:
      'Our innovative app revolutionizes project management with agile tracking, comprehensive documentation, and a robust support ticket system, enhancing efficiency and user experience.'
  },
  {
    icon: PNG_ICON_TYPES.unique3,
    title: 'Unmatched Post-Launch Support',
    description:
      'Beyond project completion, we offer exceptional post-launch support, ensuring smooth transitions and ongoing assistance to guarantee your continued success.'
  },
  {
    icon: PNG_ICON_TYPES.unique4,
    title: 'Exceptional Quality Assurance',
    description:
      'We ensure your products meet the highest standards with rigorous testing, continuous improvement, and meticulous attention to detail, guaranteeing a flawless user experience.'
  }
];
