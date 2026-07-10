import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Rates",
  description:
    "Simple per-session tutoring rates for 30, 45 or 60 minutes for 7+, 11+ and 13+, in person in Lymm or online.",
  path: "/rates",
});

const rates = [
  { duration: "30 minutes", price: "£30" },
  { duration: "45 minutes", price: "£40" },
  { duration: "60 minutes", price: "£50" },
];

export default function RatesPage() {
  return (
    <>
      <PageHeader
        title="Rates"
        subtitle="Simple, per-session pricing, in person or online"
      />
      <section className="px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-3">
            {rates.map((rate) => (
              <div
                key={rate.duration}
                className="rounded-card border border-line bg-surface p-8 text-center shadow-soft"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-blue">
                  {rate.duration}
                </p>
                <p className="mt-3 font-head text-5xl font-semibold text-ink">
                  {rate.price}
                </p>
                <p className="mt-3 text-muted">In person or online</p>
              </div>
            ))}
          </div>
          <div className="mt-10 max-w-3xl space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Each session is one-to-one and includes tailored teaching, exam
              technique where needed, and clear feedback for parents. The same
              rates apply in Lymm or online.
            </p>
            <p>
              Regular weekly slots are available subject to diary space. If you
              need to cancel, please give at least 24 hours&apos; notice where
              possible so the time can be offered to another family.
            </p>
            <p>Get in touch to enquire about a session or a regular weekly slot.</p>
          </div>
          <div className="mt-6">
            <Button href="/contact">Get in touch</Button>
          </div>
        </div>
      </section>
    </>
  );
}
