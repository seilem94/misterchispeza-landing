import ContactForm from "@/app/components/ContactForm";
import { Container, Section } from "@/app/components/ui";
import { Button } from "@/app/components/ui/Button";

export function CTAPaneles() {
  return (
    <Section className="py-16 text-white" variant="dark">
      <Container className="flex flex-col lg:flex-row items-center gap-12 py-16">
        <div className="w-full lg:w-1/2 mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-bold">
            ¿Listo para generar tu propia energía?
          </h2>
          <p className="mb-8 text-xl text-slate-300">
            Obtén una cotización personalizada sin compromiso
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              href="#contacto-paneles"
              size="lg"
              className="bg-amber-500 text-white hover:bg-amber-600"
            >
              Solicitar Cotización
            </Button>
            <Button
              href="tel:+56996774423"
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Llamar Ahora
            </Button>
          </div>
          <p className="mt-6 text-sm text-slate-400">
            • Respuesta en menos de 24 horas hábiles •
          </p>
        </div>

        {/* Formulario de contacto */}
        <section id="contacto-paneles">
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-white">
                Solicita tu Cotización
              </h2>
              <p className="text-slate-300">
                Completa el formulario y nos contactaremos contigo en menos de
                24 horas
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </Container>
    </Section>
  );
}
