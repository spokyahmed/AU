"use client";

import { useEffect, useRef } from "react";

type Props = {
  planId: string;
  theme?: "light" | "dark";
};

const LOADER_SRC = "https://js.whop.com/static/checkout/loader.js";

export function WhopCheckout({ planId, theme = "dark" }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // The Whop loader only scans the DOM on initial script evaluation, so on
    // client-side navigation we re-inject it to pick up the new checkout div.
    document
      .querySelectorAll<HTMLScriptElement>(`script[src="${LOADER_SRC}"]`)
      .forEach((s) => s.remove());
    try {
      delete (window as unknown as Record<string, unknown>).wco;
    } catch {
      (window as unknown as Record<string, unknown>).wco = undefined;
    }

    const script = document.createElement("script");
    script.src = LOADER_SRC;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
      try {
        delete (window as unknown as Record<string, unknown>).wco;
      } catch {
        (window as unknown as Record<string, unknown>).wco = undefined;
      }
    };
  }, [planId, theme]);

  return (
    <div className="checkout-wrap">
      <div
        ref={ref}
        data-whop-checkout-plan-id={planId}
        data-whop-checkout-theme={theme}
      />
    </div>
  );
}
