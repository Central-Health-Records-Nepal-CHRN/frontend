"use client";

import { BetterAuthActionButton } from "@/components/Auth/better-auth-action-button";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { toast } from "react-toastify";

export function EmailVerification({
  email,
  setShowEmailVerification,
  sendInitialEmail = false,
}: {
  email: string;
  setShowEmailVerification: any;
  sendInitialEmail?: boolean;
}) {
  const [timeToNextResend, setTimeToNextResend] = useState(30);
  const interval = useRef<NodeJS.Timeout>(undefined);
  const [emailD, setEmail] = useState(email);

  useEffect(() => {
    startEmailVerificationCountdown();
    if (sendInitialEmail) {
      handleResend();
    }
    console.log("From Email Verification", email);
  }, []);

  const handleResend = async () => {
    try {
      console.log("Resending to email:", emailD);
      const { error } = await authClient.sendVerificationEmail({
        email: emailD,
        callbackURL: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/auth/email-verified`,
      });
      if (error) {
        throw toast.error(error.message);
      } else {
        toast.success("Verification email sent!");
      }
      startEmailVerificationCountdown();
    } catch (error) {
      console.error("Error resending verification email:", error);
      toast.error("Failed to resend verification email. Please try again.");
    }
  };

  function startEmailVerificationCountdown(time = 5) {
    setTimeToNextResend(time);

    clearInterval(interval.current);
    interval.current = setInterval(() => {
      setTimeToNextResend((t) => {
        const newT = t - 1;

        if (newT <= 0) {
          clearInterval(interval.current);
          return 0;
        }
        return newT;
      });
    }, 1000);
  }

  return (
    <div className="space-y-4 flex flex-col w-fit mx-auto bg-gray-700/90 p-5 rounded-2xl ">
      <p className="text-sm text-white mt-2 ">
        We sent you a verification link. Please check your email and click the
        link to verify your account.
      </p>

      <Button
        onClick={handleResend}
        disabled={timeToNextResend > 0}
        variant="outline"
        className="w-full cursor-pointer"
      >
        {timeToNextResend > 0
          ? `Resend Email (${timeToNextResend})`
          : "Resend Email"}
      </Button>

      <Link
        href="/auth/patient/login"
        onClick={() => setShowEmailVerification(false)}
        className="text-center text-sm text-white"
      >
        Go to Login
      </Link>
    </div>
  );
}
