import Link from "next/link";
import { CodeIcon } from "./icons/icon";
import ThemeSwitcher from "./ThemeSwitcher";

export function Header() {
  return (
    <header className="flex items-center py-6 px-4">
      <Link href="/" className="flex items-center justify-center" prefetch={false}>
        <CodeIcon className="h-6 w-6" />
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        <Link href="/" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Interviews
        </Link>
        <ThemeSwitcher />
      </nav>
    </header>
  )
}