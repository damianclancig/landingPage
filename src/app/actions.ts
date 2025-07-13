"use server";

import { z } from "zod";
import { Resend } from "resend";
import ContactFormEmail from "@/components/emails/contact-form-email";

// Initialize Resend with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Define the schema outside the function to avoid re-declaration on every call
const contactFormSchema = z.object({
  name: z.string().min(1, "validation-name-required").max(100, "validation-name-maxLength"),
  email: z.string().email("validation-email-invalid"),
  message: z.string().min(10, "validation-message-minLength").max(1000, "validation-message-maxLength"),
});

export interface ContactFormState {
  success: boolean;
  message?: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
    _form?: string[];
  };
}

export async function submitContactForm(
  prevState: ContactFormState | undefined, // For useFormState
  formData: FormData
): Promise<ContactFormState> {
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const parsed = contactFormSchema.safeParse(rawFormData);

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
      message: "validation-failed",
    };
  }

  const { name, email, message } = parsed.data;

  try {
    const { data, error } = await resend.emails.send({
      from: "DevPortfolio <damian@clancig.com.ar>", // IMPORTANT: This must be a verified domain on Resend
      to: "damian@clancig.com.ar",
      subject: `Nuevo Mensaje desde DevPortfolio: ${name}`,
      reply_to: email,
      react: ContactFormEmail({
        name: name,
        email: email,
        message: message
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return { 
        success: false, 
        message: `contact-form-error-server`,
        errors: { _form: [`contact-form-error-server`] }
      };
    }
    
    return { success: true, message: "contact-form-success" };

  } catch (error) {
    console.error("Contact form submission error:", error);
    return {
      success: false,
      message: "contact-form-error-unexpected",
      errors: { _form: ["contact-form-error-unexpected"] }
    };
  }
}
