import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Search, Hammer, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-32">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
           <div className="absolute right-0 top-0 bg-brand-200 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
           <div className="absolute right-60 top-0 bg-indigo-200 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-6">
            Research in the <span className="text-brand-600">Age of AI</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mb-6 leading-relaxed">
            Exploring how artificial intelligence reshapes the way we discover, analyze, and disseminate knowledge. Based on the framework by Dominik Lukes.
          </p>
          
          <p className="text-slate-500 mb-10 flex flex-wrap items-center justify-center gap-2">
             A companion to 
             <a href="https://edutools.fyi" target="_blank" rel="noopener noreferrer" className="font-medium text-brand-600 hover:text-brand-700 underline underline-offset-2">edutools.fyi</a>
             and
             <a href="https://semanticmachines.fyi" target="_blank" rel="noopener noreferrer" className="font-medium text-brand-600 hover:text-brand-700 underline underline-offset-2">semanticmachines.fyi</a>
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" onClick={() => navigate('/understanding-ai')}>
              Start Exploring
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate('/tools')}>
              Try AI Tools
            </Button>
          </div>
        </div>
      </section>

      {/* The 3 Roles Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Three Roles of AI in Research</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              AI is not just a search engine. It participates in the research process in three distinct, powerful capacities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Brain size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">The Assistant</h3>
              <p className="text-slate-600 mb-6">
                Organizes literature, schedules tasks, and drafts administrative communications.
              </p>
              <Button variant="ghost" className="p-0 text-brand-600 hover:text-brand-700" onClick={() => navigate('/roles')}>
                Learn more <ArrowRight size={16} className="ml-1" />
              </Button>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Search size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">The Analyst</h3>
              <p className="text-slate-600 mb-6">
                Finds patterns in data, summarizes complex texts, and critiques methodological approaches.
              </p>
              <Button variant="ghost" className="p-0 text-brand-600 hover:text-brand-700" onClick={() => navigate('/roles')}>
                Learn more <ArrowRight size={16} className="ml-1" />
              </Button>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-6">
                <Hammer size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">The Toolmaker</h3>
              <p className="text-slate-600 mb-6">
                Generates code, builds scrapers, and creates custom utilities to handle research data.
              </p>
              <Button variant="ghost" className="p-0 text-brand-600 hover:text-brand-700" onClick={() => navigate('/roles')}>
                Learn more <ArrowRight size={16} className="ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote/Highlight */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <blockquote className="font-serif text-2xl md:text-4xl leading-relaxed italic opacity-90">
            "We must move beyond seeing AI as a magic box that gives answers, and start seeing it as a collaborator that can be shaped."
          </blockquote>
          <div className="mt-8 text-brand-400 font-medium tracking-wide uppercase text-sm">
            Dominik Lukes
          </div>
        </div>
      </section>
    </div>
  );
};