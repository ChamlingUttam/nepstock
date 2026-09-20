import { z } from "zod";

export const contactSchema = z.object({
  firstName: z
    .string()
    .min(1, "Please fill in your first name")
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be under 50 characters"),

  lastName: z
    .string()
    .min(1, "Please fill in your last name")
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be under 50 characters"),

  phoneNumber: z
    .string()
    .min(1, "Please fill in your phone number")
    .regex(
      /^(\+977[-\s]?)?[0-9]{7,13}$/,
      "Enter a valid phone number (e.g. 9769895191 or 977-9769895191)"
    ),

  email: z
    .string()
    .min(1, "Please fill in your email address")
    .email("Enter a valid email address (e.g. you@example.com)"),

  message: z
    .string()
    .min(1, "Please fill in your message")
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be under 1000 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
