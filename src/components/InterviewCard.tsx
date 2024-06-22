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

export function InterviewCard({ id }: { id: string }) {
  return (
    <Link href={id}>
      <Card>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Level: Junior</CardDescription>
        </CardHeader>
        <CardContent>
          Given a singly linked list, write a function to reverse the list.
        </CardContent>
        <CardFooter className="gap-2">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="nextjs">NextJS</Badge>
          <Badge variant="api">API</Badge>
          <Badge variant="table">Table</Badge>
        </CardFooter>
      </Card>
    </Link>
  )
}