import Link from "next/link";
import { CodeIcon } from "./icons/icon";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center pt-6">
      <Link href="#" className="flex items-center justify-center" prefetch={false}>
        <CodeIcon className="h-6 w-6" />
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Questions
        </Link>
        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Technologies
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  )
}