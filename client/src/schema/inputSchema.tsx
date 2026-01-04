import { z } from "zod";

export const inputSchema = z.object({
  value: z.string().min(3, "Minimum 3 Charcters are required ").max(255,"Maximum 255 charcters allowed")
})

export type InputSchema = z.infer<typeof inputSchema>
