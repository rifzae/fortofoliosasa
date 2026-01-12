
import React from 'react';
import * as LucideIcons from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ name, className = "", size = 20 }) => {
  // @ts-ignore
  const LucideIcon = LucideIcons[name] || LucideIcons.HelpCircle;
  return <LucideIcon className={className} size={size} />;
};

export default Icon;
