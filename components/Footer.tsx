import React from 'react';
import { ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="font-serif font-bold text-2xl text-white block mb-2">Researchity.net</span>
            <p className="text-slate-400 max-w-md">
              Exploring the transformative potential of artificial intelligence in academic research methodologies, data analysis, and dissemination.
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-2">
            <h3 className="text-white font-medium">Based on the work of Dominik Lukes</h3>
            
            <a 
              href="https://dominiklukes.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-brand-400 hover:text-brand-300 transition-colors group"
            >
              <span>Visit dominiklukes.net</span>
              <ExternalLink size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex flex-col md:items-end gap-1 mt-2">
              <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Companion Sites</span>
              <a 
                href="https://edutools.fyi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-slate-400 hover:text-white transition-colors text-sm"
              >
                <span>edutools.fyi</span>
                <ExternalLink size={14} className="ml-1" />
              </a>
              <a 
                href="https://semanticmachines.fyi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-slate-400 hover:text-white transition-colors text-sm"
              >
                <span>semanticmachines.fyi</span>
                <ExternalLink size={14} className="ml-1" />
              </a>
            </div>

            <p className="text-sm text-slate-500 mt-4">
              © {new Date().getFullYear()} Researchity. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};