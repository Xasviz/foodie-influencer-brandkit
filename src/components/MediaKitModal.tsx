"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Utensils, Heart, Bookmark, Share2, Star, PieChart } from "lucide-react";

export function MediaKitModal() {
  return (
    <Dialog>
      <DialogTrigger className="inline-flex shrink-0 items-center justify-center rounded-md border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 px-8 py-2 text-sm font-medium">
        Ver Media Kit
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto bg-background border-primary/20 p-0">
        {/* Editorial Header */}
        <div className="bg-primary p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
          <Badge variant="outline" className="text-white border-white/30 mb-4 uppercase tracking-[0.3em] font-sans text-[10px]">
            Brand Partnership 2026
          </Badge>
          <DialogTitle className="text-5xl font-serif mb-2">Media Kit</DialogTitle>
          <p className="text-white/80 italic font-serif text-lg tracking-wide">
            "Donde el arte visual y la gastronomía convergen."
          </p>
        </div>

        <div className="p-8 space-y-10">
          {/* Section: Community DNA */}
          <section>
            <div className="flex items-center gap-2 mb-6 border-b border-primary/10 pb-2">
              <PieChart className="w-5 h-5 text-secondary" />
              <h4 className="text-xl font-serif text-primary">DNA de la Comunidad</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="border-none bg-primary/5">
                <CardContent className="pt-6 text-center">
                  <p className="text-xs uppercase tracking-tighter text-muted-foreground mb-1">Interés Principal</p>
                  <p className="text-lg font-bold text-primary">Fine Dining</p>
                </CardContent>
              </Card>
              <Card className="border-none bg-primary/5">
                <CardContent className="pt-6 text-center">
                  <p className="text-xs uppercase tracking-tighter text-muted-foreground mb-1">Rango de Edad</p>
                  <p className="text-lg font-bold text-primary">24 - 45 años</p>
                </CardContent>
              </Card>
              <Card className="border-none bg-primary/5">
                <CardContent className="pt-6 text-center">
                  <p className="text-xs uppercase tracking-tighter text-muted-foreground mb-1">Conversión</p>
                  <p className="text-lg font-bold text-primary">12.4% CTR</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section: High Performance Metrics */}
          <section>
            <div className="flex items-center gap-2 mb-6 border-b border-primary/10 pb-2">
              <Star className="w-5 h-5 text-secondary" />
              <h4 className="text-xl font-serif text-primary">Métricas de Alto Impacto</h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4">
                <Bookmark className="w-6 h-6 mx-auto mb-2 text-secondary" />
                <p className="text-2xl font-bold">12K+</p>
                <p className="text-[10px] uppercase text-muted-foreground tracking-widest">Guardados/Post</p>
              </div>
              <div className="text-center p-4">
                <Share2 className="w-6 h-6 mx-auto mb-2 text-secondary" />
                <p className="text-2xl font-bold">8.5K</p>
                <p className="text-[10px] uppercase text-muted-foreground tracking-widest">Compartidos</p>
              </div>
              <div className="text-center p-4">
                <Heart className="w-6 h-6 mx-auto mb-2 text-secondary" />
                <p className="text-2xl font-bold">45K</p>
                <p className="text-[10px] uppercase text-muted-foreground tracking-widest">Likes Promedio</p>
              </div>
              <div className="text-center p-4">
                <Utensils className="w-6 h-6 mx-auto mb-2 text-secondary" />
                <p className="text-2xl font-bold">2.4M</p>
                <p className="text-[10px] uppercase text-muted-foreground tracking-widest">Reach Mensual</p>
              </div>
            </div>
          </section>

          {/* Section: Why Collaborate? */}
          <section className="bg-secondary/10 p-6 rounded-2xl border border-secondary/20">
            <h4 className="text-xl font-serif text-primary mb-4 flex items-center gap-2">
              Propuesta de Valor Única
            </h4>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <div className="flex gap-3">
                <div className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                <p><strong className="text-primary">Storytelling Sensorial:</strong> No solo mostramos comida, creamos deseo visual a través de 4K macro-cinematografía.</p>
              </div>
              <div className="flex gap-3">
                <div className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                <p><strong className="text-primary">Nicho Curado:</strong> Nuestra audiencia está compuesta por entusiastas de la gastronomía dispuestos a invertir en experiencias de calidad.</p>
              </div>
              <div className="flex gap-3">
                <div className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                <p><strong className="text-primary">Formatos Versátiles:</strong> Desde 'Recipe Dev' hasta cobertura premium de eventos y reseñas críticas.</p>
              </div>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
