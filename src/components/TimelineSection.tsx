import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { TimelineItemType } from "@/data/portfolio-br";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GraduationCap, Briefcase, Award, Wrench, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Filter = "all" | TimelineItemType;

const TimelineSection = () => {
  const { data } = useLanguage();
  const { timelineData, labels } = data;
  const [filter, setFilter] = useState<Filter>("all");
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filtered = timelineData.filter(
    (item) => filter === "all" || item.type === filter
  );

  const filterButtons: { label: string; value: Filter; icon: React.ReactNode }[] = [
    { label: labels.filterAll, value: "all", icon: null },
    { label: labels.filterStudy, value: "study", icon: <GraduationCap className="w-4 h-4" /> },
    { label: labels.filterWork, value: "work", icon: <Briefcase className="w-4 h-4" /> },
  ];

  return (
    <section ref={sectionRef} id="timeline" className="py-24 px-6">
      <div className="container max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          <span className="text-gradient">{labels.timelineTitle}</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          {labels.timelineSubtitle}
        </p>

        <div className="flex justify-center gap-3 mb-12">
          {filterButtons.map((btn) => (
            <button
              key={btn.value}
              onClick={() => setFilter(btn.value)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                ${filter === btn.value
                  ? "bg-primary text-primary-foreground glow-primary"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
            >
              {btn.icon}
              {btn.label}
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <Accordion type="single" collapsible className="space-y-6">
            {filtered.map((item, index) => {
              const isLeft = index % 2 === 0;
              const Icon = item.type === "study" ? GraduationCap : Briefcase;
              const dotColor = item.type === "study" ? "bg-study" : "bg-work";

              return (
                <div
                  key={item.id}
                  className={`relative flex items-start transition-all duration-500 ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ${dotColor} border-4 border-background z-10 ${item.isCurrent ? "ring-4 ring-primary/30 animate-pulse" : ""}`} />

                  <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
                    <AccordionItem value={item.id} className="border-none">
                      <AccordionTrigger className="bg-card hover:bg-card/80 rounded-xl px-5 py-4 hover:no-underline transition-all group glow-primary/0 hover:glow-primary">
                        <div className="flex flex-col items-start text-left gap-1">
                          <div className="flex items-center gap-2">
                            <Icon className={`w-4 h-4 ${item.type === "study" ? "text-study" : "text-work"}`} />
                            <span className="text-xs font-medium text-muted-foreground">
                              {item.startYear} — {item.endYear}
                            </span>
                            {item.isCurrent && (
                              <Badge variant="secondary" className="text-[10px] bg-primary/20 text-primary border-none">
                                {labels.timelineCurrent}
                              </Badge>
                            )}
                          </div>
                          <span className="font-heading font-semibold text-sm md:text-base text-foreground">
                            {item.title}
                          </span>
                          <span className="text-xs text-muted-foreground">{item.institution}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="bg-card rounded-b-xl px-5 pb-5 -mt-2">
                        <p className="text-sm text-secondary-foreground/80 mb-4">{item.description}</p>

                        <div className="space-y-3">
                          <div>
                            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5 mb-2">
                              <Wrench className="w-3 h-3" /> {labels.timelineActivities}
                            </h4>
                            <ul className="text-sm space-y-1 text-secondary-foreground/70">
                              {item.activities.map((a) => (
                                <li key={a} className="flex items-start gap-2">
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                                  {a}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {item.achievements.length > 0 && (
                            <div>
                              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5 mb-2">
                                <Star className="w-3 h-3" /> {labels.timelineAchievements}
                              </h4>
                              <ul className="text-sm space-y-1 text-secondary-foreground/70">
                                {item.achievements.map((a) => (
                                  <li key={a} className="flex items-start gap-2">
                                    <Award className="w-3.5 h-3.5 mt-0.5 text-accent shrink-0" />
                                    {a}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          <div>
                            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                              {labels.timelineTechnologies}
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                              {item.technologies.map((t) => (
                                <Badge key={t} variant="secondary" className="text-xs bg-secondary text-secondary-foreground">
                                  {t}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                </div>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
