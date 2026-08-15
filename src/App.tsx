import { useEffect, useMemo, useState } from "react";
import {
  ADDRESS,
  ADDRESS_FULL,
  BRAND,
  CITY,
  DEFAULT_WA,
  MAP_EMBED,
  MAP_LINK,
  PHONE_DISPLAY,
  PHONE_TEL,
  waLink,
} from "./contact";

const services = [
  {
    id: "solar",
    title: "Energía solar",
    text: "Paneles para bajar la luz y calentadores para el agua. Menos gas, menos recibo de CFE.",
    image: "/images/tejado.jpg",
    need: "Energía solar (paneles o calentador)",
    wa: "Hola, me interesa energía solar: paneles o calentador de agua. ¿Pueden visitarme para una cotización?",
  },
  {
    id: "seguridad",
    title: "Seguridad",
    text: "Cámaras, alarmas y control de quién entra a tu casa o negocio. Lo ves desde el celular.",
    image: "/images/seguridad.jpg",
    need: "Seguridad (cámaras o alarma)",
    wa: "Hola, me interesa un sistema de seguridad: cámaras o alarma. ¿Pueden visitarme para una cotización?",
  },
  {
    id: "auto",
    title: "Automatización",
    text: "Portón, luces y chapas que se abren con el teléfono. Más cómodo, más seguro.",
    image: "/images/auto.jpg",
    need: "Automatización de casa o negocio",
    wa: "Hola, me interesa automatización: portón, luces o chapas. ¿Pueden visitarme para una cotización?",
  },
  {
    id: "cuidado",
    title: "Instalación y cuidado",
    text: "Lo instalamos, lo revisamos y te dejamos el contacto. Si algo falla, nos escribes.",
    image: "/images/casa.jpg",
    need: "Instalación o mantenimiento",
    wa: "Hola, necesito instalación o mantenimiento de equipo. ¿Pueden visitarme?",
  },
];

const steps = [
  {
    n: "01",
    title: "Nos escribes",
    text: "WhatsApp o llamada al 418 103 4746. Nos dices si es sol, seguridad o automatización.",
  },
  {
    n: "02",
    title: "Vamos a tu casa",
    text: "O nos ves en Yuriria 24. Revisamos el lugar y te decimos qué te conviene, en claro.",
  },
  {
    n: "03",
    title: "Lo dejamos trabajando",
    text: "Instalamos, te enseñamos a usarlo y te quedas con nuestro número para lo que siga.",
  },
];

const faqs = [
  {
    q: "¿Van a domicilio?",
    a: "Sí. Agendamos visita o nos ves en el local de Yuriria 24.",
  },
  {
    q: "¿Tengo que romper paredes?",
    a: "Casi nunca. Primero vemos el lugar y te decimos cómo se coloca, sin sorpresas.",
  },
  {
    q: "¿Qué instalan?",
    a: "Energía solar, cámaras y alarmas, y automatización de portón, luces o chapas. También damos mantenimiento.",
  },
  {
    q: "¿Cómo los contacto más rápido?",
    a: "WhatsApp o una llamada al 418 103 4746. En el celular los dos botones quedan abajo de la página.",
  },
];

