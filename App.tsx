import { applyCitation } from './seo/kit/citation';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { UnderstandingAi } from './pages/UnderstandingAi';
import { Roles } from './pages/Roles';
import { Uses } from './pages/Uses';
import { Tools } from './pages/Tools';
import { About } from './pages/About';
import { pageForPath, SITE_ORIGIN, SITE_NAME } from './data/seo';

// Keeps title, description, canonical and og tags in step with the client-side route.
const PageMeta: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const page = pageForPath(pathname);
    if (!page) return;
    const url = SITE_ORIGIN + (page.path === '/' ? '/' : page.path);
    const setMeta = (selector: string, attr: string, key: string, value: string, tag = 'meta') => {
      let el = document.head.querySelector<HTMLElement>(selector);
      if (!el) {
        el = document.createElement(tag);
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute(tag === 'link' ? 'href' : 'content', value);
    };
    document.title = page.title;
    applyCitation({ title: page.title, url, site: SITE_NAME, authors: ['Dominik Lukeš'] });
    setMeta('meta[name="description"]', 'name', 'description', page.description);
    setMeta('link[rel="canonical"]', 'rel', 'canonical', url, 'link');
    setMeta('meta[property="og:title"]', 'property', 'og:title', page.title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', page.description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', url);
  }, [pathname]);
  return null;
};

export const AppShell: React.FC = () => (
  <div className="min-h-screen flex flex-col bg-slate-50">
    <PageMeta />
    <Navbar />
    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/understanding-ai" element={<UnderstandingAi />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/uses" element={<Uses />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
    <Footer />
  </div>
);

const App: React.FC = () => (
  <Router>
    <AppShell />
  </Router>
);

export default App;
