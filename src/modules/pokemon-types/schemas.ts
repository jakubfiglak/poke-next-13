import { z } from "zod";

export const typeBasicInfoSchema = z.object({
  name: z.string(),
  url: z.string().url(),
});

export const typeBasicInfoResponseSchema = z.object({
  count: z.number(),
  results: z.array(typeBasicInfoSchema),
});

export const typeSchema = z.object({
  id: z.number(),
  name: z.string(),
  pokemon: z.array(
    z.object({
      pokemon: z.object({
        name: z.string(),
        url: z.string().url(),
      }),
      slot: z.number(),
    })
  ),
});
