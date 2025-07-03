"use client";

import { useState, memo } from "react";
import { formSchema } from "@/app/waitlist/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

type FormValues = z.infer<typeof formSchema>;

interface WaitlistFormProps {
  buttonText?: string;
  placeholder?: string;
  successMessage?: string;
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
}

const WaitlistForm = memo(({
  buttonText = "Join Waitlist",
  placeholder = "Your email address",
  successMessage = "Thank you for joining our waitlist!",
  className = "space-y-2",
  inputClassName = "bg-zinc-900 border-zinc-800 text-white placeholder-gray-500 h-10 z-20",
  buttonClassName = "bg-teal-500 hover:bg-teal-600 text-white h-10 z-20"
}: WaitlistFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Email: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitSuccess(true);
        form.reset();
      } else {
        setSubmitError(data.error || "Failed to join waitlist. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(handleApiError(error));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="relative">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
          <FormField
            control={form.control}
            name="Email"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-col sm:flex-row gap-2">
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder={placeholder} 
                      className={inputClassName}
                      {...field}
                    />
                  </FormControl>
                  <Button 
                    type="submit"
                    className={buttonClassName}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : buttonText}
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      {submitSuccess && (
        <p className="text-xs text-teal-400 mt-1">{successMessage}</p>
      )}
      {submitError && (
        <p className="text-xs text-red-400 mt-1">{submitError}</p>
      )}
    </div>
  );
});

WaitlistForm.displayName = "WaitlistForm";

export { WaitlistForm }; 