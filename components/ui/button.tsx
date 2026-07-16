import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const buttonVariants = cva("inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800/30 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4",{variants:{variant:{default:"bg-[#0b5d42] text-white hover:bg-[#084a35] shadow-[0_6px_18px_rgba(11,93,66,.16)]",outline:"border border-[#dfe4e1] bg-white text-[#16201b] hover:bg-[#f5f7f6]",ghost:"text-[#4c5751] hover:bg-[#f2f5f3] hover:text-[#16201b]"},size:{default:"h-11 px-5",sm:"h-9 px-3.5",icon:"size-10"}},defaultVariants:{variant:"default",size:"default"}});
function Button({className,variant,size,asChild=false,...props}:React.ComponentProps<"button">&VariantProps<typeof buttonVariants>&{asChild?:boolean}){const Comp=asChild?Slot:"button";return <Comp className={cn(buttonVariants({variant,size,className}))}{...props}/>}
export {Button,buttonVariants};
