"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
import { Login1 } from "@/components/login1";

const FormSchema = z
  .object({
    email: z.string(),
    password: z.string(),
    rememberMe: z.boolean(),
  })
  .superRefine((data, ctx) => {
    // Validate email first
    if (!data.email || data.email.trim().length === 0) {
      ctx.addIssue({
        code: "custom",
        message: "Email is required",
        path: ["email"],
      });
      return; // Stop here
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      ctx.addIssue({
        code: "custom",
        message: "Please enter a valid email address",
        path: ["email"],
      });
      return; // Stop here - don't validate password
    }

    // Only validate password if email is valid
    if (!data.password || data.password.trim().length === 0) {
      ctx.addIssue({
        code: "custom",
        message: "Password is required",
        path: ["password"],
      });
    }
  });

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });
  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    console.log(data);
    setIsLoading(true);

    try {
      await authClient.signIn.email(
        {
          email: data.email,
          password: data.password,
        },
        {
          onSuccess: (ctx) => {
            redirect("/dashboard");
          },
          onError: (ctx) => {
            toast.error(ctx.error.message);
          },
        }
      );
      form.reset();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Login1
      form={form}
      onSubmit={form.handleSubmit(onSubmit)}
      isLoading={isLoading}
    />
  );
}
