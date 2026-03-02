"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Thermometer,
  Droplets,
  Wind,
  CloudRain,
  Sun,
  Snowflake,
} from "lucide-react";
import type { WeatherSummary as WeatherSummaryType } from "@/lib/crops";

interface WeatherSummaryProps {
  weather: WeatherSummaryType;
  countyName: string;
  stateName: string;
}

const metricCards = [
  {
    key: "avgTemp" as const,
    label: "Avg Temperature",
    icon: Thermometer,
    unit: "F",
    format: (v: number) => `${v}`,
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
  },
  {
    key: "totalPrecipitation" as const,
    label: "Total Precipitation",
    icon: CloudRain,
    unit: '"',
    format: (v: number) => `${v}`,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
  {
    key: "avgHumidity" as const,
    label: "Avg Humidity",
    icon: Droplets,
    unit: "%",
    format: (v: number) => `${v}`,
    color: "text-chart-1",
    bgColor: "bg-chart-1/10",
  },
  {
    key: "avgWindSpeed" as const,
    label: "Avg Wind Speed",
    icon: Wind,
    unit: " mph",
    format: (v: number) => `${v}`,
    color: "text-chart-5",
    bgColor: "bg-chart-5/10",
  },
  {
    key: "daysAbove90" as const,
    label: "Days Above 90F",
    icon: Sun,
    unit: " days",
    format: (v: number) => `${v}`,
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
  },
  {
    key: "daysBelow32" as const,
    label: "Frost Days",
    icon: Snowflake,
    unit: " days",
    format: (v: number) => `${v}`,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
];

export function WeatherSummary({
  weather,
  countyName,
  stateName,
}: WeatherSummaryProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-baseline gap-2">
        <h2 className="text-lg font-semibold text-foreground">
          Weather Summary
        </h2>
        <span className="text-sm text-muted-foreground">
          Past 30 days in {countyName} County, {stateName}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {metricCards.map((metric) => {
          const Icon = metric.icon;
          const value = weather[metric.key];
          return (
            <Card key={metric.key} className="py-4">
              <CardContent className="flex flex-col gap-2 px-4">
                <div className="flex items-center gap-2">
                  <div
                    className={`flex size-7 items-center justify-center rounded-md ${metric.bgColor}`}
                  >
                    <Icon className={`size-3.5 ${metric.color}`} />
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {metric.label}
                  </span>
                </div>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-xl font-bold text-foreground font-mono">
                    {metric.format(value)}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {metric.unit}
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
