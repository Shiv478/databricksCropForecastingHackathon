export interface CropProfile {
  id: string;
  name: string;
  category: string;
  unit: string;
  baseYield: number; // national avg yield per acre in the crop's unit
  optimalTemp: { min: number; max: number }; // in Fahrenheit
  optimalPrecip: { min: number; max: number }; // inches per month
  optimalHumidity: { min: number; max: number }; // percentage
  growingSeasonDays: number;
  heatStressThreshold: number; // temp in F where yield starts declining
  frostSensitivity: number; // 0-1 scale, higher = more sensitive
  droughtSensitivity: number; // 0-1 scale
  excessMoistureSensitivity: number; // 0-1 scale
  description: string;
}

export const CROPS: CropProfile[] = [
  {
    id: "corn",
    name: "Corn (Grain)",
    category: "Grain",
    unit: "bu/acre",
    baseYield: 177,
    optimalTemp: { min: 60, max: 86 },
    optimalPrecip: { min: 3.5, max: 6.0 },
    optimalHumidity: { min: 50, max: 80 },
    growingSeasonDays: 120,
    heatStressThreshold: 95,
    frostSensitivity: 0.9,
    droughtSensitivity: 0.8,
    excessMoistureSensitivity: 0.5,
    description:
      "Corn is the most widely grown crop in the US. It requires warm temperatures and consistent moisture, especially during pollination.",
  },
  {
    id: "soybeans",
    name: "Soybeans",
    category: "Oilseed",
    unit: "bu/acre",
    baseYield: 50,
    optimalTemp: { min: 60, max: 85 },
    optimalPrecip: { min: 3.0, max: 5.5 },
    optimalHumidity: { min: 50, max: 75 },
    growingSeasonDays: 100,
    heatStressThreshold: 90,
    frostSensitivity: 0.85,
    droughtSensitivity: 0.7,
    excessMoistureSensitivity: 0.6,
    description:
      "Soybeans are adaptable but perform best with moderate temperatures and regular rainfall throughout the growing season.",
  },
  {
    id: "winter_wheat",
    name: "Winter Wheat",
    category: "Grain",
    unit: "bu/acre",
    baseYield: 49,
    optimalTemp: { min: 40, max: 75 },
    optimalPrecip: { min: 2.0, max: 4.5 },
    optimalHumidity: { min: 40, max: 70 },
    growingSeasonDays: 240,
    heatStressThreshold: 85,
    frostSensitivity: 0.3,
    droughtSensitivity: 0.6,
    excessMoistureSensitivity: 0.7,
    description:
      "Winter wheat is planted in fall and harvested in spring/summer. It tolerates cold well but is sensitive to excess moisture near harvest.",
  },
  {
    id: "spring_wheat",
    name: "Spring Wheat",
    category: "Grain",
    unit: "bu/acre",
    baseYield: 47,
    optimalTemp: { min: 50, max: 78 },
    optimalPrecip: { min: 2.5, max: 4.5 },
    optimalHumidity: { min: 40, max: 65 },
    growingSeasonDays: 100,
    heatStressThreshold: 85,
    frostSensitivity: 0.6,
    droughtSensitivity: 0.65,
    excessMoistureSensitivity: 0.5,
    description:
      "Spring wheat is planted in spring and harvested in late summer. It performs best in cooler climates with moderate moisture.",
  },
  {
    id: "cotton",
    name: "Cotton",
    category: "Fiber",
    unit: "lbs/acre",
    baseYield: 880,
    optimalTemp: { min: 68, max: 95 },
    optimalPrecip: { min: 2.5, max: 5.0 },
    optimalHumidity: { min: 40, max: 65 },
    growingSeasonDays: 160,
    heatStressThreshold: 100,
    frostSensitivity: 0.95,
    droughtSensitivity: 0.6,
    excessMoistureSensitivity: 0.75,
    description:
      "Cotton thrives in hot climates with long growing seasons. It needs heat to produce quality fiber but is sensitive to excess moisture during boll opening.",
  },
  {
    id: "rice",
    name: "Rice",
    category: "Grain",
    unit: "cwt/acre",
    baseYield: 76,
    optimalTemp: { min: 68, max: 90 },
    optimalPrecip: { min: 5.0, max: 10.0 },
    optimalHumidity: { min: 65, max: 90 },
    growingSeasonDays: 120,
    heatStressThreshold: 95,
    frostSensitivity: 0.95,
    droughtSensitivity: 0.95,
    excessMoistureSensitivity: 0.1,
    description:
      "Rice requires abundant water and warm temperatures. It is typically grown in flooded paddies and is one of the most water-intensive crops.",
  },
  {
    id: "sorghum",
    name: "Grain Sorghum",
    category: "Grain",
    unit: "bu/acre",
    baseYield: 72,
    optimalTemp: { min: 65, max: 95 },
    optimalPrecip: { min: 2.0, max: 4.5 },
    optimalHumidity: { min: 35, max: 65 },
    growingSeasonDays: 100,
    heatStressThreshold: 100,
    frostSensitivity: 0.8,
    droughtSensitivity: 0.3,
    excessMoistureSensitivity: 0.5,
    description:
      "Sorghum is one of the most drought-tolerant grain crops. It thrives in hot, dry conditions and is an excellent choice for semi-arid regions.",
  },
  {
    id: "oats",
    name: "Oats",
    category: "Grain",
    unit: "bu/acre",
    baseYield: 64,
    optimalTemp: { min: 45, max: 72 },
    optimalPrecip: { min: 2.5, max: 4.5 },
    optimalHumidity: { min: 50, max: 75 },
    growingSeasonDays: 90,
    heatStressThreshold: 80,
    frostSensitivity: 0.4,
    droughtSensitivity: 0.6,
    excessMoistureSensitivity: 0.55,
    description:
      "Oats prefer cool, moist conditions and are sensitive to high heat. They are a reliable crop in northern climates.",
  },
  {
    id: "barley",
    name: "Barley",
    category: "Grain",
    unit: "bu/acre",
    baseYield: 74,
    optimalTemp: { min: 45, max: 75 },
    optimalPrecip: { min: 2.0, max: 4.0 },
    optimalHumidity: { min: 40, max: 65 },
    growingSeasonDays: 90,
    heatStressThreshold: 80,
    frostSensitivity: 0.35,
    droughtSensitivity: 0.55,
    excessMoistureSensitivity: 0.6,
    description:
      "Barley grows best in cool, dry environments. It has a short growing season and matures quickly.",
  },
  {
    id: "potatoes",
    name: "Potatoes",
    category: "Vegetable",
    unit: "cwt/acre",
    baseYield: 450,
    optimalTemp: { min: 55, max: 75 },
    optimalPrecip: { min: 3.0, max: 5.5 },
    optimalHumidity: { min: 60, max: 80 },
    growingSeasonDays: 100,
    heatStressThreshold: 85,
    frostSensitivity: 0.8,
    droughtSensitivity: 0.75,
    excessMoistureSensitivity: 0.7,
    description:
      "Potatoes prefer cool temperatures and consistent moisture. High heat inhibits tuber development, while excess moisture promotes disease.",
  },
  {
    id: "sugar_beets",
    name: "Sugar Beets",
    category: "Sugar",
    unit: "tons/acre",
    baseYield: 31,
    optimalTemp: { min: 50, max: 75 },
    optimalPrecip: { min: 2.5, max: 4.5 },
    optimalHumidity: { min: 50, max: 75 },
    growingSeasonDays: 160,
    heatStressThreshold: 85,
    frostSensitivity: 0.5,
    droughtSensitivity: 0.65,
    excessMoistureSensitivity: 0.6,
    description:
      "Sugar beets perform best in moderate temperatures with consistent moisture. They have a long growing season and accumulate sugar content throughout.",
  },
  {
    id: "sunflowers",
    name: "Sunflowers",
    category: "Oilseed",
    unit: "lbs/acre",
    baseYield: 1650,
    optimalTemp: { min: 64, max: 90 },
    optimalPrecip: { min: 2.0, max: 4.0 },
    optimalHumidity: { min: 35, max: 60 },
    growingSeasonDays: 90,
    heatStressThreshold: 95,
    frostSensitivity: 0.7,
    droughtSensitivity: 0.4,
    excessMoistureSensitivity: 0.65,
    description:
      "Sunflowers are moderately drought-tolerant with deep root systems. They prefer hot, dry conditions and are sensitive to excess moisture during flowering.",
  },
];

