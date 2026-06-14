import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/config/siteConfig";
import { useSeo } from "@/hooks/useSeo";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  useSeo({
    title: `Галерия | ${siteConfig.company.name}`,
    description: "Снимки от нашите обекти, контейнери и процеса на доставка и извозване на отпадъци.",
  });

  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Всички" },
    { id: "containers", label: "Контейнери" },
    { id: "delivery", label: "Доставка" },
    { id: "construction", label: "Обекти" }
  ];

  const filteredGallery = activeCategory === "all" 
    ? siteConfig.gallery 
    : siteConfig.gallery.filter(item => item.category === activeCategory);

  // Map gallery IDs to the generated images
  const getImageSource = (id: number) => {
    const sourceMap: Record<number, string> = {
      1: "/gallery/1111.jpg",
      2: "/gallery/5555.jpg",
      3: "/gallery/6666.jpg",
      4: "/gallery/4444.jpg",
      5: "/gallery/2222.jpg",
      6: "/gallery/3333.jpg",
      7: "/gallery/construction-removal.png",
      8: "/gallery/construction-plant.png",
      9: "/gallery/construction-apartment.png",
    };
    return sourceMap[id] || `https://placehold.co/600x400/333/fff?text=Image+${id}`;
  };

  return (
    <div className="flex flex-col">
      <PageHero 
        title="Галерия Обекти" 
        subtitle="Разгледайте нашия автопарк, видовете контейнери и реални снимки от изпълнени обекти."
        breadcrumbs={[{ label: "Галерия", href: "/gallery" }]}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
                  activeCategory === cat.id 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredGallery.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-muted border border-border"
                >
                  <img 
                    src={getImageSource(item.id)} 
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://placehold.co/600x400/333/fff?text=${encodeURIComponent(item.label)}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded mb-2 inline-block uppercase tracking-wider">
                        {categories.find(c => c.id === item.category)?.label}
                      </span>
                      <h3 className="text-white font-bold text-xl">{item.label}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}