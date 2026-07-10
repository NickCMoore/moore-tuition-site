import { Button } from "@/components/Button";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-gradient-to-br from-soft via-ground to-surface">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(77,134,197,0.25), transparent 45%), radial-gradient(circle at 80% 10%, rgba(174,200,232,0.45), transparent 40%)",
          }}
        />
        <div className="relative mx-auto flex min-h-[72vh] max-w-5xl flex-col justify-center px-6 py-20">
          <p className="font-head text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
            Moore <span className="text-blue">Tuition</span>
          </p>
          <h1 className="mt-4 max-w-2xl font-head text-2xl font-medium text-ink sm:text-3xl">
            Learning beyond the classroom
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
            One-to-one Maths, English and Reasoning tutoring for 11+ and 13+
            entrance exams, in person in Lymm, Cheshire, or online across the UK.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Get in touch</Button>
            <Button href="/rates" variant="outline">
              View rates
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-surface px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-head text-3xl font-semibold text-ink">
            An engaging, patient and empathetic tutor
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
            With eight years of experience preparing pupils for senior school
            entrance examinations, I&apos;ve taught at leading London preparatory
            schools since 2015 — alongside earlier work as a music teacher and
            sports coach. I take a creative, child-centred approach: every pupil
            has their own learning needs, whether that&apos;s processing a tricky
            bit of content, improving their writing style, or building confidence
            under the pressure of timed exams.
          </p>
          <Link
            href="/approach"
            className="mt-6 inline-block font-medium text-blue-deep no-underline hover:underline"
          >
            Read more about my approach →
          </Link>
        </div>
      </section>

      <section className="border-b border-line px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-head text-3xl font-semibold text-ink">What I teach</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "English",
                body: "Comprehension, spelling, punctuation and grammar — building pupils' ability to read closely and write cohesively.",
              },
              {
                title: "Maths",
                body: "Calculation speed, times tables, the four operations, number relationships, measurement, mental arithmetic, geometry and data handling.",
              },
              {
                title: "Reasoning",
                body: "Verbal Reasoning to stretch potential ability, and Non-Verbal Reasoning to sharpen logical thinking.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-card border border-line bg-surface p-6 shadow-soft"
              >
                <h3 className="font-head text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
          <Link
            href="/subjects"
            className="mt-8 inline-block font-medium text-blue-deep no-underline hover:underline"
          >
            See full subject details →
          </Link>
        </div>
      </section>

      <section className="bg-soft/50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-head text-3xl font-semibold text-ink">Track record</h2>
          <blockquote className="mt-6 max-w-3xl border-l-4 border-blue pl-6 text-lg leading-relaxed text-ink">
            My students have successfully gained entrance to many of the leading
            independent senior schools in the country, such as St. Paul&apos;s,
            King&apos;s College (Wimbledon), Epsom College, St. John&apos;s
            (Leatherhead) and Reed&apos;s.
          </blockquote>
          <Link
            href="/faq"
            className="mt-6 inline-block font-medium text-blue-deep no-underline hover:underline"
          >
            Read more FAQs →
          </Link>
        </div>
      </section>
    </>
  );
}
