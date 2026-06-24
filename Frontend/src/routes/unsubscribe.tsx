import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, XCircle } from "lucide-react";

export const Route = createFileRoute("/unsubscribe")({
  component: UnsubscribePage,
});

function UnsubscribePage() {

  const params =
    new URLSearchParams(
      window.location.search
    );

  const status =
    params.get("status");

  const isSuccess =
    status === "success";

  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden">

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] hairline-grid"
      />

      <div
        aria-hidden
        className={`pointer-events-none absolute left-1/2 top-1/2 h-96 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${
          isSuccess
            ? "bg-primary/15"
            : "bg-red-500/15"
        }`}
      />

      <div className="container-prose relative">

        <div className="mx-auto max-w-xl text-center animate-in fade-in slide-in-from-bottom-4 duration-700">

          <div className="relative mx-auto grid h-24 w-24 place-items-center">

            <span
              className={`absolute inset-0 rounded-full ${
                isSuccess
                  ? "border border-primary/30"
                  : "border border-red-500/30"
              }`}
            />

            <span
              className={`absolute inset-2 rounded-full ${
                isSuccess
                  ? "border border-primary/20"
                  : "border border-red-500/20"
              }`}
            />

            <span
              className={`absolute inset-4 animate-ping rounded-full ${
                isSuccess
                  ? "bg-primary/15"
                  : "bg-red-500/15"
              }`}
            />

            <span
              className={`relative grid h-16 w-16 place-items-center rounded-full text-white ${
                isSuccess
                  ? "bg-primary"
                  : "bg-red-500"
              }`}
            >

              {isSuccess ? (
                <Check
                  className="h-8 w-8"
                  strokeWidth={3}
                />
              ) : (
                <XCircle
                  className="h-8 w-8"
                  strokeWidth={3}
                />
              )}

            </span>

          </div>

          <p
            className={`mt-8 text-xs font-medium uppercase tracking-[0.22em] ${
              isSuccess
                ? "text-primary"
                : "text-red-500"
            }`}
          >
            {isSuccess
              ? "Subscription Removed"
              : "Unsubscribe Failed"}
          </p>

          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight">

            {isSuccess
              ? "You Have Been Unsubscribed"
              : "Unable To Unsubscribe"}

          </h1>

          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground">

            {isSuccess
              ? "You will no longer receive AI Weekly Digest emails."
              : "This unsubscribe link is invalid or has already been used."}

          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

            <Link
              to="/"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground"
            >
              Return Home
            </Link>

            {!isSuccess && (
              <Link
                to="/"
                className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-card px-6 text-sm font-medium"
              >
                Subscribe Again
              </Link>
            )}

          </div>

        </div>

      </div>

    </section>
  );
}