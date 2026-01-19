import React from 'react';
import { BookOpen, Users, Share2, Wrench, FileText } from 'lucide-react';
import { usesContent } from '../data/content';

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Users,
  Share2,
  Wrench,
  FileText
};

const styleMap: Record<string, { bg: string; text: string }> = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-600' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600' },
  green: { bg: 'bg-green-50', text: 'text-green-600' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-600' },
  rose: { bg: 'bg-rose-50', text: 'text-rose-600' }
};

export const Uses: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-serif font-bold text-slate-900 mb-12 text-center">{usesContent.title}</h1>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {usesContent.items.map((use, index) => {
          const Icon = iconMap[use.icon] || BookOpen;
          const style = styleMap[use.color] || styleMap.blue;

          return (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className={`w-14 h-14 ${style.bg} ${style.text} rounded-2xl flex items-center justify-center mb-6`}>
                <Icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{use.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {use.content}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};