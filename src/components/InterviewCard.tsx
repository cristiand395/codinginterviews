import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function InterviewCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Level: Junior</CardDescription>
      </CardHeader>
      <CardContent>
        Given a singly linked list, write a function to reverse the list.
      </CardContent>
      <CardFooter className="flex justify-between">
        <Badge variant="default">NextJS</Badge>
      </CardFooter>
    </Card>
  )
}