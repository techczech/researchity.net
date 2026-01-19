import React, { useState } from 'react';
import { Send, Loader2, Play, Code2, FileText, Globe, RefreshCcw, ExternalLink } from 'lucide-react';
import { Button } from '../components/Button';
import { ResearchRole } from '../types';
import { generateResearchResponse } from '../services/geminiService';
import { toolsContent } from '../data/content';

const iconMap: Record<string, React.ElementType> = {
  Globe,
  RefreshCcw,
  FileText
};

export const Tools: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'examples' | 'playground'>('examples');
  
  // Interactive Demo State
  const [selectedRole, setSelectedRole] = useState<ResearchRole>(ResearchRole.ASSISTANT);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    setResponse('');
    try {
      const result = await generateResearchResponse(query, selectedRole);
      setResponse(result);
    } catch (error) {
      setResponse("An error occurred while communicating with the AI. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      
      {/* Tab Navigation */}
      <div className="flex justify-center mb-12">
        <div className="bg-slate-100 p-1 rounded-xl inline-flex">
          <button
            onClick={() => setActiveTab('examples')}
            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'examples' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Examples of Research Tools
          </button>
          <button
            onClick={() => setActiveTab('playground')}
            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center ${
              activeTab === 'playground' ? 'bg-white text-brand-600 shadow-sm' : 'text-slate-600 hover:text-brand-600'
            }`}
          >
            <Play size={16} className="mr-2" />
            AI Research Playground
          </button>
        </div>
      </div>

      {activeTab === 'examples' ? (
        <div className="space-y-20">
          {/* Categories Section */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">{toolsContent.examplesTitle}</h2>
              <p className="text-slate-600">
                {toolsContent.examplesDescription}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {toolsContent.categories.map((tool, idx) => {
                const Icon = iconMap[tool.icon] || Globe;
                return (
                  <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-brand-300 transition-colors">
                    <div className="w-12 h-12 bg-slate-50 text-slate-700 rounded-xl flex items-center justify-center mb-6">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{tool.category}</h3>
                    <p className="text-sm text-slate-500 mb-6">{tool.description}</p>
                    <ul className="space-y-3">
                      {tool.items.map((item, i) => (
                        <li key={i} className="flex items-center text-slate-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Featured Projects Section */}
          <div>
            <div className="flex items-center mb-8">
              <div className="h-px bg-slate-200 flex-grow"></div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 px-6">Live Demonstrations & Projects</h2>
              <div className="h-px bg-slate-200 flex-grow"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {toolsContent.featuredProjects.map((project, idx) => (
                <a 
                  key={idx} 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-brand-300 transition-all flex flex-col h-full"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-brand-50 text-brand-700 text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
                      {project.type}
                    </span>
                    <ExternalLink className="text-slate-300 group-hover:text-brand-500 transition-colors" size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-brand-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4 text-brand-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                    Visit Project <ExternalLink size={14} className="ml-1" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="bg-slate-900 p-6 text-white">
              <h2 className="text-xl font-bold flex items-center">
                <Code2 className="mr-2" /> Researchity AI Companion
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Select a role and interact with the Gemini 2.5 Flash model.
              </p>
            </div>

            <div className="p-6 md:p-8 space-y-6">
              {/* Role Selector */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">Select AI Role</label>
                <div className="grid grid-cols-3 gap-3">
                  {Object.values(ResearchRole).map((role) => (
                    <button
                      key={role}
                      onClick={() => setSelectedRole(role)}
                      className={`py-3 px-4 rounded-xl text-sm font-medium border transition-all ${
                        selectedRole === role
                          ? 'bg-brand-50 border-brand-500 text-brand-700 ring-1 ring-brand-500'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  {selectedRole === ResearchRole.ASSISTANT && "Helps with tasks, emails, and scheduling."}
                  {selectedRole === ResearchRole.ANALYST && "Analyzes text, finds patterns, and critiques."}
                  {selectedRole === ResearchRole.TOOLMAKER && "Writes code and designs data tools."}
                </p>
              </div>

              {/* Input Area */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Research Query / Task
                </label>
                <textarea
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={
                    selectedRole === ResearchRole.TOOLMAKER
                      ? "E.g., Write a Python script to scrape article titles from a website..."
                      : "E.g., Summarize these key points into an email..."
                  }
                  className="w-full h-32 p-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none font-sans"
                />
              </div>

              <div className="flex justify-end">
                <Button 
                  onClick={handleGenerate} 
                  disabled={isLoading || !query.trim()}
                  className="w-full md:w-auto"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 animate-spin" size={18} />
                      Thinking...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={18} />
                      Generate Response
                    </>
                  )}
                </Button>
              </div>

              {/* Response Area */}
              {response && (
                <div className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">
                    {selectedRole} Response
                  </h3>
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 prose prose-slate max-w-none">
                    <pre className="whitespace-pre-wrap font-sans text-slate-800">{response}</pre>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};