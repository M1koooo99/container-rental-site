import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/siteConfig";
import { ServiceCard } from "@/components/ServiceCard";
import { ContainerCard } from "@/components/ContainerCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { useSeo } from "@/hooks/useSeo";
import { ShieldCheck, Leaf, Clock, FileText, ArrowRight } from "lucide-react";

import { motion } from "framer-motion";

export default function Home() {
  useSeo({
    title: `${siteConfig.company.name} | ${siteConfig.company.slogan}`,
    description:
      "Надеждни услуги за наем на контейнери за строителни и битови отпадъци в цяла България.",
  });

  const trustFeatures = [
    {
      icon: ShieldCheck,
      title: "Лицензирани",
      description: "Всички разрешителни за транспорт и депониране",
    },
    {
      icon: Leaf,
      title: "Екологични",
      description: "Отговорно рециклиране и оползотворяване",
    },
    {
      icon: Clock,
      title: "Бърза доставка",
      description: "Реакция до 2-4 часа за същия ден",
    },
    {
      icon: FileText,
      title: "Фактуриране",
      description: "Издаване на фактура за всяка услуга",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-foreground text-background min-h-[80vh] flex items-center overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 md:px-6 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary font-bold text-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Обслужване на клиенти в гр.Харманли и региона
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-[1.1] uppercase tracking-tight">
                Отпадъците <br />
                <span className="text-primary">не са ваш проблем.</span>
              </h1>
              <p className="text-xl mb-10 text-background/80 font-medium leading-relaxed">
                {siteConfig.company.slogan}. Бърза доставка на контейнери за
                строителни обекти и ремонти.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="h-14 px-8 text-lg font-bold w-full sm:w-auto">
                    Заявете контейнер
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-14 px-8 text-lg font-bold w-full sm:w-auto bg-transparent border-background/20 text-background hover:bg-background/10"
                  >
                    Нашите услуги
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:block rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="/gallery/123.jpg"
                alt="Фемили ООД контейнери"
                className="w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Защо да изберете нас?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Гарантираме професионално отношение и коректност при всяка
              поръчка.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card p-6 rounded-xl border shadow-sm hover-elevate transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Нашите Услуги
              </h2>
              <p className="text-muted-foreground text-lg">
                Пълно обслужване за събиране и извозване на отпадъци.
              </p>
            </div>
            <Link href="/services">
              <Button variant="outline" className="gap-2 font-bold">
                Всички услуги <ArrowRight size={16} />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.services.slice(0, 4).map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Containers Preview */}
      <section className="py-20 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Видове Контейнери
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Разполагаме с контейнери за всякакви нужди и обеми.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {siteConfig.containers.map((container, i) => {
              const imagePaths = [
                "/gallery/5555.jpg",
                "/gallery/11.jpg",
                "/gallery/container-large.png",
                "/gallery/delivery-installation.png",
              ];

              return (
                <motion.div
                  key={container.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <ContainerCard
                    container={container}
                    imageSrc={imagePaths[i]}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Обслужване на клиенти в Община Харманли
            </h2>
            <p className="text-background/80 text-lg leading-relaxed max-w-2xl">
              Разполагаме с техника, готова за бърза реакция на територията на
              Община Харманли. Обслужваме домакинства, строителни обекти и
              фирми в региона.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Често задавани въпроси
            </h2>
          </div>
          <FaqAccordion faqs={siteConfig.faq.slice(0, 4)} />
          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="text-primary font-bold hover:underline"
            >
              Имате друг въпрос? Свържете се с нас.
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 8px)",
          }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">
            Готови ли сте да започнем?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto font-medium">
            Обадете ни се днес или направете онлайн заявка за контейнер.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="h-14 px-8 text-lg font-bold w-full sm:w-auto"
              >
                Свържете се с нас
              </Button>
            </Link>
            <a href={`tel:${siteConfig.company.phone.replace(/\s/g, "")}`}>
              <Button
                size="lg"
                className="h-14 px-8 text-lg font-bold w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90"
              >
                Обадете се сега
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
