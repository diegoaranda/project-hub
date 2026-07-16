import type { Metadata } from "next";
import "./globals.css";
import "./v2.css";
import "./overrides.css";
export const metadata:Metadata={title:{default:"Project Hub","template":"%s · Project Hub"},description:"Centro de Ejecución de Marketing — PROINED / Guayllabamba"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es" data-scroll-behavior="smooth"><body>{children}</body></html>}
