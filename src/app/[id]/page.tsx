import { Button } from "@/components/ui/button";
import { Computer, Eye, Github } from "lucide-react";

export default function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <section>
      <h1 className="text-4xl font-extrabold py-2">Challenge #{id}</h1>
      <p className="text-md font-bold py-0.5">Level: Junior</p>
      <p className="text-md font-bold py-0.5">Technologies: </p>
      <p className="text-md font-bold py-0.5">Description: </p>
      <ul>
        <li><span>- </span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos quibusdam voluptate hic, consequuntur explicabo saepe officia aliquam corporis, numquam cumque ducimus quos dolorum placeat reprehenderit soluta voluptates quae quaerat illum.</li>
      </ul>
      <div className="w-full py-6 flex justify-center">
        <div className="flex justify-around w-[300px]">
          <Button className="w-[120px]">
            <Github className="mr-2 h-4 w-4" /> Github
          </Button>
          <Button className="w-[120px]">
            <Eye className="mr-2 h-4 w-4" /> Preview
          </Button>
        </div>
      </div>
    </section>
  )
}