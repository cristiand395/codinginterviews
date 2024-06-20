import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full my-6">
      <div className="container px-4 md:px-6">
        <div className="space-y-2 flex flex-col items-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-center">
            Ace Your Coding Interviews
          </h1>
          <p className="max-w-[600px] text-gray-600 md:text-xl dark:text-gray-400 text-center">
            {`Hi there! I created this site to share some coding interviews. Improve your programming skills and ace job interviews. Let's get you ready for your next big opportunity!`}
          </p>
        </div>
      </div>
    </section>
  )
}