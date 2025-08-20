import React from "react";
import type { LucideIcon } from "lucide-react";

type SectionProps = {
  id?: string;
  title: string;
  icon?: LucideIcon;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({
  id,
  title,
  icon: Icon,
  subtitle,
  children,
}) => {
  return (
    <section id={id} className="px-4 py-16">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center">
            {Icon && <Icon className="mr-3 h-12 w-12 text-blue-400" />}
            <h3 className="text-4xl font-bold text-white">{title}</h3>
          </div>
          {subtitle && <p className="text-lg text-slate-400">{subtitle}</p>}
        </div>

        {children}
      </div>
    </section>
  );
};

export default Section;
