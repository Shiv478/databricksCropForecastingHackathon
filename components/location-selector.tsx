"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Sprout, Loader2 } from "lucide-react";
import { getStatesFromCounties, getCountiesForState } from "@/lib/counties";
import { CROPS } from "@/lib/crops";

interface LocationSelectorProps {
  selectedState: string;
  selectedCounty: string;
  selectedCrop: string;
  onStateChange: (state: string) => void;
  onCountyChange: (county: string) => void;
  onCropChange: (crop: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export function LocationSelector({
  selectedState,
  selectedCounty,
  selectedCrop,
  onStateChange,
  onCountyChange,
  onCropChange,
  onSubmit,
  isLoading,
}: LocationSelectorProps) {
  const states = getStatesFromCounties();
  const counties = selectedState ? getCountiesForState(selectedState) : [];

  const cropsByCategory = CROPS.reduce(
    (acc, crop) => {
      if (!acc[crop.category]) acc[crop.category] = [];
      acc[crop.category].push(crop);
      return acc;
    },
    {} as Record<string, typeof CROPS>
  );

  const canSubmit = selectedState && selectedCounty && selectedCrop;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="size-4 text-primary" />
          Location & Crop Selection
        </CardTitle>
        <CardDescription>
          Select your US county and crop to generate a yield forecast based on
          recent weather data.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
          <div className="flex flex-1 flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">State</label>
            <Select value={selectedState} onValueChange={(val) => { onStateChange(val); onCountyChange(""); }}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select state" />
              </SelectTrigger>
              <SelectContent>
                {states.map((state) => (
                  <SelectItem key={state} value={state}>
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-1 flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">County</label>
            <Select
              value={selectedCounty}
              onValueChange={onCountyChange}
              disabled={!selectedState}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={selectedState ? "Select county" : "Select a state first"} />
              </SelectTrigger>
              <SelectContent>
                {counties.map((county) => (
                  <SelectItem key={county.fips} value={county.fips}>
                    {county.name} County
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-1 flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">Crop</label>
            <Select value={selectedCrop} onValueChange={onCropChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select crop" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(cropsByCategory).map(([category, crops]) => (
                  <SelectGroup key={category}>
                    <SelectLabel>{category}</SelectLabel>
                    {crops.map((crop) => (
                      <SelectItem key={crop.id} value={crop.id}>
                        <Sprout className="size-3.5 text-primary" />
                        {crop.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            onClick={onSubmit}
            disabled={!canSubmit || isLoading}
            className="sm:w-auto"
            size="default"
          >
            {isLoading ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              "Generate Forecast"
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
