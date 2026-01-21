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
      {/* Hero Section */}
      <section className="w-full h-svh min-h-[500px] flex items-center justify-center bg-zinc-900 text-white relative">
        <div className="absolute inset-0 z-0">
          <Image
             src="/hero%20image.jpg"
             alt="Hero background"
             fill
             className="object-cover opacity-50"
             priority
          />
        </div>
        <div className="relative z-10 text-center px-4 reveal fade-up">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide max-w-4xl mx-auto leading-tight">
            Traditions Frozen Fresh,<br />From Far East to West
          </h1>
        </div>
      </section>

      <section id="about" className="w-full grid md:grid-cols-2 items-stretch bg-brand text-white">
        <div className="flex items-center justify-center px-6 md:px-10 py-10 md:py-12 h-full">
          <div className="max-w-xl reveal fade-up">
            <h2 className="text-3xl md:text-4xl tracking-wide">ABOUT US</h2>
            <div className="mt-6 space-y-4 leading-7 text-zinc-200">
              <p>
                Nada Al Rabee Frozen Food Industry LLC is a UAE-based frozen food
                manufacturing company, established in 2017, specializing in
                handcrafted frozen food solutions inspired by Eurasian, Eastern
                European, Asian, Chinese, and Indian cuisines.
              </p>
              <p>
                Operating from a HACCP-certified production facility, we focus on
                producing high-quality frozen products using carefully selected raw
                materials, controlled manufacturing processes, and strict hygiene
                standards. Our product portfolio includes a wide range of handmade
                artisan items such as dumplings, filled pastries, pancakes, meat
                products, and specialty frozen foods.
              </p>
              <p>
                We proudly serve HORECA clients, airline catering services, hospitality
                groups, and retail partners across the UAE. Our operations are
                supported by structured quality systems, trained manpower, and a
                growing cold-chain distribution network, ensuring consistent product
                safety, taste, and reliability.
              </p>
            </div>
            <a
              href="#services"
              className="mt-8 inline-block border border-white/40 px-6 py-3 text-sm tracking-wide"
            >
              EXPLORE OUR SERVICES
            </a>
          </div>
        </div>
        <div className="relative h-full min-h-[320px]">
          <Image
            src="/about%20us%20.jpeg"
            alt="Chef preparing food"
            fill
            className="object-cover reveal zoom-in"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </section>

      <section id="vision-mission" className="w-full px-8 md:px-16 py-20 bg-cream">
         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
            <div className="reveal fade-up">
              <h3 className="text-3xl text-zinc-900 mb-6">Our Vision</h3>
              <p className="text-lg leading-relaxed text-zinc-700 italic">
                To become a trusted frozen food manufacturing partner in the UAE and the region,
                delivering safe, consistent, and culturally diverse frozen food solutions
                across hospitality, catering, and retail sectors.
              </p>
            </div>
            <div className="reveal fade-up">
              <h3 className="text-3xl text-zinc-900 mb-6">Our Mission</h3>
              <ul className="space-y-4 text-zinc-700 list-disc pl-5">
                <li>
                  To manufacture safe, high-quality frozen food products in compliance with
                  UAE food safety regulations and HACCP standards.
                </li>
                <li>
                  To deliver handcrafted artisan products with consistency and scalability.
                </li>
                <li>
                  To support HORECA and catering partners with reliable supply, customization,
                  and timely deliveries.
                </li>
                <li>
                  To promote sustainable practices and responsible sourcing.
                </li>
                <li>
                  To empower and develop a skilled workforce, with strong participation of
                  women in food production.
                </li>
              </ul>
            </div>
         </div>
      </section>

      <section id="horeca" className="w-full grid md:grid-cols-2 gap-0 bg-white">
        <div className="relative h-64 sm:h-80 md:h-[420px]">
          <Image
            src="/horcea.jpeg"
            alt="Horeca service"
            fill
            className="object-cover reveal zoom-in"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="flex items-center px-8 md:px-12 py-12">
          <div className="max-w-xl reveal fade-up">
            <h3 className="text-3xl md:text-4xl text-zinc-900">Horeca</h3>
            <p className="mt-4 leading-7 text-zinc-700">
              In UAE, Qatar, Maldives and Bahrain, we collaborate with Hotels,
              Restaurants and Airline catering businesses to deliver customized
              food solutions that cater to their unique needs. Our products are
              crafted to meet the diverse demands of our partners and exceed the
              expectations of discerning clientele.
            </p>
            <p className="mt-3 leading-7 text-zinc-700">
              Our products are currently supplied to multiple star hotels, premium resorts, and established HORECA partners across the UAE.
            </p>
            <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 gap-3 text-zinc-600">
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
        <div className="flex items-center justify-center px-8 md:px-16 py-18 md:py-24 bg-brand text-white">
          <div className="max-w-xl reveal fade-up">
            <h3 className="text-3xl md:text-4xl">Retail</h3>
            <p className="mt-6 leading-7 text-zinc-200">
              We serve the retail market through a multi-channel distribution model,
              ensuring freshness, reliability, and wide accessibility for our products.
            </p>
            <p className="mt-4 leading-7 text-zinc-200">
              Our frozen food range is available through:
            </p>
            <ul className="mt-4 space-y-3 text-zinc-200 list-disc pl-5">
              <li>
                Our dedicated online store, offering direct-to-consumer access with reliable home delivery
              </li>
              <li>
                Selected supermarkets and retail outlets across Sharjah, Dubai, and Ajman
              </li>
              <li>
                A dedicated temperature-controlled delivery fleet, ensuring product integrity from production to point of sale
              </li>
            </ul>
            <p className="mt-6 leading-7 text-zinc-200">
              By combining direct retail distribution with strong logistics capabilities, we ensure consistent supply,
              proper cold-chain management, and a seamless experience for both retail partners and end consumers.
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/retail.jpeg"
            alt="Retail display"
            width={1600}
            height={1067}
            className="w-full h-full object-cover reveal zoom-in"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      <section id="brands-products" className="w-full px-8 md:px-16 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl text-zinc-900">Our Brand & Products</h3>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <a
              href="https://mr-pellman.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-cream border border-zinc-200 reveal fade-up block hover:border-brand transition-colors"
            >
              <div className="mx-auto h-[2px] w-10 bg-brand"></div>
              <p className="mt-3 text-zinc-900">Mr Pellman</p>
            </a>
            <div className="p-6 bg-cream border border-zinc-200 reveal fade-up">
              <div className="mx-auto h-[2px] w-10 bg-brand"></div>
              <p className="mt-3 text-zinc-900">Chinese products</p>
            </div>
            <div className="p-6 bg-cream border border-zinc-200 reveal fade-up">
              <div className="mx-auto h-[2px] w-10 bg-brand"></div>
              <p className="mt-3 text-zinc-900">Indian products</p>
            </div>
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
            <h3 className="text-3xl md:text-4xl text-zinc-900">How We Operate</h3>
            <p className="mt-6 leading-7 text-zinc-700">
              We operate through a HACCP-certified facility where handcrafted artisan
              foods are produced with precision, care, and responsibility, following
              strict food safety standards and sustainable practices at every stage.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
