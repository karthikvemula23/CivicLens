import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import z from "zod";

import { authClient } from "@/lib/auth-client";

import Loader from "./loader";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function SignInForm({
  onSwitchToSignUp,
}: {
  onSwitchToSignUp: () => void;
}) {
  const { isPending } = authClient.useSession();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      await authClient.signIn.email(
        {
          email: value.email,
          password: value.password,
        },
        {
          onSuccess: () => {
            toast.success("Sign in successful");
            window.location.href = "/dashboard";
          },
          onError: (error) => {
            toast.error(error.error.message || error.error.statusText);
          },
        },
      );
    },
    validators: {
      onSubmit: z.object({
        email: z.email("Invalid email address"),
        password: z.string().min(8, "Password must be at least 8 characters"),
      }),
    },
  });

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border bg-card p-8 shadow-sm sm:p-10">
      <div className="absolute inset-x-0 top-0 h-1 bg-primary" />

      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
        <p className="mt-2 text-muted-foreground">
          Sign in to continue to CivicLens
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="space-y-5"
      >
        <form.Field name="email">
          {(field) => (
            <div className="space-y-2">
              <Label htmlFor={field.name}>Email Address</Label>

              <Input
                id={field.name}
                name={field.name}
                type="email"
                placeholder="name@example.com"
                autoComplete="email"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                className="h-11"
              />

              {field.state.meta.errors.map((error) => (
                <p
                  key={error?.message}
                  className="text-sm text-destructive"
                >
                  {error?.message}
                </p>
              ))}
            </div>
          )}
        </form.Field>

        <form.Field name="password">
          {(field) => (
            <div className="space-y-2">
              <Label htmlFor={field.name}>Password</Label>

              <Input
                id={field.name}
                name={field.name}
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                className="h-11"
              />

              {field.state.meta.errors.map((error) => (
                <p
                  key={error?.message}
                  className="text-sm text-destructive"
                >
                  {error?.message}
                </p>
              ))}
            </div>
          )}
        </form.Field>

        <form.Subscribe>
          {(state) => (
            <Button
              type="submit"
              className="h-11 w-full"
              disabled={!state.canSubmit || state.isSubmitting}
            >
              {state.isSubmitting ? "Signing in..." : "Sign In"}
            </Button>
          )}
        </form.Subscribe>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Button
          type="button"
          variant="link"
          onClick={onSwitchToSignUp}
          className="h-auto p-0 font-semibold"
        >
          Create account
        </Button>
      </p>
    </div>
  );
}