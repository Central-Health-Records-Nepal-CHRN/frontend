"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRef, useState } from "react";

import { EyeIcon, EyeOffIcon } from "lucide-react";

import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { EmailVerification } from "@/components/Auth/email-verification";
import { SignupForm } from "@/components/signup-form";

const FormSchema = z
  .object({
    fullName: z.string(),
    email: z.string(),
    password: z.string(),
  })
  .superRefine((data, ctx) => {
    // Validate first name first
    if (!data.fullName || data.fullName.trim().length === 0) {
      ctx.addIssue({
        code: "custom",
        message: "Name is required",
        path: ["fullName"],
      });
      return;
    }

    // Validate email
    if (!data.email || data.email.trim().length === 0) {
      ctx.addIssue({
        code: "custom",
        message: "Email is required",
        path: ["email"],
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      ctx.addIssue({
        code: "custom",
        message: "Please enter a valid email address",
        path: ["email"],
      });
      return;
    }

    // Validate password (only if all above are valid)
    if (!data.password || data.password.trim().length === 0) {
      ctx.addIssue({
        code: "custom",
        message: "Password is required",
        path: ["password"],
      });
      return;
    }

    if (data.password.length < 8) {
      ctx.addIssue({
        code: "custom",
        message: "Password must be at least 8 characters long",
        path: ["password"],
      });
      return;
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(data.password)) {
      ctx.addIssue({
        code: "custom",
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, and one number",
        path: ["password"],
      });
    }
  });

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [showEmailVerification, setShowEmailVerification] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function togglePasswordVisibility(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setShowPassword(!showPassword);
  }

  const IconComponent = showPassword ? EyeOffIcon : EyeIcon;

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    console.log(data);
    setIsLoading(true);
    try {
      const { error } = await authClient.signUp.email(
        {
          name: data.fullName,
          email: data.email,
          password: data.password,
          callbackURL: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/auth/patient/login`,
        },
        {
          onSuccess: (ctx) => {
            setShowEmailVerification(true);
          },
        }
      );

      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Registered Successfully!");
      }
      
      form.reset();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex bg-muted min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className={`${showEmailVerification ? "hidden" : "block"} w-full max-w-sm`}>
        <SignupForm
          form={form}
          onSubmit={form.handleSubmit(onSubmit)}
          isLoading={isLoading}
        />
      </div>

      {showEmailVerification && <EmailVerification setShowEmailVerification={setShowEmailVerification} email={form.getValues("email")} />}
    </div>
  );
}
