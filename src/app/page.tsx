"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Zap, Factory, Store, Plug, Home, FileCheck2, Building2, Camera, Lightbulb, 
        Siren, Ruler, DraftingCompass, Sun, Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm"

// Nota: Este componente está diseñado para pegarse como app/page.tsx (Next.js App Router)
// o pages/index.tsx (Pages Router). Usa <img> estándar para que también funcione
// fuera de Next; si usas Next.js puedes remplazar <img> por <Image> fácilmente.

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className = "", children }) => (
  <section id={id} className={`w-full ${className}`}>
    {children}
  </section>
);

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ className = "", children }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ children, href = "#contacto" }) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 rounded-2xl bg-amber-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:translate-y-[-1px] hover:bg-amber-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-300"
  >
    {children}
    <ChevronRight className="h-5 w-5" />
  </a>
);

export default function LandingElectrico() {
  return (
    <main className="min-h-screen scroll-smooth font-sans text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500 text-white">
              <Zap className="h-5 w-5" />
            </span>
            <div className="text-left leading-tight">
              <div className="text-sm font-bold tracking-wide">Mr.Chispeza</div>
              <div className="text-[10px] uppercase text-slate-500">Servicios Eléctricos y Electrónicos</div>
            </div>
          </a>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#empresa" className="hover:text-amber-600">Compañía</a>
            <a href="#servicios" className="hover:text-amber-600">Servicios</a>
            <a href="#sectores" className="hover:text-amber-600">Sectores</a>
            <a href="#galeria" className="hover:text-amber-600">Imágenes</a>
            <a href="#testimonios" className="hover:text-amber-600">Testimonios</a>
          </nav>
          <div className="flex items-center gap-3">
            <CTAButton>Contáctenos</CTAButton>
          </div>
        </Container>
      </header>


      <Section id="inicio" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Mantenimiento eléctrico"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        <Container className="relative z-10 py-28 sm:py-36 lg:py-44 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-4xl font-bold sm:text-5xl lg:text-6xl">
            Soluciones <span className="text-amber-400">Eléctricas</span> <br />y
            <span className="text-amber-400"> Electrónicas</span>
          </motion.h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200">
            Para industrias, comercios y residenciales. <br /> Servicio preventivo y correctivo.
          </p>
          <div className="mt-8 flex gap-3">
            <CTAButton href="#empresa">Conózcanos</CTAButton>
            <a href="#contacto" className="inline-flex items-center rounded-2xl border border-white/40 px-6 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">Solicitar cotización</a>
          </div>
        </Container>
      </Section>

      {/* Empresa */}
      <Section id="empresa" className="relative bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-white">
        <Container className="py-20">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold sm:text-4xl">Somos expertos en Instalaciones Eléctricas</h2>
            <p className="mt-4 text-amber-100">
              Ingeniería y diseño de instalaciones; servicio preventivo y correctivo de instalaciones eléctricas, para que su energía opere eficientemente.
            </p>
            <div className="mt-6"><a href="#contacto" className="inline-block rounded-xl bg-white px-5 py-3 font-semibold text-amber-700 shadow-lg hover:translate-y-[-1px]">Contáctenos</a></div>
          </div>
        </Container>
        <div className="absolute inset-x-0 bottom-[-40px] h-16 bg-white [clip-path:polygon(0_0,100%_100%,0_100%)]" />
      </Section>

      {/* Servicios */}
      <Section id="servicios" className="bg-white">
        <Container className="py-20">
          <h3 className="text-center text-2xl font-bold sm:text-3xl">
            Servicios Eléctricos y Proyectos
          </h3>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Plug className="h-7 w-7" />,
                title: "Empalmes",
                desc: "Instalación y regularización del empalme eléctrico o conexión a la red para su nuevo medidor de luz. Gestionamos el proceso completo ante la compañía distribuidora."
              },
              {
                icon: <Home className="h-7 w-7" />,
                title: "Remodelación de instalaciones antiguas",
                desc: "Renovación completa y segura de instalaciones eléctricas antiguas. Cambiamos cableado, tableros y protecciones para evitar fallas y aumentar la capacidad de su hogar."
              },
              {
                icon: <FileCheck2 className="h-7 w-7" />,
                title: "Trámites SEC (TE1, TE4, TE6)",
                desc: "Gestión integral de trámites y declaraciones eléctricas ante la SEC, asegurando cumplimiento con las normas de seguridad eléctrica vigentes."
              },
              {
                icon: <Building2 className="h-7 w-7" />,
                title: "Trámites Compañía Eléctrica",
                desc: "Asesoría y gestión ante la compañía eléctrica: aumento de capacidad, cambios de medidor o tarifa y otros requerimientos administrativos."
              },
              {
                icon: <Camera className="h-7 w-7" />,
                title: "Cámaras de Seguridad",
                desc: "Suministro e instalación de cámaras CCTV e IP con configuración profesional y acceso remoto desde su móvil."
              },
              {
                icon: <Lightbulb className="h-7 w-7" />,
                title: "Instalaciones Varias (Enchufes, Lámparas)",
                desc: "Instalación y reparación de enchufes, interruptores, lámparas, puntos de luz y extractores en su propiedad."
              },
              {
                icon: <Siren className="h-7 w-7" />,
                title: "Emergencias 24/7",
                desc: "Servicio de electricista 24 horas para fallas urgentes, cortocircuitos o problemas con tableros eléctricos. (Consultar disponibilidad de técnico de turno)."
              },
              {
                icon: <Ruler className="h-7 w-7" />,
                title: "Proyectos desde Cero (Cabañas, Casas)",
                desc: "Instalaciones eléctricas completas para proyectos nuevos: casas, cabañas, quinchos o ampliaciones. Todo certificado y normado."
              },
              {
                icon: <DraftingCompass className="h-7 w-7" />,
                title: "Ingeniería y Diseño de Proyectos",
                desc: "Diseño técnico con cálculos de carga, diagramas unilineales y planos eléctricos detallados conforme a la normativa SEC."
              },
              {
                icon: <Zap className="h-7 w-7" />,
                title: "Cercos Eléctricos",
                desc: "Instalación y certificación de cercos eléctricos perimetrales de alta seguridad para viviendas y recintos industriales."
              },
              {
                icon: <Sun className="h-7 w-7" />,
                title: "Paneles Solares",
                desc: "Proyectos llave en mano de paneles solares para autoconsumo eléctrico en hogares y empresas. Energía limpia y ahorro garantizado."
              }
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group rounded-2xl border border-slate-200 p-6 shadow-sm transition hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                    {s.icon}
                  </div>
                  <h4 className="text-lg font-semibold">{s.title}</h4>
                </div>
                <p className="mt-3 text-slate-600">{s.desc}</p>
                <a
                  href="#contacto"
                  className="mt-4 inline-block text-sm font-semibold text-amber-700 hover:underline"
                >
                  Ver más
                </a>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>


      {/* Banner intermedio */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581092098605-866e33fdd931?q=80&w=1900&auto=format&fit=crop"
            alt="Profesionales eléctricos"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        <Container className="relative z-10 py-20 text-white">
          <h3 className="text-2xl font-bold sm:text-3xl">Somos los profesionales que necesita su proyecto</h3>
          <p className="mt-2 max-w-2xl text-slate-200">Seguridad, cumplimiento normativo y entrega a tiempo.</p>
          <div className="mt-6"><CTAButton href="#contacto">Solicitar cotización</CTAButton></div>
        </Container>
      </Section>

      {/* Sectores */}
      <Section id="sectores" className="bg-white">
        <Container className="py-20">
          <h3 className="text-center text-2xl font-bold sm:text-3xl">Soluciones eléctricas para diversos sectores</h3>
          <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
            {[{
              icon: <Home className="h-8 w-8" />, title: "Residenciales",
              desc: "Sistemas que soportan cargas de climatización, iluminación y necesidades especiales."
            },{
              icon: <Factory className="h-8 w-8" />, title: "Industriales",
              desc: "Sistemas eléctricos eficientes y mantenimiento adecuado para evitar paros en la producción."
            },{
              icon: <Store className="h-8 w-8" />, title: "Comercios",
              desc: "Diseño y ejecución que garantizan una experiencia confortable y segura."
            }].map((c, i)=> (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-4xl border border-slate-200 p-6 text-center shadow-xl"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">{c.icon}</div>
                <h4 className="text-lg font-semibold">{c.title}</h4>
                <p className="mt-2 text-slate-600">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Galería */}
      <Section id="galeria" className="bg-slate-50">
        <Container className="py-16">
          <h3 className="text-center text-2xl font-bold sm:text-3xl">Imágenes</h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1596495578065-8c2c2a1a4386?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop"].map((src, i)=> (
              <img key={i} src={src} alt={`galeria-${i}`} className="h-64 w-full rounded-2xl object-cover shadow" />
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Final */}
      <Section className="bg-white">
        <Container className="py-16 text-center">
          <h3 className="text-2xl font-bold sm:text-3xl">¿Listo para energizar su proyecto?</h3>
          <p className="mt-3 text-slate-600">Envíenos un mensaje y recibirá respuesta hoy mismo.</p>
          <div className="mt-6"><CTAButton href="#contacto">Contáctenos</CTAButton></div>
        </Container>
      </Section>

      {/* Contacto */}
      <Section id="contacto" className="bg-slate-900 text-slate-100">
        <Container className="grid gap-10 py-16 sm:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold sm:text-3xl">Contacto</h3>
            <p className="mt-2 text-slate-300">
              Cuéntanos de tu proyecto y agenda una visita técnica.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" aria-hidden /> +56 9 8677 4423</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" aria-hidden /> elielo.hhs@gmail.com</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" aria-hidden /> Valparaíso, Chile</li>
            </ul>
          </div>

          {/*Form*/}
          <ContactForm formId="mkgpzrpo" />
        </Container>
      </Section>


      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <Container className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500 text-white"><Zap className="h-5 w-5" /></span>
            <span className="text-sm font-semibold">Mr.Chispeza: Soluciones en Ingeniería & Mantenimiento Eléctrico</span>
          </div>
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Mr.Chispeza. Todos los derechos reservados.</p>
        </Container>
      </footer>
    </main>
  );
}
