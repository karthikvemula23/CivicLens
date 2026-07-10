import { useState } from "react";

import AuthLayout from "@/components/auth-layout";
import SignInForm from "@/components/sign-in-form";
import SignUpForm from "@/components/sign-up-form";

export default function Login() {
  const [showSignIn, setShowSignIn] = useState(true);

  return (
    <AuthLayout>
      {showSignIn ? (
        <SignInForm onSwitchToSignUp={() => setShowSignIn(false)} />
      ) : (
        <SignUpForm onSwitchToSignIn={() => setShowSignIn(true)} />
      )}
    </AuthLayout>
  );
}