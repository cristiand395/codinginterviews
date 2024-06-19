import { Hero, InterviewCard, MultiSelectSection } from "@/components"
export default function Page() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <Hero />
        <section id="questions" className="w-full py-3 md:py-12 lg:py-4">
          <div className="container px-4 md:px-6 flex justify-center">
            <MultiSelectSection />
          </div>
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-6 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <InterviewCard id='1' />
              <InterviewCard id='1' />
              <InterviewCard id='1' />
              <InterviewCard id='1' />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}