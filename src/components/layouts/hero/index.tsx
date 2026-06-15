export default function Hero() {
  return (
    <div className="w-full h-[400px] bg-gradient-to-b from-background/50 to-background/80 rounded-xl flex flex-col justify-center items-center text-center gap-4">
      <h1 className="text-4xl font-bold text-foreground">
        Protect your Discord server from raids and attacks.
      </h1>
      <p className="text-lg text-muted-foreground max-w-[600px]">
        AntiRaid is a powerful and easy-to-use bot that provides comprehensive
        protection against raids, spam and other malicious activities on your
        Discord server.
      </p>
    </div>
  );
}
