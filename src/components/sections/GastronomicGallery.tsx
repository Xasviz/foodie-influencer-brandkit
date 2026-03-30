"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "Pasta Artesanal",
    category: "Italiana",
    image: "https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&q=80&w=800",
    type: "photo",
    size: "tall",
  },
  {
    id: 2,
    title: "Vibrante Ensalada de Verano",
    category: "Saludable",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    type: "photo",
    size: "short",
  },
  {
    id: 3,
    title: "Técnicas de Emplatado",
    category: "Fine Dining",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
    type: "video",
    size: "tall",
  },
  {
    id: 4,
    title: "Postre Escultural",
    category: "Pastelería",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800",
    type: "photo",
    size: "medium",
  },
  {
    id: 5,
    title: "Mixología de Autor",
    category: "Coctelería",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800",
    type: "video",
    size: "tall",
  },
  {
    id: 6,
    title: "Sushi de Temporada",
    category: "Asiática",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=800",
    type: "photo",
    size: "short",
  },
];

export function GastronomicGallery() {
  return (
    <section id="galeria" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">Galería Gastronómica</h2>
          <p className="text-muted-foreground max-w-xl mx-auto italic">
            Visuales que despiertan el apetito y cuentan historias.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-2xl cursor-pointer break-inside-avoid"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <Badge className="w-fit mb-2 bg-secondary text-white border-none">
                    {item.category}
                  </Badge>
                  <h3 className="text-white text-xl font-serif">{item.title}</h3>
                </div>

                {/* Video Indicator */}
                {item.type === "video" && (
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30">
                    <Play className="w-4 h-4 text-white fill-current" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
