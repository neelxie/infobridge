"use client";

import * as React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle } from "lucide-react";

type FormState = {
  name: string;
  organization: string;
  email: string;
  phone: string;
  organizationType: string;
  areaOfInterest: string;
  message: string;
  consent: boolean;
};

const initialState: FormState = {
  name: "",
  organization: "",
  email: "",
  phone: "",
  organizationType: "",
  areaOfInterest: "",
  message: "",
  consent: false,
};

export function ContactForm() {
  const [values, setValues] = React.useState<FormState>(initialState);
  const [errors, setErrors] = React.useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  function validate() {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) next.name = "Enter your full name.";
    if (!values.email.trim()) next.email = "Enter your email address.";
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = "Enter a valid email address.";
    if (!values.organizationType) next.organizationType = "Select an organization type.";
    if (!values.message.trim()) next.message = "Tell us a little about your project.";
    if (!values.consent) next.consent = "Please confirm you agree to be contacted.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      // No backend is connected yet — this simulates submission so the UI
      // states (loading, success, error) can be reviewed. Wire this up to
      // a real endpoint, form service, or serverless function at launch.
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      setValues(initialState);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card-surface flex flex-col items-center gap-3 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-success" aria-hidden="true" />
        <h3 className="font-display text-xl font-semibold text-heading">Inquiry sent</h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          Thank you for reaching out. A member of our team typically responds within two business days.
          We&apos;ll follow up at the email address you provided.
        </p>
        <Button variant="outline" size="sm" onClick={() => setStatus("idle")} className="mt-2">
          Send another inquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {status === "error" && (
        <div className="flex items-start gap-2.5 rounded-md border border-error/30 bg-error/5 p-3.5 text-sm text-error">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          Something went wrong sending your message. Please try again, or email us directly.
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-error">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="organization">Organization</Label>
          <Input
            id="organization"
            name="organization"
            autoComplete="organization"
            value={values.organization}
            onChange={(e) => update("organization", e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-error">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="organizationType">Organization type</Label>
          <Select
            id="organizationType"
            name="organizationType"
            value={values.organizationType}
            onChange={(e) => update("organizationType", e.target.value)}
            invalid={!!errors.organizationType}
            aria-describedby={errors.organizationType ? "org-type-error" : undefined}
          >
            <option value="">Select one</option>
            <option value="private">Private sector</option>
            <option value="government">Government</option>
            <option value="ngo">NGO / development organization</option>
            <option value="academic">Academic / research institution</option>
            <option value="other">Other</option>
          </Select>
          {errors.organizationType && (
            <p id="org-type-error" className="mt-1.5 text-xs text-error">
              {errors.organizationType}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="areaOfInterest">Area of interest</Label>
          <Select
            id="areaOfInterest"
            name="areaOfInterest"
            value={values.areaOfInterest}
            onChange={(e) => update("areaOfInterest", e.target.value)}
          >
            <option value="">Select one</option>
            <option value="technology">Technology & software</option>
            <option value="public-sector">Public sector advisory</option>
            <option value="research">Research & innovation</option>
            <option value="communications">Media & communications</option>
            <option value="general">General inquiry</option>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="message">Tell us about your project</Label>
        <Textarea
          id="message"
          name="message"
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="A short description of the challenge, timeline, and any relevant context."
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-error">
            {errors.message}
          </p>
        )}
      </div>

      <div>
        <div className="flex items-start gap-3">
          <Checkbox
            id="consent"
            name="consent"
            checked={values.consent}
            onChange={(e) => update("consent", e.target.checked)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
          />
          <Label htmlFor="consent" className="mb-0 text-sm font-normal text-muted">
            I agree to be contacted about my inquiry and understand my information will be handled in line
            with the{" "}
            <a href="/privacy" className="link-underline">
              Privacy Policy
            </a>
            .
          </Label>
        </div>
        {errors.consent && (
          <p id="consent-error" className="mt-1.5 text-xs text-error">
            {errors.consent}
          </p>
        )}
      </div>

      <Button type="submit" size="lg" loading={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? "Sending…" : "Send Inquiry"}
      </Button>
    </form>
  );
}
