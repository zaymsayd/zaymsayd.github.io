import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Github,
  Linkedin, Mail, Smartphone, Radio, CreditCard, Layers3,
  Code2, MapPin, ExternalLink, Sparkles, Cpu, Globe2
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    id: "01", name: "WatchMarket", type: "Marketplace · Fintech",
    description: "A watch marketplace built around buying, selling and bidding — with a focused commerce experience.",
    stack: ["Flutter", "Riverpod", "Firebase", "Hesabe"],
    accent: "mint", mark: "WM", detail: "Marketplace",
    screenshots: ["/screenshots/watchmarket-2.jpg", "/screenshots/watchmarket-3.jpg", "/screenshots/watchmarket-4.jpg"],
    links: { android: "https://play.google.com/store/apps/details?id=com.watchmarket.app" }
  },
  {
    id: "02", name: "dSense", type: "Indoor navigation · IoT",
    description: "A mobile experience integrating maps, push notifications and an in-house BLE SDK for indoor positioning.",
    stack: ["Flutter", "BLoC", "BLE SDK", "Maps"],
    accent: "blue", mark: "dS", detail: "Connected spaces",
    screenshots: ["/screenshots/dsense-1.jpg", "/screenshots/dsense-2.jpg", "/screenshots/dsense-3.jpg"],
    links: {
      ios: "https://apps.apple.com/ae/app/dsense/id1663214822",
      android: "https://play.google.com/store/apps/datasafety?id=com.pinmicro.dsense"
    }
  },
  {
    id: "03", name: "EventPlus", type: "Events · Real-time",
    description: "An event platform combining live video, video calls, chat and real-time communication in one app.",
    stack: ["Flutter", "Agora", "WebSockets", "BLE"],
    accent: "violet", mark: "EP", detail: "Live experiences",
    screenshots: ["/screenshots/eventplus-1.jpg", "/screenshots/eventplus-2.jpg", "/screenshots/eventplus-3.jpg"],
    links: {
      ios: "https://apps.apple.com/ae/app/eventplus/id1629432479",
      android: "https://play.google.com/store/apps/details?id=com.pinmicro.eventplusapp"
    }
  },
  {
    id: "04", name: "Nature’s Cart", type: "E-commerce · Grocery",
    description: "A grocery shopping application with authentication, notifications and integrated payment flows.",
    stack: ["Flutter", "Firebase", "GetX", "Payments"],
    accent: "orange", mark: "NC", detail: "Everyday commerce",
    screenshots: ["/screenshots/natures-cart-1.png", "/screenshots/natures-cart-2.png", "/screenshots/natures-cart-3.png"],
    links: {
      ios: "https://apps.apple.com/ae/app/natures-cart/id1549923265",
      android: "https://play.google.com/store/apps/details?id=com.ae.naturescart"
    }
  },
  {
    id: "05", name: "Jeepers Edition", type: "Community · Commerce",
    description: "A driver community app bringing together member experiences and a spare-parts shopping journey.",
    stack: ["Flutter", "Firebase", "GetX", "Payments"],
    accent: "red", mark: "JE", detail: "Community platform",
    screenshots: ["/screenshots/jeepers-1.png", "/screenshots/jeepers-2.png", "/screenshots/jeepers-3.png"],
    links: { ios: "https://apps.apple.com/in/app/jeepers-edition/id6502684633" }
  },
  {
    id: "06", name: "WashnFold", type: "On-demand · Logistics",
    description: "A delivery experience with live vehicle coordinates, maps and real-time order updates.",
    stack: ["Flutter", "WebSockets", "FCM", "Google Maps"],
    accent: "yellow", mark: "WF", detail: "Live logistics",
    links: {
      ios: "https://apps.apple.com/qa/app/washnfold-online-laundry/id1548683957",
      android: "https://play.google.com/store/apps/details?id=com.rbnsoft.washnfold"
    }
  },
  {
    id: "07", name: "FastPay Wallet", type: "Payments · Enterprise",
    description: "An enterprise Flutter payment app for POS terminals — tap-to-pay, card-present flows, hardware SDK integration and a full codebase migration from Flutter 1.x to 3.x.",
    stack: ["Flutter", "Dart", "Kotlin", "Payment SDK", "Android"],
    accent: "lime", mark: "FW", detail: "Enterprise payments",
    internal: true, links: {}
  },
  {
    id: "08", name: "FastPOS", type: "POS · Hardware",
    description: "A POS app for Landi M20 and C20 Pro terminals — NFC card detection, receipt printing with dynamic values and image support, and internal Flutter plugin architecture.",
    stack: ["Flutter", "Kotlin", "NFC", "POS SDK", "Landi SDK"],
    accent: "teal", mark: "FP", detail: "Point of sale",
    internal: true, links: {}
  }
];

