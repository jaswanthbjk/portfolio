"use server";

import { suggestSkills, type SuggestSkillsInput, type SuggestSkillsOutput } from "@/ai/flows/suggest-skills";
import { z } from "zod";

const SuggestSkillsActionInput = z.object({
  projectDescription: z.string(),
});

export async function suggestSkillsAction(input: SuggestSkillsInput): Promise<SuggestSkillsOutput> {
  const parsedInput = SuggestSkillsActionInput.safeParse(input);
  if (!parsedInput.success) {
    throw new Error("Invalid input for suggesting skills.");
  }
  
  try {
    const result = await suggestSkills(parsedInput.data);
    return result;
  } catch (error) {
    console.error("Error in suggestSkillsAction:", error);
    throw new Error("Failed to get skill suggestions from AI.");
  }
}
