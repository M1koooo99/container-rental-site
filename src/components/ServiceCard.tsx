import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Truck, Recycle, Calendar, Layers, Zap, HardHat } from "lucide-react";

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    icon: string;
    price: string;
  };
}

const iconMap: Record<string, any> = {
  truck: Truck,
  recycle: Recycle,
  calendar: Calendar,
  layers: Layers,
  zap: Zap,
  "hard-hat": HardHat,
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Truck;

  return (
    <Card className="h-full flex flex-col hover-elevate transition-all duration-300">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
          <Icon size={24} />
        </div>
        <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription className="text-base text-muted-foreground">
          {service.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="pt-4 border-t">
        <div className="font-semibold text-foreground">
          Цена: <span className="text-primary">{service.price}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
