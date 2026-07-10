import { PageHeader } from "@/components/PageHeader";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "FAQs about Moore Tuition: results, online vs in-person, exam boards, qualifications and DBS.",
};

const faqs = [
  {
    question: "What success have you had with your pupils?",
    answer:
      "My students have successfully gained entrance to many of the leading independent senior schools in the country, such as St. Paul's, King's College (Wimbledon), Epsom College, St. John's (Leatherhead) and Reed's.",
  },
  {
    question: "Which exams and boards do you cover?",
    answer:
      "I tutor for 7+, 11+ and 13+ entrance exams in English, Maths and Reasoning, and I'm familiar with CEM, GL, ISEB and school-specific assessments.",
  },
  {
    question: "Are all of your classes online?",
    answer:
      "No. I offer face-to-face sessions in Lymm, Cheshire, and online tuition for flexible support wherever you are, during the week and at weekends depending on your preferences.",
  },
  {
    question: "Do you have any teaching qualifications and a background check?",
    answer:
      "I qualified as a teacher in 2015 with a PGCE (Primary Education) from the University of Bedfordshire. I also hold a BMus from the University of Edinburgh, and an Enhanced DBS check.",
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
