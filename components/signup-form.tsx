import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { UseFormReturn } from "react-hook-form"

interface SignupFormProp {
  form: UseFormReturn<any>;
  onSubmit: () => void;
  isLoading: boolean;
}

export function SignupForm({form, onSubmit, isLoading, ...props}: SignupFormProp & React.ComponentProps<typeof Card>) {

  const {
  register,
  formState: { errors },
} = form;


  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
              <Input {...register("fullName")} id="fullName" type="text" placeholder="John Doe" required />
               {errors.fullName?.message && (<p className="text-sm text-red-500">{errors.fullName.message as string}</p>)}
            </Field>
            
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="m@example.com"
                required
              />
              {errors.email?.message && (<p className="text-sm text-red-500">{errors.email.message as string}</p>)}
              <FieldDescription>
                We&apos;ll use this to contact you. We will not share your email
                with anyone else.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input {...register("password")} id="password" type="password" required />
              {errors.password?.message && (<p className="text-xs text-red-500">{errors.password.message as string}</p>)}
            
            </Field>
            <FieldGroup>
              <Field>
                <Button type="submit" className="cursor-pointer" disabled={isLoading}>{isLoading ? "Creating Account ..." : "Create Account"}</Button>
                
                <FieldDescription className="px-6 text-center">
                  Already have an account? <Link href="/auth/login">Sign in</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
