import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Box, Ruler, Weight } from "lucide-react";
import { Link } from "wouter";

interface ContainerCardProps {
  container: {
    id: string;
    name: string;
    volume: string;
    dimensions: string;
    weight: string;
    suitableFor: string[];
    pricePerDay: number;
    priceDelivery: number;
    popular: boolean;
  };
  imageSrc?: string;
}

export function ContainerCard({ container, imageSrc }: ContainerCardProps) {
  return (
    <Card className="h-full flex flex-col relative overflow-hidden hover-elevate transition-all duration-300">
      {container.popular && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-primary text-primary-foreground font-bold px-3 py-1">Най-популярен</Badge>
        </div>
      )}
      
      {imageSrc && (
        <div className="h-48 w-full bg-muted overflow-hidden">
          <img src={imageSrc} alt={container.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
        </div>
      )}
      
      <CardHeader className={imageSrc ? "pt-6" : ""}>
        <CardTitle className="text-2xl font-bold">{container.name}</CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Box size={18} className="text-primary" />
            <span className="font-medium text-foreground">{container.volume}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Weight size={18} className="text-primary" />
            <span className="font-medium text-foreground">{container.weight}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground col-span-2">
            <Ruler size={18} className="text-primary" />
            <span className="font-medium text-foreground text-sm">{container.dimensions}</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Подходящ за:</div>
          <ul className="space-y-2">
            {container.suitableFor.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <Check size={16} className="text-primary mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      
      <CardFooter className="flex-col items-stretch gap-4 bg-muted/30 pt-6 mt-auto">
        <div className="flex justify-between items-center w-full">
          <div className="text-sm text-muted-foreground">Доставка:</div>
          <div className="font-bold">{container.priceDelivery} лв.</div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="text-sm text-muted-foreground">Наем на ден:</div>
          <div className="font-bold">{container.pricePerDay} лв.</div>
        </div>
        <Link href="/contact" className="w-full">
          <Button className="w-full font-semibold" size="lg">Заявете сега</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
