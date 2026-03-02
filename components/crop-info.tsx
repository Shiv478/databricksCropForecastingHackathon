"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Info, Thermometer, Droplets, Clock, Target } from "lucide-react";
import type { CropProfile } from "@/lib/crops";

interface CropInfoProps {
  crop: CropProfile;
}

export function CropInfo({ crop }: CropInfoProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Info className="size-4 text-primary" />
          Crop Profile: {crop.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {crop.description}
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-start gap-2 rounded-lg border p-3">
            <Thermometer className="mt-0.5 size-4 text-chart-4 shrink-0" />
            <div>
              <div className="text-xs font-medium text-foreground">
                Optimal Temperature
              </div>
              <div className="text-xs text-muted-foreground">
                {crop.optimalTemp.min}F - {crop.optimalTemp.max}F
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2 rounded-lg border p-3">
            <Droplets className="mt-0.5 size-4 text-chart-3 shrink-0" />
            <div>
              <div className="text-xs font-medium text-foreground">
                Monthly Rainfall
              </div>
              <div className="text-xs text-muted-foreground">
                {crop.optimalPrecip.min}" - {crop.optimalPrecip.max}"
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2 rounded-lg border p-3">
            <Clock className="mt-0.5 size-4 text-chart-5 shrink-0" />
            <div>
              <div className="text-xs font-medium text-foreground">
                Growing Season
              </div>
              <div className="text-xs text-muted-foreground">
                {crop.growingSeasonDays} days
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2 rounded-lg border p-3">
            <Target className="mt-0.5 size-4 text-primary shrink-0" />
            <div>
              <div className="text-xs font-medium text-foreground">
                National Avg Yield
              </div>
              <div className="text-xs text-muted-foreground">
                {crop.baseYield} {crop.unit}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="text-xs">
            Drought Sensitivity: {Math.round(crop.droughtSensitivity * 100)}%
          </Badge>
          <Badge variant="outline" className="text-xs">
            Frost Sensitivity: {Math.round(crop.frostSensitivity * 100)}%
          </Badge>
          <Badge variant="outline" className="text-xs">
            Heat Stress at {crop.heatStressThreshold}F
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
