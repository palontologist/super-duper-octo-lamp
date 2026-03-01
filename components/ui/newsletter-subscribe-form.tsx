"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { handleApiError } from "@/lib/utils";

const subscribeSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type SubscribeValues = z.infer<typeof subscribeSchema>;

interface NewsletterSubscribeFormProps {
  className?: string;
}

export function NewsletterSubscribeForm({ className = "" }: NewsletterSubscribeFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<SubscribeValues>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: { email: "" },
  });

  async function onSubmit(values: SubscribeValues) {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/newsletter-subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        form.reset();
      } else {
        setSubmitError(data.error || "Failed to subscribe. Please try again.");
      }
    } catch (error) {
      setSubmitError(handleApiError(error));
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitSuccess) {
    return (
      <div className={`text-center ${className}`}>
        <p className="text-teal-400 font-medium">
          ✓ You&apos;re subscribed! Watch your inbox for the next edition.
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-col sm:flex-row gap-2">
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Your email address"
                      className="bg-zinc-900 border-zinc-700 text-white placeholder-zinc-500 h-10 focus:border-teal-500"
                      {...field}
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    className="bg-teal-500 hover:bg-teal-600 text-white h-10 px-6 shrink-0"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      {submitError && (
        <p className="text-xs text-red-400 mt-1">{submitError}</p>
      )}
    </div>
  );
}
