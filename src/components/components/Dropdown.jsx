"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownComponent({value, options, handleChange}) {
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{typeof value === "number" ? "Pick a sample size" : "Pick an algorithm"}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {/* {<DropdownMenuLabel>Sample Sizes</DropdownMenuLabel>} */}
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={value} onValueChange={(value) => handleChange(value)}>
            {options.map((option, index) => (
                <DropdownMenuRadioItem key={index} value={option}>{option}</DropdownMenuRadioItem>)
            )}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
