import { Gem, Tag, Package, Truck } from "lucide-react";

export function WhyWholesale() {
  const benefits = [
    {
      title: "Premium Quality",
      description: "Finest fabrics and stitching that your customers will love.",
      icon: Gem
    },
    {
      title: "Wholesale Pricing",
      description: "Best wholesale prices to grow your business more.",
      icon: Tag
    },
    {
      title: "Bulk Orders",
      description: "No minimum order limits. Order in bulk with ease.",
      icon: Package
    },
    {
      title: "Reliable Supply",
      description: "On-time delivery and consistent stock availability.",
      icon: Truck
    }
  ];

  return (
    <section className="py-24 bg-luxury-beige text-luxury-charcoal">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[0.65rem] tracking-[0.2em] uppercase text-luxury-charcoal font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="font-serif text-5xl md:text-6xl max-w-xl leading-tight">
            Why Buy Wholesale<br />From Us?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6 h-20 w-20 flex items-center justify-center rounded-full bg-[#e8decd] shadow-sm text-luxury-charcoal">
                <benefit.icon size={32} strokeWidth={1} />
              </div>
              <h3 className="font-serif text-2xl mb-3 font-semibold">{benefit.title}</h3>
              <p className="font-sans text-sm font-light text-luxury-charcoal/80 leading-relaxed max-w-[250px]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
