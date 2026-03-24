import { format } from "date-fns";
import { useState } from "react";

import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { cn } from "../utils";

export interface DatePickerProps {
  className?: string;
  onValueChange?: (date: Date | undefined) => void;
  placeholder?: string;
  value?: Date;
}

export function DatePicker({ className, onValueChange, placeholder = "Pick a date", value }: DatePickerProps) {
  const [internalDate, setInternalDate] = useState<Date | undefined>();
  const date = value ?? internalDate;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className={cn("jss-date-picker__trigger", className)}>
          {date ? format(date, "PPP") : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="jss-date-picker__content" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(nextDate) => {
            setInternalDate(nextDate);
            onValueChange?.(nextDate);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

