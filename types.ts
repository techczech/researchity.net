import { LucideIcon } from 'lucide-react';

export enum ResearchRole {
  ASSISTANT = 'Assistant',
  ANALYST = 'Analyst',
  TOOLMAKER = 'Toolmaker'
}

export interface NavItem {
  label: string;
  path: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color?: string;
  onClick?: () => void;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}