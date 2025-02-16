"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DropdownComponent({ value, options, handleChange }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="bg-white text-black border border-gray-300 px-4 py-2 rounded-lg">
          {typeof value === "number" ? `Set sample size` : "Pick an algorithm"}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {/* {<DropdownMenuLabel>Sample Sizes</DropdownMenuLabel>} */}
        
        <DropdownMenuRadioGroup
          value={value}
          onValueChange={(value) => handleChange(value)}
        >
          {options.map((option, index) => (
            <DropdownMenuRadioItem key={index} value={option}>
              {option}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
