import { Link } from "wouter";
import { Container, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <Container size={24} strokeWidth={2.5} />
              </div>
              <span className="font-serif font-black text-2xl tracking-tight uppercase">
                {siteConfig.company.name}
              </span>
            </Link>
            <p className="text-background/70 leading-relaxed font-medium">
              {siteConfig.company.slogan}. Осигуряваме бързи, надеждни и екологични решения за управление на отпадъците в цялата страна.
            </p>
            <div className="flex items-center gap-4">
              <a href={siteConfig.company.socialMedia.facebook} target="_blank" rel="noreferrer" className="bg-background/10 p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook size={20} />
              </a>
              <a href={siteConfig.company.socialMedia.instagram} target="_blank" rel="noreferrer" className="bg-background/10 p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-xl mb-6 tracking-wide">Бързи връзки</h3>
            <ul className="space-y-3 font-medium text-background/70">
              <li><Link href="/" className="hover:text-primary transition-colors">Начало</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Нашите Услуги</Link></li>
              <li><Link href="/containers" className="hover:text-primary transition-colors">Видове Контейнери</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Галерия Обекти</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Заявка и Контакти</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif font-bold text-xl mb-6 tracking-wide">Услуги</h3>
            <ul className="space-y-3 font-medium text-background/70">
              {siteConfig.services.slice(0, 5).map(service => (
                <li key={service.id}>
                  <Link href="/services" className="hover:text-primary transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-bold text-xl mb-6 tracking-wide">Контакти</h3>
            <ul className="space-y-4 font-medium text-background/70">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary shrink-0 mt-0.5" />
                <span>{siteConfig.company.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href={`tel:${siteConfig.company.phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">{siteConfig.company.phone}</a>
                  <a href={`tel:${siteConfig.company.phone2.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">{siteConfig.company.phone2}</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary shrink-0" />
                <a href={`mailto:${siteConfig.company.email}`} className="hover:text-primary transition-colors">{siteConfig.company.email}</a>
              </li>

            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-background/50 text-sm font-medium">
          <div>
            &copy; {currentYear} {siteConfig.company.name}. Всички права запазени.
          </div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-background transition-colors">Политика за поверителност</Link>
            <Link href="#" className="hover:text-background transition-colors">Общи условия</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
