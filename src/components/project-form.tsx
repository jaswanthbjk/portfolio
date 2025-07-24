"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { PlusCircle, Loader2, Wand2, X, Github, ExternalLink } from 'lucide-react';
import { suggestSkillsAction } from '@/lib/actions';

const projectSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters long.'),
  description: z.string().min(10, 'Description must be at least 10 characters long.'),
  imageUrl: z.string().url().optional(),
  projectUrl: z.string().url().optional(),
  githubUrl: z.string().url().optional(),
  skills: z.array(z.string()).optional(),
});

type Project = z.infer<typeof projectSchema> & { data_ai_hint?: string };

const initialProjects: Project[] = [
  {
    title: 'Uncertainty Estimation in 3D Object Detection',
    description: 'Implemented Frustum-PointNet for 3D object detection using RGB images and LiDAR point clouds with TensorFlow and Keras Functional API. Quantified uncertainty using Bayesian Neural Networks, ensemble, and sub-ensemble techniques.',
    imageUrl: 'https://placehold.co/600x400.png',
    data_ai_hint: '3d object detection',
    projectUrl: '#', // Placeholder for Report
    githubUrl: 'https://github.com/jaswanthbjk',
    skills: ['TensorFlow', 'Keras', '3D Object Detection', 'Bayesian Neural Networks'],
  },
  {
    title: 'Soccer-Robot Object Detection and Segmentation',
    description: 'Designed a segmentation model based on NimbRoNet2 with ResNet-18 backbone and feature sharing for real-time performance. Implemented location-dependent convolutions; evaluated using F1-score, IoU, accuracy, and precision-recall metrics.',
    imageUrl: 'https://placehold.co/600x400.png',
    data_ai_hint: 'robotics computer vision',
    projectUrl: '#', // Placeholder for Report
    githubUrl: 'https://github.com/jaswanthbjk',
    skills: ['PyTorch', 'ResNet-18', 'Real-time Object Detection', 'Image Segmentation'],
  },
  {
    title: 'Bottle Cap Detection and Classification',
    description: 'Created a labeled dataset using LabelMe for crown cap detection. Applied transfer learning with SSD and VGG-16 backbone for high accuracy and reduced training time. Containerized the model using Docker and deployed on Google Cloud.',
    imageUrl: 'https://placehold.co/600x400.png',
    data_ai_hint: 'image classification cloud',
    projectUrl: '#', // Placeholder for Report
    githubUrl: 'https://github.com/jaswanthbjk',
    skills: ['Transfer Learning', 'SSD', 'VGG-16', 'Docker', 'Google Cloud Platform'],
  },
];

export function ProjectForm() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isLoadingSuggestions, setLoadingSuggestions] = useState(false);
  const [suggestedSkills, setSuggestedSkills] = useState<string[]>([]);
  const { toast } = useToast();

  const form = useForm<Project>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: '',
      description: '',
      skills: [],
    },
  });

  const handleSuggestSkills = async () => {
    const description = form.getValues('description');
    if (!description || description.length < 10) {
      toast({
        variant: 'destructive',
        title: 'Description too short',
        description: 'Please provide a more detailed project description for better suggestions.',
      });
      return;
    }
    setLoadingSuggestions(true);
    try {
      const result = await suggestSkillsAction({ projectDescription: description });
      const currentSkills = new Set(form.getValues('skills') || []);
      const newSkills = result.suggestedSkills.filter(skill => !currentSkills.has(skill));
      setSuggestedSkills(newSkills);
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error suggesting skills',
        description: 'Could not fetch AI-powered suggestions. Please try again.',
      });
    } finally {
      setLoadingSuggestions(false);
    }
  };
  
  const addSkill = (skill: string) => {
    const currentSkills = form.getValues('skills') || [];
    if (!currentSkills.includes(skill)) {
      form.setValue('skills', [...currentSkills, skill]);
      setSuggestedSkills(prev => prev.filter(s => s !== skill));
    }
  };

  const removeSkill = (skillToRemove: string) => {
    const currentSkills = form.getValues('skills') || [];
    form.setValue('skills', currentSkills.filter(skill => skill !== skillToRemove));
  };

  const onSubmit: SubmitHandler<Project> = (data) => {
    setProjects(prev => [...prev, { ...data, imageUrl: 'https://placehold.co/600x400.png', data_ai_hint: 'new project' }]);
    toast({
      title: 'Project Added!',
      description: `"${data.title}" has been added to your portfolio.`,
    });
    setDialogOpen(false);
    form.reset();
    setSuggestedSkills([]);
  };

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden group transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="p-0">
                <Image src={project.imageUrl!} alt={project.title} data-ai-hint={project.data_ai_hint} width={600} height={400} className="w-full h-auto object-cover" />
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="mb-2 text-xl">{project.title}</CardTitle>
              <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills?.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
              </div>
              <div className="flex gap-4">
                {project.projectUrl && <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer"><Button variant="outline"><ExternalLink className="mr-2 h-4 w-4" />View Report</Button></Link>}
                {project.githubUrl && <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer"><Button variant="ghost"><Github className="mr-2 h-4 w-4" />Source Code</Button></Link>}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button size="lg"><PlusCircle className="mr-2 h-5 w-5" />Add New Project</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add a New Project</DialogTitle>
              <DialogDescription>
                Fill in the details below. Describe your project to get AI-powered skill suggestions.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField control={form.control} name="title" render={({ field }) => (
                  <FormItem><FormLabel>Project Title</FormLabel><FormControl><Input placeholder="e.g., My Awesome App" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="description" render={({ field }) => (
                  <FormItem><FormLabel>Description</FormLabel><FormControl><Textarea placeholder="Describe your project..." {...field} rows={4} /></FormControl><FormMessage /></FormItem>
                )} />
                
                <div className="space-y-2">
                  <FormLabel>Skills</FormLabel>
                  <div className="flex flex-wrap gap-2">
                    {(form.watch('skills') || []).map(skill => (
                      <Badge key={skill} variant="default" className="flex items-center gap-1">
                        {skill}
                        <button type="button" onClick={() => removeSkill(skill)} className="rounded-full hover:bg-primary-foreground/20 p-0.5"><X className="h-3 w-3" /></button>
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <Button type="button" variant="outline" size="sm" onClick={handleSuggestSkills} disabled={isLoadingSuggestions}>
                    {isLoadingSuggestions ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                    Suggest Skills with AI
                  </Button>
                </div>
                
                {suggestedSkills.length > 0 && (
                  <div className="space-y-2 p-3 bg-muted/50 rounded-md">
                     <FormLabel className="text-sm">AI Suggestions</FormLabel>
                     <div className="flex flex-wrap gap-2">
                       {suggestedSkills.map(skill => (
                         <Button type="button" size="sm" variant="secondary" key={skill} onClick={() => addSkill(skill)}>
                           <PlusCircle className="mr-2 h-4 w-4" />
                           {skill}
                         </Button>
                       ))}
                     </div>
                  </div>
                )}
                
                <DialogFooter>
                  <DialogClose asChild><Button type="button" variant="ghost">Cancel</Button></DialogClose>
                  <Button type="submit">Add Project</Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
