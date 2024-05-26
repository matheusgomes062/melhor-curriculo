"use client";

import Link from "next/link";
import {
  File,
  Folders,
  MSquare,
  Settings,
  MessageSquareHeart,
  Plus,
  ChevronFirst,
  ChevronLast,
} from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

export function Sidebar() {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-10 flex-col border-r bg-background sm:flex transition-all duration-300 ${expanded ? "w-50" : "w-16"}`}
    >
      <nav className="flex flex-col items-start gap-4 px-3 py-5">
        <div className={`flex row justify-between items-center px-2 ${expanded ? 'gap-3 w-full' : 'px-0'}`}>
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              expanded ? "w-28" : "w-0"
            }`}
            alt=""
          />
          <Button
            onClick={() => setExpanded((curr) => !curr)}
            className="flex items-center px-2 rounded-lg"
            variant="outline"
            size="icon"
            >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </Button>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className={`hover:scale-105 flex items-center self-center px-2 bg-primary rounded-lg text-primary-foreground h-9 w-9 ${expanded ? 'w-48 gap-3' : ''}`}
              >
                <Plus className="h-5 w-5" />
                <span className="sr-only">Criar Currículo</span>
                <span className={`${expanded ? "block" : "hidden"}`}>Criar Currículo</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Criar Currículo</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className={`flex h-9 w-9 items-center gap-3 px-2 rounded-lg text-muted-foreground transition-colors hover:text-foreground ${expanded ? 'h-9 w-44' : ''}`}
              >
                <File className="h-5 w-5" />
                <span className="sr-only">Dashboard</span>
                <span className={`${expanded ? "block" : "hidden"}`}>Dashboard</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Dashboard</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className={`flex h-9 w-9 items-center gap-3 px-2 rounded-lg text-muted-foreground transition-colors hover:text-foreground h-9 w-9 ${expanded ? 'h-9 w-52' : ''}`}
              >
                <MessageSquareHeart className="h-5 w-5" />
                <span className="sr-only">Análise Profissional</span>
                <span className={`${expanded ? "block" : "hidden"}`}>Análise Profissional</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Análise Profissional</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className={`flex h-9 w-9 items-center gap-3 px-2 rounded-lg text-muted-foreground transition-colors hover:text-foreground h-9 w-9 ${expanded ? 'h-9 w-44' : ''}`}
              >
                <Folders className="h-5 w-5" />
                <span className="sr-only">Exemplos</span>
                <span className={`${expanded ? "block" : "hidden"}`}>Exemplos</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Exemplos</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
      <nav className="mt-auto flex flex-col items-start gap-4 px-3 sm:py-5">
        <Link
          href="#"
          className={`flex h-9 w-9 items-center gap-3 px-2 rounded-lg text-muted-foreground transition-colors hover:text-foreground h-9 w-9 ${expanded ? 'h-9 w-44' : ''}`}
        >
          <Settings className="h-5 w-5" />
          <span className="sr-only">Settings</span>
          <span className={`${expanded ? "block" : "hidden"}`}>Settings</span>
        </Link>
      </nav>
    </aside>
  );
}
