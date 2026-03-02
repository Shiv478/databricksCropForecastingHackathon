import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  if (!lat || !lon) {
    return NextResponse.json(
      { error: "Latitude and longitude are required" },
      { status: 400 }
    );
  }

  try {
    // Fetch past 30 days of weather data from Open-Meteo
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 30);

    const formatDate = (d: Date) => d.toISOString().split("T")[0];

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,temperature_2m_mean,precipitation_sum,relative_humidity_2m_mean,wind_speed_10m_max,et0_fao_evapotranspiration&past_days=30&forecast_days=1&temperature_unit=fahrenheit&precipitation_unit=inch&timezone=America%2FChicago`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Open-Meteo API error: ${response.statusText}`);
    }

    const data = await response.json();

    // Calculate summary statistics
    const daily = data.daily;
    const temps = daily.temperature_2m_mean.filter(
      (t: number | null) => t !== null
    ) as number[];
    const maxTemps = daily.temperature_2m_max.filter(
      (t: number | null) => t !== null
    ) as number[];
    const minTemps = daily.temperature_2m_min.filter(
      (t: number | null) => t !== null
    ) as number[];
    const precip = daily.precipitation_sum.filter(
      (p: number | null) => p !== null
    ) as number[];
    const humidity = daily.relative_humidity_2m_mean.filter(
      (h: number | null) => h !== null
    ) as number[];
    const wind = daily.wind_speed_10m_max.filter(
      (w: number | null) => w !== null
    ) as number[];
    const et0 = daily.et0_fao_evapotranspiration.filter(
      (e: number | null) => e !== null
    ) as number[];

    const avg = (arr: number[]) =>
      arr.length > 0 ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;
    const sum = (arr: number[]) => arr.reduce((a, b) => a + b, 0);

    const summary = {
      avgTemp: Math.round(avg(temps) * 10) / 10,
      maxTemp: Math.round(Math.max(...maxTemps) * 10) / 10,
      minTemp: Math.round(Math.min(...minTemps) * 10) / 10,
      totalPrecipitation: Math.round(sum(precip) * 100) / 100,
      avgHumidity: Math.round(avg(humidity) * 10) / 10,
      avgWindSpeed: Math.round(avg(wind) * 10) / 10,
      totalET0: Math.round(sum(et0) * 100) / 100,
      daysAbove90: temps.filter((t) => t > 90).length,
      daysBelow32: minTemps.filter((t) => t < 32).length,
      rainyDays: precip.filter((p) => p > 0.01).length,
    };

    // Build daily data for charts
    const dailyData = daily.time.map((date: string, i: number) => ({
      date,
      avgTemp: daily.temperature_2m_mean[i],
      maxTemp: daily.temperature_2m_max[i],
      minTemp: daily.temperature_2m_min[i],
      precipitation: daily.precipitation_sum[i],
      humidity: daily.relative_humidity_2m_mean[i],
      wind: daily.wind_speed_10m_max[i],
    }));

    return NextResponse.json({
      summary,
      dailyData,
      location: { lat: parseFloat(lat), lon: parseFloat(lon) },
      period: {
        start: formatDate(startDate),
        end: formatDate(endDate),
      },
    });
  } catch (error) {
    console.error("Weather API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch weather data" },
      { status: 500 }
    );
  }
}
