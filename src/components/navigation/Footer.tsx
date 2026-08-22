import { ShieldCheck, Globe, Headset, RefreshCcw } from "lucide-react";

export function Footer() {
  const features = [
    { title: "Secure Payments", icon: ShieldCheck },
    { title: "Worldwide Shipping", icon: Globe },
    { title: "Dedicated Support", icon: Headset },
    { title: "Easy Returns", icon: RefreshCcw }
  ];

  return (
    <footer className="bg-[#050505] text-luxury-cream py-6 border-t border-white/5 relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3 text-white/70 hover:text-luxury-gold transition-colors cursor-pointer w-full md:w-auto justify-center md:justify-start">
              <feature.icon size={18} strokeWidth={1.5} />
              <span className="text-xs tracking-wide font-medium">{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
