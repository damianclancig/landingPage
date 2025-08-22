import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "validation-name-required").max(100, "validation-name-maxLength"),
  email: z.string().email("validation-email-invalid"),
  message: z.string().min(10, "validation-message-minLength").max(1000, "validation-message-maxLength"),
});
