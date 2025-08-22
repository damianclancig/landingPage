"use server";

import { Resend } from "resend";
import ContactFormEmail from "@/components/emails/contact-form-email";
import { contactFormSchema } from "@/lib/validators";

// Initialize Resend with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

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
  const toEmail = process.env.NEXT_PUBLIC_EMAIL_ADDRESS;
  const fromEmail = `DevPortfolio <${toEmail}>`

  if (!toEmail) {
    console.error("Recipient email address is not configured in environment variables.");
    return {
      success: false,
      message: "contact-form-error-server",
      errors: { _form: ["contact-form-error-server"] }
    };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail, // IMPORTANT: This must be a verified domain on Resend
      to: toEmail,
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
