"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          } else {
            entry.target.classList.remove("reveal-visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    const targets = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    targets.forEach(el => {
      observer.observe(el);
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) el.classList.add("reveal-visible");
    });
    return () => observer.disconnect();
  }, []);
  return (
    <main className="w-full font-sans">
      <section className="w-full grid md:grid-cols-2 bg-brand text-white">
        <div className="flex items-center justify-center px-8 md:px-16 py-20 md:py-28">
          <div className="max-w-xl reveal fade-up">
            <h2 className="text-3xl md:text-4xl tracking-wide">ABOUT US</h2>
            <p className="mt-6 leading-7 text-zinc-200">
              Nada al Rabee Foods provides fresh, frozen, and chilled food products,
              food ingredients, and sauces. Our cost‑efficient solutions serve a wide
              range of customers across the Middle East and international food and
              beverage markets.
            </p>
            <a
              href="#services"
              className="mt-8 inline-block border border-white/40 px-6 py-3 text-sm tracking-wide"
            >
              EXPLORE OUR SERVICES
            </a>
          </div>
        </div>
        <div className="h-full">
          <Image
            src="https://images.unsplash.com/photo-1526318472351-c75fcf070305?auto=format&fit=crop&w=1600&q=80"
            alt="Chef preparing food"
            width={1600}
            height={1067}
            className="w-full h-full object-cover reveal zoom-in"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </section>

      <section id="horeca" className="w-full grid md:grid-cols-2 gap-0 bg-white">
        <div>
          <Image
            src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1600&q=80"
            alt="Horeca service"
            width={1600}
            height={1067}
            className="w-full h-full object-cover reveal zoom-in"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="flex items-center px-8 md:px-16 py-20">
          <div className="max-w-xl reveal fade-up">
            <h3 className="text-3xl md:text-4xl text-zinc-900">Horeca</h3>
            <p className="mt-6 leading-7 text-zinc-700">
              In UAE, Qatar, Maldives and Bahrain, we collaborate with Hotels,
              Restaurants and Airline catering businesses to deliver customized
              food solutions that cater to their unique needs. Our products are
              crafted to meet the diverse demands of our partners and exceed the
              expectations of discerning clientele.
            </p>
            <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 gap-4 text-zinc-600">
              <span>Accor</span>
              <span>Hilton</span>
              <span>Hyatt</span>
              <span>Marriott</span>
              <span>Emirates</span>
              <span>IHG</span>
              <span>Rixos</span>
              <span>Jumeirah</span>
            </div>
          </div>
        </div>
      </section>

      <section id="retail" className="w-full grid md:grid-cols-2 bg-cream">
        <div className="flex items-center justify-center px-8 md:px-16 py-20 md:py-28 bg-brand text-white">
          <div className="max-w-xl reveal fade-up">
            <h3 className="text-3xl md:text-4xl">Retail</h3>
            <p className="mt-6 leading-7 text-zinc-200">
              Our high‑quality food products are supplied to major retailers,
              supermarkets and convenience stores throughout the Middle East. We
              take pride in being a trusted partner, enabling access to a broad
              consumer base and contributing to the growth of the regional food
              market.
            </p>
            <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 gap-4 text-zinc-200">
              <span>Spinneys</span>
              <span>Géant</span>
              <span>ZOOM</span>
              <span>Waitrose</span>
              <span>Union Coop</span>
              <span>Carrefour</span>
              <span>Lulu</span>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/retail-display.jpg"
            alt="Retail display"
            width={1600}
            height={1067}
            className="w-full h-full object-cover reveal zoom-in"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      <section id="global" className="w-full grid md:grid-cols-2">
        <div className="flex items-center justify-center p-10 md:p-16">
          <img
            src="/world-map.svg"
            alt="Global map"
            width={1600}
            height={1000}
            className="w-full max-w-4xl reveal zoom-in"
            loading="lazy"
          />
        </div>
        <div className="flex items-center px-8 md:px-16 py-20">
          <div className="max-w-xl reveal fade-up">
            <h3 className="text-3xl md:text-4xl text-zinc-900">Our Global Presence</h3>
            <p className="mt-6 leading-7 text-zinc-700">
              Our journey began in Dubai, UAE, and today we operate across the
              region with branches in Qatar, Bahrain, the Maldives, India, Canada,
              and the USA. We celebrate culinary diversity while maintaining
              unwavering standards of quality and sustainability.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="w-full px-8 md:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-zinc-700">
            We manufacture global cuisine under one roof and specialize in food
            production.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="group">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
                alt="Customization"
                width={1200}
                height={800}
                className="w-full h-56 object-cover reveal zoom-in"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
              <div className="mt-3 text-center reveal fade-up">
                <div className="mx-auto h-[2px] w-10 bg-brand"></div>
                <p className="mt-3 text-zinc-900">Customization</p>
              </div>
            </div>
            <div className="group">
              <Image
                src="/private-labelling.jpg"
                alt="Private Labelling"
                width={1200}
                height={800}
                className="w-full h-56 object-cover reveal zoom-in"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
              <div className="mt-3 text-center reveal fade-up">
                <div className="mx-auto h-[2px] w-10 bg-brand"></div>
                <p className="mt-3 text-zinc-900">Private Labelling</p>
              </div>
            </div>
            <div className="group">
              <Image
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
                alt="Distribution around the Globe"
                width={1200}
                height={800}
                className="w-full h-56 object-cover reveal zoom-in"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
              <div className="mt-3 text-center reveal fade-up">
                <div className="mx-auto h-[2px] w-10 bg-brand"></div>
                <p className="mt-3 text-zinc-900">Distribution around the Globe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="facility" className="w-full grid md:grid-cols-2 bg-cream">
        <div>
          <Image
            src="/factory-inspection.jpg"
            alt="Factory quality inspection"
            width={1600}
            height={1067}
            className="w-full h-full object-cover reveal zoom-in"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="flex items-center px-8 md:px-16 py-20 bg-white">
          <div className="max-w-xl reveal fade-up">
            <h3 className="text-3xl md:text-4xl text-zinc-900">Our Facility</h3>
            <p className="mt-6 leading-7 text-zinc-700">
              The Nada al Rabee Foods factory in Dubai operates with HACCP and
              codex standards, maintaining GMP practices and Halal compliance.
              Our in‑house teams for Preventive Maintenance, Microbiology, and
              Food Safety Compliance support partners with consistent excellence
              in quality and service. Our facilities are designed for a diverse
              range of products and flexible customization while ensuring
              reliability at scale.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
