
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
import { Github, Linkedin, Mail, User, Briefcase, FolderGit, MessageSquare, Phone, GraduationCap } from 'lucide-react';
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
    <div className="md:w-2/3 text-justify">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">Jaswanth Bandlamudi</h1>
      <p className="text-lg text-muted-foreground mb-6 text-justify">
        Computer Vision and Deep Learning Engineer with expertise in 3D perception, including LiDAR data processing, segmentation, and synthetic data generation. Experienced in building pipelines for annotated data creation and managing SLURM-based GPU clusters for scalable training. Skilled in independent R&D, cross-functional
collaboration, and mentoring working students through their transition to full-time roles.
      </p>
      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
        {['Deep Learning', 'Computer Vision', '3D Perception', 'LiDAR', 'Point Cloud Processing', 'TensorFlow', 'PyTorch', 'Keras', 'Docker', 'Google Cloud', 'SLURM', 'Python'].map(skill => (
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
            <span className="font-semibold">Senior Deep Learning Engineer, RIIICO GmbH</span>
            <span className="text-sm text-muted-foreground">Jan 2022 - Present</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-justify">
          - Developed advanced semantic and instance segmentation models for LiDAR point cloud data, demonstrating proficiency in state-of-the-art computer vision techniques.<br />
          - Engineered a custom synthetic data generation framework, significantly augmenting training datasets and improving model generalization and robustness.<br />
          - Contributed to the setup and administration of a GPU compute cluster managed with SLURM, enabling scalable training and efficient job scheduling.<br />
          - Managed a team of working students, providing technical mentorship and guidance, and oversaw their successful transition into full-time roles within the company.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <div className="flex flex-col sm:flex-row justify-between w-full text-left pr-4">
            <span className="font-semibold">Senior Automotive Software Engineer, General Motors</span>
            <span className="text-sm text-muted-foreground">Jul 2015 - Jun 2018</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-justify">
          - Performed verification and validation of automotive electronic software requirements, ensuring alignment with functional and system-level specifications.<br />
          - Set up and maintained a dSPACE-based Hardware-in-the-Loop (HIL) simulation environment for automated testing; resolved plant model issues to ensure accurate system behavior.<br />
          - Contributed to the development of features and modules for power optimization, enabling efficient climate control and cabin conditioning.<br />
          - Collaborated across teams during both Rapid Application Development (RAD) and Detailed Design (DD) phases to ensure requirement traceability and functional completeness.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </Section>
);

const EducationSection = () => (
    <Section id="education">
      <SectionTitle icon={<GraduationCap />}>Education</SectionTitle>
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex flex-col sm:flex-row justify-between w-full text-left pr-4">
              <span className="font-semibold">Master of Science in Computer Science, University of Applied Sciences Bonn-Rhein-Sieg</span>
              <span className="text-sm text-muted-foreground">Sep 2018 - Sep 2021</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-justify">
            <strong>Thesis:</strong> Benchmarking Out-of-Distribution detection methods in context of 2D object detection DFKI, Bremen<br />
            - Benchmark proposal for evaluating out-of-distribution detection in case of 2D object detection.<br />
            - Develop a classical OOD detection method based on classical and Uncertainty-based methods.<br />
            - Compare the methods using various evaluation techniques.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <div className="flex flex-col sm:flex-row justify-between w-full text-left pr-4">
              <span className="font-semibold">Bachelor of Technology in Electrical and Electronics Engineering, K L University</span>
              <span className="text-sm text-muted-foreground">Aug 2011 - May 2015</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-justify">
            <strong>Thesis:</strong> Develop An All-Terrain Electric Vehicle Drive Controls<br />
            - Develop an accelerator and regenerative braking system that can be embedded into the hydraulic braking system<br />
            - Develop a cooling system for the Power electronic drive and charger using Peltier plates.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Section>
);

const ProjectsSection = () => (
  <Section id="projects" className="bg-card/50">
    <SectionTitle icon={<FolderGit />}>Projects</SectionTitle>
    <ProjectForm />
  </Section>
);

const ContactSection = () => (
  <Section id="contact">
    <SectionTitle icon={<MessageSquare />}>Get In Touch</SectionTitle>
    <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
      <div className="space-y-6">
        <p className="text-muted-foreground text-justify">
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
        <EducationSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
