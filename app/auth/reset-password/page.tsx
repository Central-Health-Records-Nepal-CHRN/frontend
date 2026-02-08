// page.tsx (server component)

import ResetPasswordPage from "@/components/Auth/reset-passowrd";
import { Suspense } from "react";

export default function page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ResetPasswordPage />
    </Suspense>
  );
}