import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Mail, X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
  email: string;
}

export function SubscribeModal({ open, onClose, email }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-md animate-in fade-in duration-200"
        onClick={onClose}
      />
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-2xl animate-in fade-in zoom-in-95 slide-in-from-bottom-4 duration-300">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="px-7 pb-7 pt-9 text-center">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-primary/30 bg-primary/10">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">
            Verification Email Sent
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            We've sent a verification link to{" "}
            <span className="font-medium text-foreground">
              {email || "your email address"}
            </span>
            . Please check your inbox and confirm your subscription to start
            receiving AI Weekly Digest.
          </p>

          <div className="mt-7 flex flex-col gap-2">
            <Link
              to="/verified"
              className="inline-flex h-11 w-full items-center justify-center rounded-md bg-primary text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              onClick={onClose}
            >
              Preview confirmation page
            </Link>
            <button
              onClick={onClose}
              className="inline-flex h-10 w-full items-center justify-center rounded-md text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Close
            </button>
          </div>
        </div>
        <div className="border-t border-border bg-background/60 px-7 py-3 text-center text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Didn't get it? Check spam, then try again.
        </div>
      </div>
    </div>
  );
}
