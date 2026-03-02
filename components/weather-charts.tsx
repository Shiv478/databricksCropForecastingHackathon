"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { BarChart3 } from "lucide-react";

interface DailyWeather {
  date: string;
  avgTemp: number | null;
  maxTemp: number | null;
  minTemp: number | null;
  precipitation: number | null;
  humidity: number | null;
  wind: number | null;
}

interface WeatherChartsProps {
  dailyData: DailyWeather[];
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ name: string; value: number; color: string }>;
  label?: string;
}) {
  if (!active || !payload || !payload.length) return null;
  return (
    <div className="rounded-lg border bg-card p-3 shadow-md">
      <p className="mb-1.5 text-xs font-medium text-foreground">
        {label ? formatDate(label) : ""}
      </p>
      {payload.map((entry, index) => (
        <div key={index} className="flex items-center gap-2 text-xs">
          <span
            className="inline-block size-2.5 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-muted-foreground">{entry.name}:</span>
          <span className="font-mono font-medium text-foreground">
            {typeof entry.value === "number" ? entry.value.toFixed(1) : entry.value}
          </span>
        </div>
      ))}
    </div>
  );
}

export function WeatherCharts({ dailyData }: WeatherChartsProps) {
  const chartData = dailyData.map((d) => ({
    ...d,
    date: d.date,
    label: formatDate(d.date),
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="size-4 text-primary" />
          30-Day Weather Trends
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="temperature">
          <TabsList className="w-full sm:w-auto">
            <TabsTrigger value="temperature">Temperature</TabsTrigger>
            <TabsTrigger value="precipitation">Precipitation</TabsTrigger>
            <TabsTrigger value="humidity">Humidity</TabsTrigger>
          </TabsList>

          <TabsContent value="temperature" className="mt-4">
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient
                      id="tempMaxGrad"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="5%"
                        stopColor="oklch(0.65 0.15 50)"
                        stopOpacity={0.3}
                      />
                      <stop
                        offset="95%"
                        stopColor="oklch(0.65 0.15 50)"
                        stopOpacity={0}
                      />
                    </linearGradient>
                    <linearGradient
                      id="tempAvgGrad"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="5%"
                        stopColor="oklch(0.45 0.12 150)"
                        stopOpacity={0.3}
                      />
                      <stop
                        offset="95%"
                        stopColor="oklch(0.45 0.12 150)"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    className="stroke-border"
                  />
                  <XAxis
                    dataKey="date"
                    tickFormatter={formatDate}
                    className="text-xs"
                    tick={{ fontSize: 10, fill: "oklch(0.50 0.02 150)" }}
                    interval="preserveStartEnd"
                  />
                  <YAxis
                    tick={{ fontSize: 10, fill: "oklch(0.50 0.02 150)" }}
                    tickFormatter={(v) => `${v}F`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend
                    wrapperStyle={{ fontSize: "12px" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="maxTemp"
                    name="Max Temp (F)"
                    stroke="oklch(0.65 0.15 50)"
                    fill="url(#tempMaxGrad)"
                    strokeWidth={1.5}
                  />
                  <Area
                    type="monotone"
                    dataKey="avgTemp"
                    name="Avg Temp (F)"
                    stroke="oklch(0.45 0.12 150)"
                    fill="url(#tempAvgGrad)"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="minTemp"
                    name="Min Temp (F)"
                    stroke="oklch(0.55 0.10 220)"
                    fill="none"
                    strokeWidth={1.5}
                    strokeDasharray="4 2"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          <TabsContent value="precipitation" className="mt-4">
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    className="stroke-border"
                  />
                  <XAxis
                    dataKey="date"
                    tickFormatter={formatDate}
                    tick={{ fontSize: 10, fill: "oklch(0.50 0.02 150)" }}
                    interval="preserveStartEnd"
                  />
                  <YAxis
                    tick={{ fontSize: 10, fill: "oklch(0.50 0.02 150)" }}
                    tickFormatter={(v) => `${v}"`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar
                    dataKey="precipitation"
                    name={'Precipitation (in)'}
                    fill="oklch(0.55 0.10 220)"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          <TabsContent value="humidity" className="mt-4">
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    className="stroke-border"
                  />
                  <XAxis
                    dataKey="date"
                    tickFormatter={formatDate}
                    tick={{ fontSize: 10, fill: "oklch(0.50 0.02 150)" }}
                    interval="preserveStartEnd"
                  />
                  <YAxis
                    tick={{ fontSize: 10, fill: "oklch(0.50 0.02 150)" }}
                    tickFormatter={(v) => `${v}%`}
                    domain={[0, 100]}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ fontSize: "12px" }} />
                  <Line
                    type="monotone"
                    dataKey="humidity"
                    name="Humidity (%)"
                    stroke="oklch(0.45 0.12 150)"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="wind"
                    name="Wind Speed (mph)"
                    stroke="oklch(0.50 0.08 290)"
                    strokeWidth={1.5}
                    dot={false}
                    activeDot={{ r: 4 }}
                    strokeDasharray="4 2"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
