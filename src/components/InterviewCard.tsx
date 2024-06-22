import Link from "next/link";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";



interface Props {
  id: string;
  title: string;
  level: string;
  description: string;
  badges: string[];
  requests: string[];
  repository: string
}

export function InterviewCard({ id, title, level, description, badges, requests, repository }: Props) {
  return (
    <Link href={id}>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>Level: {level}</CardDescription>
        </CardHeader>
        <CardContent>
          {description}
        </CardContent>
        <CardFooter className="gap-2">
          {badges.map((badge) => (
            <Badge key={badge} variant={badge}>
              {badge}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </Link>
  )
}