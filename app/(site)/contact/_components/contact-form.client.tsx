// app/contact/_components/ContactForm.client.tsx
"use client";

import { sendEmail } from "@/app/actions/send-email";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircleIcon, CheckCircle2Icon, Send } from "lucide-react";
import { useActionState } from "react";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendEmail, {
    success: false,
    error: null,
  });

  return (
    <form
      action={formAction}
      className="w-full grid gap-8"
      aria-label="Contact form"
    >
      {/* Honeypot */}
      <input
        type="text"
        name="company"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        value={"sss"}
      />

      <div className="grid w-full items-center gap-2">
        <Label className="font-medium" htmlFor="name">
          Your name
        </Label>
        <Input
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          placeholder="e.g. John Doe"
          className="bg-primary-100 focus:bg-white px-4 py-5"
          required
        />
      </div>

      <div className="grid w-full items-center gap-2">
        <Label className="font-medium" htmlFor="email">
          Your email
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          placeholder="e.g. John.doe@example.com"
          className="bg-primary-100 focus:bg-white px-4 py-5"
          required
        />
      </div>

      <div className="grid w-full items-center gap-2">
        <Label className="font-medium" htmlFor="tel">
          Phone number
        </Label>
        <Input
          type="tel"
          id="tel"
          name="tel"
          autoComplete="tel"
          placeholder="e.g +962 7X XXX XXXX"
          className="bg-primary-100 focus:bg-white px-4 py-5"
        />
      </div>

      <div className="grid w-full gap-2">
        <Label className="font-medium" htmlFor="message">
          Your message
        </Label>
        <Textarea
          placeholder="Type your message here."
          id="message"
          name="message"
          className="bg-primary-100 focus:bg-white px-4 py-5 min-h-40"
          required
        />
      </div>

      <div className="flex items-center justify-between pt-1 gap-x-4">
        <p className="text-sm text-muted-foreground max-w-[50%]">
          We’ll only use your info to reply to your message.
        </p>
        <Button
          type="submit"
          className="rounded-2xl font-bold"
          disabled={pending}
        >
          {pending ? "Sending ..." : "Send message"}
          {pending ? <Spinner /> : <Send />}
        </Button>
      </div>

      {state.success && (
        <Alert className="border border-primary-500 text-primary-600 dark:text-primary-100 dark:bg-background">
          <CheckCircle2Icon />
          <AlertTitle className="font-bold">
            Thanks! We have received your message.
          </AlertTitle>
          <AlertDescription className="text-primary-500 dark:text-primary-200">
            We’ll reply as soon as we can.
          </AlertDescription>
        </Alert>
      )}
      {state.error && (
        <Alert variant="destructive" className="bg-red-100 dark:bg-primary-50">
          <AlertCircleIcon />
          <AlertTitle> {state.error}</AlertTitle>
          <AlertDescription>
            Your email couldn’t be delivered. Give it another try in a bit.
          </AlertDescription>
        </Alert>
      )}
    </form>
  );
}
