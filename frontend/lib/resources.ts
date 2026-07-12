export type ResourceBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "cta"; label: string; href: string };

export type ResourceArticle = {
  slug: string;
  title: string;
  /** Browser / OG title; falls back to title when omitted. */
  metaTitle?: string;
  description: string;
  publishedAt: string;
  body: ResourceBlock[];
};

export const resources: ResourceArticle[] = [
  {
    slug: "cem-vs-gl-11-plus",
    title: "CEM vs GL: what's the difference for 11+ parents?",
    metaTitle: "CEM vs GL 11+ Difference: A Guide for Parents",
    description:
      "What's the difference between CEM and GL for the 11 plus? A plain-English guide for parents on GL Assessment, CEM Select, and how preparation differs.",
    publishedAt: "2026-07-12",
    body: [
      {
        type: "paragraph",
        text: "If you've started researching the 11+, you'll have come across two names again and again: GL and CEM. Parents are often told their target school \"uses GL\" or \"used to be CEM\" without much explanation of what that actually means for their child's preparation. Here's a plain-English guide.",
      },
      { type: "heading", text: "The short version" },
      {
        type: "paragraph",
        text: "GL Assessment is now the main provider of 11+ exams for grammar schools in England. CEM, the other big name, stopped producing its traditional paper-based 11+ in late 2022, and most grammar schools that used it have since moved to GL. CEM still exists, but mainly as CEM Select, an online assessment used by a group of independent schools.",
      },
      {
        type: "paragraph",
        text: "So for most families preparing for a grammar school 11+ today, GL is the exam that matters. If you're aiming at certain independent schools, you may meet CEM Select or a school's own bespoke paper instead.",
      },
      { type: "heading", text: "What the GL exam looks like" },
      {
        type: "paragraph",
        text: "GL tests are typically paper-based and cover up to four areas: English, Maths, Verbal Reasoning and Non-Verbal Reasoning. Not every school uses all four, so it's worth checking your target school's admissions page carefully.",
      },
      {
        type: "paragraph",
        text: "GL questions follow familiar, well-defined types. Verbal Reasoning, for example, draws on a known bank of question styles, which means technique and familiarity genuinely help. Answers are usually multiple choice on a separate answer sheet, which is a skill in itself: children need practice transferring answers accurately under time pressure.",
      },
      { type: "heading", text: "What about CEM Select?" },
      {
        type: "paragraph",
        text: "CEM Select is a shorter, online assessment used by a number of independent schools. It's taken on a computer, uses varied interactive question types, and covers comprehension, maths, vocabulary and logical thinking in around an hour. It was designed to be harder to coach for, with less predictable question formats, so broad reading and a strong vocabulary matter more than drilling one question type.",
      },
      { type: "heading", text: "What this means for preparation" },
      {
        type: "paragraph",
        text: "For GL: build core skills first (arithmetic fluency, comprehension, spelling and grammar), then layer in question-type familiarity and timed practice closer to the exam. Because GL formats are well documented, targeted practice pays off.",
      },
      {
        type: "paragraph",
        text: "For CEM Select or school-specific papers: the foundations are the same, but the emphasis shifts further towards wide vocabulary, flexible problem-solving and comfort working on screen.",
      },
      {
        type: "paragraph",
        text: "In both cases, the biggest gains come from the same place: secure fundamentals in English and Maths, built steadily over time, with exam technique added on top rather than substituted for understanding.",
      },
      { type: "heading", text: "Check what your target school actually uses" },
      {
        type: "paragraph",
        text: "Exam arrangements change, and consortia occasionally switch providers. Before buying any practice materials, check the admissions page of each school you're considering for the current year's arrangements, or ask the school directly. A year-old forum post is not a reliable guide.",
      },
      { type: "heading", text: "How I can help" },
      {
        type: "paragraph",
        text: "I prepare children for 11+ exams in English, Maths, Verbal Reasoning and Non-Verbal Reasoning, and I'm familiar with GL, ISEB, CEM-style and school-specific assessments. If you're not sure what your target school requires or where your child currently stands, the easiest first step is a free 15-minute phone chat.",
      },
      {
        type: "cta",
        label: "Get in touch to arrange one.",
        href: "/contact",
      },
    ],
  },
];

export function getResourceBySlug(slug: string) {
  return resources.find((article) => article.slug === slug);
}
