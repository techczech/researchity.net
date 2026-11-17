import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { pageForPath, SITE_ORIGIN, SITE_NAME } from '../data/seo';
import { citeText } from '../seo/kit/citation';
import { copyText } from '../seo/kit/copy';
export const PageCitation = () => {
  const { pathname } = useLocation(); const page = pageForPath(pathname); const [status, setStatus] = useState('');
  if (!page) return null;
  const text = citeText({ title: page.title, url: SITE_ORIGIN + page.path, site: SITE_NAME, authors: ['Dominik Lukeš'] });
  return <section className="max-w-3xl mt-8 text-sm" aria-label="Cite this page"><h2 className="font-semibold">Cite this page</h2><p className="my-2 break-words">{text}</p><button type="button" className="underline" onClick={async () => setStatus(await copyText(text) ? 'Citation copied.' : 'Copy failed. Select and copy the citation above.')}>Copy citation</button><p role="status">{status}</p></section>;
};
