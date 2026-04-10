import { profile } from "@/data/portfolio";
import { Linkedin, Mail, MessageCircle } from "lucide-react";

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

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          <span className="text-gradient">Vamos Conversar?</span>
        </h2>
        <p className="text-muted-foreground mb-10">
          Gosta de falar sobre tecnologia, dados, processos, entre em contato.
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
          © {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
