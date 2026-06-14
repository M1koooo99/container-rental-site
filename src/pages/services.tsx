import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { siteConfig } from "@/config/siteConfig";
import { useSeo } from "@/hooks/useSeo";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  useSeo({
    title: `Услуги | ${siteConfig.company.name}`,
    description: "Пълен набор от услуги за извозване на отпадъци: доставка на контейнери, сметоизвозване, дългосрочен наем и спешни реакции.",
  });

  const timelineSteps = [
    { title: "Заявка", desc: "Свържете се с нас по телефон или чрез формата" },
    { title: "Потвърждение", desc: "Уточняваме детайлите и цената до 2 часа" },
    { title: "Доставка", desc: "Доставяме контейнера в уговорения час" },
    { title: "Извозване", desc: "Извозваме отпадъците до лицензирано депо" }
  ];

  const differentiators = [
    "Лицензиран превозвач с всички необходими разрешителни",
    "Модерен автопарк с машини за труднодостъпни места",
    "Гарантирано екологично третиране на отпадъците",
    "Прозрачно ценообразуване без скрити такси"
  ];

  return (
    <div className="flex flex-col">
      <PageHero 
        title="Нашите Услуги" 
        subtitle="Комплексни решения за управление на отпадъците за бизнеса и домакинствата."
        breadcrumbs={[{ label: "Услуги", href: "/services" }]}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Как работи процесът?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Лесно, бързо и безпроблемно обслужване в 4 стъпки.</p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-border -translate-y-1/2 z-0" />
            
            {timelineSteps.map((step, i) => (
              <div key={i} className="relative z-10 flex flex-row md:flex-col items-center gap-6 md:gap-4 mb-8 md:mb-0 w-full md:w-auto">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground font-black text-2xl flex items-center justify-center shrink-0 border-4 border-background shadow-md">
                  {i + 1}
                </div>
                <div className="md:text-center">
                  <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm max-w-[200px]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Защо да се доверите на нас?</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Ние сме изградили репутация на надежден партньор в бранша.
                Разбираме, че времето е ценно за всеки строителен обект и ремонт.
              </p>
              
              <ul className="space-y-4">
                {differentiators.map((diff, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1 shrink-0" size={20} />
                    <span className="font-semibold text-lg">{diff}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-foreground rounded-2xl p-1 relative overflow-hidden">
               {/* Use the generated delivery truck image here */}
               <img 
                 src="/gallery/delivery-truck.png" 
                 alt="Доставка с камион" 
                 className="w-full h-full object-cover rounded-xl"
                 onError={(e) => {
                   (e.target as HTMLImageElement).src = "https://placehold.co/800x600/333/fff?text=ContainerBG";
                 }}
               />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}