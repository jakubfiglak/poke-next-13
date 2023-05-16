import { z } from "zod";
import { typeBasicInfoSchema } from "./schemas";

export type TypeBasicInfo = z.infer<typeof typeBasicInfoSchema>;
