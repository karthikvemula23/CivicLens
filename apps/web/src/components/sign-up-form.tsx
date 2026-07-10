import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import z from "zod";

import { authClient } from "@/lib/auth-client";

import Loader from "./loader";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function SignUpForm({
  onSwitchToSignIn,
}: {
  onSwitchToSignIn: () => void;
}) {
  const { isPending } = authClient.useSession();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
    onSubmit: async ({ value }) => {
      await authClient.signUp.email(
        {
          email: value.email,
          password: value.password,
          name: value.name,
        },
        {
          onSuccess: () => {
            toast.success("Sign up successful");
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
        name: z.string().min(2, "Name must be at least 2 characters"),
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
        <h1 className="text-3xl font-bold tracking-tight">
          Create your account
        </h1>

        <p className="mt-2 text-muted-foreground">
          Join CivicLens and help improve your community
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
        <form.Field name="name">
          {(field) => (
            <div className="space-y-2">
              <Label htmlFor={field.name}>Full Name</Label>

              <Input
                id={field.name}
                name={field.name}
                type="text"
                placeholder="Vemula Karthik"
                autoComplete="name"
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

        <form.Field name="email">
          {(field) => (
            <div className="space-y-2">
              <Label htmlFor={field.name}>Email Address</Label>

              <Input
                id={field.name}
                name={field.name}
                type="email"
                placeholder="karthik@example.com"
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
                placeholder="Create a password"
                autoComplete="new-password"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                className="h-11"
              />

              <p className="text-xs text-muted-foreground">
                Must be at least 8 characters
              </p>

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
              {state.isSubmitting
                ? "Creating account..."
                : "Create Account"}
            </Button>
          )}
        </form.Subscribe>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Button
          type="button"
          variant="link"
          onClick={onSwitchToSignIn}
          className="h-auto p-0 font-semibold"
        >
          Sign in
        </Button>
      </p>
    </div>
  );
}