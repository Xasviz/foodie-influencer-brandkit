"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Eye, Heart, BarChart } from "lucide-react";

const metrics = [
  {
    label: "Seguidores Totales",
    value: "150K+",
    icon: Users,
    description: "Comunidad orgánica y activa",
  },
  {
    label: "Alcance Mensual",
    value: "2.4M",
    icon: Eye,
    description: "Impresiones en Reels y Post",
  },
  {
    label: "Engagement",
    value: "5.8%",
    icon: Heart,
    description: "Muy por encima del promedio",
  },
  {
    label: "Marcas Partners",
    value: "45+",
    icon: BarChart,
    description: "Colaboraciones exitosas",
  },
];

export function ImpactMetrics() {
  return (
    <section id="metricas" className="py-24 px-4 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">Métricas que importan</h2>
          <div className="h-1 w-20 bg-secondary mx-auto opacity-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow bg-background">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    {metric.label}
                  </CardTitle>
                  <metric.icon className="w-5 h-5 text-secondary" />
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-primary mb-1">{metric.value}</div>
                  <p className="text-xs text-muted-foreground">{metric.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
