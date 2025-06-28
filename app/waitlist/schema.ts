import { z } from "zod";

export const formSchema = z.object({
  Email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});
