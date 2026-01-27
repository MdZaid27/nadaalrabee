"use client";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

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
  const brandItems = useMemo(() => [
    {
      title: "Chinese products",
      description:
        "Chinese cuisine range including dim sum and ready-to-cook items crafted for consistent quality and taste. Designed for retail and HORECA with consistent portioning and flavor profiles.",
      ctaLabel: "Click here",
      images: [
        "/new%20chi%20-%201.jpeg",
        "/new%20chi%20-%202.jpeg",
        "/new%20chi%20-%203.jpeg",
        "/new%20chi%20-%204.jpeg",
      ],
    },
    {
      title: "Mr Pellman",
      description:
        "Eastern European artisan frozen foods such as dumplings, cutlets, samsa pastries and pelmeni, prepared with carefully selected ingredients and reliable cold‑chain packaging.",
      ctaLabel: "Click here",
      ctaHref: "https://mr-pellman.com/",
      images: ["/pel-1.jpeg", "/pel-2.jpeg", "/pel-3.jpeg", "/pel-4.jpeg"],
    },
    {
      title: "Indian products",
      description:
        "Indian favorites designed for retail and HORECA, focusing on balanced spices and dependable frozen formats. Ready-to-fry and bake items ideal for quick service.",
      ctaLabel: "Click here",
      images: ["/Idly.jpg", "/momo.jpg", "/sam.jpeg", "/parotta.jpg"],
    },
  ], []);
  const [bpIndex, setBpIndex] = useState(1);
  const [imgIndex, setImgIndex] = useState(0);
  const prevBrand = () =>
    { setBpIndex(i => (i - 1 + brandItems.length) % brandItems.length); setImgIndex(0); };
  const nextBrand = () =>
    { setBpIndex(i => (i + 1) % brandItems.length); setImgIndex(0); };
  const prevImg = () => {
    const imgs = brandItems[bpIndex].images as string[] | undefined;
    if (!imgs || imgs.length === 0) return;
    setImgIndex(i => (i - 1 + imgs.length) % imgs.length);
  };
  const nextImg = () => {
    const imgs = brandItems[bpIndex].images as string[] | undefined;
    if (!imgs || imgs.length === 0) return;
    setImgIndex(i => (i + 1) % imgs.length);
  };
  useEffect(() => {
    const imgs = brandItems[bpIndex].images as string[] | undefined;
    if (!imgs || imgs.length === 0) return;
    const id = setInterval(() => {
      setImgIndex(i => (i + 1) % imgs.length);
    }, 4500);
    return () => clearInterval(id);
  }, [bpIndex, brandItems]);
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
                We proudly serve HORECA clients, hospitality
                groups, and retail partners across the UAE. Our operations are
                supported by structured quality systems, trained manpower, and a
                growing cold-chain distribution network, ensuring consistent product
                safety, taste, and reliability.
              </p>
            </div>
            <a
              href="#brands-products"
              className="mt-8 inline-block border border-white/40 px-6 py-3 text-sm tracking-wide"
            >
              EXPLORE OUR PRODUCTS
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
            src="/Samosa.jpeg"
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
              Our products are currently supplied to multiple star hotels, premium resorts, and established HORECA partners across the UAE.
            </p>
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
                Selected supermarkets and retail outlets across Dubai, Abu Dhabi, Sharjah, and Ajman
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
          <div className="mt-10 reveal fade-up">
            <div className="relative p-8 bg-gradient-to-br from-cream to-white rounded-xl border border-zinc-200 shadow-lg">
              <button
                aria-label="Previous"
                onClick={prevBrand}
                className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-brand text-white shadow-md"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="text-center max-w-3xl mx-auto">
                <div className="mx-auto h-[2px] w-10 bg-brand"></div>
                <p className="mt-3 text-zinc-900 text-2xl">{brandItems[bpIndex].title}</p>
                <p className="mt-4 leading-7 text-zinc-700">{brandItems[bpIndex].description}</p>
                {Array.isArray(brandItems[bpIndex].images) && brandItems[bpIndex].images.length > 0 && (
                  <div className="mt-8">
                    <div className="relative h-64 md:h-80 rounded-xl overflow-hidden ring-1 ring-zinc-200 bg-white">
                      <Image
                        src={brandItems[bpIndex].images[imgIndex]}
                        alt="Brand item"
                        fill
                        quality={70}
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 1024px"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent"></div>
                      <button
                        aria-label="Previous image"
                        onClick={prevImg}
                        className="absolute left-4 top-1/2 -translate-y-1/2 h-9 w-9 flex items-center justify-center rounded-full bg-white/95 text-foreground shadow-md"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <button
                        aria-label="Next image"
                        onClick={nextImg}
                        className="absolute right-4 top-1/2 -translate-y-1/2 h-9 w-9 flex items-center justify-center rounded-full bg-white/95 text-foreground shadow-md"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                    <div className="mt-4 flex items-center justify-center gap-2">
                      {brandItems[bpIndex].images.map((_, idx) => (
                        <button
                          key={idx}
                          aria-label={`Go to image ${idx + 1}`}
                          onClick={() => setImgIndex(idx)}
                          className={`h-2.5 w-2.5 rounded-full ${imgIndex === idx ? "bg-brand" : "bg-zinc-300"}`}
                        />
                      ))}
                    </div>
                  </div>
                )}
                {brandItems[bpIndex].ctaHref && brandItems[bpIndex].ctaLabel && (
                  <a
                    href={brandItems[bpIndex].ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block border border-brand text-brand px-5 py-2 tracking-wide hover:bg-brand hover:text-white transition-colors"
                  >
                    {brandItems[bpIndex].ctaLabel}
                  </a>
                )}
                {!brandItems[bpIndex].ctaHref && brandItems[bpIndex].ctaLabel && (
                  <button
                    type="button"
                    className="mt-6 inline-block border border-brand text-brand px-5 py-2 tracking-wide cursor-default"
                  >
                    {brandItems[bpIndex].ctaLabel}
                  </button>
                )}
              </div>
              <button
                aria-label="Next"
                onClick={nextBrand}
                className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-brand text-white shadow-md"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      

      <section id="facility" className="w-full grid md:grid-cols-2 bg-cream">
        <div>
          <Image
            src="/haccp.jpg"
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
