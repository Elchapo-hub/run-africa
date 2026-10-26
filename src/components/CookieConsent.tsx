import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const consentCookie = "run_africa_cookie_consent";

function hasConsentChoice() {
  return document.cookie.split(";").some((cookie) => cookie.trim().startsWith(`${consentCookie}=`));
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!hasConsentChoice());
  }, []);

  const saveChoice = (choice: "all" | "essential") => {
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${consentCookie}=${choice}; Max-Age=31536000; Path=/; SameSite=Lax${secure}`;
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35 }}
          aria-labelledby="cookie-consent-title"
          className="fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-2xl rounded-lg border border-border bg-background p-3 text-foreground shadow-elegant md:flex md:items-center md:justify-between md:gap-5 md:p-4"
        >
          <div>
            <h2 id="cookie-consent-title" className="font-display text-lg">
              Your cookie choice
            </h2>
            <p className="mt-1 max-w-lg text-xs leading-relaxed text-muted-foreground">
              Choose whether to allow cookies on this site. We save your choice in an essential
              cookie so we can remember it.
            </p>
          </div>
          <div className="mt-3 flex shrink-0 flex-wrap gap-2 md:mt-0">
            <button
              type="button"
              onClick={() => saveChoice("all")}
              className="rounded-full bg-primary px-3 py-2 text-xs text-primary-foreground transition hover:brightness-110"
            >
              Allow cookies
            </button>
            <button
              type="button"
              onClick={() => saveChoice("essential")}
              className="rounded-full border border-border px-3 py-2 text-xs transition hover:bg-muted"
            >
              Essential only
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
