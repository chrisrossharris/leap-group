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
  actions: [{ text: 'Client Portal', href: 'https://portal.leapgroupnetwork.com', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Work', href: '#' },
        { text: 'logic + magic', href: '#' },
        { text: 'News', href: '#' },
        { text: 'Contact ', href: '#' },
      ],
    },
    {
      title: 'Offices',
      links: [
        { text: 'Louisville', href: '#' },
        { text: 'Indianaplois', href: '#' },
        { text: 'Cincinnati', href: '#' },
        { text: 'Chicago', href: '#' },
      ],
    },
    {
      title: 'The Leap Group Advantage',
      links: [
        { text: 'When you partner with us you get access to specialized experts across the entire Leap Group Network', href: '#' },
        { text: 'See the Difference', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
   ],
  footNote: `
  Leap Group Netowrk · All rights reserved.
  `,
};