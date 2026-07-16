"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarContent } from "@/components/sidebar";
export function MobileNav(){return <Dialog.Root><Dialog.Trigger asChild><Button variant="outline" size="icon" aria-label="Abrir navegación"><Menu/></Button></Dialog.Trigger><Dialog.Portal><Dialog.Overlay className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"/><Dialog.Content className="fixed inset-y-0 left-0 z-50 w-[88vw] max-w-[320px] bg-white p-4 shadow-2xl"><Dialog.Title className="sr-only">Navegación</Dialog.Title><Dialog.Close asChild><Button variant="ghost" size="icon" className="absolute right-3 top-3" aria-label="Cerrar navegación"><X/></Button></Dialog.Close><SidebarContent mobile/></Dialog.Content></Dialog.Portal></Dialog.Root>}
