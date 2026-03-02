"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TrendingUp,
  TrendingDown,
  Minus,
  AlertTriangle,
  CheckCircle2,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";
import type { YieldForecast as YieldForecastType, CropProfile } from "@/lib/crops";

interface YieldForecastProps {
  forecast60: YieldForecastType;
  forecast90: YieldForecastType;
  crop: CropProfile;
}

function RiskBadge({ level }: { level: string }) {
  const config: Record<string, { variant: "default" | "secondary" | "destructive" | "outline"; className: string }> = {
    low: { variant: "outline", className: "border-primary/40 text-primary bg-primary/5" },
    moderate: { variant: "outline", className: "border-chart-2/40 text-chart-2 bg-chart-2/5" },
    high: { variant: "outline", className: "border-chart-4/40 text-chart-4 bg-chart-4/5" },
    severe: { variant: "destructive", className: "" },
  };
  const { variant, className } = config[level] || config.moderate;
  return (
    <Badge variant={variant} className={className}>
      {level === "low" && <ShieldCheck className="size-3" />}
      {level === "moderate" && <ShieldAlert className="size-3" />}
      {level === "high" && <AlertTriangle className="size-3" />}
      {level === "severe" && <AlertTriangle className="size-3" />}
      {level.charAt(0).toUpperCase() + level.slice(1)} Risk
    </Badge>
  );
}

function FactorImpactIcon({ impact }: { impact: string }) {
  if (impact === "positive") return <TrendingUp className="size-3.5 text-primary" />;
  if (impact === "negative") return <TrendingDown className="size-3.5 text-destructive" />;
  return <Minus className="size-3.5 text-muted-foreground" />;
}

function ForecastPanel({
  forecast,
  crop,
}: {
  forecast: YieldForecastType;
  crop: CropProfile;
}) {
  return (
    <div className="flex flex-col gap-6">
      {/* Main yield estimate */}
      <div className="flex flex-col items-center gap-3 rounded-xl border bg-muted/30 p-6 text-center">
        <div className="text-sm font-medium text-muted-foreground">
          Estimated Yield
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className="text-4xl font-bold text-foreground font-mono">
            {forecast.estimatedYield}
          </span>
          <span className="text-sm text-muted-foreground">{crop.unit}</span>
        </div>
        <div className="text-xs text-muted-foreground">
          Range: {forecast.yieldRange.low} - {forecast.yieldRange.high}{" "}
          {crop.unit}
        </div>
        <div className="flex items-center gap-3">
          <RiskBadge level={forecast.riskLevel} />
          <Badge variant="outline">
            {forecast.yieldPercent}% of base yield
          </Badge>
        </div>
      </div>

      {/* Overall score */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-foreground">
            Overall Conditions Score
          </span>
          <span className="font-mono font-bold text-foreground">
            {forecast.overallScore}/100
          </span>
        </div>
        <Progress value={forecast.overallScore} className="h-3" />
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Poor</span>
          <span>Confidence: {forecast.confidenceLevel}</span>
          <span>Excellent</span>
        </div>
      </div>

      {/* Factor breakdown */}
      <div className="flex flex-col gap-3">
        <h4 className="text-sm font-semibold text-foreground">
          Factor Analysis
        </h4>
        {forecast.factors.map((factor) => (
          <div key={factor.name} className="flex flex-col gap-2 rounded-lg border p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FactorImpactIcon impact={factor.impact} />
                <span className="text-sm font-medium text-foreground">
                  {factor.name}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold text-foreground">
                  {factor.score}/100
                </span>
                {factor.impact === "positive" && (
                  <CheckCircle2 className="size-3.5 text-primary" />
                )}
                {factor.impact === "negative" && (
                  <AlertTriangle className="size-3.5 text-destructive" />
                )}
              </div>
            </div>
            <Progress value={factor.score} className="h-1.5" />
            <p className="text-xs leading-relaxed text-muted-foreground">
              {factor.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function YieldForecast({
  forecast60,
  forecast90,
  crop,
}: YieldForecastProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="size-4 text-primary" />
          Yield Forecast: {crop.name}
        </CardTitle>
        <CardDescription>{crop.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="60day">
          <TabsList className="w-full">
            <TabsTrigger value="60day" className="flex-1">
              60-Day Forecast
            </TabsTrigger>
            <TabsTrigger value="90day" className="flex-1">
              90-Day Forecast
            </TabsTrigger>
          </TabsList>
          <TabsContent value="60day" className="mt-4">
            <ForecastPanel forecast={forecast60} crop={crop} />
          </TabsContent>
          <TabsContent value="90day" className="mt-4">
            <ForecastPanel forecast={forecast90} crop={crop} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
