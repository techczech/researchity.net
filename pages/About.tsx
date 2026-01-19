import React from 'react';
import { ExternalLink, History, Link as LinkIcon } from 'lucide-react';
import { aboutContent } from '../data/content';

export const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-serif font-bold text-slate-900 mb-8">About Researchity</h1>
      
      <div className="prose prose-lg prose-slate">
        <p className="lead text-xl text-slate-600">
          <strong>Researchity.net</strong> is a platform dedicated to exploring the evolving landscape of academic and scientific research in the era of artificial intelligence.
        </p>
        
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-8 not-prose">
          <div className="flex items-start">
            <LinkIcon className="text-brand-600 mt-1 mr-3 flex-shrink-0" size={24} />
            <div>
              <h3 className="text-lg font-bold text-slate-900 m-0 mb-4">Companion Sites</h3>
              <div className="space-y-4">
                {aboutContent.companionSites.map((site, index) => (
                  <div key={index} className={index > 0 ? "border-t border-slate-200 pt-3" : ""}>
                    <a href={site.url} target="_blank" rel="noopener noreferrer" className="text-brand-600 font-bold hover:underline text-lg block mb-1">
                      {site.name}
                    </a>
                    <p className="text-slate-600 m-0 text-base">
                      {site.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <p>
          As AI tools like Large Language Models (LLMs) become ubiquitous, the methodologies of research are shifting. This website aims to categorize, explain, and demonstrate how these tools can be used ethically and effectively.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-12 mb-4 text-slate-900">About Dominik Lukes</h2>
        
        <div className="bg-brand-50 border-l-4 border-brand-500 p-6 rounded-r-lg mb-8">
          <p className="italic text-slate-700 m-0">
            "The goal is not to automate the thinking, but to automate the friction that prevents thinking."
          </p>
        </div>

        <p>
          The content and framework presented on this site are based on the work of <strong>Dominik Lukes</strong>. He is a thought leader in the space of AI in education and research, focusing on how technology can augment human capability rather than replace it.
        </p>

        <p>
          His work emphasizes the three distinct roles AI plays—Assistant, Analyst, and Toolmaker—providing a robust mental model for researchers to understand how to interact with these new technologies.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-12 mb-4 text-slate-900 flex items-center">
           <History className="mr-3 text-slate-400" />
           A Note on History
        </h2>
        
        <p>
          Long-time visitors might remember Researchity.net as a blog run by Dominik Lukes that explored research in the age of the <strong>social web</strong> and <strong>Web 2.0</strong>. That iteration of the project chronicled the shift from traditional academic silos to networked knowledge creation during the early 2000s and 2010s.
        </p>
        
        <p>
          While the original blog is now defunct, it remains a valuable historical record of that digital transition. You can access the archived content via the <a href="https://web.archive.org/web/*/researchity.net" target="_blank" rel="noopener noreferrer" className="text-brand-600 font-medium hover:underline">Internet Archive (Wayback Machine)</a>.
        </p>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <a 
            href="https://dominiklukes.net" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-brand-600 font-medium hover:text-brand-800 text-lg"
          >
            Visit Dominik Lukes' Official Website 
            <ExternalLink size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};