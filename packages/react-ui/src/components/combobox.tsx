import { useMemo, useState } from "react";

import { CheckIcon } from "@js-solutions/icons";

import { Button } from "./button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { cn } from "../utils";

export interface ComboboxOption {
  label: string;
  value: string;
}

export interface ComboboxProps {
  className?: string;
  emptyText?: string;
  onValueChange?: (value: string) => void;
  options: ComboboxOption[];
  placeholder?: string;
  searchPlaceholder?: string;
  value?: string;
}

export function Combobox({
  className,
  emptyText = "No results found.",
  onValueChange,
  options,
  placeholder = "Select option",
  searchPlaceholder = "Search...",
  value
}: ComboboxProps) {
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState("");

  const selectedValue = value ?? internalValue;
  const selectedOption = useMemo(
    () => options.find((option) => option.value === selectedValue),
    [options, selectedValue]
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          variant="outline"
          className={cn("jss-combobox__trigger", className)}
        >
          <span>{selectedOption?.label ?? placeholder}</span>
          <span aria-hidden="true">v</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="jss-combobox__content" sideOffset={6}>
        <Command>
          <CommandInput placeholder={searchPlaceholder} />
          <CommandList>
            <CommandEmpty>{emptyText}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(nextValue) => {
                    const normalized = nextValue.toLowerCase() === selectedValue.toLowerCase() ? "" : option.value;
                    setInternalValue(normalized);
                    onValueChange?.(normalized);
                    setOpen(false);
                  }}
                >
                  <CheckIcon
                    size={14}
                    className={cn("jss-combobox__item-check", selectedValue === option.value ? "jss-combobox__item-check--visible" : "")}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

