import { useLanguage } from "@/contexts/LanguageContext";
import { GraduationCap, Award } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CoursesSection = () => {
  const { data } = useLanguage();
  const { coursesData, labels } = data;

  return (
    <section className="py-12 px-6">
      <div className="container max-w-5xl text-center">
        <Dialog>
          <DialogTrigger asChild>
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border bg-card text-foreground font-medium transition-all duration-300 hover:border-primary/40 hover:text-primary hover:glow-primary">
              <GraduationCap className="w-5 h-5" />
              {labels.coursesButton}
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl font-heading flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                {labels.coursesTitle}
              </DialogTitle>
              <p className="text-sm text-muted-foreground">{labels.coursesSubtitle}</p>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              {coursesData.map((course) => (
                <div
                  key={course.id}
                  className="flex gap-3 p-4 rounded-xl bg-muted/30 border border-border/30"
                >
                  <div className="mt-0.5">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{course.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {course.institution} · {course.year}
                    </p>
                    {course.description && (
                      <p className="text-xs text-muted-foreground/70 mt-1">{course.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default CoursesSection;
