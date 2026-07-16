import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, ChevronRight, FileCheck2 } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { PrintButton } from "@/components/print-button";
import { documents, type DocumentSlug } from "@/content/documents";
import { getDocument } from "@/lib/documents";
import { ActiveToc, ReadingProgress } from "@/components/reading-progress";

export function generateStaticParams(){return documents.map(({slug})=>({slug}));}

export default async function DocumentPage({params}:{params:Promise<{slug:string}>}){
 const{slug}=await params;
 const doc=await getDocument(slug as DocumentSlug);
 if(!doc)notFound();
 const quick=[
  {label:"¿Qué es?",value:doc.meta.summary.what},
  {label:"¿Dónde estamos?",value:doc.meta.summary.where},
  {label:"¿Qué falta?",value:doc.meta.summary.missing},
  {label:"¿Quién debe actuar?",value:doc.meta.summary.who},
  {label:"¿Qué pasa después?",value:doc.meta.summary.next},
 ];
 return <AppShell><ReadingProgress/><div className="document-page">
  <nav className="breadcrumb"><Link href="/">Dashboard</Link><ChevronRight/><span>Documentos</span><ChevronRight/><strong>{doc.meta.title}</strong></nav>
  <header className="document-header"><Link href="/" className="back-link"><ArrowLeft/>Volver al dashboard</Link><div className="document-title-row"><div><div className="document-meta"><span><FileCheck2/>{doc.meta.type}</span><span className="document-status"><i/>{doc.meta.status}</span></div><h1>{doc.meta.title}</h1><p>{doc.meta.description}</p><span className="reading-time"><Clock/>{doc.readingTime} min de lectura</span></div><PrintButton/></div></header>
  <section className="thirty-second-summary" aria-labelledby="quick-summary-title"><div className="quick-summary-heading"><span>Resumen rápido</span><div><h2 id="quick-summary-title">Resumen Ejecutivo</h2><p>Si solo lees una sección, lee esta.</p></div></div><dl>{quick.map((item,index)=><div className={index===1||index===2||index===4?"summary-priority":undefined} key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl></section>
  <div className="document-layout"><MarkdownRenderer content={doc.content}/><aside className="toc"><p>En este documento</p><ActiveToc headings={doc.headings}/></aside></div>
  <nav className="document-pagination">{doc.previous?<Link href={`/documentos/${doc.previous.slug}`}><span><ArrowLeft/>Anterior</span><strong>{doc.previous.title}</strong></Link>:<span/>}{doc.next?<Link href={`/documentos/${doc.next.slug}`} className="next"><span>Siguiente<ArrowRight/></span><strong>{doc.next.title}</strong></Link>:<span/>}</nav>
 </div></AppShell>;
}
