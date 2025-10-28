import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { inngest } from "./client";
import { generateText } from "ai";

const google = createGoogleGenerativeAI();

export const execute = inngest.createFunction(
  { id: "execute-ai" },
  { event: "execute/ai" },
  async ({ event, step }) => {
    await step.sleep("pretend","5s")
    const {steps} = await step.ai.wrap("gemini-generate-text",generateText,{
      model:google("gemini-2.5-flash"),
      system:"Your are a helpful assistant.",
      prompt:"What is 2 + 2?"
    })
    return steps;
  }
);
