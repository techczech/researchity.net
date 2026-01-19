import React from 'react';
import { Brain, Search, Hammer, CheckCircle2 } from 'lucide-react';
import { rolesContent } from '../data/content';

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Search,
  Hammer
};

const themeMap: Record<string, { badge: string; bg: string; border: string; check: string }> = {
  blue: {
    badge: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    check: 'text-blue-500'
  },
  purple: {
    badge: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
    check: 'text-purple-500'
  },
  teal: {
    badge: 'text-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
    check: 'text-teal-500'
  }
};

export const Roles: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">{rolesContent.title}</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {rolesContent.description}
          </p>
        </div>

        {rolesContent.items.map((role, index) => {
          const Icon = iconMap[role.icon] || Brain;
          const theme = themeMap[role.color] || themeMap.blue;
          const isEven = index % 2 !== 0;

          return (
            <div key={role.role} className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center last:mb-0">
              <div className={isEven ? 'order-1 lg:order-2' : 'order-2 lg:order-1'}>
                <div className={`inline-flex items-center space-x-2 font-bold tracking-wide uppercase text-sm mb-2 ${theme.badge}`}>
                  <Icon size={18} />
                  <span>{role.role}</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{role.title}</h2>
                <p className="text-slate-600 text-lg mb-6">
                  {role.description}
                </p>
                <ul className="space-y-3">
                  {role.tasks.map((task, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className={`${theme.check} mr-2 mt-1 flex-shrink-0`} size={20} />
                      <span className="text-slate-700">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${isEven ? 'order-2 lg:order-1' : 'order-1 lg:order-2'} ${theme.bg} rounded-3xl p-8 lg:p-12`}>
                <div className={`bg-white rounded-xl shadow-sm p-6 border ${theme.border}`}>
                  <div className="text-xs font-mono text-slate-400 mb-2">PROMPT EXAMPLE</div>
                  <p className="font-medium text-slate-800">
                    {role.promptExample}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};