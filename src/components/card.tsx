import Link from "next/link";
import { Badge } from "./ui/badge";

export function Card() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <div className="space-y-2">
        <h3 className="text-xl font-bold">Reverse a Linked List</h3>
        <p className="text-gray-500 dark:text-gray-400">
          Given a singly linked list, write a function to reverse the list.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge>Linked List</Badge>
          <Badge>Recursion</Badge>
          <Badge>Iterative</Badge>
        </div>
        <Link
          href="#"
          className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          prefetch={false}
        >
          View Solution
        </Link>
      </div>
    </div>
  )
}