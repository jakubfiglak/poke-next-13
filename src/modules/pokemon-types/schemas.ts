import { z } from "zod";

export const typeBasicInfoSchema = z.object({
  name: z.string(),
  url: z.string().url(),
});

export const typeBasicInfoResponseSchema = z.object({
  count: z.number(),
  results: z.array(typeBasicInfoSchema),
});
