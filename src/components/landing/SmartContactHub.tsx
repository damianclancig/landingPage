"use client";

import { useState, useRef } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ReCAPTCHA from "react-google-recaptcha";
import { submitContactForm } from "@/app/actions";
import { Loader2, CheckCircle2 } from "lucide-react";

type Intent = "recruiter" | "client";

export default function SmartContactHub() {
  const { t } = useTranslation();
  const [intent, setIntent] = useState<Intent>("recruiter");
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const token = recaptchaRef.current?.getValue();
    if (!token && process.env.NODE_ENV !== "development") {
      setStatus("error");
      setErrorMsg("Por favor, verifica que no eres un robot.");
      return;
    }

    const form = new FormData(e.currentTarget);
    form.append("recaptcha-token", token || "development-bypass-token");

    // Mapeo dual form a Zod Schema de actions.ts
    const email = form.get("email") as string;
    
    if (intent === "recruiter") {
      const company = form.get("company") as string;
      const position = form.get("position") as string;
      const originalMessage = form.get("message") as string;
      
      form.set("name", `[Reclutador] ${company} - ${position}`);
      form.set("message", originalMessage);
    } else {
      const clientName = form.get("clientName") as string;
      const projectType = form.get("projectType") as string;
      const originalMessage = form.get("message") as string;
      
      form.set("name", `[Cliente] ${clientName}`);
      form.set("message", `Tipo de Proyecto: ${projectType}\n\nDesafío:\n${originalMessage}`);
    }

    try {
      const res = await submitContactForm(undefined, form);
      if (res.success) {
        setStatus("success");
        e.currentTarget.reset();
        recaptchaRef.current?.reset();
      } else {
        setStatus("error");
        // Convertimos un eventual mensaje de key del back a espanol directo fallback.
        setErrorMsg(res.message ? t(res.message) || "Hubo un error en el envío." : "Hubo un error en el envío.");
        recaptchaRef.current?.reset();
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Ocurrió un error de conexión inesperado.");
      recaptchaRef.current?.reset();
    }
  };

  return (
    <section id="contacto" className="py-20 md:py-32 bg-background border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t("landing-contact-title")}
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            {t("landing-contact-subtitle")}
          </p>
        </div>

        <div className="bg-card border border-border/50 rounded-2xl p-6 sm:p-10 shadow-lg">
          
          {/* Intent Selector */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 bg-background-alt p-1.5 rounded-xl border border-border/40 cursor-pointer">
            <button
              onClick={() => setIntent("recruiter")}
              className={`flex-1 py-3 px-4 rounded-lg font-body font-medium transition-all ${
                intent === "recruiter" 
                ? "bg-primary text-primary-foreground shadow-sm" 
                : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("landing-contact-intent-recruiter")}
            </button>
            <button
              onClick={() => setIntent("client")}
              className={`flex-1 py-3 px-4 rounded-lg font-body font-medium transition-all ${
                intent === "client" 
                ? "bg-primary text-primary-foreground shadow-sm" 
                : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("landing-contact-intent-client")}
            </button>
          </div>

          {/* Dynamic Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Common fields or intent-specific fields */}
            {intent === "recruiter" ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">{t("landing-contact-form-company")}</label>
                    <Input name="company" required className="bg-background-alt/50 border-border font-body" placeholder="Acme Corp" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">{t("landing-contact-form-position")}</label>
                    <Input name="position" required className="bg-background-alt/50 border-border font-body" placeholder="Senior Frontend Engineer" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">{t("contact-form-email")}</label>
                  <Input name="email" type="email" required className="bg-background-alt/50 border-border font-body" placeholder="hr@acme.com" />
                </div>
              </>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">{t("contact-form-name")}</label>
                    <Input name="clientName" required className="bg-background-alt/50 border-border font-body" placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">{t("contact-form-email")}</label>
                    <Input name="email" type="email" required className="bg-background-alt/50 border-border font-body" placeholder="tucorreo@empresa.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">{t("landing-contact-form-projectType")}</label>
                  <Input name="projectType" required className="bg-background-alt/50 border-border font-body" placeholder="Ej: Tienda Online, App Móvil..." />
                </div>
              </>
            )}

            {/* Common Textarea block */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                {intent === "recruiter" ? t("contact-form-message") : t("landing-contact-form-challenge")}
              </label>
              <Textarea 
                name="message"
                required 
                className="bg-background-alt/50 border-border font-body min-h-[120px]" 
                placeholder={intent === "recruiter" ? "Detalles de la oportunidad..." : "Contame un poco sobre lo que necesitas resolver..."}
              />
            </div>

            {process.env.NEXT_PUBLIC_RECAPTCHA_PUBLIC_KEY && (
              <div className="flex justify-center md:justify-start">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_PUBLIC_KEY}
                  theme="dark" // Always dark to fit 'Dark Engineering' theme
                />
              </div>
            )}
            
            {status === "error" && (
              <p className="text-red-500 font-body text-sm font-medium bg-red-500/10 p-3 rounded-lg border border-red-500/20">{errorMsg}</p>
            )}

            {status === "success" && (
              <div className="flex items-center gap-2 text-emerald-400 font-body text-sm font-medium bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/20">
                <CheckCircle2 className="w-5 h-5" />
                <p>Tu mensaje ha sido enviado correctamente. Responderé a la brevedad.</p>
              </div>
            )}

            <Button disabled={status === "loading" || status === "success"} type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold transition-all">
              {status === "loading" ? (
                 <><Loader2 className="w-5 h-5 animate-spin mr-2" /> Enviando...</>
              ) : (
                intent === "recruiter" ? t("landing-contact-form-submit-recruiter") : t("landing-contact-form-submit-client")
              )}
            </Button>
            
          </form>
        </div>
      </div>
    </section>
  );
}
