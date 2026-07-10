import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "My Approach",
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
              Child-centred, not one-size-fits-all
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              I take a creative, child-centred approach to my teaching. Every
              pupil has their own learning needs, whether that&apos;s processing a
              tricky bit of content, improving their writing style, or building
              confidence in the pressure of timed exams.
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              I break entrance examinations down into their constituent parts —
              comprehension, grammar, mental arithmetic and problem-solving — and
              build in revision strategies and exam technique alongside the
              subject content itself, so pupils arrive at the exam room feeling
              prepared and confident.
            </p>
          </div>

          <blockquote className="rounded-card border border-line bg-surface p-6 text-lg leading-relaxed text-ink shadow-soft">
            Working one-to-one means that I can shape my teaching to suit each
            pupil and their family. It&apos;s my role to create the learning
            conditions that enable each pupil to flourish, become independent
            learners, and, most importantly, to enjoy their education.
          </blockquote>

          <div>
            <h2 className="font-head text-2xl font-semibold text-ink">
              Clear communication
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              While my teaching style is flexible, I always communicate my
              expectations clearly and work with transparency regarding pupils&apos;
              goals and progress — so parents always know where their child
              stands and what we&apos;re working towards.
            </p>
          </div>

          <div>
            <h2 className="font-head text-2xl font-semibold text-ink">
              A tutor who&apos;s also a mentor
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              I&apos;m an engaging, patient and empathetic preparatory school
              teacher with eight years of experience tutoring students for senior
              school entrance examinations, while also supporting primary
              curriculum learning. A good tutor should be both an academic and a
              pastoral mentor — that combination of patience, active listening,
              and tailoring my teaching style to a student&apos;s strengths and
              interests is what makes studying relaxed, and fun.
            </p>
          </div>

          <Button href="/contact">Book a session</Button>
        </div>
      </section>
    </>
  );
}
