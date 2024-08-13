import Link from "next/link";
import "../styles/globals.css";
import Image from "next/image";

export const metadata = {
  title: 'La Madriguera',
  description: 'El blog de un Conejo programador',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  const header = (
  <header>
    <div className="text-center bg-gray-700 p-8 my-6 rounded-md">
    <Link href="/">
    <Image src="/favicon.png" width={100} height={100} className="mx-auto"></Image>
     <h1 className="text-3xl font-bold text-white">La Madriguera</h1>
     </Link>
      <p className="text-slate-50">¡Bienvenido/a a la Madriguera!</p>
    </div>
  </header>
);

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-6 py-6 text-center text-slate-400">
        <p>©2024 — Conejo de la Siniestra. Todos los derechos reservados.</p>
      </div>
    </footer>
  );

  return (
    <html lang="es-ES">
      <body>
        <div className="mx-auto max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  )
}
