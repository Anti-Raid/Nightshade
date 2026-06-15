export default function Hero() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <main className="flex flex-col items-center gap-2">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Hello from <span className="text-primary">AntiRaid</span>
        </h1>
        <p className="text-muted-foreground text-sm">
          Authentication & session management
        </p>
      </main>
    </div>
  );
}
