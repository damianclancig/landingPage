"use client"

import React, { useEffect, useActionState, useState } from "react"
import { useFormStatus } from "react-dom"
import { useTranslation } from "@/hooks/use-translation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Send } from "lucide-react"
import { submitContactForm, type ContactFormState } from "@/app/actions"
import { useToast } from "@/hooks/use-toast"
import SectionHeader from "../layout/section-header"
import SocialLinks from "../social-links"

function SubmitButton({ submitText, sendingText }: { submitText: string; sendingText: string }) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto transition-transform hover:scale-105 group">
      {pending ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {sendingText}
        </>
      ) : (
        <>
          {submitText}
          <Send className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
        </>
      )}
    </Button>
  );
}

export default function ContactSection() {
  const { t } = useTranslation();
  const { toast } = useToast();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const initialState: ContactFormState = { success: false };
  const [state, formAction] = useActionState(submitContactForm, initialState);

  const renderError = (errorKey?: string[]) => {
    if (!errorKey || errorKey.length === 0) return null;
    const translationKey = errorKey[0];
    return <p className="mt-1 text-sm text-destructive">{t(translationKey)}</p>;
  };

  useEffect(() => {
    if (state?.success) {
      toast({
        title: t('contact-form-success-title'),
        description: t(state.message || 'contact-form-success'),
        variant: 'default',
      });
      // Limpiar el formulario solo en caso de éxito
      setName('');
      setEmail('');
      setMessage('');
    } else if (state && !state.success && state.errors?._form) {
      // Mostrar toast solo para errores de servidor o inesperados
      toast({
        title: t('contact-form-error-title'),
        description: t(state.message || 'contact-form-error-unexpected'),
        variant: 'destructive',
      });
    }
  }, [state, t, toast]);

  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-background dark:bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader icon={Mail} titleKey="contact-title">
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            {t('contact-description')}
          </p>
           <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            {t('contact-social-intro')}
          </p>
          <SocialLinks 
            showText
            className="mt-6"
            linksToDisplay={['instagram', 'linkedin', 'whatsapp', 'email']}
          />
        </SectionHeader>

        <Card className="max-w-2xl mx-auto shadow-xl border-primary/50 bg-card">
          <CardContent className="p-6 md:p-8">
            <form action={formAction} className="space-y-6" id="contact-form">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                  {t('contact-form-name')}
                </Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-md border-input shadow-sm focus:border-primary focus:ring-primary sm:text-sm transition-shadow duration-200 focus:shadow-md"
                  aria-describedby="name-error"
                />
                <div id="name-error">
                  {renderError(state?.errors?.name)}
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                  {t('contact-form-email')}
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-md border-input shadow-sm focus:border-primary focus:ring-primary sm:text-sm transition-shadow duration-200 focus:shadow-md"
                  aria-describedby="email-error"
                />
                 <div id="email-error">
                  {renderError(state?.errors?.email)}
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                  {t('contact-form-message')}
                </Label>
                <Textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-md border-input shadow-sm focus:border-primary focus:ring-primary sm:text-sm transition-shadow duration-200 focus:shadow-md"
                  aria-describedby="message-error"
                />
                <div id="message-error">
                  {renderError(state?.errors?.message)}
                </div>
              </div>
              {state?.errors?._form && renderError(state.errors._form)}

              <div className="flex justify-end">
                <SubmitButton 
                  submitText={t('contact-form-submit')}
                  sendingText={t('contact-form-submit-sending')}
                />
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
