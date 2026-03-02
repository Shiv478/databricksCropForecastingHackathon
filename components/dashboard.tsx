"use client";

import { useState, useCallback } from "react";
import useSWR from "swr";
import { LocationSelector } from "@/components/location-selector";
import { WeatherSummary } from "@/components/weather-summary";
import { YieldForecast } from "@/components/yield-forecast";
import { WeatherCharts } from "@/components/weather-charts";
import { CropInfo } from "@/components/crop-info";
import { COUNTIES } from "@/lib/counties";
import { CROPS, calculateYieldForecast } from "@/lib/crops";
import type { WeatherSummary as WeatherSummaryType } from "@/lib/crops";
import { Wheat, ArrowRight } from "lucide-react";

interface WeatherResponse {
  summary: WeatherSummaryType;
  dailyData: Array<{
    date: string;
    avgTemp: number | null;
    maxTemp: number | null;
    minTemp: number | null;
    precipitation: number | null;
    humidity: number | null;
    wind: number | null;
  }>;
  location: { lat: number; lon: number };
  period: { start: string; end: string };
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function Dashboard() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCounty, setSelectedCounty] = useState("");
  const [selectedCrop, setSelectedCrop] = useState("");
  const [fetchKey, setFetchKey] = useState<string | null>(null);

  const county = COUNTIES.find((c) => c.fips === selectedCounty);
  const crop = CROPS.find((c) => c.id === selectedCrop);

  const { data, isLoading, error } = useSWR<WeatherResponse>(
    fetchKey,
    fetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000,
    }
  );

  const handleSubmit = useCallback(() => {
    if (county) {
      setFetchKey(`/api/weather?lat=${county.lat}&lon=${county.lon}`);
    }
  }, [county]);

  const forecast60 =
    data && crop ? calculateYieldForecast(crop, data.summary, 60) : null;
  const forecast90 =
    data && crop ? calculateYieldForecast(crop, data.summary, 90) : null;

  return (
    <div className="flex flex-col gap-6">
      <LocationSelector
        selectedState={selectedState}
        selectedCounty={selectedCounty}
        selectedCrop={selectedCrop}
        onStateChange={setSelectedState}
        onCountyChange={setSelectedCounty}
        onCropChange={setSelectedCrop}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />

      {error && (
        <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
          Failed to fetch weather data. Please try again.
        </div>
      )}

      {!data && !isLoading && !error && (
        <div className="flex flex-col items-center gap-6 rounded-xl border-2 border-dashed border-border bg-muted/20 py-16 px-6 text-center">
          <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/10">
            <Wheat className="size-8 text-primary" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-xl font-semibold text-foreground text-balance">
              Forecast Crop Yields with Real Weather Data
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground text-balance">
              Select your state, county, and crop above, then click Generate
              Forecast to analyze weather conditions and estimate yields.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="inline-block size-1.5 rounded-full bg-chart-1" />
              30-Day Weather Analysis
            </span>
            <ArrowRight className="size-3" />
            <span className="flex items-center gap-1.5">
              <span className="inline-block size-1.5 rounded-full bg-chart-2" />
              Factor Scoring
            </span>
            <ArrowRight className="size-3" />
            <span className="flex items-center gap-1.5">
              <span className="inline-block size-1.5 rounded-full bg-chart-4" />
              60 & 90-Day Yield Forecast
            </span>
          </div>
        </div>
      )}

      {isLoading && (
        <div className="flex flex-col items-center gap-4 py-16">
          <div className="size-10 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
          <div className="flex flex-col items-center gap-1">
            <p className="text-sm font-medium text-foreground">
              Fetching weather data...
            </p>
            <p className="text-xs text-muted-foreground">
              Analyzing 30 days of conditions for {county?.name} County,{" "}
              {county?.state}
            </p>
          </div>
        </div>
      )}

      {data && county && (
        <>
          <WeatherSummary
            weather={data.summary}
            countyName={county.name}
            stateName={county.state}
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {forecast60 && forecast90 && crop && (
              <YieldForecast
                forecast60={forecast60}
                forecast90={forecast90}
                crop={crop}
              />
            )}
            {crop && <CropInfo crop={crop} />}
          </div>

          <WeatherCharts dailyData={data.dailyData} />
        </>
      )}
    </div>
  );
}
