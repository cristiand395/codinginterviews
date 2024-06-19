// src/app/page.tsx

"use client";

import React, { useState } from "react";
import { MultiSelect } from "@/components/MultiSelect";
import { Cat, Dog, Fish, Rabbit, Turtle } from "lucide-react";

const frameworksList = [
  { value: "react", label: "React" },
  { value: "angular", label: "Angular" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
  { value: "ember", label: "Ember" },
];

export function MultiSelectSection() {
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([]);

  return (
    <div className="w-full sm:w-[600px]">
      <MultiSelect
        options={frameworksList}
        onValueChange={setSelectedFrameworks}
        defaultValue={selectedFrameworks}
        placeholder="Select technologies"
        variant="inverted"
        animation={2}
        maxCount={3}
      />
    </div>
  );
}