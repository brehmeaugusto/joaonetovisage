import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  Eye,
  Instagram,
  Lock,
  MapPin,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Check,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function JoaoNetoLanding() {
  const whatsappMessage = encodeURIComponent(
    "Olá, gostaria de agendar um horário com o JoãoNeto | Visagista!"
  );
  const whatsappNumber = "556332177937"; // Substitua pelo número real
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main id="topo" className="overflow-x-clip">
      <Header />

      {/* ================= HERO ================= */}
      <section className="relative isolate overflow-hidden bg-brand-black text-brand-ivory">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(55%_50%_at_78%_42%,rgba(165,154,147,0.16),transparent_70%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-brand-black to-transparent" />

        <div className="mx-auto grid min-h-[100svh] max-w-7xl items-center gap-16 px-6 pb-24 pt-40 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:pb-20 lg:pt-32">
          <div className="lg:col-span-7">
            <p
              className={`${eyebrow} hero-in mb-8 text-brand-silver`}
              style={{ ["--d" as string]: "100ms" }}
            >
              Studio de imagem masculina · Palmas, TO
            </p>
            <h1
              className="hero-in font-display text-[clamp(3.4rem,8.4vw,7.6rem)] font-light leading-[0.94] tracking-tight"
              style={{ ["--d" as string]: "250ms" }}
            >
              Sua imagem
              <br />
              <em className="font-light italic text-brand-taupe">fala</em> por você.
            </h1>
            <p
              className="hero-in mt-9 max-w-md text-base font-normal leading-relaxed text-brand-ivory/90 md:text-lg"
              style={{ ["--d" as string]: "450ms" }}
            >
              A aparência comunica cuidado e intenção antes mesmo da primeira
              palavra. No Conciso, cada detalhe trabalha a seu favor.
            </p>
            <div
              className="hero-in mt-12 flex flex-col gap-4 sm:flex-row"
              style={{ ["--d" as string]: "600ms" }}
            >
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={btnPrimary}
              >
                Agendar pelo WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </a>
              <Link href="#espaco" className={btnGhost}>
                Conhecer o estúdio
              </Link>
            </div>
          </div>

          <div
            className="hero-in relative mx-auto w-full max-w-[26rem] lg:col-span-5 lg:max-w-none lg:pl-10"
            style={{ ["--d" as string]: "400ms" }}
          >
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-3 translate-x-5 translate-y-5 rounded-t-full border border-brand-taupe/40" />
              <div className="relative aspect-[3/4.2] overflow-hidden rounded-t-full bg-brand-graphite">
                <Image
                  src="/conciso/recepcao.webp"
                  alt="Recepção do Conciso com balcão de madeira ripada, prateleiras iluminadas e pé-direito duplo"
                  fill
                  priority
                  sizes="(min-width: 1024px) 36vw, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-10 -left-6 aspect-[3/4] w-32 overflow-hidden rounded-t-full border-[6px] border-brand-black bg-brand-graphite sm:-left-14 sm:w-44">
                <Image
                  src="/conciso/sala-espelho.webp"
                  alt="Sala privativa com espelho em arco iluminado"
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex">
          <span className="text-[0.62rem] uppercase tracking-[0.4em] text-brand-taupe">
            Role
          </span>
          <span className="h-10 w-px bg-gradient-to-b from-brand-taupe to-transparent" />
        </div>
      </section>

      {/* ================= FAIXA ================= */}
      <div
        aria-hidden="true"
        className="overflow-hidden border-y border-brand-ivory/10 bg-brand-black py-6"
      >
        <div className="marquee-track">
          {[0, 1].map((n) => (
            <div key={n} className="flex shrink-0 items-center">
              {marquee.map((item) => (
                <span
                  key={`${n}-${item}`}
                  className="flex items-center font-display text-2xl font-light italic text-brand-ivory/90 md:text-3xl"
                >
                  <span className="px-8">{item}</span>
                  <span className="h-1.5 w-1.5 rotate-45 bg-brand-taupe" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ================= FILOSOFIA ================= */}
      <section
        id="filosofia"
        className="scroll-mt-20 bg-brand-ivory py-28 text-brand-black md:py-40"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-12 lg:px-10">
          <Reveal className="relative lg:col-span-6">
            <div className="relative mb-16 aspect-[4/5] w-[80%] overflow-hidden rounded-t-full bg-brand-silver">
              <Image
                src="/conciso/espaco-lustre.webp"
                alt="Escada de mármore, parede de pedra e lustre de cristal no Conciso"
                fill
                sizes="(min-width: 1024px) 38vw, 80vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 aspect-[3/4] w-[46%] overflow-hidden border-[10px] border-brand-ivory bg-brand-silver sm:right-4">
              <Image
                src="/conciso/fachada.webp"
                alt="Fachada de vidro com o logotipo do Conciso"
                fill
                sizes="(min-width: 1024px) 18vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-6 lg:pl-10">
            <Reveal>
              <p className={`${eyebrow} mb-6 text-brand-graphite`}>
                Presença com propósito
              </p>
              <h2 className="font-display text-5xl font-light leading-[1.02] md:text-7xl">
                Um visual que
                <br />
                <em className="italic">representa você.</em>
              </h2>
              <div className="mt-10 max-w-lg space-y-6 text-pretty text-base font-normal leading-relaxed text-brand-graphite md:text-lg">
                <p>
                  O nosso trabalho começa entendendo o que combina com cada
                  cliente: o seu estilo, a sua rotina e a imagem que você quer
                  transmitir.
                </p>
                <p>
                  Aqui, corte, barba e consultoria se encontram para construir
                  uma presença segura, atual e fiel a quem você é.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-10 border-t border-brand-black/15 pt-10 sm:grid-cols-3">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 120}>
                  <p.icon className="mb-4 h-5 w-5 text-brand-black" strokeWidth={1.4} />
                  <h3 className="font-display text-2xl">{p.title}</h3>
                  <p className="mt-2 text-[0.95rem] font-normal leading-relaxed text-brand-graphite">
                    {p.text}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVIÇOS ================= */}
      <section
        id="servicos"
        className="scroll-mt-20 bg-brand-black py-28 text-brand-ivory md:py-40"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="mb-16 max-w-2xl md:mb-24">
            <p className={`${eyebrow} mb-6 text-brand-silver`}>Serviços</p>
            <h2 className="font-display text-5xl font-light leading-[1.02] md:text-7xl">
              Do corte à consultoria,
              <br />
              <em className="italic text-brand-taupe">cada detalhe importa.</em>
            </h2>
          </Reveal>

          <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
            <Reveal className="hidden lg:col-span-4 lg:block">
              <div className="sticky top-32">
                <div className="relative aspect-[9/14] overflow-hidden rounded-t-full bg-brand-graphite">
                  <Image
                    src="/conciso/sala-armario.webp"
                    alt="Cadeira de barbeiro e armário de madeira em sala privativa"
                    fill
                    sizes="30vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>

            <div className="lg:col-span-8">
              <ul className="divide-y divide-brand-ivory/15 border-y border-brand-ivory/15">
                {services.map((s, i) => (
                  <li key={s.title}>
                    <Reveal delay={i * 60}>
                      <a
                        href={SITE.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group grid grid-cols-[3rem_1fr] gap-x-4 py-8 transition-colors md:py-10 xl:grid-cols-[3.5rem_1fr_1fr] xl:items-baseline xl:gap-x-8"
                      >
                        <span className="font-display text-xl text-brand-taupe">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-display text-3xl font-light transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                          {s.title}
                        </h3>
                        <p className="col-start-2 mt-3 max-w-sm text-[0.95rem] font-normal leading-relaxed text-brand-ivory/85 transition-colors group-hover:text-brand-ivory xl:col-start-3 xl:mt-0">
                          {s.text}
                        </p>
                      </a>
                    </Reveal>
                  </li>
                ))}
              </ul>
              <Reveal className="mt-12">
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnGhost}
                >
                  Falar com o estúdio
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ================= O ESPAÇO ================= */}
      <section
        id="espaco"
        className="scroll-mt-20 bg-brand-graphite py-28 text-brand-ivory md:py-40"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="mb-16 grid gap-8 md:mb-20 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className={`${eyebrow} mb-6 text-brand-silver`}>O espaço</p>
              <h2 className="font-display text-5xl font-light leading-[1.02] md:text-7xl">
                Privacidade
                <br />
                <em className="italic text-brand-taupe">e conforto.</em>
              </h2>
            </div>
            <p className="max-w-md text-base font-normal leading-relaxed text-brand-ivory/90 md:text-lg lg:col-span-5 lg:justify-self-end">
              Um ambiente profissional, com salas privativas, pensado para o seu
              conforto e para um atendimento atento a cada detalhe.
            </p>
          </Reveal>

          <Reveal>
            <Gallery images={gallery} />
          </Reveal>
        </div>
      </section>

      {/* ================= COMO FUNCIONA ================= */}
      <section className="bg-brand-ivory py-28 text-brand-black md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="mb-16 md:mb-20">
            <p className={`${eyebrow} mb-6 text-brand-graphite`}>Próximos passos</p>
            <h2 className="font-display text-5xl font-light leading-[1.02] md:text-6xl">
              Simples como <em className="italic">deve ser.</em>
            </h2>
          </Reveal>
          <div className="grid gap-12 md:grid-cols-3 md:gap-10">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 130}>
                <div className="border-t border-brand-black/20 pt-8">
                  <span className="font-display text-7xl font-light italic text-brand-taupe">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-3xl leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-4 max-w-xs text-[0.95rem] font-normal leading-relaxed text-brand-graphite">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16">
            <p className="inline-flex items-center gap-3 border border-brand-black/20 px-5 py-3 text-[0.68rem] uppercase tracking-[0.26em] text-brand-graphite">
              <span className="h-1.5 w-1.5 rotate-45 bg-brand-black" />
              Em breve: aplicativo próprio de agendamento
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= CONTATO ================= */}
      <section
        id="contato"
        className="relative scroll-mt-20 overflow-hidden bg-brand-black py-28 text-brand-ivory md:py-40"
      >
        <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_20%_30%,rgba(165,154,147,0.12),transparent_70%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:gap-10 lg:px-10">
          <Reveal className="lg:col-span-6">
            <Image
              src="/conciso/conciso-selo-marfim.svg"
              alt="Selo do Conciso — Studio de Imagem Masculina, Palmas, Tocantins"
              width={130}
              height={163}
              className="mb-10 h-32 w-auto"
            />
            <h2 className="font-display text-5xl font-light leading-[1.02] md:text-7xl">
              Cuide da
              <br />
              <em className="italic text-brand-taupe">sua imagem.</em>
            </h2>
            <p className="mt-8 max-w-md text-base font-normal leading-relaxed text-brand-ivory/90 md:text-lg">
              Fale com o estúdio pelo WhatsApp para agendar o seu horário ou
              tirar dúvidas sobre os serviços.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <h3 className="text-3xl font-bold text-premium-black mb-12">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-start space-x-4 group cursor-pointer hover:bg-premium-gold/5 p-4 rounded-2xl transition-all duration-300 min-h-[100px]">
                    <div className="w-14 h-14 bg-premium-gold/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Phone className="h-6 w-6 text-premium-gold" />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      <p className="font-semibold text-premium-black text-lg mb-1">
                        WhatsApp
                      </p>
                      <p className="text-gray-600 mb-1">+55 63 98437-6983</p>
                      <p className="text-premium-gold text-sm font-medium">
                        Clique para conversar
                      </p>
                    </div>
                  </div>
                </Link>

                <Link
                  href="https://www.instagram.com/joaonetovisage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 border-b border-brand-taupe pb-1 text-[0.7rem] font-medium uppercase tracking-[0.24em] text-brand-ivory transition-colors hover:text-brand-taupe"
                >
                  Abrir no Maps
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= RODAPÉ ================= */}
      <footer className="border-t border-brand-ivory/10 bg-brand-black py-16 text-brand-ivory">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
            <div>
              <Image
                src="/conciso/conciso-horizontal-claro.svg"
                alt="Conciso — Studio de Imagem Masculina"
                width={214}
                height={96}
                className="h-20 w-auto"
              />
              <p className="mt-6 font-display text-2xl font-light italic text-brand-taupe">
                {SITE.tagline}
              </p>
            </div>

            <nav aria-label="Rodapé" className="flex flex-col gap-3">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-brand-ivory/90 transition-colors hover:text-brand-ivory"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="space-y-1 text-sm font-normal leading-relaxed text-brand-ivory/85">
              {SITE.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <div className="flex gap-5 pt-4">
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram do Conciso"
                  className="text-brand-ivory transition-colors hover:text-brand-taupe"
                >
                  <Instagram className="h-5 w-5" strokeWidth={1.5} />
                </a>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp do Conciso"
                  className="text-brand-ivory transition-colors hover:text-brand-taupe"
                >
                  <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-brand-ivory/10 pt-8 text-[0.68rem] uppercase tracking-[0.24em] text-brand-silver md:flex-row md:justify-between">
            <p>© 2026 {SITE.fullName}</p>
            <p>Palmas · Tocantins</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp flutuante */}
      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar pelo WhatsApp"
        className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-brand-ivory text-brand-black shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:scale-110 md:bottom-8 md:right-8"
      >
        <MessageCircle className="h-6 w-6" strokeWidth={1.6} />
      </a>
    </main>
  )
}
