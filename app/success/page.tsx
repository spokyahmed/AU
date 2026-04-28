import Link from "next/link";

export const metadata = {
  title: "You're in — Alpha Underground",
  description: "Your purchase is confirmed. Check your inbox for next steps.",
};

export default function SuccessPage() {
  return (
    <article className="success">
      <span className="eyebrow">Welcome to the room</span>
      <h1>You&rsquo;re in.</h1>
      <p className="lede">
        Payment confirmed. Thanks for joining Alpha Underground — the bar just
        got a little louder.
      </p>

      <div className="success-card">
        <h2>What happens next</h2>
        <ol className="success-steps">
          <li>
            <strong>Check your inbox.</strong> We&rsquo;ll email you within the
            next few minutes from{" "}
            <a href="mailto:admin@alphaunderground.com" className="inline-link">
              admin@alphaunderground.com
            </a>{" "}
            with your private invite link.
          </li>
          <li>
            <strong>Click the invite.</strong> It opens Discord and drops you
            straight into the lounge with the right role assigned.
          </li>
          <li>
            <strong>Say hi in #welcome.</strong> Tell us who you are and what
            you&rsquo;re working on — that&rsquo;s how the night gets started.
          </li>
        </ol>

        <p className="success-note">
          Don&rsquo;t see the email after 15 minutes? Check your spam folder, then
          reach out to{" "}
          <a href="mailto:admin@alphaunderground.com" className="inline-link">
            admin@alphaunderground.com
          </a>{" "}
          and we&rsquo;ll sort it.
        </p>
      </div>

      <Link href="/" className="back">
        ← Back to home
      </Link>
    </article>
  );
}
