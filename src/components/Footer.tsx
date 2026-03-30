"use client";

export function Footer() {
  return (
    <footer className="py-12 bg-primary/5 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-2xl font-serif text-primary mb-4">Foodie Portfolio</p>
        <p className="text-sm text-muted-foreground mb-6">
          © 2026 Diseñado con pasión por la gastronomía y el contenido visual.
        </p>
        <div className="flex justify-center gap-8 text-xs font-medium text-primary/60 uppercase tracking-widest">
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
          <a href="#" className="hover:text-primary transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
