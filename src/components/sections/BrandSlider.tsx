"use client";

import { motion } from "framer-motion";

const brands = [
  "GASTRO CO", "FOOD BRAND A", "ELITE FLAVORS", "PURE ORGANIC", 
  "URBAN BITES", "LUNA DINING", "KITCHEN PRO", "NATURAL SELECTION"
];

// Duplicate for infinite scroll effect
const duplicatedBrands = [...brands, ...brands];

export function BrandSlider() {
  return (
    <section id="marcas" className="py-24 bg-primary/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h3 className="text-2xl font-serif text-primary/60 uppercase tracking-widest">
          Marcas que confían
        </h3>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{
            x: [0, -100 * brands.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          className="flex whitespace-nowrap gap-12 md:gap-24 items-center"
        >
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand}-${index}`}
              className="group flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
            >
              {/* Logo Placeholder */}
              <div className="relative w-40 h-20 flex items-center justify-center bg-white/50 rounded-xl border border-primary/10 group-hover:bg-white group-hover:shadow-lg transition-all">
                <span className="text-xs font-bold tracking-[0.2em] text-primary/40 group-hover:text-primary transition-colors">
                  {brand}
                </span>
                {/* Decorative dots */}
                <div className="absolute top-2 right-2 w-1 h-1 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
