import { profile } from "@/data/portfolio";
import { ChevronDown } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeroSection = () => {
  const initials = profile.name.split(" ").map(n => n[0]).join("");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative z-10 px-6 text-center">
        {/* Avatar */}
        <div className="fade-up mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-accent p-[3px]">
              <Avatar className="w-full h-full">
                {profile.photo && (
                  <AvatarImage
                    src={profile.photo}
                    alt={profile.name}
                    className="object-cover"
                  />
                )}
                <AvatarFallback className="bg-card text-4xl md:text-5xl font-heading font-bold text-primary">
                  {initials}
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-background" />
          </div>
        </div>

        <h1 className="fade-up fade-up-delay-1 text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-4">
          <span className="text-gradient">{profile.name}</span>
        </h1>

        <p className="fade-up fade-up-delay-2 text-lg md:text-xl text-muted-foreground font-medium mb-6 tracking-wide">
          {profile.title}
        </p>

        <p className="fade-up fade-up-delay-3 max-w-2xl mx-auto text-secondary-foreground/80 leading-relaxed text-sm md:text-base">
          {profile.summary}
        </p>

        {/* Scroll indicator */}
        <a
          href="#timeline"
          className="inline-flex flex-col items-center mt-16 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-widest mb-2">Explorar</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
