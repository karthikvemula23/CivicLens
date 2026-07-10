import { MapPin, Radio, Users } from "lucide-react";
import type { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const features = [
  {
    icon: MapPin,
    title: "Report Visually",
    description: "Quickly report issues with photos and precise location data.",
  },
  {
    icon: Radio,
    title: "Track Progress",
    description: "Follow your reports from submission through resolution.",
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "Help civic leaders prioritize important community concerns.",
  },
];

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="min-h-svh bg-background lg:grid lg:grid-cols-2">
      <section className="relative hidden overflow-hidden border-r bg-blue-50 px-12 py-10 dark:bg-blue-950/20 lg:flex lg:flex-col">
        <img
          src="/branding/civiclens-logo-light.png"
          alt="CivicLens"
          className="h-11 w-auto self-start dark:hidden"
        />

        <img
          src="/branding/civiclens-logo-dark.png"
          alt="CivicLens"
          className="hidden h-11 w-auto self-start dark:block"
        />

        <div className="my-auto max-w-xl">
          <h1 className="max-w-lg text-5xl font-bold leading-tight tracking-tight">
            Report local issues. Help improve your community.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground">
            Report civic infrastructure problems, track their progress, and help
            create safer, better-maintained communities.
          </p>

          <div className="mt-10 space-y-3">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-xl border bg-background/70 p-4 backdrop-blur-sm"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </div>

                <div>
                  <h2 className="font-semibold">{title}</h2>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
            Copyright 2026 CivicLens
        </p>
      </section>

      <section className="flex min-h-svh items-center justify-center px-4 py-10 sm:px-6 lg:min-h-0">
        <div className="w-full max-w-md">
          <div className="mb-8 flex justify-center lg:hidden">
            <img
              src="/branding/civiclens-logo-light.png"
              alt="CivicLens"
              className="h-12 w-auto dark:hidden"
            />

            <img
              src="/branding/civiclens-logo-dark.png"
              alt="CivicLens"
              className="hidden h-12 w-auto dark:block"
            />
          </div>

          {children}
        </div>
      </section>
    </main>
  );
}