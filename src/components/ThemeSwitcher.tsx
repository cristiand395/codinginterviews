"use client"

import { useState, useEffect } from "react"
import { Switch } from "@/components/ui/switch"

export default function Component() {
  const [theme, setTheme] = useState("light")
  useEffect(() => {
    const root = document.documentElement
    root.classList.remove(theme === "light" ? "dark" : "light")
    root.classList.add(theme)
  }, [theme])
  return (
    <div className="flex items-center gap-2">
      <Switch
        id="theme-switch"
        checked={theme === "dark"}
        onCheckedChange={() => setTheme(theme === "light" ? "dark" : "light")}
      />
    </div>
  )
}