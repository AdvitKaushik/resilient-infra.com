import ContactForm from "./components/ContactForm";

export default function App() {
  // Brand palette extracted from the provided logo (RGB):
  // Primary: #1D5788 (29,87,136)
  // Accent:  #92AEC6 (146,174,198)
  // Base:    #FBFCFC (251,252,252)
  const brand = {
    primary: "#1D5788",
    accent: "#92AEC6",
    base: "#FBFCFC",
    ink: "#0f172a", // slate-900 for text
  };

  const nav = [
    { id: "about", label: "Company Profile" },
    { id: "objectives", label: "Company Objectives" },
    { id: "solutions", label: "Solutions" },
    { id: "approach", label: "Our Approach" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen text-slate-900" style={{ background: brand.base }}>
      {/* Top Bar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            {/* Inline logo from the uploaded PNG (data URL) */}
            <img
              alt="Resilient logo"
              width={44}
              height={44}
              className="rounded-lg ring-1 ring-slate-200"
              src="/logo.png" // (truncated by editor at render; full data URL inserted on creation)
            />
            <div className="leading-tight">
              <div className="text-xl font-extrabold tracking-tight" style={{ color: brand.primary }}>RESILIENT</div>
              <div className="text-[11px] tracking-[0.2em] text-slate-500">INFRASTRUCTURE DEVELOPERS</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="text-sm font-medium text-slate-700 hover:text-slate-900 focus:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-slate-400 rounded px-1">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold text-white shadow-sm hover:shadow transition active:scale-[.99]" style={{ background: brand.primary }}>Work with us</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section aria-label="Hero" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: `linear-gradient(135deg, ${brand.primary} 0%, ${brand.accent} 100%)` }} />
        <svg className="absolute -top-24 -right-24 -z-10 opacity-20" width="600" height="600" viewBox="0 0 600 600" fill="none"><circle cx="300" cy="300" r="300" fill="white"/></svg>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid md:grid-cols-2 items-center gap-10">
            <div className="text-white">
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">Building smart, sustainable & resilient infrastructure.</h1>
              <p className="mt-4 text-lg/7 text-white/90 max-w-xl">We develop, invest, operate and innovate across transport, logistics and urban development—through PPPs, creative financing, and technology-led delivery.</p>
              <div className="mt-6 flex items-center gap-3">
                <a href="#solutions" className="rounded-2xl bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/30 hover:bg-white/20">Explore solutions</a>
                <a href="#contact" className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100">Start a conversation</a>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 ring-1 ring-white/30">
              <ul className="grid grid-cols-2 gap-4 text-white">
                {[
                  { k: "PPP Concessions", v: "BOT · BOOT · DBFO · HAM" },
                  { k: "Sectors", v: "Rail · Metro · Highways · Logistics · Urban" },
                  { k: "Digital", v: "MaaS · Smart Ticketing · ITS · AI" },
                  { k: "Sustainability", v: "EV · Green Corridors · Climate‑resilient" },
                ].map((item) => (
                  <li key={item.k} className="rounded-xl bg-white/10 p-4 ring-1 ring-white/20">
                    <div className="text-xs uppercase opacity-80 tracking-wide">{item.k}</div>
                    <div className="mt-1 text-sm font-semibold">{item.v}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section id="about" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-extrabold" style={{ color: brand.primary }}>Company Profile</h2>
              <p className="mt-3 text-slate-600">Resilient Infrastructure Developers Limited is a pioneering company dedicated to transforming infrastructure across transport, logistics, and urban development sectors. Our mission spans development, investment, operations and innovation in resilient infrastructure solutions.</p>
              <p className="mt-3 text-slate-600">We deliver integrated, end‑to‑end outcomes—from concept and structuring to construction, operations and lifecycle asset management—grounded in strong governance and sustainability.</p>
            </div>
            <div className="md:col-span-2 grid gap-6">
              <Card title="What we do">
                <ul className="grid sm:grid-cols-2 gap-3 text-slate-700">
                  <li>Infrastructure development & PPP concessions</li>
                  <li>Transport operations & multimodal mobility</li>
                  <li>Project & land development; Transit‑Oriented Development</li>
                  <li>Financial advisory, investment structuring & M&A</li>
                  <li>Smart, sustainable & climate‑resilient solutions</li>
                  <li>Market expansion & strategic partnerships</li>
                </ul>
              </Card>
              <Card title="Sectors & Modalities">
                <p className="text-slate-700">Railways, metro & suburban rail, ropeways, BRT & bus systems, ferries & waterways, highways and expressways, logistics parks, ICDs & corridors, urban townships and smart city infrastructure.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section id="objectives" className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold mb-6" style={{ color: brand.primary }}>Company Objectives</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((o, idx) => (
              <ObjectiveCard key={idx} index={idx + 1} title={o.title} bullets={o.bullets} brand={brand} />
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <Pitch
              eyebrow="Development & Concessions"
              title="Delivering complex assets through PPPs"
              copy="From BOT/BOOT/DBFO to HAM and VGF, we structure, bid and deliver projects—aligning risk, bankability and performance‑based outcomes."
              cta="Partner with us"
              href="#contact"
              brand={brand}
            />
            <Pitch
              eyebrow="Operations & Digital"
              title="Multimodal operations with MaaS & ITS"
              copy="We operate rail, bus and ropeway systems; integrate smart ticketing and DRT; and deploy ITS/AI for safe, efficient networks."
              cta="Explore capabilities"
              href="#contact"
              brand={brand}
            />
            <Pitch
              eyebrow="Sustainability"
              title="Climate‑resilient, low‑carbon infrastructure"
              copy="EV charging ecosystems, green logistics corridors and energy‑efficient assets designed for resilience and long‑term value."
              cta="Co‑develop initiatives"
              href="#contact"
              brand={brand}
            />
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold" style={{ color: brand.primary }}>An Integrated Infrastructure Approach</h2>
          <ol className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Project Conceptualization", d: "Opportunity ID, feasibility & early frameworks aligned with market needs." },
              { t: "Financing & Structuring", d: "Optimal capital stacks via PPPs, debt, equity and innovative instruments." },
              { t: "Development & Construction", d: "Technical excellence, quality control and efficient resource management." },
              { t: "Operations & Maintenance", d: "Smart technologies, performance KPIs and lifecycle asset optimization." },
            ].map((step, i) => (
              <div key={step.t} className="relative rounded-2xl bg-white p-5 ring-1 ring-slate-200">
                <div className="absolute -top-3 left-5 rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ background: brand.primary }}>Step {i + 1}</div>
                <div className="mt-2 font-semibold">{step.t}</div>
                <p className="mt-1 text-sm text-slate-600">{step.d}</p>
              </div>
            ))}
          </ol>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <h2 className="text-2xl font-extrabold" style={{ color: brand.primary }}>Let’s build together</h2>
            <p className="mt-2 text-slate-600">Share a few details and we’ll get back to you within 2 business days.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-6 grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="grid gap-1">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input id="name" type="text" className="rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="Your full name" />
                </div>
                <div className="grid gap-1">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input id="email" type="email" className="rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="name@company.com" />
                </div>
              </div>
              <div className="grid gap-1">
                <label htmlFor="message" className="text-sm font-medium">How can we help?</label>
                <textarea id="message" rows={5} className="rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="Tell us about your project, timeline and goals…" />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-500">By submitting, you agree that we may contact you about your inquiry.</p>
                <button className="rounded-2xl px-5 py-2 text-white font-semibold hover:shadow transition active:scale-[.99]" style={{ background: brand.primary }}>Send</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative">
        <div className="absolute inset-0 -z-10" style={{ background: `linear-gradient(135deg, ${brand.accent} 0%, ${brand.primary} 100%)` }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-white">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="text-lg font-extrabold tracking-tight">RESILIENT</div>
              <div className="text-[11px] tracking-[0.2em] opacity-80">INFRASTRUCTURE DEVELOPERS</div>
            </div>
            <div className="text-sm opacity-90">© {new Date().getFullYear()} Resilient Infrastructure Developers Limited. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <div className="mt-3 text-sm">{children}</div>
    </div>
  );
}

function ObjectiveCard({ index, title, bullets, brand }) {
  return (
    <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white text-sm font-bold" style={{ background: brand.primary }}>{index}</span>
        <h3 className="font-semibold text-slate-900">{title}</h3>
      </div>
      <ul className="mt-3 space-y-2 text-sm text-slate-700">
        {bullets.map((b, i) => (
          <li key={i} className="pl-4 relative before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full" style={{ ['--tw-before-bg'.toString()]: brand.accent }}>
            <span className="before:content-[''] before:bg-slate-300">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pitch({ eyebrow, title, copy, cta, href, brand }) {
  return (
    <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
      <div className="text-xs uppercase tracking-wide text-slate-500">{eyebrow}</div>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{copy}</p>
      <a href={href} className="mt-4 inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold text-white hover:shadow transition" style={{ background: brand.primary }}>{cta}</a>
    </div>
  );
}

// Objectives content assembled from the provided Company Objectives document
const objectives = [
  {
    title: "Infrastructure Development, Investment & PPP Concessions",
    bullets: [
      "Promote, design, finance, construct, operate and upgrade transport, logistics and urban infrastructure.",
      "Participate in tenders and concessions for railway stations, ropeways, logistics parks, warehouses, multimodal hubs, highways, waterways and urban transit.",
      "Invest in and optimize operational assets across roads, rail, metro and logistics.",
      "Engage via BOT, BOOT, BOO, DBFO, BOLT, HAM, VGF and other structured models.",
      "Develop and monetize toll plazas, commercial spaces and ancillary facilities.",
    ],
  },
  {
    title: "Transport Operations & Multimodal Mobility Solutions",
    bullets: [
      "Operate and manage stations, metro, suburban rail, tram/BRT, ropeways and ferries.",
      "Provide multimodal services including last‑mile, corridor development and fleet management.",
      "Develop MaaS platforms, digital ticketing, fare integration and demand‑responsive transport.",
      "Undertake bus, shared mobility and freight operations.",
      "Establish high‑capacity systems including high‑speed rail, underground and autonomous networks; develop way‑side amenities and emergency services.",
    ],
  },
  {
    title: "Project Development, Land Development & Transit‑Oriented Development (TOD)",
    bullets: [
      "Develop commercial real estate, mixed‑use projects and SEZs linked to transport.",
      "Deliver TOD townships, multimodal hubs, commercial complexes and smart‑city assets.",
      "Undertake land acquisition, development and monetization via JVs, trusts and REITs.",
      "Develop warehousing, logistics clusters, ICDs, FTWZs and industrial corridors.",
      "Plan and operate urban infrastructure including tunnels, bridges, ports and satellite townships; build ferry terminals and waterways infrastructure.",
    ],
  },
  {
    title: "Financial Advisory, Investment Structuring & M&A",
    bullets: [
      "Provide project finance structuring, investment advisory, risk assessment and due diligence.",
      "Facilitate capital raising via debt, equity, bonds, sovereign/multilateral and blended finance.",
      "Lead M&A, strategic partnerships, JVs and asset monetization.",
      "Invest in/manage SPVs, infrastructure funds and private equity across infrastructure and logistics.",
      "Establish long‑term mechanisms such as IDFs and InvITs; develop/lease rail sidings, yards and freight facilities.",
    ],
  },
  {
    title: "Smart, Sustainable & Resilient Infrastructure Solutions",
    bullets: [
      "Integrate renewable energy, energy‑efficient tech and carbon‑neutral transport.",
      "Deploy ITS, automation, AI and digital platforms for asset/traffic optimization.",
      "Invest in and operate EV charging and green logistics corridors.",
      "Implement smart ticketing and integrated fare collection across networks.",
    ],
  },
  {
    title: "Market Expansion, Investment & Strategic Partnerships",
    bullets: [
      "Collaborate with governments, financiers and global investors for development and execution.",
      "Form JVs, consortiums and SPVs for large‑scale transport and logistics projects.",
      "Explore investments in transport digitalization, e‑mobility, integrated logistics and cross‑border infrastructure.",
      "Provide strategic advisory for policy, regulatory compliance and investment promotion.",
    ],
  },
  {
    title: "Regulatory Compliance, Governance & Sustainability",
    bullets: [
      "Ensure compliance with national/international frameworks, land and planning laws.",
      "Uphold strong corporate governance, risk management and ethical conduct.",
      "Align with sustainable urban planning, environmental conservation and social equity.",
      "Engage with multilaterals and think tanks to promote global best practices.",
    ],
  },
];