import Link from "next/link";
import { tiers } from "@/lib/products";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <span className="eyebrow">Alpha Underground</span>
        <h1>A private room for men who actually want to talk.</h1>
        <p className="lede">
          A members-only Discord for the late-night crew — business, fitness,
          books, whiskey, and the kind of conversations you&rsquo;d have out loud if
          the room were right. Pick a pass and pull up a chair.
        </p>
      </section>

      {tiers.map((tier) => (
        <section key={tier.id} className={`tier-section tier-${tier.id}`}>
          <div className="tier-heading">
            <span className="eyebrow">{tier.tagline}</span>
            <h2>{tier.name}</h2>
            <p className="tier-blurb">{tier.description}</p>
          </div>
          <div
            className={
              tier.variants.length > 1 ? "variant-grid" : "variant-grid single"
            }
          >
            {tier.variants.map((v) => (
              <Link
                key={v.slug}
                href={`/products/${v.slug}`}
                className="variant-card"
              >
                <span className="variant-duration">{v.duration}</span>
                <span className="variant-price">{v.price}</span>
                <span className="variant-cta">
                  {tier.kind === "donation" ? "Send a tip" : "Choose"} →
                </span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
