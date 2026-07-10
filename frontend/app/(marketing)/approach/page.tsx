import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "My Approach",
  description:
    "A child-centred tutoring approach for 7+, 11+ and 13+, with tailored lessons, exam technique, and clear communication with parents.",
};

export default function ApproachPage() {
  return (
    <>
      <PageHeader
        title="My Approach"
        subtitle="Academic mentor and pastoral support, in equal measure"
      />
      <section className="px-6 py-14">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-card shadow-soft">
            <Image
              src="/images/teacher-student.jpg"
              alt="One-to-one tutoring over books and notes"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <div>
            <h2 className="font-head text-2xl font-semibold text-ink">
              Child-centred and adaptable
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              My approach is child-centred and adaptable, so each pupil gets
              lessons that suit their learning style and goals. I aim for a
              supportive, engaging environment where students feel motivated to
              do their best, whether we&apos;re preparing for a highly competitive
              school or building confidence in a challenging subject.
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              I break entrance exams into their fundamental parts:
              comprehension, grammar, mental arithmetic and problem-solving.
              I also build in revision strategies and exam technique alongside the
              subject content, so pupils arrive at the exam room prepared and
              confident.
            </p>
          </div>

          <div>
            <h2 className="font-head text-2xl font-semibold text-ink">
              Familiar with the main exam boards
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              I&apos;m familiar with a range of exam boards and requirements,
              including CEM, GL, ISEB and school-specific assessments. That means
              we can practise in the style your child will actually meet on the
              day, not just generic worksheets.
            </p>
          </div>

          <blockquote className="rounded-card border border-line bg-surface p-6 text-lg leading-relaxed text-ink shadow-soft">
            My goal is to help each pupil become an independent learner, flourish
            academically, and most importantly enjoy their educational
            journey.
          </blockquote>

          <div>
            <h2 className="font-head text-2xl font-semibold text-ink">
              Clear communication with parents
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              I keep communication open with parents and pupils, so expectations,
              goals and progress stay transparent and aligned. You&apos;ll always
              know where your child stands and what we&apos;re working towards.
            </p>
          </div>

          <div>
            <h2 className="font-head text-2xl font-semibold text-ink">
              In person or online
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              Alongside sessions in Lymm, Cheshire, I offer online tuition for
              flexible, consistent support wherever you are. The same
              child-centred approach applies either way.
            </p>
          </div>

          <Button href="/contact">Book a session</Button>
        </div>
      </section>
    </>
  );
}
