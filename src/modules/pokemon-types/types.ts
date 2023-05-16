import { z } from "zod";
import { typeBasicInfoSchema, typeSchema } from "./schemas";

export type TypeBasicInfo = z.infer<typeof typeBasicInfoSchema>;
export type Type = z.infer<typeof typeSchema>;
