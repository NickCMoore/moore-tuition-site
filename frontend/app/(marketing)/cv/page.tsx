import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Nick Moore's teaching CV — preparatory school experience, PGCE Primary Education, and Enhanced DBS check.",
};

const experience = [
  {
    years: "2015 – Present",
    title: "Academic Tutor",
    body: "London & Manchester — Helping students secure 11+ success and places at top senior schools.",
  },
  {
    years: "2017 – 2023",
    title: "Key Stage 2 Teacher",
    body: "Rokeby Prep School, Kingston Upon Thames — Taught Year 4 and Year 5 classes, with an emphasis on differentiation of tasks to meet varied pupil needs and regular parent communication.",
  },
  {
    years: "2015 – 2017",
    title: "Key Stage 2 Teacher",
    body: "St. John's Beaumont Prep School, Windsor — Year 5 class teacher, focused on assessing children's individual academic and social needs within the classroom.",
  },
  {
    years: "2009 – 2015",
    title: "Peripatetic Music Tutor",
    body: "Camden Music Service, London — Taught over 50 students in cello, piano and music theory across private and school settings, offering individual lessons and group instrumental music workshops for all ages from 5 upwards.",
  },
];

export default function CvPage() {
  return (
    <>
      <PageHeader
        title="CV"
        subtitle="Eight years' experience in preparatory schools and private tutoring"
      />
      <section className="px-6 py-14">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-full border-4 border-soft shadow-soft">
              <Image
                src="/images/portrait.jpg"
                alt="Nick Moore"
                fill
                className="object-cover object-top"
                sizes="144px"
              />
            </div>
            <div>
              <h2 className="font-head text-2xl font-semibold text-ink">Nick Moore</h2>
              <p className="mt-2 text-muted">
                Academic tutor for 11+ and 13+ · PGCE Primary Education · Enhanced
                DBS
              </p>
            </div>
          </div>

          <h2 className="font-head text-2xl font-semibold text-ink">Experience</h2>
          <div className="mt-6 space-y-6">
            {experience.map((item) => (
              <div
                key={`${item.years}-${item.title}`}
                className="border-l-4 border-blue pl-5"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-blue">
                  {item.years}
                </p>
                <h3 className="mt-1 font-head text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-12 font-head text-2xl font-semibold text-ink">
            Qualifications
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-card border border-line bg-surface p-6 shadow-soft">
              <h3 className="font-head text-lg font-semibold text-ink">
                PGCE, Primary Education
              </h3>
              <p className="mt-2 text-muted">
                University of Bedfordshire, qualified as a teacher in 2015.
              </p>
            </div>
            <div className="rounded-card border border-line bg-surface p-6 shadow-soft">
              <h3 className="font-head text-lg font-semibold text-ink">
                Enhanced DBS Check
              </h3>
              <p className="mt-2 text-muted">Current enhanced background check held.</p>
            </div>
          </div>

          <div className="mt-10">
            <Button href="/contact">Get in touch</Button>
          </div>
        </div>
      </section>
    </>
  );
}
