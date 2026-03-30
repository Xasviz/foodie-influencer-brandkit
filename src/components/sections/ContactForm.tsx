"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { Send } from "lucide-react";

const formSchema = z.object({
  brandName: z.string().min(2, {
    message: "El nombre de la marca debe tener al menos 2 caracteres.",
  }),
  campaignType: z.string().min(1, {
    message: "Por favor selecciona un tipo de campaña.",
  }),
  budget: z.array(z.number()),
  message: z.string().optional(),
});

export function ContactForm() {
  const [budgetValue, setBudgetValue] = useState([500]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      brandName: "",
      budget: [500],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    alert("¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.");
    form.reset();
  }

  return (
    <section id="contacto" className="py-24 px-4 bg-background border-t border-primary/10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">Cocinemos algo juntos</h2>
          <p className="text-muted-foreground italic">
            ¿Listo para llevar tu marca al siguiente nivel visual? Cuéntame tu visión.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-primary/5">
            <FormField
              control={form.control}
              name="brandName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-medium">Nombre de la Marca</FormLabel>
                  <FormControl>
                    <Input placeholder="Ej: Gourmet Delight" className="border-primary/20 focus:border-secondary" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="campaignType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-medium">Tipo de Campaña</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-primary/20">
                        <SelectValue placeholder="Selecciona una opción" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="reels">Pack de Reels (Video)</SelectItem>
                      <SelectItem value="photoshoot">Sesión de Fotos Gastronómica</SelectItem>
                      <SelectItem value="full">Campaña Integral (360°)</SelectItem>
                      <SelectItem value="events">Cobertura de Evento</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between mb-2">
                    <FormLabel className="text-primary font-medium">Presupuesto Estimado</FormLabel>
                    <span className="text-secondary font-bold font-mono">
                      €{budgetValue[0]}+
                    </span>
                  </div>
                  <FormControl>
                    <Slider
                      defaultValue={[500]}
                      max={5000}
                      step={100}
                      onValueChange={(val) => {
                        const numericValue = Array.isArray(val) ? val : [val];
                        setBudgetValue(numericValue);
                        field.onChange(numericValue);
                      }}
                      className="py-4"
                    />
                  </FormControl>
                  <FormDescription className="text-xs">
                    Desliza para indicar un rango aproximado de inversión.
                  </FormDescription>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg font-serif">
              Enviar Propuesta <Send className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
