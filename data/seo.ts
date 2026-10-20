import { understandingAiContent, rolesContent } from './content';

export const SITE_ORIGIN = 'https://researchity.net';
export const SITE_NAME = 'Researchity.net';

export interface PageMeta {
  path: string;
  title: string;
  description: string;
}

// Descriptions for Understanding AI and Roles come from content.ts; the others
// have no summary field in the data, so each is one literal sentence.
export const pages: PageMeta[] = [
  {
    path: '/',
    title: `${SITE_NAME} · Research in the Age of AI`,
    description:
      'Exploring how artificial intelligence reshapes the way we discover, analyze, and disseminate knowledge. Based on the framework by Dominik Lukes.',
  },
  {
    path: '/understanding-ai',
    title: `${understandingAiContent.title} · ${SITE_NAME}`,
    description: understandingAiContent.description,
  },
  {
    path: '/roles',
    title: `${rolesContent.title} · ${SITE_NAME}`,
    description: rolesContent.description,
  },
  {
    path: '/uses',
    title: `Uses for AI in Research · ${SITE_NAME}`,
    description:
      'Five uses of AI in research: literature reviews, peer reviews, research dissemination, research tools and qualitative data analysis.',
  },
  {
    path: '/tools',
    title: `Tools · ${SITE_NAME}`,
    description:
      'Examples of research tools that AI can help you build, links to live demonstrations, and a playground for trying the three AI roles.',
  },
  {
    path: '/about',
    title: `About · ${SITE_NAME}`,
    description:
      'About Researchity.net, its companion sites, the framework by Dominik Lukes, and the history of the original Researchity blog.',
  },
];

export const pageForPath = (pathname: string): PageMeta | undefined => {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return pages.find((p) => p.path === clean);
};
