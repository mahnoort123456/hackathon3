
"use client";

import * as React from "react";
import Link from "next/link"; 
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Products = [
  {
    value: "allProducts",
    label: "All Products",
    path: "/products", 
  },
  {
    value: "topCategory",
    label: "Top Category",
    path: "/categories",
  },
  {
    value: "topFeatures",
    label: "Featured Products",
    path: "/featured",
  },
  
];

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[250px] px-6"
        >
          {value
            ? Products.find((product) => product.value === value)?.label
            : "Select Categories..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Search any category..." className="h-9" />
          <CommandList>
            <CommandEmpty>No product found.</CommandEmpty>
            <CommandGroup>
              {Products.map((product) => (
                <CommandItem
                  className="flex justify-between"
                  key={product.value}
                  value={product.value}
                  onSelect={() => {
                    setValue(product.value);
                    setOpen(false);
                  }}
                >
                  <Link href={`${product.path}`} className="w-full flex items-center">
                    {product.label}
                  </Link>
                  <Check
                    className={cn(
                      "ml-auto",
                      value === product.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}