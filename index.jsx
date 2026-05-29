import React from "react";
import { Phone, ArrowRight, ShieldCheck, LineChart, Handshake, Scale, CheckCircle2 } from "lucide-react";

const phone = "614-300-0181";

const services = [
  {
    icon: <LineChart className="h-5 w-5" />,
    title: "Exit Planning",
    text: "Prepare the business, leadership team, and financial story before going to market."
  },
  {
    icon: <Scale className="h-5 w-5" />,
    title: "Business Valuation",
    text: "Understand realistic market value, value drivers, and the steps that can improve outcomes."
  },
  {
    icon: <Handshake className="h-5 w-5" />,
    title: "Business Sales",
    text: "Confidential sell-side advisory for owners ready to explore a transition or sale."
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Mergers & Acquisitions",
    text: "Guidance through deal strategy, buyer conversations, diligence, negotiation, and closing."
  }
];

const process = [
  "Confidential discovery call",
  "Valuation and exit readiness review",
  "Positioning and buyer strategy",
  "Negotiation, diligence, and closing support"
];

function Logo() {
  return (
    <div className="flex items-center gap-3" aria-label="Total Value Exit Advisors">
      <img
        src="/mnt/data/Logo-TotalValue.png"
        alt="Total Value Exit Advisors logo"
        className="h-12 w-auto object-contain"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
      <div className="leading-none">
        <div className="font-serif text-2xl tracking-tight text-[#a53030]">TotalValue</div>
        <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.38em] text-[#a53030]">Exit Advisors</div>
      </div>
    </div>
  );
}

export default function TotalValueWebsite() {
  return (
    <main className="min-h-screen bg-[#fbfaf8] text-neutral-900">
      <header className="sticky top-0 z-30 border-b border-neutral-200/80 bg-[#fbfaf8]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm text-neutral-700 md:flex">
            <a href="#services" className="hover:text-[#a53030]">Services</a>
            <a href="#process" className="hover:text-[#a53030]">Process</a>
            <a href="#about" className="hover:text-[#a53030]">About</a>
            <a href="#contact" className="hover:text-[#a53030]">Contact</a>
          </nav>
          <a
            href={`tel:${phone.replaceAll("-", "")}`}
            className="hidden rounded-full border border-[#a53030] px-4 py-2 text-sm font-medium text-[#a53030] transition hover:bg-[#a53030] hover:text-white sm:inline-flex"
          >
            {phone}
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-6 inline-flex rounded-full border border-[#a53030]/20 bg-white px-4 py-2 text-sm font-medium text-[#a53030] shadow-sm">
              Exit planning, valuation, sales, mergers, and acquisitions
            </p>
            <h1 className="font-serif text-5xl leading-[1.02] tracking-tight text-neutral-950 md:text-7xl">
              Know your value. Plan your exit. Move with confidence.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600">
              Total Value Exit Advisors helps business owners understand what their company is worth, prepare for transition, and navigate confidential sale or acquisition opportunities.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#a53030] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#a53030]/15 transition hover:bg-[#8f2929]"
              >
                Schedule a confidential call <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={`tel:${phone.replaceAll("-", "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:border-[#a53030] hover:text-[#a53030]"
              >
                <Phone className="h-4 w-4" /> {phone}
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-xl shadow-neutral-900/5">
            <div className="rounded-[1.5rem] bg-[#f4eeee] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#a53030]">Owner-focused advisory</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-neutral-950">A quiet, practical path from planning to closing.</h2>
              <div className="mt-8 space-y-4">
                {["Confidential process", "Clear valuation guidance", "Market-ready positioning", "Deal support from start to finish"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/80 p-4 text-sm font-medium text-neutral-800">
                    <CheckCircle2 className="h-5 w-5 text-[#a53030]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-neutral-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#a53030]">Services</p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight text-neutral-950 md:text-5xl">Advisory built around the owner’s next chapter.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className="rounded-3xl border border-neutral-200 bg-[#fbfaf8] p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-neutral-900/5">
                <div className="mb-6 inline-flex rounded-2xl bg-[#a53030] p-3 text-white">{service.icon}</div>
                <h3 className="text-lg font-semibold text-neutral-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#a53030]">Process</p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight text-neutral-950 md:text-5xl">Simple steps. Serious discretion.</h2>
            <p className="mt-6 text-base leading-7 text-neutral-600">
              The right exit starts before the listing, the teaser, or the first buyer conversation. Total Value helps owners make informed decisions at each stage.
            </p>
          </div>
          <div className="space-y-4">
            {process.map((step, index) => (
              <div key={step} className="flex gap-5 rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm shadow-neutral-900/5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f4eeee] font-semibold text-[#a53030]">{index + 1}</div>
                <div>
                  <h3 className="font-semibold text-neutral-950">{step}</h3>
                  <p className="mt-1 text-sm leading-6 text-neutral-600">Quiet, direct guidance designed to protect the business while improving the quality of decisions.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-neutral-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d97b7b]">Why Total Value</p>
              <h2 className="mt-4 font-serif text-4xl tracking-tight md:text-5xl">Because the best transaction is the one you are prepared for.</h2>
            </div>
            <div className="text-lg leading-8 text-neutral-300">
              <p>
                Selling, merging, acquiring, or planning an exit is rarely just a financial event. It affects employees, family, partners, customers, and legacy. Total Value brings valuation discipline and transaction guidance to help owners move forward with clarity.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {["Confidential", "Practical", "Owner-first"].map((word) => (
                  <div key={word} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-sm font-semibold text-white">{word}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#a53030]">Contact</p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight text-neutral-950 md:text-5xl">Ready to understand your options?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-neutral-600">
            Start with a confidential conversation about your goals, valuation questions, or potential sale, merger, or acquisition strategy.
          </p>
          <div className="mt-10 rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-xl shadow-neutral-900/5">
            <a href={`tel:${phone.replaceAll("-", "")}`} className="inline-flex items-center justify-center gap-3 rounded-full bg-[#a53030] px-7 py-4 text-base font-semibold text-white transition hover:bg-[#8f2929]">
              <Phone className="h-5 w-5" /> Call {phone}
            </a>
            <p className="mt-5 text-sm text-neutral-500">Confidential advisory for exit planning, valuation, business sales, mergers, and acquisitions.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <Logo />
          <p>© {new Date().getFullYear()} Total Value Exit Advisors. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
