"use server";

import { z } from "zod";

// Define the schema outside the function to avoid re-declaration on every call
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message is too long"),
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
      message: "Validation failed. Please check your input.",
    };
  }

  const { name, email, message } = parsed.data;

  try {
    // Simulate email sending
    console.log("---- Contact Form Submission ----");
    console.log("To: damian@clancig.com.ar");
    console.log(`From: ${name} <${email}>`);
    console.log("Message:", message);
    console.log("---- Email Sent (Simulated) ----");

    // In a real application, you would integrate an email service here.
    // Example (pseudo-code):
    // const emailSent = await sendEmail({
    //   to: "damian@clancig.com.ar",
    //   from: `"${name}" <noreply@yourdomain.com>`, // Use a no-reply address from your domain
    //   replyTo: email, 
    //   subject: `New Contact from DevPortfolio: ${name}`,
    //   text: message,
    //   html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    // });
    // if (!emailSent) {
    //   return { success: false, message: "Server error: Failed to send email." };
    // }

    return { success: true, message: "Message sent successfully!" };

  } catch (error) {
    console.error("Contact form submission error:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
      errors: { _form: ["An unexpected error occurred."] }
    };
  }
}
