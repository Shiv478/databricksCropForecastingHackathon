import { Wheat } from "lucide-react";

export function Header() {
  return (
    <header className="border-b bg-card">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary">
            <Wheat className="size-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-semibold leading-tight text-foreground">
              CropCast
            </h1>
            <p className="text-xs text-muted-foreground">
              Crop Yield Forecasting
            </p>
          </div>
        </div>
        <div className="ml-auto hidden items-center gap-1.5 sm:flex">
          <span className="inline-block size-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium text-muted-foreground">
            Live Weather Data
          </span>
        </div>
      </div>
    </header>
  );
}
