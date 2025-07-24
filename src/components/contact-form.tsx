"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  return (
    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Form submitted! (Demo)") }}>
      <Input placeholder="Your Name" required aria-label="Your Name" />
      <Input type="email" placeholder="Your Email" required aria-label="Your Email" />
      <Textarea placeholder="Your Message" rows={5} required aria-label="Your Message" />
      <Button type="submit" className="w-full">Send Message</Button>
    </form>
  );
}
