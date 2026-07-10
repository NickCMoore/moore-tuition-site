import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rates",
};

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
        subtitle="Simple, per-session pricing — in person or online"
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
          <p className="mt-10 text-lg text-muted">
            Get in touch to book a session or discuss a regular weekly slot.
          </p>
          <div className="mt-6">
            <Button href="/contact">Book a session</Button>
          </div>
        </div>
      </section>
    </>
  );
}
