"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { contactSchema, type ContactFormData } from "@/schema/contact";
import TailSection from "@/components/common/TailSection";
import { Button } from "@/components/ui/button";

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[18px] font-normal leading-7 tracking-[-0.03em] text-[#475569]">
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </label>
      {children}
      {error && (
        <p className="flex items-center gap-1 text-xs font-medium text-red-500">
          <svg
            className="h-3 w-3 shrink-0"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10c0 4.418-3.582 8-8 8S2 14.418 2 10 5.582 2 10 2s8 3.582 8 8zm-9 3a1 1 0 102 0 1 1 0 00-2 0zm.25-6.75a.75.75 0 011.5 0v4a.75.75 0 01-1.5 0v-4z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

const inputCls = (hasError: boolean) =>
  `w-full rounded-lg border px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-[#075BFF] focus:ring-2 focus:ring-[#075BFF]/20 ${
    hasError
      ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-200"
      : "border-gray-200 bg-white"
  }`;

export default function ContactPage() {
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: ContactFormData) => {
  setSubmitStatus({ type: null, message: "" });

  if (!/^\d{10}$/.test(data.phoneNumber)) {
    setSubmitStatus({
      type: "error",
      message: "Phone number must be exactly 10 digits.",
    });
    return;
  }

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.success) {
      setSubmitStatus({
        type: "success",
        message:
          result.message ||
          "Your message has been sent! We'll get back to you soon.",
      });
      reset();
    } else {
      setSubmitStatus({
        type: "error",
        message:
          result.message || "Something went wrong. Please try again.",
      });
    }
  } catch {
    setSubmitStatus({
      type: "error",
      message: "Network error. Please check your connection and try again.",
    });
  }
};

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-12 text-center md:px-12 lg:py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#075BFF]">
          Nepal&apos;s #1 Inventory Management Platform
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-[56px]">
          Get In Touch{" "}
          <span className="text-[#075BFF]">With Us</span>
        </h1>
        <p className="mx-auto mt-4 whitespace-nowrap text-sm text-gray-500 md:text-[15px]">
          Reach out for inquiries, support, or feedback. Fill out the form, and
          we&apos;ll get back to you promptly.
        </p>
      </section>

      {/* Form + Map */}
      <section className="mx-auto max-w-[1400px] px-4 pb-16 md:px-0">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[3fr_2fr]">

          {/* ── Contact Form ── */}
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-s">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="space-y-5"
            >
              {hasErrors && (
                <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3">
                  <p className="text-sm font-semibold text-red-600">
                    Please fill in all required fields before sending.
                  </p>
                </div>
              )}

              {/* First + Last Name */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field
                  label="First Name"
                  error={errors.firstName?.message}
                  required
                >
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    {...register("firstName")}
                    className={inputCls(!!errors.firstName)}
                  />
                </Field>

                <Field
                  label="Last Name"
                  error={errors.lastName?.message}
                  required
                >
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    {...register("lastName")}
                    className={inputCls(!!errors.lastName)}
                  />
                </Field>
              </div>

              {/* Phone + Email */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field
                  label="Phone Number"
                  error={errors.phoneNumber?.message}
                  required
                >
                  <input
                id="phoneNumber"
                type="tel"
                inputMode="numeric"
                maxLength={10}
                placeholder="Enter 10 digit phone number"
                {...register("phoneNumber")}
                className={inputCls(!!errors.phoneNumber)}
              />
                </Field>

                <Field
                  label="Email"
                  error={errors.email?.message}
                  required
                >
                  <input
                    id="email"
                    type="email"
                    placeholder="stocknep@gmail.com"
                    {...register("email")}
                    className={inputCls(!!errors.email)}
                  />
                </Field>
              </div>

              {/* Message */}
              <Field
                label="Message"
                error={errors.message?.message}
                required
              >
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us how can we help you..."
                  {...register("message")}
                  className={`${inputCls(!!errors.message)} resize-none`}
                />
              </Field>

              {/* Submit status banner */}
              {submitStatus.type && (
                <div
                  className={`flex items-start gap-2 rounded-lg border px-4 py-3 text-sm font-medium ${
                    submitStatus.type === "success"
                      ? "border-green-200 bg-green-50 text-green-700"
                      : "border-red-200 bg-red-50 text-red-700"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10c0 4.418-3.582 8-8 8S2 14.418 2 10 5.582 2 10 2s8 3.582 8 8zm-9 3a1 1 0 102 0 1 1 0 00-2 0zm.25-6.75a.75.75 0 011.5 0v4a.75.75 0 01-1.5 0v-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}

                  {submitStatus.message}
                </div>
              )}

              {/* Submit button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#075BFF] py-3 text-sm font-semibold uppercase tracking-wider text-white hover:bg-[#064dcc] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="h-4 w-4 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    Sending…
                  </span>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-s">
            <iframe
              title="Itahari Chowk, Sunsari, Nepal"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3566.177944985937!2d87.27373857441983!3d26.664200076814564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef75e63a0fc0cb%3A0xf1fe8aefbfb3cd97!2sItahari%20Chowk!5e0!3m2!1sen!2snp!4v1726000000000!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ minHeight: "480px", border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <TailSection />
    </main>
  );
}