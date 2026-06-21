interface Step {
  number: string;
  title: string;
  body: string;
}

interface NumberedStepperProps {
  eyebrow: string;
  heading: string;
  steps: Step[];
  children?: React.ReactNode;
}

import React from "react";

export default function NumberedStepper({ eyebrow, heading, steps, children }: NumberedStepperProps) {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ochre-deep mb-6">
          {eyebrow}
        </p>
        <h2
          className="font-display font-bold text-ink leading-tight max-w-2xl mb-14"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
        >
          {heading}
        </h2>

        <ol className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14" role="list">
          {steps.map((step) => (
            <li key={step.number} className="flex gap-6">
              <div className="shrink-0">
                <span className="font-mono text-[11px] font-medium text-ochre-deep tracking-[0.08em]">
                  {step.number}
                </span>
                <div className="mt-2 w-px h-full bg-bone ml-[0.3rem]" aria-hidden="true" />
              </div>
              <div className="pb-2">
                <h3 className="font-display font-semibold text-ink text-xl leading-snug mb-3">
                  {step.title}
                </h3>
                <p className="text-base text-taupe leading-relaxed">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
        {children}
      </div>
    </section>
  );
}
