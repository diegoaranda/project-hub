import { Sidebar } from "@/components/sidebar";
import { MobileNav } from "@/components/mobile-nav";
export function AppShell({children}:{children:React.ReactNode}){return <><Sidebar/><header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-[#e7ebe8] bg-white/90 px-5 backdrop-blur-xl lg:hidden"><span className="font-semibold">Project Hub</span><MobileNav/></header><main className="min-h-screen lg:pl-[264px]">{children}</main></>}
