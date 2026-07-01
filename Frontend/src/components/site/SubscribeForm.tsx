import { useState, type FormEvent } from "react";
import { subscribeUser } from "@/services/subscriberService";
import { SubscribeModal } from "./SubscribeModal";
import { ArrowRight, Loader2 } from "lucide-react";
import axios from "axios";

interface Props {
  variant?: "default" | "inverse";
  size?: "md" | "lg";
}

export function SubscribeForm({ variant = "default", size = "md" }: Props) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const result = await subscribeUser(email);
      setSubmittedEmail(email);
      setEmail("");
      setOpen(true);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Something went wrong.");
      } else {
        setError("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  }

  const inputBase =
  "w-full rounded-md border bg-background px-4 text-base sm:text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30";
  const sizing = size === "lg" ? "h-12 text-[15px]" : "h-12 sm:h-11";
  const borderTone = variant === "inverse" ? "border-border" : "border-border";

  return (
    <>
      <form onSubmit={onSubmit} className="mx-auto flex w-full max-w-xl flex-col gap-2 sm:flex-row">
        <label htmlFor={`email-${size}`} className="sr-only">
          Email address
        </label>
        <input
          id={`email-${size}`}
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className={`${inputBase} ${sizing} ${borderTone} min-w-0 w-full sm:flex-1`}
        />
        <button
          type="submit"
          disabled={loading}
          className={`inline-flex ${size === "lg" ? "h-12" : "h-11"} items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-60`}
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              Subscribe Free
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>
      {error && <p className="mt-2 text-center text-sm text-destructive">{error}</p>}
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Free forever. One email per week. Unsubscribe anytime.
      </p>
      <SubscribeModal open={open} onClose={() => setOpen(false)} email={submittedEmail} />
    </>
  );
}
