import { z } from "zod";

export const pokemonSchema = z.object({
  id: z.number(),
  name: z.string(),
  height: z.number(),
  weight: z.number(),
  sprites: z.object({
    front_default: z.string().url().nullable(),
  }),
  types: z.array(
    z.object({
      slot: z.number(),
      type: z.object({ name: z.string(), url: z.string().url() }),
    })
  ),
});
