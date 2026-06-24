import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  id?: string;
  align?: "left" | "center";
  className?: string;
}

export function Section({
  eyebrow,
  title,
  description,
  children,
  id,
  align = "left",
  className = "",
}: Props) {
  return (
    <section id={id} className={`py-20 md:py-24 ${className}`}>
      <div className="container-prose">
        {(eyebrow || title || description) && (
          <div
            className={`mb-12 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
          >
            {eyebrow && (
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-primary">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
