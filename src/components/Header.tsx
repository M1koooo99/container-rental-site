import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Container } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/siteConfig";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Начало" },
    { href: "/services", label: "Услуги" },
    { href: "/containers", label: "Контейнери" },
    { href: "/gallery", label: "Галерия" },
    { href: "/contact", label: "Контакти" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary text-primary-foreground p-2 rounded-lg group-hover:bg-foreground group-hover:text-background transition-colors">
            <Container size={28} strokeWidth={2.5} />
          </div>
          <span className="font-serif font-black text-2xl tracking-tight text-foreground uppercase">
            {siteConfig.company.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary ${
                location === link.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <div className="flex flex-col items-end">
            <span className="text-xs text-muted-foreground font-medium uppercase">Денонощен телефон</span>
            <a href={`tel:${siteConfig.company.phone.replace(/\s/g, '')}`} className="font-bold text-foreground hover:text-primary flex items-center gap-2 transition-colors">
              <Phone size={16} />
              {siteConfig.company.phone}
            </a>
          </div>
          <Link href="/contact">
            <Button size="lg" className="font-bold rounded-full px-6">Заявете контейнер</Button>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-background border-b shadow-lg flex flex-col p-4 gap-4 pb-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 text-lg font-bold rounded-md ${
                location === link.href ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t my-2 pt-4 px-4 flex flex-col gap-4">
            <a href={`tel:${siteConfig.company.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-lg font-bold">
              <div className="bg-primary/20 p-2 rounded-full text-primary">
                <Phone size={20} />
              </div>
              {siteConfig.company.phone}
            </a>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button size="lg" className="w-full font-bold">Заявете контейнер</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
