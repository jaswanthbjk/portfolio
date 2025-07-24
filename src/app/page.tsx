import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProjectForm } from "@/components/project-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, User, Briefcase, FolderGit, MessageSquare, Phone } from 'lucide-react';
import { ContactForm } from "@/components/contact-form";

const Section = ({ id, children, className }: { id: string, children: React.ReactNode, className?: string }) => (
  <section id={id} className={`container mx-auto px-4 py-16 md:py-24 ${className}`}>
    {children}
  </section>
);

const SectionTitle = ({ children, icon }: { children: React.ReactNode, icon: React.ReactNode }) => (
  <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center flex items-center justify-center gap-4">
    {icon}
    {children}
  </h2>
);

const AboutSection = () => (
  <Section id="about" className="flex flex-col md:flex-row items-center gap-12">
    <div className="md:w-1/3 flex justify-center">
      <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-lg">
        <Image src="https://placehold.co/400x400.png" alt="Jaswanth Bandlamudi" data-ai-hint="professional headshot" layout="fill" objectFit="cover" />
      </div>
    </div>
    <div className="md:w-2/3 text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Jaswanth Bandlamudi</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Innovative Full-Stack Developer with 5+ years of experience in building and maintaining responsive web applications. Proficient in JavaScript, React, and Node.js. Passionate about creating intuitive user experiences and solving complex problems.
      </p>
      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
        {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Firebase', 'GraphQL'].map(skill => (
          <Badge key={skill} variant="secondary">{skill}</Badge>
        ))}
      </div>
    </div>
  </Section>
);

const ExperienceSection = () => (
  <Section id="experience" className="bg-card/50">
    <SectionTitle icon={<Briefcase />}>Work Experience</SectionTitle>
    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className="flex flex-col sm:flex-row justify-between w-full text-left pr-4">
            <span className="font-semibold">Senior Software Engineer, Tech Corp</span>
            <span className="text-sm text-muted-foreground">Jan 2021 - Present</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          - Led the development of a new client-facing dashboard using React and Next.js, improving user engagement by 25%.<br />
          - Architected and implemented a scalable microservices backend with Node.js and Docker, reducing server costs by 15%.<br />
          - Mentored junior developers and conducted code reviews to maintain high code quality standards.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <div className="flex flex-col sm:flex-row justify-between w-full text-left pr-4">
            <span className="font-semibold">Software Developer, Innovate LLC</span>
            <span className="text-sm text-muted-foreground">Jun 2018 - Dec 2020</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          - Developed and maintained features for a large-scale e-commerce platform using React and Redux.<br />
          - Collaborated with product managers and designers to translate requirements into technical solutions.<br />
          - Improved application performance by optimizing database queries and front-end rendering.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </Section>
);

const ProjectsSection = () => (
  <Section id="projects">
    <SectionTitle icon={<FolderGit />}>Projects</SectionTitle>
    <ProjectForm />
  </Section>
);

const ContactSection = () => (
  <Section id="contact" className="bg-card/50">
    <SectionTitle icon={<MessageSquare />}>Get In Touch</SectionTitle>
    <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
      <div className="space-y-6">
        <p className="text-muted-foreground">
          I'm currently open to new opportunities. If you have a project in mind or just want to connect, feel free to reach out.
        </p>
        <div className="space-y-4">
           <a href="mailto:jaswanth.bandlamudi@outlook.de" className="flex items-center gap-4 group">
            <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-primary transition-colors">jaswanth.bandlamudi@outlook.de</span>
          </a>
          <a href="tel:+4915226511608" className="flex items-center gap-4 group">
            <Phone className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-primary transition-colors">+49-15226511608</span>
          </a>
          <a href="https://linkedin.com/in/jaswban" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
            <Linkedin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-primary transition-colors">LinkedIn Profile</span>
          </a>
          <a href="https://github.com/jaswanthbjk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
            <Github className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-primary transition-colors">GitHub Profile</span>
          </a>
        </div>
      </div>
      <ContactForm />
    </div>
  </Section>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <main className="flex-1">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
