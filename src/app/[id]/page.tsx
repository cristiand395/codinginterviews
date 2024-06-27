import { Button } from "@/components/ui/button";
import { Eye, Github } from "lucide-react";
import * as Challenge from "@/components/ChallengesSection/data/challenges.json";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Page({ params: { id } }: { params: { id: string } }) {
  const challenge = Challenge.find((challenge) => challenge.id === id);

  if (!challenge) return null

  return (
    <section>
      <h1 className="text-4xl font-extrabold py-2">{challenge.title}</h1>
      <p className="text-md font-bold py-0.5">Level: {challenge.level}</p>
      <p className="text-md font-bold py-0.5">
        Technologies:
        <p className="flex gap-2">
          {
            challenge.badges.map((badge) => (
              <Badge key={badge} variant={badge}>
                {badge}
              </Badge>
            ))
          }
        </p>
      </p>
      <p className="text-md font-bold py-0.5">Description: </p>
      <ul>
        {
          challenge?.requests.map((request) => (
            <li key={request}><span>- </span>{request}</li>
          ))
        }
      </ul>
      <div className="w-full py-6 flex justify-center">
        <div className="flex justify-around w-[300px]">
          <Link href={challenge.repository}>
            <Button className="w-[120px]">
              <Github className="mr-2 h-4 w-4" /> Github
            </Button>
          </Link>
          <Link href={`${id}/preview`}>
            <Button className="w-[120px]">
              <Eye className="mr-2 h-4 w-4" /> Preview
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}