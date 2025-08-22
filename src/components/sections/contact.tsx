"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useTranslation } from "@/hooks/use-translation"
import { useToast } from "@/hooks/use-toast"
import { submitContactForm, type ContactFormState } from "@/app/actions"
import { contactFormSchema } from "@/lib/validators"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import SectionHeader from "../layout/section-header"
import SocialLinks from "../social-links"
import { Mail, Send } from "lucide-react"

type ContactFormValues = z.infer<typeof contactFormSchema>;

function SubmitButton({ isSubmitting, submitText, sendingText }: { isSubmitting: boolean; submitText: string; sendingText: string }) {
  return (
    <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto transition-transform hover:scale-105 group">
      {isSubmitting ? (
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

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { formState, handleSubmit, control, reset } = form;

  async function onSubmit(data: ContactFormValues) {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, String(value));
    });

    const result: ContactFormState = await submitContactForm(undefined, formData);

    if (result.success) {
      toast({
        title: t('contact-form-success-title'),
        description: t(result.message || 'contact-form-success'),
        variant: 'default',
      });
      reset();
    } else {
      // This handles server-side or unexpected errors.
      // Field-specific validation errors are already handled by RHF on the client.
      toast({
        title: t('contact-form-error-title'),
        description: t(result.message || 'contact-form-error-unexpected'),
        variant: 'destructive',
      });
    }
  }

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
            <Form {...form}>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contact-form-name')}</FormLabel>
                      <FormControl>
                        <Input {...field} required className="transition-shadow duration-200 focus:shadow-md" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contact-form-email')}</FormLabel>
                      <FormControl>
                        <Input {...field} type="email" required className="transition-shadow duration-200 focus:shadow-md" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contact-form-message')}</FormLabel>
                      <FormControl>
                        <Textarea {...field} rows={4} required className="transition-shadow duration-200 focus:shadow-md" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end">
                  <SubmitButton
                    isSubmitting={formState.isSubmitting}
                    submitText={t('contact-form-submit')}
                    sendingText={t('contact-form-submit-sending')}
                  />
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
