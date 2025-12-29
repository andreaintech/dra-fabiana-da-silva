import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dra. Fabiana Da Silva | Médico Cirujano",
  description:
    "Atención integral en medicina general con especial interés en oído, nariz y garganta en Valencia, Venezuela.",
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-brand-soft bg-white/80 backdrop-blur">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
              <div className="flex items-center gap-2">
                <Link href="/" className="flex-shrink-0">
                  <Image
                    src="/logo.svg"
                    alt="Dra. Fabiana Da Silva Logo"
                    width={36}
                    height={36}
                    className="transition-transform duration-300 hover:scale-110"
                  />
                </Link>
                <div className="flex flex-col">
                  <Link
                    href="/"
                    className="text-sm font-semibold hover:text-brand transition-colors"
                  >
                    Dra. Fabiana Da Silva
                  </Link>
                  <span className="text-xs text-slate-500">
                    Médico Cirujano · Valencia, VE
                  </span>
                </div>
              </div>
              <div className="hidden gap-6 text-sm md:flex">
                <a href="#sobre-mi" className="hover:text-brand transition-colors duration-300">
                  Sobre mí
                </a>
                <a href="#servicios" className="hover:text-brand transition-colors duration-300">
                  Servicios
                </a>
                <a href="#opiniones" className="hover:text-brand transition-colors duration-300">
                  Opiniones
                </a>
                <a href="#blog" className="hover:text-brand transition-colors duration-300">
                  Blog
                </a>
                <a href="#contacto" className="hover:text-brand font-semibold transition-colors duration-300">
                  Reservar cita
                </a>
              </div>
            </nav>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-brand-soft bg-white">
            <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-2 px-4 py-4 text-xs text-slate-500">
              <span>
                © {new Date().getFullYear()}{" "}
                <Link
                  href="/"
                  className="text-brand hover:underline"
                >
                  Dra. Fabiana Da Silva
                </Link>{" "}
                - Todos los derechos reservados.
              </span>
              <span>
                Sitio informativo. No sustituye una consulta médica presencial
                ni de urgencias.
              </span>
              <span>
                Made with love ♥ by{" "}
                <a
                  href="https://andreaintech.github.io/web/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand hover:underline"
                >
                  Andrea Da Silva
                </a>
              </span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