export default function App() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [need, setNeed] = useState(services[0].need);
  const [name, setName] = useState("");
  const [place, setPlace] = useState("Dolores Hidalgo");
  const [faq, setFaq] = useState<number | null>(0);

  useReveal();
  useParallax();

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      document.documentElement.style.setProperty("--p", String(p));
      setSolid(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const message = useMemo(() => {
    const selected = services.find((service) => service.need === need) ?? services[0];
    const who = name.trim();
    const where = place.trim();
    let text = selected.wa;
    if (who) text += ` Mi nombre es ${who}.`;
    if (where) text += ` Estoy en ${where}.`;
    return text;
  }, [need, name, place]);

  return (
    <>
      <div className="grain" />
      <div className="progress" />

      <header className={`nav ${solid ? "is-solid" : ""}`}>
        <a href="#inicio" className="flex items-center gap-3 text-sand no-underline">
          <img src="/logo.png" alt="Solar Security Automation" className="h-11 w-11 rounded-full" />
          <span className="leading-none">
            <strong className="block text-[0.95rem] tracking-[0.18em]">
              Solar Security Automation
            </strong>
            <small className="text-[0.68rem] tracking-[0.16em] text-sand/60 uppercase">
              Dolores Hidalgo
            </small>
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-[0.82rem] text-sand/80 md:flex">
          <a href="#servicios" className="text-inherit no-underline hover:text-sand">
            Servicios
          </a>
          <a href="#visita" className="text-inherit no-underline hover:text-sand">
            Cómo funciona
          </a>
          <a href="#contacto" className="text-inherit no-underline hover:text-sand">
            Contacto
          </a>
          <button className="btn btn-gold !py-2.5 !px-4" onClick={() => setOpen(true)}>
            Pedir visita
          </button>
        </nav>
      </header>

      <main>
        <Hero onQuote={() => setOpen(true)} />

        <div className="marquee">
          <div className="marquee-track">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex">
                {[
                  "Energía solar",
                  "Cámaras y alarmas",
                  "Automatización",
                  "Portones eléctricos",
                  "Calentadores",
                  "Instalación",
                  "Mantenimiento",
                  "Casa y negocio",
                ].map((item) => (
                  <span key={`${i}-${item}`}>
                    {item} ·
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section id="servicios" className="bg-paper px-5 py-24 text-ink md:px-10">
          <div className="mx-auto max-w-6xl">
            <p className="text-[0.72rem] tracking-[0.22em] text-mist uppercase" data-reveal>
              Lo que hacemos
            </p>
            <h2
              className="display mt-3 max-w-2xl text-4xl leading-[1.1] font-medium md:text-6xl"
              data-reveal
            >
              Sol, seguridad y automatización.
            </h2>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {services.map((service, index) => (
                <article
                  key={service.id}
                  className="service-card"
                  data-reveal
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <img src={service.image} alt="" />
                  <div className="shade" />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <p className="text-[0.7rem] tracking-[0.2em] text-sand/60 uppercase">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="display mt-2 text-3xl font-medium">{service.title}</h3>
                    <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-sand/80">
                      {service.text}
                    </p>
                    <button
                      className="btn btn-gold mt-6 !py-2.5 !px-4"
                      onClick={() => {
                        setNeed(service.need);
                        setOpen(true);
                      }}
                    >
                      Quiero esto
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative min-h-[88vh] overflow-hidden">
          <img
            src="/images/parroquia.jpg"
            alt="Parroquia de Dolores Hidalgo"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-night/90 via-night/55 to-night/20" />
          <div className="relative mx-auto flex min-h-[88vh] max-w-6xl items-end px-5 py-20 md:px-10">
            <div className="max-w-xl" data-reveal="left">
              <p className="text-[0.72rem] tracking-[0.22em] text-gold uppercase">
                Casa y negocio
              </p>
              <h2 className="display mt-4 text-4xl leading-[1.08] md:text-6xl">
                Un equipo para el techo, las cámaras y lo que se abre solo.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-sand/80">
                Nos escribes, te visitamos y lo dejamos funcionando. Sin rodeos.
              </p>
            </div>
          </div>
        </section>

        <section id="visita" className="bg-sand px-5 py-24 text-ink md:px-10">
          <div className="mx-auto grid max-w-6xl items-start gap-16 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-[0.72rem] tracking-[0.22em] text-mist uppercase" data-reveal>
                Así de fácil
              </p>
              <h2 className="display mt-3 text-4xl md:text-6xl" data-reveal>
                Tres pasos. Sin tecnicismos.
              </h2>
              <div className="steps mt-10">
                {steps.map((step) => (
                  <div className="step" key={step.n} data-reveal>
                    <span className="display text-3xl text-clay">{step.n}</span>
                    <div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <p className="mt-2 max-w-md leading-relaxed text-ink/70">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <aside
              className="overflow-hidden rounded-[28px] bg-night text-sand"
              data-reveal="scale"
            >
              <img src="/images/hero.jpg" alt="" className="h-56 w-full object-cover" />
              <div className="p-7">
                <p className="text-[0.72rem] tracking-[0.18em] text-gold uppercase">
                  {ADDRESS}
                </p>
                <p className="display mt-3 text-3xl leading-snug">
                  Te visitamos o nos ves en el local. Una visita para cotizar.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div>
                    <p className="display text-4xl">3</p>
                    <p className="mt-1 text-sm text-sand/60">sol, seguridad y automatización</p>
                  </div>
                  <div>
                    <p className="display text-4xl">1</p>
                    <p className="mt-1 text-sm text-sand/60">visita para cotizar en casa</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-paper px-5 py-24 text-ink md:px-10">
          <div className="mx-auto max-w-3xl">
            <h2 className="display text-4xl md:text-5xl" data-reveal>
              Preguntas que sí importan
            </h2>
            <div className="mt-10">
              {faqs.map((item, index) => {
                const on = faq === index;
                return (
                  <div className="faq-item py-5" key={item.q} data-reveal>
                    <button
                      className="flex w-full items-start justify-between gap-6 bg-transparent p-0 text-left text-lg font-semibold"
                      onClick={() => setFaq(on ? null : index)}
                    >
                      {item.q}
                      <span className="text-clay">{on ? "–" : "+"}</span>
                    </button>
                    {on && (
                      <p className="mt-3 max-w-2xl leading-relaxed text-ink/70">{item.a}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-night px-5 py-24 md:px-10">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
            <div data-reveal="left">
              <p className="text-[0.72rem] tracking-[0.22em] text-gold uppercase">
                Contacto directo
              </p>
              <h2 className="display mt-4 text-4xl leading-[1.08] md:text-6xl">
                Un toque y hablamos.
              </h2>
              <p className="mt-5 max-w-md text-lg text-sand/75">
                {ADDRESS_FULL}
              </p>
              <a
                href={`tel:${PHONE_TEL}`}
                className="display mt-8 block text-4xl text-sand no-underline md:text-6xl"
              >
                {PHONE_DISPLAY}
              </a>
              <div className="mt-8 flex flex-wrap gap-3">
        <a className="btn btn-gold" href={waLink(DEFAULT_WA)} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
                <a className="btn btn-ghost" href={`tel:${PHONE_TEL}`}>
                  Llamar ahora
                </a>
                <a className="btn btn-ghost" href={MAP_LINK}>
                  Cómo llegar
                </a>
              </div>
            </div>
            <div
              className="overflow-hidden rounded-[28px]"
              data-reveal="scale"
            >
              <iframe
                title={`Mapa de ${BRAND} en ${ADDRESS}`}
                className="h-[420px] w-full grayscale contrast-125"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={MAP_EMBED}
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-4 bg-[#0a0f14] px-5 py-10 pb-28 text-sm text-sand/50 md:flex-row md:items-center md:justify-between md:px-10 md:pb-10">
        <p>
          {BRAND} · {ADDRESS}
        </p>
        <p>Sol, seguridad y automatización en {CITY}.</p>
      </footer>

      <div className="dock md:hidden">
        <a className="btn btn-ghost !py-3" href={`tel:${PHONE_TEL}`}>
          Llamar
        </a>
        <a className="btn btn-gold !py-3" href={waLink(DEFAULT_WA)} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
      </div>

      <div
        className={`sheet ${open ? "is-open" : ""}`}
        role="dialog"
        aria-modal={open}
        aria-hidden={!open}
      >
        <button className="sheet-veil" type="button" aria-label="Cerrar" onClick={() => setOpen(false)} />
        <div
          className="sheet-panel"
          onClick={(event) => event.stopPropagation()}
          onPointerDown={(event) => event.stopPropagation()}
        >
          <div className="mb-8 flex items-start justify-between">
            <div>
              <p className="text-[0.72rem] tracking-[0.2em] text-mist uppercase">Visita</p>
              <h2 className="display mt-2 text-4xl">Cuéntanos qué necesitas</h2>
            </div>
            <button className="btn btn-ink !px-4 !py-2" type="button" onClick={() => setOpen(false)}>
              Cerrar
            </button>
          </div>
          <p className="text-sm text-ink/60">1 · Elige</p>
          <div className="mt-3 grid gap-2">
            {services.map((service) => (
              <button
                key={service.id}
                type="button"
                className={`choice ${need === service.need ? "is-on" : ""}`}
                onClick={() => setNeed(service.need)}
              >
                {service.title}
              </button>
            ))}
          </div>
          <p className="mt-8 text-sm text-ink/60">2 · Tus datos</p>
          <div className="mt-3 grid gap-3">
            <input
              className="field"
              placeholder="Tu nombre"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className="field"
              placeholder="Colonia o pueblo"
              value={place}
              onChange={(event) => setPlace(event.target.value)}
            />
          </div>
          <a
            className="btn btn-gold mt-8 w-full"
            href={waLink(message)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Enviar por WhatsApp
          </a>
          <p className="mt-4 text-center text-sm text-ink/50">
            Se abre WhatsApp con el mensaje listo. O llama al {PHONE_DISPLAY}.
          </p>
        </div>
      </div>
    </>
  );
}

function Hero({ onQuote }: { onQuote: () => void }) {
  return (
    <section id="inicio" className="relative min-h-[100svh] overflow-hidden">
      <div className="hero-media">
        <img src="/images/hero.jpg" alt="Instalación solar" />
        <div className="hero-veil" />
      </div>
      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-24 pt-32 md:px-10 md:pb-28">
        <p
          className="text-[0.72rem] tracking-[0.24em] text-gold uppercase"
          data-reveal
        >
          {CITY}
        </p>
        <h1
          className="display mt-4 max-w-4xl text-[3.15rem] leading-[0.95] font-medium md:text-[6.6rem]"
          data-reveal
        >
          Sol, seguridad y automatización.
          <em className="mt-2 block text-[0.62em] font-medium text-gold">
            Lo instalamos. Lo dejas funcionando.
          </em>
        </h1>
        <p
          className="mt-6 max-w-xl text-lg leading-relaxed text-sand/80 md:text-xl"
          data-reveal
        >
          Paneles, cámaras y control de tu casa o negocio. Un WhatsApp y vamos.
        </p>
        <div className="mt-9 flex flex-wrap gap-3" data-reveal>
          <button className="btn btn-gold" onClick={onQuote}>
            Pedir visita a domicilio
          </button>
          <a className="btn btn-ghost" href={waLink(DEFAULT_WA)} target="_blank" rel="noopener noreferrer">
            Escribir por WhatsApp
          </a>
        </div>
      </div>
      <div className="scroll-cue">
        Desliza
        <i />
      </div>
    </section>
  );
}

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function useParallax() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const onScroll = () => {
      const shift = Math.min(window.scrollY * 0.22, 140);
      document.documentElement.style.setProperty("--hero-shift", `${shift}px`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
