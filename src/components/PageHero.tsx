import { ReactNode } from "react";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href: string }[];
  children?: ReactNode;
}

export function PageHero({ title, subtitle, breadcrumbs, children }: PageHeroProps) {
  return (
    <div className="bg-foreground text-background py-16 md:py-24 relative overflow-hidden">
      {/* Abstract industrial background pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 8px)' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-sm text-background/60 mb-6 font-medium">
            <Link href="/" className="hover:text-primary transition-colors">Начало</Link>
            {breadcrumbs.map((bc, i) => (
              <div key={i} className="flex items-center gap-2">
                <ChevronRight size={14} />
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-background">{bc.label}</span>
                ) : (
                  <Link href={bc.href} className="hover:text-primary transition-colors">{bc.label}</Link>
                )}
              </div>
            ))}
          </nav>
        )}
        
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-background/80 leading-relaxed max-w-2xl font-medium">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </div>
  );
}
