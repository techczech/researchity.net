// Loaded by the build plugin through Vite's ssrLoadModule; never shipped to the browser.
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { AppShell } from '../App';
import { pages } from '../data/seo';

export { pages };

export const renderRoute = (path: string): string =>
  renderToString(
    <StaticRouter location={path}>
      <AppShell />
    </StaticRouter>
  );
