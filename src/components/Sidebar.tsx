'use client';

import Link from 'next/link';
import {
  File,
  Folders,
  MSquare,
  Settings,
  MessageSquareHeart,
  Plus,
  ChevronFirst,
  ChevronLast,
} from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

export function Sidebar() {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-10 flex-col border-r bg-background transition-all duration-300 sm:flex ${expanded ? 'w-auto' : 'w-16'}`}
    >
      <nav className="flex flex-col items-start gap-4 px-3 py-5">
        <div
          className={`row flex items-center justify-between ${expanded ? 'w-52 gap-3' : 'self-center'}`}
        >
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              expanded ? 'w-28' : 'w-0'
            }`}
            alt=""
          />
          <Button
            onClick={() => setExpanded((curr) => !curr)}
            className="flex h-9 w-9 items-center rounded-lg"
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
                className={`flex h-9 w-9 items-center gap-3 self-center rounded-lg bg-primary px-2 text-primary-foreground hover:scale-105 ${expanded ? 'w-full' : 'self-center'}`}
              >
                <Plus className="h-5 w-5" />
                <span className="sr-only">Criar Currículo</span>
                <span className={`${expanded ? 'block' : 'hidden'}`}>
                  Criar Currículo
                </span>
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
                className={`flex h-9 w-auto items-center gap-3 rounded-lg px-2 text-muted-foreground transition-colors hover:text-foreground ${expanded ? 'h-9 w-44' : 'self-center'}`}
              >
                <File className="h-5 w-5" />
                <span className="sr-only">Dashboard</span>
                <span className={`${expanded ? 'block' : 'hidden'}`}>
                  Dashboard
                </span>
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
                className={`flex h-9 w-auto items-center gap-3 rounded-lg px-2 text-muted-foreground transition-colors hover:text-foreground ${expanded ? 'h-9 w-52' : 'self-center'}`}
              >
                <MessageSquareHeart className="h-5 w-5" />
                <span className="sr-only">Análise Profissional</span>
                <span className={`${expanded ? 'block' : 'hidden'}`}>
                  Análise Profissional
                </span>
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
                className={`flex h-9 w-auto items-center gap-3 rounded-lg px-2 text-muted-foreground transition-colors hover:text-foreground ${expanded ? 'h-9 w-44' : 'self-center'}`}
              >
                <Folders className="h-5 w-5" />
                <span className="sr-only">Exemplos</span>
                <span className={`${expanded ? 'block' : 'hidden'}`}>
                  Exemplos
                </span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Exemplos</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
      <nav className="mt-auto flex flex-col items-start gap-4 px-3 sm:py-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className={`flex h-9 w-auto items-center gap-3 rounded-lg px-2 text-muted-foreground transition-colors hover:text-foreground ${expanded ? 'h-9 w-44' : 'self-center'}`}
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Configurações</span>
                <span className={`${expanded ? 'block' : 'hidden'}`}>
                  Configurações
                </span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Configurações</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  );
}
