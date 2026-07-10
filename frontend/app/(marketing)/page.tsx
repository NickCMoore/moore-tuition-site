import { Button } from "@/components/Button";
import { pageMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "Home",
  description:
    "1-to-1 English, Maths and Reasoning tutoring for 7+, 11+ and 13+ entrance exams, in person in Lymm, Cheshire or online across the UK.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[78vh] overflow-hidden border-b border-line">
        <Image
          src="/images/hero-classroom-wide.jpg"
          alt="Nick Moore tutoring pupils in the classroom"
          fill
          priority
          className="object-cover object-center"
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
            One-to-one Maths, English and Reasoning tutoring for 7+, 11+ and 13+
            entrance exams, in person in Lymm, Cheshire, or online across the UK.
          </p>
          <div className="mt-8 flex motion-safe:animate-[fadeUp_0.7s_ease-out_0.24s_both] flex-wrap gap-3">
            <Button href="/contact">Get in touch</Button>
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
              alt="Nick Moore, tutor at Moore Tuition"
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
              tutoring children for entrance exams since 2015, including 7+, 11+
              and 13+. I&apos;ve taught at leading London prep schools and helped
              pupils gain places at schools such as St Paul&apos;s, Epsom College
              and King&apos;s College School Wimbledon. I specialise in English,
              Maths and Reasoning, and I&apos;m familiar with CEM, GL, ISEB and
              school-specific assessments, always shaped around each pupil&apos;s
              needs, whether that&apos;s a competitive entrance process or
              building confidence in a tricky subject.
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
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "English",
                body: "Comprehension, spelling, punctuation and grammar, building pupils' ability to read closely and write cohesively.",
                image: "/images/kids-handwriting.jpg",
                imageAlt: "Pupil practising handwriting",
              },
              {
                title: "Maths",
                body: "Calculation speed, times tables, the four operations, number relationships, measurement, mental arithmetic, geometry and data handling.",
                image: "/images/maths.jpg",
                imageAlt: "Maths doodle illustration",
              },
              {
                title: "Reasoning",
                body: "Verbal Reasoning to stretch potential ability, and Non-Verbal Reasoning to sharpen logical thinking.",
                image: "/images/Reasoning.jpg",
                imageAlt: "Non-verbal reasoning practice questions",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-card border border-line bg-surface shadow-soft"
              >
                <div className="relative h-36 bg-soft">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-head text-xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">{item.body}</p>
                </div>
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
            What parents say
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <blockquote className="rounded-card border border-line bg-ground p-8 text-lg leading-relaxed text-ink shadow-soft">
              &ldquo;Nick is very engaged with both pupil and parent. He seems to
              understand and build upon the pupil&apos;s progress in school and is
              quick to highlight pupils&apos; strengths and areas for
              development.&rdquo;
              <footer className="mt-5 text-base font-medium text-muted">
                Parent of an 11+ student preparing for Hampton School and
                Reed&apos;s School
              </footer>
            </blockquote>
            <blockquote className="rounded-card border border-line bg-ground p-8 text-lg leading-relaxed text-ink shadow-soft">
              &ldquo;Nick works with our son to introduce topics slowly, with a
              focus on the structure and technical detail needed in exams.&rdquo;
              <footer className="mt-5 text-base font-medium text-muted">
                Parent of an 11+ student focusing on exam technique
              </footer>
            </blockquote>
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
