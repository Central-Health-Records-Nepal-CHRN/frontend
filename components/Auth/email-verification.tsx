"use client"

import { BetterAuthActionButton } from "@/components/Auth/better-auth-action-button"
import { authClient } from "@/lib/auth-client"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export function EmailVerification({ email }: { email: string }) {
  const [timeToNextResend, setTimeToNextResend] = useState(30)
  const interval = useRef<NodeJS.Timeout>(undefined)

  useEffect(() => {
    startEmailVerificationCountdown()
  }, [])

  function startEmailVerificationCountdown(time = 30) {
    setTimeToNextResend(time)

    clearInterval(interval.current)
    interval.current = setInterval(() => {
      setTimeToNextResend(t => {
        const newT = t - 1

        if (newT <= 0) {
          clearInterval(interval.current)
          return 0
        }
        return newT
      })
    }, 1000)
  }

  return (
    <div className="space-y-4 flex flex-col w-fit mx-auto mt-20 bg-gray-400 p-5 rounded-2xl ">
      <p className="text-sm text-black mt-2 ">
        We sent you a verification link. Please check your email and click the
        link to verify your account.
      </p>

      <BetterAuthActionButton
        variant="outline"
        className="w-full cursor-pointer"
        successMessage="Verification email sent!"
        disabled={timeToNextResend > 0}
        action={() => {
          startEmailVerificationCountdown()
          return authClient.sendVerificationEmail({
            email,
            callbackURL: "/",
          })
        }}
      >
        {timeToNextResend > 0
          ? `Resend Email (${timeToNextResend})`
          : "Resend Email"}
      </BetterAuthActionButton>

      <Link href="/auth/login" className="text-center text-sm text-gray-800">Go back to Login</Link>
    </div>
  )
}