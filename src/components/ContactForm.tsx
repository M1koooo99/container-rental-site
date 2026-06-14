import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { siteConfig } from "@/config/siteConfig";

const formSchema = z.object({
  name: z.string().min(2, { message: "Моля, въведете валидно име" }),
  phone: z.string().min(8, { message: "Моля, въведете валиден телефонен номер" }),
  email: z.string().email({ message: "Моля, въведете валиден имейл адрес" }),
  city: z.string().min(1, { message: "Моля, изберете град" }),
  serviceType: z.string().min(1, { message: "Моля, изберете вид услуга" }),
  message: z.string().optional(),
});

export function ContactForm() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      city: "",
      serviceType: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Запитването е изпратено успешно!",
      description: "Наш сътрудник ще се свърже с вас в най-кратък срок.",
      variant: "default",
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Вашето Име / Фирма</FormLabel>
                <FormControl>
                  <Input placeholder="Иван Иванов" className="bg-background" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Телефон</FormLabel>
                <FormControl>
                  <Input placeholder="0888 123 456" className="bg-background" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Имейл</FormLabel>
                <FormControl>
                  <Input placeholder="email@example.com" type="email" className="bg-background" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Град</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Изберете град" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {siteConfig.cities.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="serviceType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Вид услуга</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Изберете услуга" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {siteConfig.services.map((service) => (
                    <SelectItem key={service.id} value={service.id}>
                      {service.title}
                    </SelectItem>
                  ))}
                  {siteConfig.containers.map((container) => (
                    <SelectItem key={container.id} value={`container-${container.id}`}>
                      Наем: {container.name} ({container.volume})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Допълнителна информация (по желание)</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Опишете накратко от какво имате нужда..." 
                  className="min-h-[120px] bg-background resize-none" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="lg" className="w-full font-bold text-lg h-14">
          Изпрати запитване
        </Button>
      </form>
    </Form>
  );
}
