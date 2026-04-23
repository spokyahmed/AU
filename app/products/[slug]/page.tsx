import Link from "next/link";
import { notFound } from "next/navigation";
import { getVariant, allVariantSlugs } from "@/lib/products";
import { WhopCheckout } from "@/components/WhopCheckout";

export function generateStaticParams() {
  return allVariantSlugs().map((slug) => ({ slug }));
}

type Props = { params: { slug: string } };

export default function ProductPage({ params }: Props) {
  const match = getVariant(params.slug);
  if (!match) notFound();
  const { tier, variant } = match;

  const siblings = tier.variants.filter((v) => v.slug !== variant.slug);

  return (
    <>
      <Link href="/" className="back">
        ← Back to all passes
      </Link>
      <div className="product-layout">
        <div className="product-info">
          <span className="eyebrow">{tier.tagline}</span>
          <h1>
            {tier.name} <span className="duration-tag">· {variant.duration}</span>
          </h1>
          <p className="price-tag">{variant.priceValue}</p>
          <p className="description">{tier.description}</p>
          <ul className="features">
            {tier.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
            <li className="features-refund">
              Covered by our 30-day refund guarantee — if it&rsquo;s not a fit,
              we&rsquo;ll make it right.{" "}
              <Link href="/terms" className="inline-link">
                Read the full terms →
              </Link>
            </li>
          </ul>
          {siblings.length > 0 && (
            <div className="variant-switch">
              <span className="variant-switch-label">Other durations</span>
              <div className="variant-switch-row">
                {siblings.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/products/${s.slug}`}
                    className="variant-switch-chip"
                  >
                    {s.duration} · {s.price}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="product-checkout">
          <WhopCheckout planId={variant.planId} />
        </div>
      </div>
    </>
  );
}
