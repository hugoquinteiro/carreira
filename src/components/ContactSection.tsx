import { useLanguage } from "@/contexts/LanguageContext";
import { Linkedin, Mail, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const { data } = useLanguage();
  const { profile, labels } = data;

  const contacts = [
    {
      label: "LinkedIn",
      icon: Linkedin,
      href: profile.linkedin,
      className: "hover:border-[#0A66C2]/40 hover:text-[#0A66C2]",
    },
    {
      label: "Email",
      icon: Mail,
      href: `mailto:${profile.email}`,
      className: "hover:border-primary/40 hover:text-primary",
    },
    {
      label: "WhatsApp",
      icon: MessageCircle,
      href: `https://wa.me/${profile.whatsapp}`,
      className: "hover:border-green-500/40 hover:text-green-500",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          <span className="text-gradient">{labels.contactTitle}</span>
        </h2>
        <p className="text-muted-foreground mb-10">
          {labels.contactSubtitle}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-border bg-card text-foreground font-medium transition-all duration-300 ${c.className}`}
            >
              <c.icon className="w-5 h-5" />
              {c.label}
            </a>
          ))}
        </div>

        <p className="mt-16 text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} {profile.name}. {labels.contactRights}
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