const capabilities = [
  { icon: Smartphone, title: "Cross-platform apps", text: "Production Flutter applications for Android and iOS, designed around real product needs." },
  { icon: Cpu, title: "Native engineering", text: "Kotlin, platform channels and native Android/iOS integrations when the platform needs a closer touch." },
  { icon: Radio, title: "Connected devices", text: "BLE, UWB, NFC and hardware communication — from SDK integration to app-side experiences." },
  { icon: CreditCard, title: "Payments & POS", text: "Payment terminal integrations, SoftPOS workflows and custom Flutter plugins for terminal SDKs." },
  { icon: Layers3, title: "SDKs & architecture", text: "Reusable private plugins, internal SDK integrations and maintainable application foundations." },
  { icon: Globe2, title: "Real-time products", text: "Maps, background location, WebSockets, notifications, live video and chat experiences." }
];

const skills = ["Flutter", "Dart", "Kotlin", "Android", "iOS", "Riverpod", "BLoC", "Provider", "GetX", "BLE / UWB", "NFC", "POS SDKs", "REST APIs", "Firebase", "WebSockets", "Agora", "Google Maps", "React"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All work");
  const filters = ["All work", "Commerce", "Connected tech", "Real-time", "Payments"];
  const filtered = projects.filter(p => activeFilter === "All work" ||
    (activeFilter === "Commerce" && ["WatchMarket", "Nature’s Cart", "Jeepers Edition"].includes(p.name)) ||
    (activeFilter === "Connected tech" && ["dSense"].includes(p.name)) ||
    (activeFilter === "Real-time" && ["EventPlus", "WashnFold"].includes(p.name)) ||
    (activeFilter === "Payments" && ["FastPay Wallet", "FastPOS"].includes(p.name)));

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="grain" />
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Sayed Zaeem home"><svg className="brand-mark" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="32" height="32" rx="5" fill="#0d0f0e"/>
              <defs>
                <filter id="gz" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="0.9" result="b"/>
                  <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>
              <g filter="url(#gz)">
                <path d="M 2,5 H 21 L 2,24 H 21"
                  stroke="#c7f36b" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"/>
                <path d="M 9,10 H 28 L 9,29 H 28"
                  stroke="#c7f36b" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" opacity="0.6"/>
                <line x1="2"  y1="5"  x2="9"  y2="10" stroke="#c7f36b" strokeWidth="1.4" opacity="0.45"/>
                <line x1="21" y1="5"  x2="28" y2="10" stroke="#c7f36b" strokeWidth="1.4" opacity="0.45"/>
                <line x1="2"  y1="24" x2="9"  y2="29" stroke="#c7f36b" strokeWidth="1.4" opacity="0.45"/>
                <line x1="21" y1="24" x2="28" y2="29" stroke="#c7f36b" strokeWidth="1.4" opacity="0.45"/>
              </g>
            </svg><span>SAYED <span className="brand-dot">Z</span>AEEM</span></a>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#work" onClick={closeMenu}>Work <span>01</span></a>
          <a href="#expertise" onClick={closeMenu}>Expertise <span>02</span></a>
          <a href="#about" onClick={closeMenu}>About <span>03</span></a>
          <a href="#contact" onClick={closeMenu}>Contact <span>04</span></a>
        </nav>
        <a className="availability" href="#contact"><span className="pulse" /> OPEN TO THE RIGHT PROJECT</a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-kicker"><span className="eyebrow-line" /> MOBILE ENGINEERING / PRODUCT THINKING / PLATFORM CRAFT</div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="overline">HELLO, I’M SAYED ZAEEM <span>— UAE / OPEN TO GLOBAL</span></p>
              <h1>Code that<br /><em>moves</em> with<br />people<span className="lime">.</span></h1>
              <p className="hero-lede">I build mobile products that connect people, platforms and the physical world — from polished Flutter apps to native integrations and connected-device experiences.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">Explore selected work <ArrowDownRight size={17}/></a>
                <a className="text-link" href="#contact">Let’s talk <ArrowUpRight size={16}/></a>
              </div>
              <div className="hero-footnote"><span className="scroll-cue"><span /></span> SCROLL TO EXPLORE</div>
            </div>
            <div className="hero-art" aria-label="Abstract mobile engineering illustration">
              <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
              <div className="art-cross cross-a" /><div className="art-cross cross-b" />
              <div className="art-label label-top">FIG. 001 — PRODUCT IN MOTION</div>
              <div className="phone phone-back"><div className="phone-speaker" /><div className="phone-ui"><span className="ui-dot" /><span className="ui-line long" /><span className="ui-line" /><div className="ui-chart"><i/><i/><i/><i/><i/><i/><i/></div><div className="ui-card" /><div className="ui-card short" /></div></div>
              <div className="phone phone-front"><div className="phone-speaker" /><div className="phone-ui"><div className="ui-top"><span>OVERVIEW</span><b>•••</b></div><div className="ui-balance">AED 8,420<span>AVAILABLE BALANCE</span></div><div className="ui-chart chart-front"><i/><i/><i/><i/><i/><i/><i/><i/></div><div className="ui-transaction"><b>↗</b><span>Payment received<small>Today · 10:42 AM</small></span><strong>+240</strong></div><div className="ui-transaction"><b>↙</b><span>Online purchase<small>Yesterday</small></span><strong>−86</strong></div></div></div>
              <div className="art-sticker"><Sparkles size={14}/><span>BUILT FOR<br/>REAL LIFE</span></div>
              <div className="art-label label-bottom">FLUTTER × NATIVE × CONNECTED</div>
              <div className="art-index">25°<br/><small>LAT / LONG</small></div>
            </div>
          </div>
          <div className="hero-bottom"><span>7+ YEARS BUILDING FOR MOBILE</span><span className="bottom-center">THOUGHTFUL BY DESIGN. SOLID BY ENGINEERING.</span><span>SCROLL <ArrowDownRight size={14}/></span></div>
        </section>

        <section className="ticker" aria-label="Technology focus"><div className="ticker-track">{[0,1].map(n => <React.Fragment key={n}>{["FLUTTER","KOTLIN","MOBILE PRODUCTS","BLE / UWB","NATIVE INTEGRATION","PAYMENT SYSTEMS"].map((x,i)=><span key={`${n}-${i}`}>{x}<b>✳</b></span>)}</React.Fragment>)}</div></section>

        <section className="work section-wrap" id="work">
          <div className="section-heading"><div><p className="overline"><span className="section-no">01 /</span> SELECTED WORK</p><h2>Proof is in<br/><em>the product.</em></h2></div><p className="section-intro">A selection of mobile products and engineering work across commerce, connected spaces, events and logistics.</p></div>
          <div className="filter-row">{filters.map(f=><button key={f} className={activeFilter===f?"filter active":"filter"} onClick={()=>setActiveFilter(f)}>{f}<span>{f==="All work"?"08":f==="Commerce"?"03":f==="Connected tech"?"01":f==="Payments"?"02":"02"}</span></button>)}</div>
          <div className="project-grid">{filtered.map((p,i)=><article className={`project-card ${p.accent}`} key={p.id}>
            <div className="project-visual"><div className="project-visual-top"><span>CASE STUDY / {p.id}</span><span>{p.detail}</span></div>{p.screenshots ? <div className="project-screenshots">{p.screenshots.map((s,si)=><img key={si} src={s} alt={`${p.name} screenshot ${si+1}`}/>)}</div> : <div className="project-symbol"><span>{p.mark}</span><div className="symbol-ring ring-a"/><div className="symbol-ring ring-b"/><div className="symbol-orbit"/></div>}<div className="project-visual-bottom"><span>{p.type}</span><span>0{i+1} — 08</span></div></div>
            <div className="project-info"><div><span className="project-type">{p.type}</span><h3>{p.name}</h3></div><p>{p.description}</p><div className="tag-list">{p.stack.map(s=><span key={s}>{s}</span>)}</div>{(p.links.ios || p.links.android) && <div className="project-links">{p.links.ios && <a href={p.links.ios} target="_blank" rel="noreferrer">App Store <ExternalLink size={13}/></a>}{p.links.android && <a href={p.links.android} target="_blank" rel="noreferrer">Google Play <ExternalLink size={13}/></a>}</div>}{p.internal && <div className="project-links"><span className="internal-badge">INTERNAL TOOL · NOT PUBLICLY AVAILABLE</span></div>}</div>
          </article>)}</div>
          <p className="work-note">Selected work from products I’ve contributed to and helped build. Project details can be expanded with individual case studies.</p>
        </section>

        <section className="manifesto">
          <div className="manifesto-inner"><p className="overline"><span className="section-no">02 /</span> HOW I THINK ABOUT ENGINEERING</p><h2>Not just screens.<br/><span>Systems that work</span><br/>in the real world<span className="lime">.</span></h2><div className="manifesto-bottom"><p>Great mobile experiences happen when product thinking meets engineering fundamentals. I enjoy working across the boundary between the app, the operating system and the hardware around it.</p><span>CRAFT / CLARITY / RELIABILITY</span></div><div className="manifesto-stamp">BUILD<br/>WITH<br/>INTENT<span>✳</span></div></div>
        </section>

        <section className="expertise section-wrap" id="expertise">
          <div className="section-heading"><div><p className="overline"><span className="section-no">03 /</span> ENGINEERING TOOLKIT</p><h2>Depth beyond<br/><em>the interface.</em></h2></div><p className="section-intro">I move comfortably between product UI, application architecture and the native capabilities that make mobile products useful.</p></div>
          <div className="capability-grid">{capabilities.map((c,i)=><article className="capability" key={c.title}><div className="cap-top"><span>0{i+1}</span><c.icon size={21} strokeWidth={1.5}/></div><h3>{c.title}</h3><p>{c.text}</p><ArrowUpRight className="cap-arrow" size={18}/></article>)}</div>
          <div className="stack-panel"><div className="stack-heading"><span>TOOLS OF THE TRADE</span><span>NOT A CHECKLIST — A WORKING TOOLKIT</span></div><div className="stack-tags">{skills.map(s=><span key={s}>{s}</span>)}</div></div>
        </section>

        <section className="about section-wrap" id="about">
          <div className="about-left"><p className="overline"><span className="section-no">04 /</span> A LITTLE ABOUT ME</p><h2>Engineer by<br/><em>mindset.</em><br/>Builder by<br/>nature<span className="lime">.</span></h2><div className="about-mark">SZ<span>✳</span></div></div>
          <div className="about-right"><p className="about-lede">I’m a mobile engineer with 7+ years of experience building and shipping applications across commerce, logistics, events and connected-device products.</p><p>My work spans Flutter and native Android development, with hands-on experience integrating SDKs, building reusable private Flutter plugins and connecting apps to BLE/UWB devices and payment terminals.</p><p>I care about the details users feel — responsiveness, reliability, clear interactions — and the engineering decisions that make those details possible.</p>
            <div className="timeline"><div className="timeline-item"><span className="timeline-date">MAY 2025 — PRESENT</span><div><h3>Software Developer · CoreNet Technologies</h3><p>POS features connecting hardware SDKs for printers, scanners and payment terminals — keeping billing, checkout and stock in sync in real time. Dubai, UAE.</p></div></div><div className="timeline-item"><span className="timeline-date">AUG 2023 — APR 2025</span><div><h3>Software Engineer · Shubbak Technologies</h3><p>Led full mobile app builds end-to-end: technical planning, API integrations, designer collaboration and performance-focused code reviews. Dubai, UAE.</p></div></div><div className="timeline-item"><span className="timeline-date">JUN 2021 — APR 2023</span><div><h3>Software Engineer · Pinmicro India</h3><p>End-to-end Flutter development across dSense, EventPlus and AssistPlus — BLE/UWB indoor positioning, live video and maps. Kerala, India.</p></div></div><div className="timeline-item"><span className="timeline-date">AUG 2020 — APR 2021</span><div><h3>Flutter Developer · RBNSoft Technologies</h3><p>Sole Flutter developer on WashNFold — real-time delivery tracking, maps and full payment flow. Kerala, India.</p></div></div><div className="timeline-item"><span className="timeline-date">2018 — 2020</span><div><h3>Earlier roles · Android & Flutter</h3><p>Junior Android developer and Flutter trainee roles in Kerala and UAE, building a foundation in mobile development and Firebase-backed applications.</p></div></div></div>
          </div>
        </section>

        <section className="contact" id="contact"><div className="contact-inner"><p className="overline"><span className="section-no">05 /</span> HAVE A GOOD PROBLEM?</p><h2>Let’s make<br/><em>something</em><br/>matter<span className="lime">.</span></h2><div className="contact-bottom"><p>Open to senior mobile engineering roles, product collaborations and thoughtful freelance projects.</p><a className="contact-link" href="mailto:zaymsayd@gmail.com">Start a conversation <ArrowUpRight size={20}/></a></div><div className="contact-orbit"><div/><div/><div/></div></div></section>
      </main>

      <footer className="footer"><a className="brand" href="#top"><svg className="brand-mark" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="32" height="32" rx="5" fill="#0d0f0e"/>
              <defs>
                <filter id="gz" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="0.9" result="b"/>
                  <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>
              <g filter="url(#gz)">
                <path d="M 2,5 H 21 L 2,24 H 21"
                  stroke="#c7f36b" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"/>
                <path d="M 9,10 H 28 L 9,29 H 28"
                  stroke="#c7f36b" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" opacity="0.6"/>
                <line x1="2"  y1="5"  x2="9"  y2="10" stroke="#c7f36b" strokeWidth="1.4" opacity="0.45"/>
                <line x1="21" y1="5"  x2="28" y2="10" stroke="#c7f36b" strokeWidth="1.4" opacity="0.45"/>
                <line x1="2"  y1="24" x2="9"  y2="29" stroke="#c7f36b" strokeWidth="1.4" opacity="0.45"/>
                <line x1="21" y1="24" x2="28" y2="29" stroke="#c7f36b" strokeWidth="1.4" opacity="0.45"/>
              </g>
            </svg><span>SAYED ZAEEM</span></a><span>DESIGNED TO MOVE. BUILT TO LAST.</span><div className="socials"><a href="https://github.com/zaymsayd" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a><a href="https://www.linkedin.com/in/zaymsayd/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a><a href="mailto:zaymsayd@gmail.com" aria-label="Email"><Mail size={17}/></a></div><span className="copyright">© 2026 SAYED ZAEEM</span></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);