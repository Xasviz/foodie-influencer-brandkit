"use client";

import { motion } from "framer-motion";
import { MediaKitModal } from "@/components/MediaKitModal";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 pt-20 text-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-full bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_70%)] opacity-[0.03] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto z-10"
      >
        <span className="text-secondary font-medium tracking-widest uppercase text-sm mb-4 block">
          Creadora de Contenido Gastronómico
        </span>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-primary mb-6 leading-[1.1]">
          Capturando la esencia del <span className="italic">sabor</span>, una imagen a la vez.
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Especializada en storytelling visual para marcas de alta gastronomía y experiencias culinarias auténticas. Ayudo a conectar platos exquisitos con audiencias apasionadas.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <MediaKitModal />
          <a
            href="#contacto"
            className="px-8 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors underline underline-offset-8 decoration-primary/30"
          >
            Hablemos de tu campaña
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
}
