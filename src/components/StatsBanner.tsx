import { siteConfig } from "@/config/siteConfig";

export function StatsBanner() {
  const stats = [
    { label: "Години опит", value: siteConfig.company.yearsExperience },
    { label: "Обслужвани градове", value: `${siteConfig.company.citiesServed}+` },
    { label: "Доволни клиенти", value: `${siteConfig.company.happyClients}+` },
    { label: "Поддръжка", value: "24/7" },
  ];

  return (
    <div className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-border/20">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col space-y-2 p-4">
              <div className="text-4xl md:text-5xl font-black text-primary">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-medium uppercase tracking-wider text-background/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
