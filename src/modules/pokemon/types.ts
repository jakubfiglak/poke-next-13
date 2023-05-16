import { z } from "zod";
import { pokemonSchema } from "./schemas";

export type Pokemon = z.infer<typeof pokemonSchema>;
