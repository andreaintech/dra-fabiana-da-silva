import Image from "next/image";
import ScrollAnimation from "./components/ScrollAnimation";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 space-y-16">
      {/* HERO */}
      <section className="flex flex-col md:flex-row gap-8 items-start">
        {/* Text Content */}
        <div className="flex-1 flex flex-col">
          <p className="text-sm font-medium text-brand-dark mb-2">
            Médico Cirujano · Universidad de Carabobo
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold mb-3">
            Dra. Fabiana Da Silva
          </h1>
          <p className="text-base text-slate-600 mb-6 max-w-xl">
            Atención integral en medicina general con especial interés en
            problemas de oído, nariz y garganta. Escucha activa, explicaciones
            claras y acompañamiento cercano para ti y tu familia.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contacto"
              className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark transition-all duration-300 hover:shadow-md hover:scale-105"
            >
              Reservar cita presencial
            </a>
            <a
              href="#contacto"
              className="rounded-full border border-brand-soft bg-white px-5 py-2 text-sm font-semibold text-brand hover:bg-brand-soft/40 transition-all duration-300 hover:shadow-md hover:scale-105"
            >
              Consulta online
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-500">
            <span>Art. 8 (Médico Rural) · Municipio Valencia · Estado Carabobo · Venezuela</span>
          </div>
        </div>

        {/* Photo */}
        <div className="flex justify-center md:justify-end">
          <div className="relative h-80 w-80 md:h-96 md:w-96 overflow-hidden rounded-3xl border border-brand-soft bg-gradient-to-br from-brand-soft to-white shadow-md transition-all duration-500 hover:shadow-xl hover:scale-105">
            <Image
              src="/dra-fabiana-da-silva.jpg"
              alt="Dra. Fabiana Da Silva - Médico Cirujano"
              fill
              className="object-cover object-top transition-transform duration-500 hover:scale-110"
              priority
            />
          </div>
        </div>
      </section>

      {/* RESUMEN PROFESIONAL / REGISTRO / DIRECCIÓN */}
      <ScrollAnimation>
        <section
          id="sobre-mi"
          className="grid gap-6 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-3 transition-all duration-300 hover:shadow-md"
        >
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Información profesional</h2>
          <p className="text-sm text-slate-600">
            Médico Cirujano con experiencia en atención primaria y manejo de
            patología frecuente de oído, nariz y garganta, así como control de
            enfermedades crónicas.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <div>
            <p className="font-semibold text-slate-700">Núm. de colegiatura</p>
            <p className="text-slate-600">RIF: V-29670246-0</p>
            <p className="text-slate-600">MPPS: 176142</p>
          </div>
          <div>
            <p className="font-semibold text-slate-700">Especialidades</p>
            <p className="text-slate-600">
              Medicina general · Atención primaria · Problemas de oído, nariz y
              garganta
            </p>
          </div>
          <div>
            <p className="font-semibold text-slate-700">Idiomas</p>
            <p className="text-slate-600">Español · Inglés</p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <div>
            <p className="font-semibold text-slate-700">Dirección de consulta</p>
            <p className="text-slate-600">
              [Nombre del Centro / Consultorio]
              <br />
              [Calle, edificio, piso]
              <br />
              Valencia, Carabobo · Venezuela
            </p>
          </div>
          <div>
            <p className="font-semibold text-slate-700">Contacto</p>
            <p className="text-slate-600">
              Teléfono / WhatsApp:{" "}
              <a
                href="https://wa.me/584126476254"
                target="_blank"
                rel="noreferrer"
                className="text-brand hover:underline transition-colors duration-300"
              >
                +58 412 647 62 54
              </a>
              <br />
              Email:{" "}
              <a
                href="mailto:fabianamedicina.uc@gmail.com"
                className="text-brand hover:underline transition-colors duration-300"
              >
                fabianamedicina.uc@gmail.com
              </a>
              <br />
              <a
                href="mailto:fabianaidasilvap@gmail.com"
                className="text-brand hover:underline transition-colors duration-300"
              >
                fabianaidasilvap@gmail.com
              </a>
            </p>
          </div>
        </div>
        </section>
      </ScrollAnimation>

      {/* SERVICIOS Y TIPOS DE CONSULTA */}
      <ScrollAnimation delay={100}>
        <section id="servicios" className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-lg font-semibold">Servicios y tipos de consulta</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <h3 className="text-sm font-semibold text-slate-800 mb-2">
              Servicios principales
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Consulta de medicina general</li>
              <li>Control de enfermedades crónicas</li>
              <li>
                Valoración de síntomas de oído, nariz y garganta (dolor, zumbidos,
                congestión, ronquera)
              </li>
              <li>Certificados médicos (pre-empleo, deportivos, etc.)</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <h3 className="text-sm font-semibold text-slate-800 mb-2">
              Tipos de consulta
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <span className="font-medium text-slate-800">
                  Consulta presencial
                </span>
                <br />
                En consultorio en Valencia. Evaluación física completa y
                seguimiento.
              </li>
              <li>
                <span className="font-medium text-slate-800">
                  Consulta online (videoconsulta)
                </span>
                <br />
                Orientación médica a distancia para casos seleccionados, con
                informe por escrito.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <h3 className="text-sm font-semibold text-slate-800 mb-2">
              Servicios y precios (referencia)
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <span className="font-medium">Consulta presencial:</span> 30$ (USD)
              </li>
              <li>
                <span className="font-medium">Consulta online:</span> 20$ (USD)                
              </li>
              <li>
                <span className="font-medium">Certificados médicos:</span> desde
                10$ (USD)
              </li>
              <li className="text-xs text-slate-400">
                <span className="font-medium">(*) Precios en bolívares (VEF) a tasa BCV Euro</span>
                <br />
                <span className="font-medium">(*) Los precios pueden variar según el tipo de consulta y la
                complejidad del caso.</span>
              </li>
            </ul>
          </div>
        </div>
        </section>
      </ScrollAnimation>

      {/* ENFERMEDADES TRATADAS */}
      <ScrollAnimation delay={200}>
        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Principales motivos de consulta</h2>
          <div className="grid gap-3 text-sm text-slate-700 md:grid-cols-3">
            {[
              "Infecciones respiratorias y gripes",
              "Dolor de garganta y amigdalitis",
              "Otitis y dolor de oído",
              "Rinitis y sinusitis",
              "Cefalea y migraña",
              "Control de hipertensión y diabetes",
              "Chequeos preventivos",
              "Alergias respiratorias",
              "Trastornos del sueño leves",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-brand-soft bg-white px-3 py-2 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-brand"
              >
                {item}
              </div>
            ))}
          </div>
        </section>
      </ScrollAnimation>

      {/* OPINIONES */}
      <ScrollAnimation delay={100}>
        <section id="opiniones" className="space-y-4">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-lg font-semibold">Opiniones de pacientes</h2>
            <span className="text-xs text-slate-500">
              Algunos testimonios de mis pacientes
            </span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                name: "M.P.",
                text: "Muy dedicada, explica con calma y responde todas las dudas.",
              },
              {
                name: "J.R.",
                text: "Me sentí escuchado y comprendido. Excelente trato humano.",
              },
              {
                name: "L.G.",
                text: "Atención clara y profesional, la recomiendo totalmente.",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="rounded-2xl bg-white p-4 shadow-sm text-sm text-slate-700 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <p className="mb-3 italic">&ldquo;{review.text}&rdquo;</p>
                <p className="font-medium text-slate-900">{review.name}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollAnimation>

      {/* BLOG PREVIEW */}
      <ScrollAnimation delay={200}>
        <section id="blog" className="space-y-4">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-lg font-semibold">Artículos recientes</h2>
            <a href="/blog" className="text-xs font-medium text-brand transition-colors duration-300 hover:text-brand-dark hover:underline">
              Ver todos
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Cuándo una gripe necesita atención médica",
                tag: "Salud general",
              },
              {
                title: "5 signos de alarma en dolor de oído",
                tag: "Oído, nariz y garganta",
              },
              {
                title: "Cómo prepararte para una consulta online",
                tag: "Consulta online",
              },
            ].map((post) => (
              <article
                key={post.title}
                className="rounded-2xl bg-white p-4 shadow-sm text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <p className="text-xs font-medium text-brand mb-1">{post.tag}</p>
                <h3 className="font-semibold text-slate-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-500">
                  Próximamente podrás leer este artículo en el blog.
                </p>
              </article>
            ))}
          </div>
        </section>
      </ScrollAnimation>

      {/* CONTACTO / CTA CITA */}
      <ScrollAnimation delay={100}>
        <section
          id="contacto"
          className="rounded-2xl bg-gradient-to-r from-brand to-brand-accent p-[1px] shadow-md transition-all duration-300 hover:shadow-lg"
        >
          <div className="flex flex-col gap-4 rounded-2xl bg-white px-6 py-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900 mb-1">
                Reserva tu cita
              </h2>
              <p className="text-sm text-slate-600">
                Escríbeme para coordinar una consulta presencial u online. Te
                responderé lo antes posible.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm text-slate-700">
              <a
                href="https://wa.me/584126476254?text=Quiero%20agendar%20una%20cita%20presencial%20o%20online"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-brand px-5 py-2 text-center font-semibold text-white hover:bg-brand-dark transition-all duration-300 hover:shadow-md hover:scale-105"
              >
                WhatsApp
              </a>
              <div className="flex flex-col gap-1 text-center text-xs">
                <a
                  href="mailto:fabianamedicina.uc@gmail.com"
                  className="text-slate-500 underline hover:text-brand transition-colors duration-300"
                >
                  fabianamedicina.uc@gmail.com
                </a>
                <a
                  href="mailto:fabianaidasilvap@gmail.com"
                  className="text-slate-500 underline hover:text-brand transition-colors duration-300"
                >
                  fabianaidasilvap@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
}
