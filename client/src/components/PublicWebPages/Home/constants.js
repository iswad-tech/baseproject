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
  { id: 2, title: 'Customized Web/Mobile Development' },
  { id: 3, title: 'Team Augmentation & Training' },
  { id: 4, title: 'Counseling/Coaching' }
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
    title: 'Customized Web/MobileDevelopment',
    text: 'Boost your project with our skilled developers, available for immediate integration into your team. We provide top-tier talent across all tech domains, ideal for enhancing your development capabilities.'
  },
  {
    src: HERO_VARIANT_4,
    title: 'Team Augmentation and Training',
    text: 'Advance your SaaS ventures with our expert consultancy and coaching. We guide entrepreneurs from idea refinement to actionable strategies, supporting the launch and growth of innovative solutions.'
  },
  {
    src: HERO_VARIANT_5,
    title: 'Counseling/Coaching',
    text: 'Achieve your goals and get the exact product you need by utilizing our top-notch product development services.'
  }
];

export const SERVICES = [
  {
    id: 0,
    title: 'MVP Development',
    description: [
      'Utilizing agile methodologies, we deliver tailored web and mobile app solutions.',
      'Clients can track progress and integrate third-party services seamlessly.',
      'Our expertise extends to data analysis and AI-driven solutions, enabling businesses to thrive.',
      'Target Audience: Small to medium-sized businesses and startups seeking cost-effective, efficient development solutions.'
    ],
    icon: PNG_ICON_TYPES.gear,
    src: Service1
  },
  {
    id: 1,
    title: 'MVP Development',
    description: [
      'Utilizing agile methodologies, we deliver tailored web and mobile app solutions.',
      'Clients can track progress and integrate third-party services seamlessly.',
      'Our expertise extends to data analysis and AI-driven solutions, enabling businesses to thrive.',
      'Target Audience: Small to medium-sized businesses and startups seeking cost-effective, efficient development solutions.'
    ],
    icon: PNG_ICON_TYPES.laptop,
    src: Service2
  },
  {
    id: 2,
    title: 'MVP Development',
    description: [
      'Utilizing agile methodologies, we deliver tailored web and mobile app solutions.',
      'Clients can track progress and integrate third-party services seamlessly.',
      'Our expertise extends to data analysis and AI-driven solutions, enabling businesses to thrive.',
      'Target Audience: Small to medium-sized businesses and startups seeking cost-effective, efficient development solutions.'
    ],
    icon: PNG_ICON_TYPES.people,
    src: Service3
  },
  {
    id: 3,
    title: 'MVP Development',
    description: [
      'Utilizing agile methodologies, we deliver tailored web and mobile app solutions.',
      'Clients can track progress and integrate third-party services seamlessly.',
      'Our expertise extends to data analysis and AI-driven solutions, enabling businesses to thrive.',
      'Target Audience: Small to medium-sized businesses and startups seeking cost-effective, efficient development solutions.'
    ],
    icon: PNG_ICON_TYPES.cup,
    src: Service4
  },
  {
    id: 4,
    title: 'MVP Development',
    description: [
      'Utilizing agile methodologies, we deliver tailored web and mobile app solutions.',
      'Clients can track progress and integrate third-party services seamlessly.',
      'Our expertise extends to data analysis and AI-driven solutions, enabling businesses to thrive.',
      'Target Audience: Small to medium-sized businesses and startups seeking cost-effective, efficient development solutions.'
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
