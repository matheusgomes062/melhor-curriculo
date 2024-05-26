import Link from "next/link";
import {
  File,
  Folders,
  MSquare,
  Settings,
  MessageSquareHeart,
  Plus,
} from "lucide-react";

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex hover:w-56 transition-width duration-300">
      <nav className="flex flex-col items-start gap-4 px-3 sm:py-5">
        <Link
          href="#"
          className="group flex row h-9 w-19 shrink-0 items-center justify-between gap-2 rounded-full text-lg font-semibold text-secondary-foreground md:h-9 md:w-40"
        >
          <span className="sr-only">Melhor Currículo</span>
          <span className="">Melhor Currículo</span>
        </Link>
        <Link
          href="#"
          className="transition-all hover:scale-105 flex h-9 w-9 items-center gap-3 px-2 bg-primary rounded-lg text-primary-foreground md:h-9 md:w-44"
        >
          <Plus className="h-5 w-5" />
          <span className="sr-only">Criar Currículo</span>
          <span className="">Criar Currículo</span>
        </Link>
        <Link
          href="#"
          className="flex h-9 w-9 items-center gap-3 px-2 rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-9 md:w-44"
        >
          <File className="h-5 w-5" />
          <span className="sr-only">Dashboard</span>
          <span>Dashboard</span>
        </Link>
        <Link
          href="#"
          className="flex h-9 w-9 items-center gap-3 px-2 rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-9 md:w-52"
        >
          <MessageSquareHeart className="h-5 w-5" />
          <span className="sr-only">Análise Profissional</span>
          <span>Análise Profissional</span>
        </Link>
        <Link
          href="#"
          className="flex h-9 w-9 items-center gap-3 px-2 rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-9 md:w-44"
        >
          <Folders className="h-5 w-5" />
          <span className="sr-only">Exemplos</span>
          <span>Exemplos</span>
        </Link>
      </nav>
      <nav className="mt-auto flex flex-col items-start gap-4 px-3 sm:py-5">
        <Link
          href="#"
          className="flex h-9 w-9 items-center gap-3 px-2 rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-9 md:w-44"
        >
          <Settings className="h-5 w-5" />
          <span className="sr-only">Settings</span>
          <span>Settings</span>
        </Link>
      </nav>
    </aside>
  );
}
