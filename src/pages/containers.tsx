import { PageHero } from "@/components/PageHero";
import { ContainerCard } from "@/components/ContainerCard";
import { siteConfig } from "@/config/siteConfig";
import { useSeo } from "@/hooks/useSeo";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Containers() {
  useSeo({
    title: `Видове Контейнери | ${siteConfig.company.name}`,
    description: "Разгледайте нашите контейнери за строителни и битови отпадъци с обем от 3м³ до 20м³.",
  });

  const imagePaths = [
    "/gallery/5555.jpg",
    "/gallery/11.jpg",
    "/gallery/container-large.png",
    "/gallery/delivery-installation.png" // using installation for extra large
  ];

  return (
    <div className="flex flex-col">
      <PageHero 
        title="Видове Контейнери" 
        subtitle="Разполагаме с контейнери, подходящи за всеки мащаб — от малки домашни ремонти до големи строителни обекти."
        breadcrumbs={[{ label: "Контейнери", href: "/containers" }]}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {siteConfig.containers.map((container, i) => (
              <motion.div
                key={container.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <ContainerCard 
                  container={container} 
                  imageSrc={imagePaths[i]}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Waste Types */}
      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Какво можете да изхвърляте?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Спазваме строги екологични норми за депониране на отпадъците.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-xl border border-border shadow-sm">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <Check size={20} />
                </div>
                Приемаме
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="text-green-600 mt-1" size={20} />
                  <div>
                    <span className="font-bold block">Строителни отпадъци</span>
                    <span className="text-muted-foreground text-sm">Тухли, бетон, мазилка, плочки, керемиди</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-green-600 mt-1" size={20} />
                  <div>
                    <span className="font-bold block">Дървен материал</span>
                    <span className="text-muted-foreground text-sm">Стари мебели, дограма, паркет, греди</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-green-600 mt-1" size={20} />
                  <div>
                    <span className="font-bold block">Битови отпадъци</span>
                    <span className="text-muted-foreground text-sm">Хартия, картон, пластмаса, текстил</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-green-600 mt-1" size={20} />
                  <div>
                    <span className="font-bold block">Зелени отпадъци</span>
                    <span className="text-muted-foreground text-sm">Клони, трева, листа, храсти</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-green-600 mt-1" size={20} />
                  <div>
                    <span className="font-bold block">Метали</span>
                    <span className="text-muted-foreground text-sm">Желязо, стомана, алуминий, мед</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-xl border border-destructive/20 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/5 rounded-bl-full z-0" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-destructive/20 text-destructive flex items-center justify-center">
                    <X size={20} />
                  </div>
                  НЕ Приемаме
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <X className="text-destructive mt-1" size={20} />
                    <div>
                      <span className="font-bold block">Опасни материали</span>
                      <span className="text-muted-foreground text-sm">Азбест, химикали, бои, разтворители</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="text-destructive mt-1" size={20} />
                    <div>
                      <span className="font-bold block">Специфични отпадъци</span>
                      <span className="text-muted-foreground text-sm">Автомобилни гуми, акумулатори, батерии</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="text-destructive mt-1" size={20} />
                    <div>
                      <span className="font-bold block">Биологични отпадъци</span>
                      <span className="text-muted-foreground text-sm">Медицински отпадъци, животински остатъци</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="text-destructive mt-1" size={20} />
                    <div>
                      <span className="font-bold block">Електроника (без уговорка)</span>
                      <span className="text-muted-foreground text-sm">Телевизори, хладилници, компютри</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-foreground text-background rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Как да се подготвите?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="text-primary font-black text-5xl opacity-50">01</div>
                <h4 className="text-xl font-bold">Осигурете място</h4>
                <p className="text-background/70 font-medium">Предвидете достатъчно място за камиона (мин. 3м ширина и 8м дължина) и равна повърхност за контейнера.</p>
              </div>
              <div className="space-y-3">
                <div className="text-primary font-black text-5xl opacity-50">02</div>
                <h4 className="text-xl font-bold">Разрешително</h4>
                <p className="text-background/70 font-medium">Ако контейнерът ще бъде на улица или тротоар, проверете изискванията на общината за тротоарно право.</p>
              </div>
              <div className="space-y-3">
                <div className="text-primary font-black text-5xl opacity-50">03</div>
                <h4 className="text-xl font-bold">Правилно товарене</h4>
                <p className="text-background/70 font-medium">Не препълвайте контейнера над горния ръб. По-тежките отпадъци разпределяйте равномерно на дъното.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}