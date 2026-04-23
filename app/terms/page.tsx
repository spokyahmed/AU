import Link from "next/link";

export const metadata = {
  title: "Terms of Service — Alpha Underground",
  description:
    "Terms of Service and Privacy Policy for Alpha Underground Discord community access.",
};

export default function TermsPage() {
  return (
    <article className="legal">
      <Link href="/" className="back">
        ← Back to home
      </Link>
      <h1>Terms of Service</h1>
      <p>
        By purchasing access to our Discord server, you agree to the following
        terms.
      </p>

      <h2>1. Service Description</h2>
      <p>
        We provide paid access to a private Discord server that includes
        digital content, discussions, and/or community features. Access is
        granted after successful payment.
      </p>
      <p>
        We reserve the right to modify, update, or remove content or features
        at any time without prior notice.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be at least 18 years old (or the age of majority in your
        country) to purchase access. By using our service, you confirm that
        you meet this requirement.
      </p>

      <h2>3. Payments</h2>
      <p>
        All payments are processed securely through our payment provider. By
        purchasing, you agree to pay the listed price and any applicable fees.
      </p>
      <p>
        Access is granted for the duration specified at the time of purchase
        (e.g., monthly, lifetime, etc.).
      </p>

      <h2>4. Refund Policy</h2>
      <p>We offer a 30-day refund policy.</p>
      <p>
        If you are not satisfied with the service, you may request a full
        refund within 30 days of your purchase date. After 30 days, refunds
        will not be issued.
      </p>
      <p>
        We reserve the right to deny refund requests in cases of abuse, such
        as repeated purchases and refunds or violation of these terms.
      </p>

      <h2>5. Account &amp; Access</h2>
      <p>
        Your access is tied to your personal Discord account and may not be
        shared, transferred, or resold.
      </p>
      <p>We reserve the right to revoke access without refund if:</p>
      <ul>
        <li>You violate Discord&rsquo;s Terms of Service</li>
        <li>You engage in harassment, abuse, or illegal activities</li>
        <li>You attempt to redistribute or leak paid content</li>
      </ul>

      <h2>6. Community Rules</h2>
      <p>
        By joining the Discord server, you agree to follow all community
        rules. These rules may be updated at any time.
      </p>
      <p>
        Failure to follow the rules may result in warnings, suspension, or
        permanent removal without refund.
      </p>

      <h2>7. No Guarantees</h2>
      <p>
        We do not guarantee any specific results, outcomes, or benefits from
        using our service. All content is provided &ldquo;as is&rdquo; for
        informational and entertainment purposes.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>We are not liable for:</p>
      <ul>
        <li>Any indirect or consequential damages</li>
        <li>Loss of data, profits, or business opportunities</li>
        <li>Issues caused by Discord platform outages or third-party services</li>
      </ul>

      <h2>9. Termination</h2>
      <p>
        We may suspend or terminate access at our discretion if we believe you
        have violated these terms.
      </p>

      <h2>10. Changes to Terms</h2>
      <p>
        We may update these Terms at any time. Continued use of the service
        after changes means you accept the updated Terms.
      </p>

      <h1>Privacy Policy</h1>

      <h2>1. Information We Collect</h2>
      <p>We may collect:</p>
      <ul>
        <li>Your email address</li>
        <li>Payment-related information (processed by third parties)</li>
        <li>Your Discord username and ID</li>
      </ul>

      <h2>2. How We Use Information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Provide access to the service</li>
        <li>Process payments</li>
        <li>Communicate with you about your account</li>
      </ul>

      <h2>3. Data Sharing</h2>
      <p>
        We do not sell your personal data. We may share data with trusted
        third-party services (e.g., payment processors) only as necessary to
        operate the service.
      </p>

      <h2>4. Data Security</h2>
      <p>
        We take reasonable measures to protect your data, but no system is
        completely secure.
      </p>

      <h2>5. Your Rights</h2>
      <p>
        You may request deletion of your data by contacting us.
      </p>

      <h1>Contact</h1>
      <p>
        If you have any questions or refund requests, please contact us at:{" "}
        <a href="mailto:admin@alphaunderground.com">
          admin@alphaunderground.com
        </a>
      </p>
    </article>
  );
}
