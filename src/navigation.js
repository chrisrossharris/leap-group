import { getPermalink, getBlogPermalink, getNewsPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Work',
      href: getPermalink('/work'),
    },
    {
      text: 'logic + magic',
      links: [
        {
          text: 'All Insights',
          href: getBlogPermalink(),
        },
        {
          text: 'Collections',
          href: getPermalink('astro', 'tag'),
        },
        {
          text: 'Subscribe',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'News',
      href: getPermalink('/news'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Client Portal', href: 'https://support.leapgroupnetwork.com', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'About', href: 'https://leapgroupnetwork.com/about' },
        { text: 'Work', href: 'https://leapgroupnetwork.com/work' },
        { text: 'logic + magic', href: 'https://leapgroupnetwork.com/logic-magic' },
        { text: 'News', href: 'https://leapgroupnetwork.com/news' },
        { text: 'Contact ', href: 'https://leapgroupnetwork.com/contact' },
      ],
    },
    {
      title: 'Offices',
      links: [
        { text: 'Louisville', href: 'https://leapgroupnetwork.com/contact#louisville' },
        { text: 'Indianapolois', href: 'https://leapgroupnetwork.com/contact#indianapolois' },
        { text: 'Cincinnati', href: 'https://leapgroupnetwork.com/contact#cincinnati' },
        { text: 'Chicago', href: 'https://leapgroupnetwork.com/contact#chicago' },
      ],
    },
    {
      title: 'The Leap Group Advantage',
      links: [
        { text: 'When you partner with us you get access to specialized experts across the entire Leap Group Network', href: '#' },
        { text: 'See the Difference →', href: 'https://leapgroupnetwork.com/' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/leapgroupnetwork' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.facebook.com/leapgroupnetwork' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.linkedin.com/company/leap-group/' },
   ],
  footNote: `
  Leap Group Netowrk · All rights reserved.
  `,
};