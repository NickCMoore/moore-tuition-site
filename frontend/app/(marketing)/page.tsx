import { Button } from "@/components/Button";
import { pageMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "Home",
  description:
    "1-to-1 tutoring for 7+, 8+, 11+ and 13+, plus KS1–KS3 English and Maths support, in person in Lymm, Cheshire or online across the UK.",
  path: "/",
});

type Testimonial = {
  quote: string;
  name?: string;
  relationship: string;
  yearGroup?: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Nick is very engaged with both pupil and parent. He seems to understand and build upon the pupil's progress in school and is quick to highlight pupils' strengths and areas for development.",
    relationship:
      "Parent of an 11+ student preparing for Hampton School and Reed's School",
  },
  {
    quote:
      "Nick works with our son to introduce topics slowly, with a focus on the structure and technical detail needed in exams.",
    relationship: "Parent of an 11+ student focusing on exam technique",
  },
];

function TestimonialAttribution({
  name,
  relationship,
  yearGroup,
}: Pick<Testimonial, "name" | "relationship" | "yearGroup">) {
  const parts = [name, relationship, yearGroup].filter(Boolean);
  return <>{parts.join(" · ")}</>;
}

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[78vh] overflow-hidden border-b border-line">
        <Image
          src="/images/hero-classroom.jpg"
          alt="Nick Moore tutoring pupils one-to-one in a classroom"
          fill
          priority
          className="object-cover object-[center_42%]"
          sizes="100vw"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/40 to-ink/15"
        />
        <div className="relative mx-auto flex min-h-[78vh] max-w-5xl flex-col justify-center px-6 py-20">
          <p className="motion-safe:animate-[fadeUp_0.7s_ease-out] font-head text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Moore <span className="text-soft-2">Tuition</span>
          </p>
          <h1 className="mt-4 max-w-2xl motion-safe:animate-[fadeUp_0.7s_ease-out_0.08s_both] font-head text-2xl font-medium text-white sm:text-3xl">
            Learning beyond the classroom
          </h1>
          <p className="mt-4 max-w-xl motion-safe:animate-[fadeUp_0.7s_ease-out_0.16s_both] text-lg leading-relaxed text-white/90">
            One-to-one English, Maths and Reasoning tutoring for 7+, 8+, 11+ and
            13+, plus KS1–KS3 support, in person in Lymm, Cheshire, or online
            across the UK.
          </p>
          <div className="mt-8 flex motion-safe:animate-[fadeUp_0.7s_ease-out_0.24s_both] flex-wrap gap-3">
            <Button href="/contact">Book a free 15-minute chat</Button>
            <Button href="/rates" variant="onDark">
              View rates
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-surface px-6 py-16">
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-card shadow-soft sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/portrait.jpg"
              alt="Portrait of Nick Moore, entrance exam tutor at Moore Tuition"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="font-head text-3xl font-semibold text-ink">
              An engaging, patient and empathetic tutor
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              I&apos;m an experienced, empathetic preparatory school teacher,
              tutoring children since 2015 for 7+, 8+, 11+ and 13+, as well as
              general English and Maths across KS1–KS3. I&apos;ve taught at
              leading London prep schools and helped pupils gain places at
              schools such as St Paul&apos;s, Epsom College and King&apos;s
              College School Wimbledon. I specialise in English, Maths and
              Reasoning, and I&apos;m familiar with CEM, GL, ISEB and
              school-specific assessments.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Whether your child is preparing for highly competitive schools or
              building confidence in challenging subjects, lessons are tailored
              to their needs.
            </p>
            <Link
              href="/approach"
              className="mt-6 inline-block font-medium text-blue-deep no-underline hover:underline"
            >
              Read more about my approach →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-head text-3xl font-semibold text-ink">What I teach</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
            Entrance exam preparation for 7+, 8+, 11+ and 13+, alongside general
            English and Maths support across KS1, KS2 and KS3 — including CEM,
            GL, ISEB and school-specific formats.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "7+ and 8+",
                body: "English and Maths foundations for junior entrance.",
              },
              {
                title: "11+",
                body: "English, Maths, Verbal and Non-Verbal Reasoning.",
              },
              {
                title: "13+",
                body: "English, Maths and Non-Verbal Reasoning.",
              },
              {
                title: "KS1–KS3 support",
                body: "Curriculum help and confidence building, not only exams.",
              },
            ].map((item) => (
              <div key={item.title} className="border-l-4 border-blue pl-5">
                <h3 className="font-head text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{item.body}</p>
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

      <section className="border-b border-line bg-surface px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-head text-3xl font-semibold text-ink">
            How it works
          </h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "1",
                title: "Get in touch",
                body: "Get in touch for a free 15-minute chat.",
              },
              {
                step: "2",
                title: "Initial assessment",
                body: "Initial assessment session to understand your child's level.",
              },
              {
                step: "3",
                title: "Regular weekly sessions",
                body: "Regular weekly sessions tailored to their goals.",
              },
              {
                step: "4",
                title: "Progress feedback",
                body: "Clear progress feedback to parents after every session.",
              },
            ].map((item) => (
              <li key={item.step} className="border-l-4 border-blue pl-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-blue">
                  Step {item.step}
                </p>
                <h3 className="mt-1 font-head text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-line px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-head text-3xl font-semibold text-ink">
            What parents say
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {testimonials.map((item) => (
              <blockquote
                key={item.quote}
                className="rounded-card border border-line bg-surface p-8 text-lg leading-relaxed text-ink shadow-soft"
              >
                &ldquo;{item.quote}&rdquo;
                <footer className="mt-5 text-base font-medium text-muted">
                  <TestimonialAttribution
                    name={item.name}
                    relationship={item.relationship}
                    yearGroup={item.yearGroup}
                  />
                </footer>
              </blockquote>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-muted">
            Happy to talk through how sessions work and whether I&apos;m a good
            fit for your child.{" "}
            <Link
              href="/contact"
              className="font-medium text-blue-deep hover:underline"
            >
              Get in touch
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-soft/50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-head text-3xl font-semibold text-ink">Track record</h2>
          <blockquote className="mt-6 max-w-3xl border-l-4 border-blue pl-6 text-lg leading-relaxed text-ink">
            My students have successfully gained entrance to many of the leading
            independent senior schools in the country, such as St Paul&apos;s,
            King&apos;s College School Wimbledon, Epsom College, St John&apos;s
            Leatherhead and Reed&apos;s.
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
