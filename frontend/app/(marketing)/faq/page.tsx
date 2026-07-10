import { PageHeader } from "@/components/PageHeader";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
};

const faqs = [
  {
    question: "What success have you had with your pupils?",
    answer:
      "My students have successfully gained entrance to many of the leading independent senior schools in the country, such as St. Paul's, King's College (Wimbledon), Epsom College, St. John's (Leatherhead) and Reed's.",
  },
  {
    question: "Are all of your classes online?",
    answer:
      "I am able to offer face-to-face or online tutoring during the week and at weekends, depending on your preferences.",
  },
  {
    question: "Do you have any teaching qualifications and a background check?",
    answer:
      "I qualified as a teacher in 2015 with a PGCE (Primary Education) from the University of Bedfordshire. I hold an Enhanced DBS check.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHeader title="Frequently Asked Questions" />
      <section className="px-6 py-14">
        <div className="mx-auto max-w-3xl space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-card border border-line bg-surface p-6 shadow-soft"
            >
              <h3 className="font-head text-xl font-semibold text-ink">
                {faq.question}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">{faq.answer}</p>
            </div>
          ))}
          <p className="pt-2 text-muted">
            Have another question?{" "}
            <Link href="/contact" className="font-medium text-blue-deep hover:underline">
              Get in touch
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
