import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Subjects",
  description:
    "English, Maths, Verbal and Non-Verbal Reasoning for 7+, 11+ and 13+ — including CEM, GL, ISEB and school-specific papers.",
};

const subjects = [
  {
    title: "English",
    body: "Comprehension, spelling, punctuation and grammar — building pupils' ability to read closely and write cohesively, from primary curriculum support through to 11+ and 13+ papers.",
    image: "/images/kids-handwriting.jpg",
    imageAlt: "Pupil practising handwriting and vocabulary",
  },
  {
    title: "Maths",
    body: "Calculation speed, times tables, the four operations, number relationships, measurement, mental arithmetic, geometry and data handling — with exam technique for timed papers.",
    image: "/images/maths.jpg",
    imageAlt: "Maths doodle illustration",
  },
  {
    title: "Verbal Reasoning",
    body: "Verbal Reasoning tests a pupil's potential ability rather than just what they can already do — we work on the patterns and thinking skills behind the question types, not just rote practice.",
  },
  {
    title: "Non-Verbal Reasoning",
    body: "Non-Verbal Reasoning tests logic rather than academic capability, so sessions focus on spotting patterns, sequences and relationships between shapes.",
    image: "/images/Reasoning.jpg",
    imageAlt: "Example non-verbal reasoning cube net questions",
  },
];

export default function SubjectsPage() {
  return (
    <>
      <PageHeader
        title="Subjects"
        subtitle="English, Maths and Reasoning for 7+, 11+ and 13+ entrance exams"
      />
      <section className="px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <p className="mb-10 max-w-3xl text-lg leading-relaxed text-muted">
            I prepare pupils for a range of formats, including CEM, GL, ISEB and
            school-specific assessments — always tailored to the schools you&apos;re
            aiming for.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {subjects.map((subject) => (
              <div
                key={subject.title}
                className="overflow-hidden rounded-card border border-line bg-surface shadow-soft"
              >
                {subject.image ? (
                  <div className="relative h-44 bg-soft">
                    <Image
                      src={subject.image}
                      alt={subject.imageAlt ?? ""}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                ) : null}
                <div className="p-6">
                  <h3 className="font-head text-xl font-semibold text-ink">
                    {subject.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">{subject.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/rates">See session rates</Button>
          </div>
        </div>
      </section>
    </>
  );
}
