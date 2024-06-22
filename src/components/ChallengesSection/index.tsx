import { InterviewCard } from "../InterviewCard";
import * as challenges from './data/challenges.json'
export default async function Page() {
  return (
    <div className="w-full">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-6 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
        {
          challenges.map((challenge) => (
            <InterviewCard
              key={challenge.id}
              id={challenge.id}
              title={challenge.title}
              level={challenge.level}
              description={challenge.description}
              badges={challenge.badges}
              requests={challenge.requests}
              repository={challenge.repository}
            />
          ))
        }
      </div>
    </div>
  )
}