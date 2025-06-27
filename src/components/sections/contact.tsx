
"use client"

import React, { useEffect, useActionState } from "react"
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

function SubmitButton() {
  const { pending } = useFormStatus();
  const { t } = useTranslation()
  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto transition-transform hover:scale-105 group">
      {pending ? (
        <div className="flex items-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {t('contact.form.submit.sending', {defaultValue: 'Enviando...'})}
        </div>
      ) : (
        <>
          {t('contact.form.submit')}
          <Send className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
        </>
      )}
    </Button>
  )
}


export default function ContactSection() {
  const { t } = useTranslation()
  const { toast } = useToast()

  const initialState: ContactFormState = { success: false };
  const [state, formAction] = useActionState(submitContactForm, initialState)

  useEffect(() => {
    if (state?.success) {
      toast({
        title: t('contact.form.success.title', {defaultValue: '¡Éxito!'}),
        description: t('contact.form.success'),
        variant: 'default',
      })
      const form = document.getElementById('contact-form') as HTMLFormElement | null;
      form?.reset();

    } else if (state?.message && !state.success && state.errors === undefined) {
       toast({
        title: t('contact.form.error.title', {defaultValue: '¡Error!'}),
        description: state.message || t('contact.form.error'),
        variant: 'destructive',
      })
    }
  }, [state, t, toast])

  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-background dark:bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader icon={Mail} titleKey="contact.title">
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            {t('contact.description')}
          </p>
           <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            {t('contact.social.intro')}
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
                  {t('contact.form.name')}
                </Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border-input shadow-sm focus:border-primary focus:ring-primary sm:text-sm transition-shadow duration-200 focus:shadow-md"
                  aria-describedby="name-error"
                />
                {state?.errors?.name && (
                  <p id="name-error" className="mt-1 text-sm text-destructive">{state.errors.name.join(', ')}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                  {t('contact.form.email')}
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-input shadow-sm focus:border-primary focus:ring-primary sm:text-sm transition-shadow duration-200 focus:shadow-md"
                  aria-describedby="email-error"
                />
                {state?.errors?.email && (
                  <p id="email-error" className="mt-1 text-sm text-destructive">{state.errors.email.join(', ')}</p>
                )}
              </div>

              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                  {t('contact.form.message')}
                </Label>
                <Textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md border-input shadow-sm focus:border-primary focus:ring-primary sm:text-sm transition-shadow duration-200 focus:shadow-md"
                  aria-describedby="message-error"
                />
                {state?.errors?.message && (
                  <p id="message-error" className="mt-1 text-sm text-destructive">{state.errors.message.join(', ')}</p>
                )}
              </div>

              {state?.errors?._form && (
                 <p className="mt-1 text-sm text-destructive text-center">{state.errors._form.join(', ')}</p>
              )}
               {state?.message && !state.success && state.errors && (Object.keys(state.errors).length > 0) && (
                 <p className="mt-1 text-sm text-destructive text-center">{state.message}</p>
               )}

              <div className="flex justify-end">
                <SubmitButton />
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
