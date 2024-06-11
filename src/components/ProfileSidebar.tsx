/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import {
  Settings2,
  LogOut,
  ChevronFirst,
  ChevronLast,
  User,
} from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

export function ProfileSidebar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside
      className={`fixed inset-y-0 right-0 z-10 flex-col border-l bg-background transition-all ease-in-out duration-500 sm:flex w-16 hover:w-[176px]`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <nav className="flex flex-col items-start gap-4 px-4 py-5">
        <div
          className={`flex flex-col items-center justify-between ${expanded ? 'w-36 gap-3' : 'gap-3 self-center'}`}
        >
          <img
            src="https://randomuser.me/api/portraits/women/51.jpg"
            className={`transition-all duration-500 ease-in-out w-16 ${expanded ? 'w-32' : 'w-16'} overflow-hidden rounded-full border-2`}
            alt=""
          />
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className={`flex h-9 w-9 items-center justify-start gap-3 self-center rounded-lg bg-primary px-2 text-primary-foreground ${expanded ? 'w-full' : 'self-center'} transition-all duration-500 ease-in-out`}
              >
                <User className="h-5 w-5" />
                <span className="sr-only">Ver Perfil</span>
                <span className={`${expanded ? 'block' : 'hidden'} truncate`}>
                  Ver Perfil
                </span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="left">Ver Perfil</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className={`flex h-9 w-9 items-center justify-start gap-3 self-center rounded-lg px-2 text-muted-foreground hover:text-foreground ${expanded ? 'w-full' : 'self-center'} transition-all duration-500 ease-in-out`}
              >
                <Settings2 className="h-5 w-5" />
                <span className="sr-only">Editar Perfil</span>
                <span className={`${expanded ? 'block' : 'hidden'} truncate`}>
                  Editar Perfil
                </span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="left">Editar Perfil</TooltipContent>
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
                <LogOut className="h-5 w-5 text-destructive" />
                <span className="sr-only">Sair</span>
                <span
                  className={`${expanded ? 'block text-destructive' : 'hidden'}`}
                >
                  Sair
                </span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="left">Sair</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  );
}
