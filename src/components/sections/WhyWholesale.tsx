"use client";

import { Diamond, BadgeDollarSign, Package, Truck } from "lucide-react";
import { siteConfig } from "@/config/data";

const icons = {
  diamond: Diamond,
  price: BadgeDollarSign,
  box: Package,
  truck: Truck,
};

export default function WhyWholesale() {
  return (
    <section className="bg-[#eee5d7] px-6 py-16 text-[#191713] lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center">
          <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#85765e] lg:text-[10px]">
            WHY CHOOSE US
          </p>

          <h2 className="mt-4 font-display text-4xl leading-[0.9] lg:text-5xl xl:text-6xl">
            Why Buy Wholesale
            <br />
            From Us?
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 divide-y divide-black/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:mt-16 lg:grid-cols-4">
          {siteConfig.benefits.map((benefit) => {
            const Icon = icons[benefit.icon as keyof typeof icons];

            return (
              <div
                key={benefit.number}
                className="group px-6 py-8 text-center transition duration-500 hover:bg-[#e7dccb] lg:px-8 lg:py-10"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#8d7856]/30 text-[#9c7a42] transition duration-500 group-hover:scale-110 lg:h-16 lg:w-16">
                  <Icon size={22} strokeWidth={1.2} />
                </div>

                <h3 className="mt-6 font-display text-xl lg:mt-7 lg:text-2xl">
                  {benefit.title}
                </h3>

                <p className="mx-auto mt-3 max-w-[230px] text-xs leading-6 text-black/50">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}