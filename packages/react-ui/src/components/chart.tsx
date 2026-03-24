import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "../utils";

export interface ChartSeries {
  color: string;
  dataKey: string;
  name: string;
}

export interface ChartProps {
  data: Record<string, string | number>[];
  height?: number;
  series: ChartSeries[];
  xKey: string;
}

export const Chart = forwardRef<HTMLDivElement, ChartProps>(function Chart(
  { data, height = 260, series, xKey },
  ref
) {
  return (
    <div ref={ref} className="jss-chart" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.35)" />
          <XAxis dataKey={xKey} tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <Tooltip content={<ChartTooltipContent />} />
          {series.map((item) => (
            <Line
              key={item.dataKey}
              dataKey={item.dataKey}
              name={item.name}
              stroke={item.color}
              strokeWidth={2.25}
              dot={false}
              activeDot={{ r: 4 }}
              type="monotone"
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
});

export const ChartTooltip = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function ChartTooltip(
  { className, ...props },
  ref
) {
  return (
    <div ref={ref} className={cn("jss-chart__tooltip", className)} {...props}>
      {/* Content is rendered by recharts payload */}
    </div>
  );
});

interface ChartTooltipPayloadEntry {
  color?: string;
  dataKey?: string | number;
  name?: string;
  value?: string | number;
}

interface ChartTooltipContentProps {
  active?: boolean;
  label?: string | number;
  payload?: ChartTooltipPayloadEntry[];
}

export function ChartTooltipContent({ active, payload, label }: ChartTooltipContentProps) {
  if (!active || !payload?.length) {
    return null;
  }

  return (
    <div className="jss-chart__tooltip">
      <p className="jss-chart__tooltip-label">{label}</p>
      <div className="jss-chart__tooltip-list">
        {payload.map((entry) => (
          <div className="jss-chart__tooltip-item" key={`${entry.dataKey}`}>
            <span className="jss-chart__tooltip-dot" style={{ backgroundColor: entry.color }} />
            <span>{entry.name}</span>
            <span>{entry.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
