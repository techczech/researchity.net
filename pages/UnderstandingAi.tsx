import React from 'react';
import { Cpu, Network, Lightbulb } from 'lucide-react';
import { understandingAiContent } from '../data/content';

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  Network,
  Lightbulb
};

const colorMap: Record<string, string> = {
  indigo: 'bg-indigo-100 text-indigo-600',
  rose: 'bg-rose-100 text-rose-600',
  amber: 'bg-amber-100 text-amber-600'
};

export const UnderstandingAi: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-4xl font-serif font-bold text-slate-900 mb-6">{understandingAiContent.title}</h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          {understandingAiContent.description}
        </p>
      </div>

      <div className="space-y-12">
        {understandingAiContent.sections.map((section, index) => {
          const Icon = iconMap[section.icon] || Lightbulb;
          const colorClass = colorMap[section.color] || 'bg-slate-100 text-slate-600';

          return (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${colorClass}`}>
                  <Icon size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{section.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {section.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};