export interface WeatherSummary {
  avgTemp: number;
  maxTemp: number;
  minTemp: number;
  totalPrecipitation: number;
  avgHumidity: number;
  avgWindSpeed: number;
  totalET0: number;
  daysAbove90: number;
  daysBelow32: number;
  rainyDays: number;
}

export interface YieldForecast {
  forecastDays: number;
  estimatedYield: number;
  yieldRange: { low: number; high: number };
  yieldPercent: number; // percentage of base yield
  confidenceLevel: string;
  factors: YieldFactor[];
  overallScore: number;
  riskLevel: "low" | "moderate" | "high" | "severe";
}

export interface YieldFactor {
  name: string;
  score: number; // 0-100
  impact: "positive" | "neutral" | "negative";
  description: string;
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function temperatureScore(crop: CropProfile, weather: WeatherSummary): YieldFactor {
  const { avgTemp, daysAbove90, daysBelow32 } = weather;
  const { optimalTemp, heatStressThreshold, frostSensitivity } = crop;

  let score = 100;

  // Penalize for being outside optimal range
  if (avgTemp < optimalTemp.min) {
    const deficit = optimalTemp.min - avgTemp;
    score -= deficit * 3;
  } else if (avgTemp > optimalTemp.max) {
    const excess = avgTemp - optimalTemp.max;
    score -= excess * 4;
  }

  // Penalize for heat stress days
  score -= daysAbove90 * (avgTemp > heatStressThreshold ? 5 : 2);

  // Penalize for frost days
  score -= daysBelow32 * (frostSensitivity * 8);

  score = clamp(score, 0, 100);

  let impact: "positive" | "neutral" | "negative" = "neutral";
  let description = "";

  if (score >= 70) {
    impact = "positive";
    description = `Average temperature of ${avgTemp}F is within the optimal range for ${crop.name}.`;
  } else if (score >= 40) {
    impact = "neutral";
    description = `Average temperature of ${avgTemp}F is somewhat outside optimal range (${optimalTemp.min}-${optimalTemp.max}F).`;
  } else {
    impact = "negative";
    description = `Temperature conditions are unfavorable. Average ${avgTemp}F is well outside optimal range (${optimalTemp.min}-${optimalTemp.max}F).`;
  }

  if (daysAbove90 > 5) {
    description += ` ${daysAbove90} days exceeded 90F, causing potential heat stress.`;
  }
  if (daysBelow32 > 0) {
    description += ` ${daysBelow32} frost days detected, which may damage ${crop.name}.`;
  }

  return { name: "Temperature", score, impact, description };
}

function precipitationScore(crop: CropProfile, weather: WeatherSummary): YieldFactor {
  const { totalPrecipitation, rainyDays } = weather;
  const { optimalPrecip, droughtSensitivity, excessMoistureSensitivity } = crop;

  let score = 100;

  if (totalPrecipitation < optimalPrecip.min) {
    const deficit = (optimalPrecip.min - totalPrecipitation) / optimalPrecip.min;
    score -= deficit * 100 * droughtSensitivity;
  } else if (totalPrecipitation > optimalPrecip.max) {
    const excess = (totalPrecipitation - optimalPrecip.max) / optimalPrecip.max;
    score -= excess * 100 * excessMoistureSensitivity;
  }

  // Bonus for well-distributed rainfall
  if (rainyDays >= 8 && rainyDays <= 18) {
    score = Math.min(100, score + 5);
  }

  score = clamp(score, 0, 100);

  let impact: "positive" | "neutral" | "negative" = "neutral";
  let description = "";

  if (score >= 70) {
    impact = "positive";
    description = `Total precipitation of ${totalPrecipitation}" is adequate for ${crop.name}.`;
  } else if (score >= 40) {
    impact = "neutral";
    description = `Precipitation of ${totalPrecipitation}" is somewhat outside ideal (${optimalPrecip.min}-${optimalPrecip.max}"/month).`;
  } else {
    impact = "negative";
    if (totalPrecipitation < optimalPrecip.min) {
      description = `Drought conditions: only ${totalPrecipitation}" of rain in 30 days. ${crop.name} needs ${optimalPrecip.min}-${optimalPrecip.max}"/month.`;
    } else {
      description = `Excess moisture: ${totalPrecipitation}" of rain in 30 days. This may cause root rot or disease for ${crop.name}.`;
    }
  }

  return { name: "Precipitation", score, impact, description };
}

function humidityScore(crop: CropProfile, weather: WeatherSummary): YieldFactor {
  const { avgHumidity } = weather;
  const { optimalHumidity } = crop;

  let score = 100;

  if (avgHumidity < optimalHumidity.min) {
    const deficit = optimalHumidity.min - avgHumidity;
    score -= deficit * 2;
  } else if (avgHumidity > optimalHumidity.max) {
    const excess = avgHumidity - optimalHumidity.max;
    score -= excess * 2.5; // excess humidity slightly worse (disease risk)
  }

  score = clamp(score, 0, 100);

  let impact: "positive" | "neutral" | "negative" = "neutral";
  let description = "";

  if (score >= 70) {
    impact = "positive";
    description = `Average humidity of ${avgHumidity}% is within the preferred range for ${crop.name}.`;
  } else if (score >= 40) {
    impact = "neutral";
    description = `Humidity at ${avgHumidity}% is outside optimal (${optimalHumidity.min}-${optimalHumidity.max}%). May affect growth.`;
  } else {
    impact = "negative";
    if (avgHumidity > optimalHumidity.max) {
      description = `High humidity (${avgHumidity}%) increases disease risk for ${crop.name}. Optimal: ${optimalHumidity.min}-${optimalHumidity.max}%.`;
    } else {
      description = `Low humidity (${avgHumidity}%) may cause moisture stress for ${crop.name}. Optimal: ${optimalHumidity.min}-${optimalHumidity.max}%.`;
    }
  }

  return { name: "Humidity", score, impact, description };
}

function windScore(weather: WeatherSummary): YieldFactor {
  const { avgWindSpeed } = weather;
  let score = 100;

  if (avgWindSpeed > 15) {
    score -= (avgWindSpeed - 15) * 5;
  }
  if (avgWindSpeed > 25) {
    score -= (avgWindSpeed - 25) * 8;
  }

  score = clamp(score, 0, 100);

  const impact: "positive" | "neutral" | "negative" =
    score >= 70 ? "positive" : score >= 40 ? "neutral" : "negative";
  const description =
    score >= 70
      ? `Wind speeds averaging ${avgWindSpeed} mph are manageable for most crops.`
      : score >= 40
        ? `Moderate wind stress at ${avgWindSpeed} mph may affect plant health.`
        : `High wind speeds (${avgWindSpeed} mph) can cause physical damage and moisture loss.`;

  return { name: "Wind", score, impact, description };
}

export function calculateYieldForecast(
  crop: CropProfile,
  weather: WeatherSummary,
  forecastDays: 60 | 90
): YieldForecast {
  const tempFactor = temperatureScore(crop, weather);
  const precipFactor = precipitationScore(crop, weather);
  const humidFactor = humidityScore(crop, weather);
  const windFactor = windScore(weather);

  const factors = [tempFactor, precipFactor, humidFactor, windFactor];

  // Weighted overall score: temp most important, then precip, humidity, wind
  const overallScore =
    tempFactor.score * 0.35 +
    precipFactor.score * 0.30 +
    humidFactor.score * 0.25 +
    windFactor.score * 0.10;

  // Apply forecast horizon adjustment
  // Longer forecasts have more uncertainty but also more time for conditions to normalize
  const horizonMultiplier = forecastDays === 60 ? 1.0 : 0.95;

  const yieldPercent = (overallScore / 100) * horizonMultiplier;
  const estimatedYield = Math.round(crop.baseYield * yieldPercent * 10) / 10;

  // Wider range for longer forecast
  const uncertainty = forecastDays === 60 ? 0.10 : 0.15;
  const yieldRange = {
    low: Math.round(estimatedYield * (1 - uncertainty) * 10) / 10,
    high: Math.round(estimatedYield * (1 + uncertainty) * 10) / 10,
  };

  const confidenceLevel =
    forecastDays === 60
      ? overallScore >= 60
        ? "Moderate-High"
        : "Moderate"
      : overallScore >= 60
        ? "Moderate"
        : "Low-Moderate";

  const riskLevel: "low" | "moderate" | "high" | "severe" =
    overallScore >= 75
      ? "low"
      : overallScore >= 55
        ? "moderate"
        : overallScore >= 35
          ? "high"
          : "severe";

  return {
    forecastDays,
    estimatedYield,
    yieldRange,
    yieldPercent: Math.round(yieldPercent * 100),
    confidenceLevel,
    factors,
    overallScore: Math.round(overallScore),
    riskLevel,
  };
}
