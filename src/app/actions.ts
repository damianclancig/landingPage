
"use server";

import { z } from "zod";
import ContactFormEmail from "@/components/emails/contact-form-email";
import { render } from "@react-email/render";

// Función para escapar caracteres HTML y prevenir XSS
const escapeHtml = (unsafe: string): string => {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

// Define el esquema fuera de la función para evitar la redeclaración en cada llamada
const contactFormSchema = z.object({
  name: z.string().trim().min(1, "validation-name-required").max(100, "validation-name-maxLength"),
  email: z.string().trim().email("validation-email-invalid"),
  message: z.string().trim().min(10, "validation-message-minLength").max(1000, "validation-message-maxLength"),
});

export interface ContactFormState {
  success: boolean;
  message?: string;
  technicalError?: string; // Nuevo campo para errores técnicos
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
    _form?: string[];
  };
}

export async function submitContactForm(
  prevState: ContactFormState | undefined, // Para useFormState
  formData: FormData
): Promise<ContactFormState> {

  // 1. Verificación del Honeypot
  if (formData.get("hp-field")) {
    // Si el campo honeypot está lleno, es probable que sea un bot.
    // Devolvemos un éxito falso para no alertar al bot.
    return { success: true, message: "contact-form-success" };
  }

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

  // 2. Sanitización de datos
  const name = escapeHtml(parsed.data.name);
  const email = parsed.data.email; // El email ya es validado por Zod, no necesita escape.
  const message = escapeHtml(parsed.data.message);
  
  // Configuración de la API de Maileroo
  const apiKey = process.env.MAILEROO_API_KEY;
  const fromEmail = process.env.MAILEROO_FROM_EMAIL;
  const toEmail = process.env.MAILEROO_TO_CONTACT;

  if (!apiKey || !fromEmail || !toEmail) {
    console.error("Las credenciales de la API de Maileroo no están configuradas en las variables de entorno.");
    return {
      success: false,
      message: "contact-form-error-server",
      errors: { _form: ["contact-form-error-server"] },
      technicalError: "El servidor no está configurado para enviar correos. Faltan las variables de entorno de Maileroo."
    };
  }
  
  // Renderiza el componente de React a una cadena HTML para el cuerpo del correo
  // Usamos los datos ya sanitizados
  const emailHtml = render(
    ContactFormEmail({
      name: name,
      email: email,
      message: message
    })
  );

  // Versión de texto plano como respaldo
  const plainText = `
    Nuevo mensaje de DevPortfolio:
    Nombre: ${name}
    Email: ${email}
    Mensaje: ${message}
  `;

  const mailerooApiUrl = 'https://smtp.maileroo.com/api/v2/emails';

  try {
    const response = await fetch(mailerooApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        from: {
          address: fromEmail,
          display_name: "DevPortfolio Contact Form" // Nombre a mostrar
        },
        to: [
          {
            address: toEmail,
          }
        ],
        reply_to: {
          address: email,
          display_name: name,
        },
        subject: `Nuevo Mensaje desde DevPortfolio: ${name}`,
        plain: plainText,
        html: emailHtml,
        tracking: false
      })
    });

    const responseData = await response.json();

    if (!response.ok || !responseData.success) {
      // Registrar el error detallado de Maileroo para facilitar la depuración
      console.error("Error de la API de Maileroo:", responseData);
      return { 
        success: false, 
        message: "contact-form-error-server",
        errors: { _form: ["contact-form-error-server"] },
        technicalError: JSON.stringify(responseData, null, 2) // Pasa el error técnico
      };
    }
    
    return { success: true, message: "contact-form-success" };

  } catch (error) {
    console.error("Error en el envío del formulario de contacto:", error);
    const errorMessage = error instanceof Error ? error.message : "Error desconocido";
    return {
      success: false,
      message: "contact-form-error-unexpected",
      errors: { _form: ["contact-form-error-unexpected"] },
      technicalError: errorMessage
    };
  }
}
