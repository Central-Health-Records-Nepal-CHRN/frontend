"use client"
import { Button } from "@/components/ui/button"
import { LockIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <div className="bg-gray-700 rounded-lg text-white w-fit mx-auto mt-20 p-10">
        <LockIcon size={64} className="text-gray-50 mx-auto" />
        <h3 className="text-white text-2xl mt-10 text-center">Forgot Passoword?</h3>
        <p className="text-base text-center">Enter your details below to request password reset.</p>
        <div className="flex flex-col mt-10 justify-center items-center gap-5">
        <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border-2 rounded-sm py-2 text-lg " placeholder="example@gmail.com"/>
        <Button className="text-lg w-full py-7">Reset Password</Button>
        <Link href="/auth/login" className="text-blue-300 hover:text-blue-500">Go back to Login</Link>
        </div>
    </div>
  )
}

export default ForgotPassword