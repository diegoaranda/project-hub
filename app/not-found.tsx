import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function NotFound(){return <main className="grid min-h-screen place-items-center p-6 text-center"><div><p className="text-sm text-[#68736d]">404</p><h1 className="mt-3 text-4xl font-semibold">Documento no encontrado</h1><Button asChild className="mt-8"><Link href="/">Volver al dashboard</Link></Button></div></main>}
