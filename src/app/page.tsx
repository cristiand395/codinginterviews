import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, Header, Hero } from "@/components"

export default function Page() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <Hero />
        <section id="questions" className="w-full py-6 md:py-24 lg:py-16 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Coding Interview Questions</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Explore a diverse range of coding interview questions covering various topics and difficulty levels.
                </p>
              </div>
            </div>
            <div>

            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}