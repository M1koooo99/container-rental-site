import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/config/siteConfig";
import { useSeo } from "@/hooks/useSeo";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  useSeo({
    title: `Контакти | ${siteConfig.company.name}`,
    description: "Свържете се с нас за заявка на контейнер или допълнителна информация.",
  });

  return (
    <div className="flex flex-col">
      <PageHero 
        title="Свържете се с нас" 
        subtitle="Заявки, въпроси и консултации. Ние сме на ваше разположение."
        breadcrumbs={[{ label: "Контакти", href: "/contact" }]}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 xl:gap-16">
            
            {/* Form Column */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="bg-card p-6 md:p-8 rounded-2xl border shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Изпратете запитване</h2>
                <ContactForm />
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-2 order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Контактна информация</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Свържете се с нас по предпочитания от вас начин. Нашите консултанти ще ви помогнат с избора.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Телефони за връзка</h4>
                    <div className="flex flex-col space-y-1">
                      <a href={`tel:${siteConfig.company.phone.replace(/\s/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors text-lg font-medium">{siteConfig.company.phone}</a>
                      <a href={`tel:${siteConfig.company.phone2.replace(/\s/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors text-lg font-medium">{siteConfig.company.phone2}</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Имейл</h4>
                    <a href={`mailto:${siteConfig.company.email}`} className="text-muted-foreground hover:text-primary transition-colors text-lg font-medium">{siteConfig.company.email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Адрес на базата</h4>
                    <p className="text-muted-foreground text-lg font-medium">{siteConfig.company.address}</p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="mt-8 rounded-2xl overflow-hidden border h-[300px]">
                <iframe
                  title="Местоположение"
                  src="https://maps.google.com/maps?q=41.933133,25.899938&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}