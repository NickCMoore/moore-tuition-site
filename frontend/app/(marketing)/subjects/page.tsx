import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { pageMetadata } from "@/lib/metadata";
import Image from "next/image";

export const metadata = pageMetadata({
  title: "Subjects",
  description:
    "7+, 8+, 11+ and 13+ preparation plus KS1–KS3 English and Maths support. Familiar with CEM, GL, ISEB and school-specific papers. Music tuition also available.",
  path: "/subjects",
});

const pathways = [
  {
    title: "7+ and 8+ preparation",
    body: "English and Maths foundations to build secure skills early, ready for junior entrance assessments.",
    image: "/images/kids-handwriting.jpg",
    imageAlt: "Close-up of a pupil writing vocabulary notes by hand",
  },
  {
    title: "11+ preparation",
    body: "English, Maths, Verbal Reasoning and Non-Verbal Reasoning, practised in the style of the papers your child will sit.",
    image: "/images/verbal-reasoning.jpg",
    imageAlt: "Verbal reasoning worksheet with letter sequences and word analogies",
  },
  {
    title: "13+ preparation",
    body: "English, Maths and Non-Verbal Reasoning for common entrance and senior school assessments.",
    image: "/images/Reasoning.jpg",
    imageAlt: "Non-verbal reasoning cube net practice questions on a worksheet",
  },
  {
    title: "General English and Maths",
    body: "Curriculum support and confidence building across KS1, KS2 and KS3 — not only for exam preparation.",
    image: "/images/maths.jpg",
    imageAlt: "Hand-drawn maths doodles including numbers, shapes and formulae",
  },
];

export default function SubjectsPage() {
  return (
    <>
      <PageHeader
        title="Subjects"
        subtitle="Entrance exam preparation and wider English & Maths support"
      />
      <section className="px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <p className="mb-10 max-w-3xl text-lg leading-relaxed text-muted">
            I prepare pupils for a range of formats, including CEM, GL, ISEB and
            school-specific assessments, always tailored to the schools you&apos;re
            aiming for — or to steady progress in English and Maths more generally.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {pathways.map((pathway) => (
              <div
                key={pathway.title}
                className="overflow-hidden rounded-card border border-line bg-surface shadow-soft"
              >
                <div className="relative h-44 bg-soft">
                  <Image
                    src={pathway.image}
                    alt={pathway.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-head text-xl font-semibold text-ink">
                    {pathway.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">{pathway.body}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted">
            Music tuition is also available in cello, piano and music theory. Nick
            holds a BMus from the University of Edinburgh and taught for Camden
            Music Service.
          </p>

          <div className="mt-8">
            <Button href="/rates">See session rates</Button>
          </div>
        </div>
      </section>
    </>
  );
}
