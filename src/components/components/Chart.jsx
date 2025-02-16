"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
};

export function ChartComponent({ chartData, sortingAlgorithm }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Visualize Sorting Algorithms!</CardTitle>
        <CardDescription>
          Pick a sample-size and an algorithm from the drop-downs below, and hit
          Start!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[400px] w-[1000px]">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            {
              <XAxis
                dataKey="index"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tick={false}
              />
            }

            <Bar
              dataKey="value"
              fill="var(--color-desktop)"
              isAnimationActive={false}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="items-center justify-center items-start gap-2 text-sm">
        <div className="gap-2 font-medium leading-none">
          Currently sorting {chartData.length} numbers with {sortingAlgorithm}
        </div>
      </CardFooter>
    </Card>
  );
}
