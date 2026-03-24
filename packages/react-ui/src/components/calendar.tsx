import { DayPicker, type DayPickerProps } from "react-day-picker";

import { cn } from "../utils";

export type CalendarProps = DayPickerProps;

export function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("jss-calendar", className)}
      classNames={{
        caption: "jss-calendar__caption",
        caption_label: "jss-calendar__caption-label",
        day: "jss-calendar__day",
        day_button: "jss-calendar__day-button",
        disabled: "jss-calendar__day--disabled",
        dropdown: "jss-calendar__dropdown",
        head_cell: "jss-calendar__head-cell",
        month: "jss-calendar__month",
        month_caption: "jss-calendar__month-caption",
        months: "jss-calendar__months",
        nav: "jss-calendar__nav",
        nav_button: "jss-calendar__nav-button",
        selected: "jss-calendar__day--selected",
        table: "jss-calendar__table",
        today: "jss-calendar__day--today",
        weekday: "jss-calendar__weekday",
        ...classNames
      }}
      {...props}
    />
  );
}

