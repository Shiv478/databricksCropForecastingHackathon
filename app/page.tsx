import { Header } from "@/components/header";
import { Dashboard } from "@/components/dashboard";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6 lg:px-8">
        <Dashboard />
      </main>
      <footer className="border-t bg-card">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-xs text-muted-foreground">
            CropCast - Weather data from Open-Meteo. Yield estimates are
            informational only.
          </p>
          <p className="hidden text-xs text-muted-foreground sm:block">
            Base yields from USDA national averages
          </p>
        </div>
      </footer>
    </div>
  );
}
