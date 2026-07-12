import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { pageMetadata } from "@/lib/metadata";
import Image from "next/image";

export const metadata = pageMetadata({
  title: "My Approach",
  description:
    "A child-centred tutoring approach for 7+, 8+, 11+ and 13+ and KS1–KS3 English and Maths, with tailored lessons, exam technique, and clear parent communication.",
  path: "/approach",
});

export default function ApproachPage() {
  return (
    <>
      <PageHeader
        title="My Approach"
        subtitle="Academic mentor and pastoral support, in equal measure"
      />
      <section className="px-6 py-14">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-card shadow-soft sm:aspect-[16/10]">
            <Image
              src="/images/hero-classroom.jpg"
              alt="Nick Moore tutoring pupils one-to-one in a classroom"
              fill
              className="object-cover object-[center_40%]"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <div>
            <h2 className="font-head text-2xl font-semibold text-ink">
              Child-centred and adaptable
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              My approach is child-centred and adaptable, so each pupil gets
              lessons that suit their learning style and goals — whether that is
              7+, 8+, 11+ or 13+ preparation, or general English and Maths
              support across KS1–KS3. I aim for a supportive, engaging
              environment where students feel motivated to do their best,
              whether we&apos;re preparing for a highly competitive school or
              building confidence in a challenging subject.
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              For entrance exams, I break the work into its fundamental parts:
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
            <p className="mt-3 leading-relaxed text-muted">
              Having led Maths at a leading London prep school and now working
              in professional assessment development, I understand entrance exams
              from both sides: how children experience them and how they&apos;re
              built.
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

          <Button href="/contact">Get in touch</Button>
        </div>
      </section>
    </>
  );
}
