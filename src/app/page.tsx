import { Hero, InterviewCard, MultiSelectSection } from "@/components"
import ChallengesSection from "@/components/ChallengesSection"
export default async function Page() {
  return (
    <div className="flex flex-col">
      <Hero />
      <main className="flex-1">
        <section className="w-full py-3 md:py-12 lg:py-4">
          <div className="md:px-6 flex justify-center">
            <MultiSelectSection />
          </div>
          <ChallengesSection />
        </section>
      </main>
    </div>
  )
}