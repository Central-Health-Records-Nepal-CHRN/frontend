"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import { GoogleIcon } from "../../GoogleIcon";
import { GithubIcon } from "../../GithubIcon";
import { Divider } from "@/components/ui/divider";
import { Checkbox } from "@/components/ui/checkbox";
import { Spinner } from "@/components/ui/spinner";
import Logo from "../../Logo";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";

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
     await authClient.signIn.email({
      email: data.email,
      password: data.password
     } ,
      {
        onSuccess: (ctx) => {
          redirect("/dashboard")
        },
      onError: (ctx) => {
        toast.error(ctx.error.message)
      }
     })
     form.reset();
    } finally {
      setIsLoading(false);
    }  

  };

  return (
    <div className="h-screen w-screen flex bg-bg">
      <div className="flex w-full">
        <div className=" flex-1 md:block hidden">
          <Image
            className="h-full w-full object-cover"
            src="/signin-09/bg.png"
            alt="Background Image"
            width={400}
            height={400}
          />
        </div>
        <div className="flex w-full h-full justify-center items-center flex-1 p-5 bg-bg">
          <div className=" w-100 flex flex-col gap-8">
            <div className="flex-1 flex flex-col gap-6">
              <div>
                <Logo />
              </div>
              <div className="flex gap-2 flex-col">
                <h1 className="heading-5">Sign In</h1>
                <p className="text-fg-secondary text-sm">
                  Don&apos;t have an account?{" "}
                  <Button variant="link" asChild color="primary">
                    <Link href="/auth/register">
                      Sign up
                    </Link>
                  </Button>
                </p>
              </div>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex gap-5 flex-col">
                  <div className="flex gap-4 flex-col">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input size="36" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input size="36" type="password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <FormField
                      control={form.control}
                      name="rememberMe"
                      render={({ field }) => (
                        <div className="flex items-center gap-2">
                          <FormControl>
                            <Checkbox
                              id="remember-me"
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel
                            htmlFor="remember-me"
                            className="font-normal text-fg-secondary"
                          >
                            Remember me
                          </FormLabel>
                        </div>
                      )}
                    />
                    <Button variant="link" asChild color="primary">
                      <Link href="#">
                        Forgot Password?
                      </Link>
                    </Button>
                  </div>
                  <Button className="w-full" type="submit" disabled={isLoading}>
                    {isLoading ? <Spinner variant="default" /> : "Sign In"}
                  </Button>
                </div>
              </form>
            </Form>
            <div className="flex-1 flex flex-col gap-6">
              <div className="flex gap-2 items-center">
                <Divider className="flex-1" />
                <span className="text-fg-secondary text-sm whitespace-nowrap font-medium">
                  Or continue with
                </span>
                <Divider className="flex-1" />
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  color="neutral"
                  className="w-full text-fg-secondary"
                >
                  <GoogleIcon />
                  Google
                </Button>
                <Button
                  variant="outline"
                  color="neutral"
                  className="w-full text-fg-secondary"
                >
                  <GithubIcon />
                  Github
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
