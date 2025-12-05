import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { UseFormReturn } from "react-hook-form";

interface Login1Props {
  form: UseFormReturn<any>;
  onSubmit?: () => void;
  setShowForgotPassword?: any;
  isLoading?: boolean;
  heading?: string;
  logo?: {
    url: string;
    src: string;
    alt: string;
    title?: string;
  };
  buttonText?: string;
  googleText?: string;
  signupText?: string;
  signupUrl?: string;
}

const Login1 = ({
  form,
  onSubmit,
  setShowForgotPassword,
  isLoading,
  heading = "Login",
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-wordmark.svg",
    alt: "logo",
    title: "shadcnblocks.com",
  },
  buttonText = "Login",
  signupText = "Need an account?",
  signupUrl = "/auth/register",
}: Login1Props) => {
  const {register, formState: {errors}} = form;
  return (
    <section className="bg-muted h-screen">
      <div className="flex h-full items-center justify-center">
        {/* Logo */}
        <div className="flex flex-col items-center gap-6 lg:justify-start">
          <Link href={logo.url} className="text-2xl font-bold text-green-700">
           Mero Health
          </Link>
          <form onSubmit={onSubmit} className="min-w-sm border-muted bg-background flex w-full max-w-sm flex-col items-center gap-y-4 rounded-md border px-6 py-8 shadow-md">
            {heading && <h1 className="text-xl font-semibold">{heading}</h1>}
            <Input
              type="email"
              placeholder="Email"
             {...register("email")}
              className="text-sm"
              required
            />
            <Input
              type="password"
              placeholder="Password"
              {...register("password")}
              className="text-sm"
              required
            />
            <p onClick={() => setShowForgotPassword(true)} className="self-end text-xs text-black hover:underline cursor-pointer">
              Forgot Password?
            </p>
            <Button disabled={isLoading} type="submit" className="w-full cursor-pointer">
             {isLoading ? "Submitting" : buttonText}
            </Button>
          </form>
          <div className="text-muted-foreground flex justify-center gap-1 text-sm">
            <p>{signupText}</p>
            <Link
              href={signupUrl}
              className="text-primary font-medium hover:underline"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Login1 };
