import { useLanguage } from "@/contexts/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Info, Target, Lightbulb, BookOpen } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ProjectsSection = () => {
  const { data } = useLanguage();
  const { projectsData, labels } = data;
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="projects" className="py-24 px-6">
      <div className="container max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          <span className="text-gradient">{labels.projectsTitle}</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          {labels.projectsSubtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.map((project, i) => (
            <div
              key={project.id}
              className={`group bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:glow-primary flex flex-col ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.technologies.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs">
                    {t}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3 mt-auto items-center">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Demo
                  </a>
                )}

                {(project.story || project.metrics?.length || project.learnings?.length) && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors ml-auto">
                        <Info className="w-4 h-4" /> {labels.projectMore}
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="font-heading text-xl">{project.name}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-5 mt-2">
                        {project.story && (
                          <div>
                            <h4 className="text-sm font-semibold flex items-center gap-1.5 mb-2 text-primary">
                              <BookOpen className="w-4 h-4" /> {labels.projectStory}
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">{project.story}</p>
                          </div>
                        )}
                        {project.metrics && project.metrics.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold flex items-center gap-1.5 mb-2 text-primary">
                              <Target className="w-4 h-4" /> {labels.projectMetrics}
                            </h4>
                            <ul className="space-y-1.5">
                              {project.metrics.map((m) => (
                                <li key={m} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                                  {m}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {project.learnings && project.learnings.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold flex items-center gap-1.5 mb-2 text-primary">
                              <Lightbulb className="w-4 h-4" /> {labels.projectLearnings}
                            </h4>
                            <ul className="space-y-1.5">
                              {project.learnings.map((l) => (
                                <li key={l} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                                  {l}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
