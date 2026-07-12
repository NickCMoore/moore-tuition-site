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
  {
    slug: "when-to-start-11-plus-preparation",
    title: "When should my child start 11+ preparation?",
    metaTitle: "When Should My Child Start 11+ Preparation?",
    description:
      "When to start 11+ preparation — typical Year 5 timelines, signs of readiness, starting late, and the risk of starting too early.",
    publishedAt: "2026-07-12",
    body: [
      {
        type: "paragraph",
        text: "This is the question I'm asked more than any other, and the honest answer is: it depends on your child, but later than the most anxious corners of the internet suggest, and earlier than a last-minute scramble.",
      },
      { type: "heading", text: "The typical timeline" },
      {
        type: "paragraph",
        text: "Most families I work with start structured preparation at the beginning of Year 5, giving a full academic year before exams in the autumn of Year 6. For most children, that's about right. It allows time to build skills steadily, cover the reasoning question types without cramming, and leave the final months for timed practice rather than first meetings with new material.",
      },
      {
        type: "paragraph",
        text: "Starting earlier than Year 5 is rarely about exam content. What genuinely helps in Year 3 and 4 is much simpler: reading widely and often, knowing times tables cold, and being comfortable with core arithmetic. A child who arrives at Year 5 with those foundations is in a far stronger position than one who has been doing practice papers since Year 3 but reads reluctantly.",
      },
      { type: "heading", text: "Signs your child is ready to start" },
      {
        type: "paragraph",
        text: "Rather than a date on the calendar, look for readiness: secure times tables, reading age at or above their actual age, and the ability to focus on a task for twenty to thirty minutes. If those aren't in place, the first stage of preparation is building them, not buying reasoning workbooks.",
      },
      { type: "heading", text: "What if we're starting late?" },
      {
        type: "paragraph",
        text: "If you're reading this in the spring or summer of Year 5, don't panic. A focused six months can achieve a great deal, particularly for a child with strong fundamentals. The priorities shift: identify the target schools and their exam format first, concentrate on the highest-weight skills (usually comprehension and core maths), and introduce timed conditions earlier. What a shorter runway mostly costs you is slack, so a clear plan matters more.",
      },
      { type: "heading", text: "The risk of starting too early" },
      {
        type: "paragraph",
        text: "There's a real cost to overlong preparation: children burn out, and the exam grows in their minds into something enormous. I've taken on pupils who had been prepping for two years and were thoroughly sick of it by the time the exam mattered. Eighteen months of steady, low-pressure work beats three years of drilling every time. The exam should feel like a challenge they're ready for, not a cloud that has followed them through junior school.",
      },
      { type: "heading", text: "What preparation should actually look like" },
      {
        type: "paragraph",
        text: "In Year 5, an hour of tutoring a week plus twenty to thirty minutes of practice most days is plenty for the majority of children. Little and often beats marathon weekend sessions. And through all of it, keep reading fiction together or alongside them; a rich vocabulary is the single most valuable asset in every version of the 11+, and it can't be crammed.",
      },
      { type: "heading", text: "Every child is different" },
      {
        type: "paragraph",
        text: "Some children need longer to build confidence; others get bored if the runway is too long. A sensible starting point is an honest assessment of where your child is now against where their target schools need them to be. That gap, not a rule of thumb, should set your timeline.",
      },
      {
        type: "paragraph",
        text: "If you'd like help working out that gap, the easiest first step is a free 15-minute phone chat.",
      },
      {
        type: "cta",
        label: "Get in touch to arrange one.",
        href: "/contact",
      },
    ],
  },
  {
    slug: "how-to-choose-a-tutor",
    title: "How to choose a tutor: the questions worth asking",
    metaTitle: "How to Choose a Tutor for 11+ and Entrance Exams",
    description:
      "How to choose a tutor for 11+ or entrance exams — what to look for, questions to ask, and red flags parents should watch for.",
    publishedAt: "2026-07-12",
    body: [
      {
        type: "paragraph",
        text: "Choosing a tutor is an odd purchase: it's important, personal, and most parents only do it once or twice, so there's little chance to learn from experience. Having sat on the other side of many first phone calls, here's what I'd genuinely want to know if I were hiring a tutor for my own child, including the questions that separate strong tutors from confident marketing.",
      },
      { type: "heading", text: "Safety and credentials first" },
      {
        type: "paragraph",
        text: "Two non-negotiables before anything else: an Enhanced DBS check, current and shown willingly, and some verifiable teaching background. Qualified teacher status isn't strictly essential for every tutoring context, but classroom experience matters more than most parents realise, because managing a child's attention, confidence and misconceptions is a craft learned with real pupils, not from an answer book.",
      },
      {
        type: "paragraph",
        text: "Ask directly: \"Are you DBS checked, and what's your teaching background?\" A good tutor answers in one comfortable sentence.",
      },
      { type: "heading", text: "Evidence over adjectives" },
      {
        type: "paragraph",
        text: "Anyone can write \"proven results\" on a website. Useful evidence is specific: which schools have pupils actually gained, how recently, and from what starting points. Ask \"Can you tell me about a pupil similar to mine and how it went?\" The answer reveals a lot, including whether the tutor listens well enough to know what \"similar to mine\" means. References from current or recent families are worth requesting for a long-term engagement; any established tutor can produce one or two.",
      },
      {
        type: "paragraph",
        text: "Be fairly sceptical of guaranteed outcomes. No honest tutor guarantees a school place, because no tutor controls the field of applicants.",
      },
      { type: "heading", text: "How do they find out where your child is?" },
      {
        type: "paragraph",
        text: "A strong tutor starts with some form of assessment, formal or informal, before promising anything, and can tell you clearly after two or three sessions what the gaps are and what the plan is. If the plan for every child is the same workbook from page one, you're paying private rates for something generic.",
      },
      {
        type: "paragraph",
        text: "The follow-up question that matters: \"How will you keep me informed?\" You should expect a brief note after sessions or a regular summary: what was covered, what's improving, what needs work. Vague reassurance that it's all going well is not reporting.",
      },
      { type: "heading", text: "Fit beats reputation" },
      {
        type: "paragraph",
        text: "The tutor a friend's child loved may be wrong for yours. Some children need warmth and encouragement before they'll take a risk on a hard question; others thrive on brisk challenge. Watch the first session or two: does your child come out flat, or talking about something they worked out? The best predictor of tutoring success I know is whether the child looks forward to sessions, because a child who enjoys the hour works between sessions, and the work between sessions is where most progress lives.",
      },
      { type: "heading", text: "Practicalities worth pinning down" },
      {
        type: "paragraph",
        text: "Cancellation policy, holiday arrangements, whether sessions are in person or online, and what happens as the exam approaches, since good tutors' diaries fill up in the autumn term. None of this is awkward to ask; a professional will have clear answers.",
      },
      { type: "heading", text: "The wrong reason to hire a tutor" },
      {
        type: "paragraph",
        text: "One honest note: tutoring works best as targeted support with a clear purpose, whether that's exam preparation, closing a specific gap, or rebuilding confidence. If nothing is wrong and no goal exists, the money is usually better spent on books and time. A good tutor will tell you that too.",
      },
      {
        type: "paragraph",
        text: "If you'd like to ask me any of these questions, I'd be glad to answer them. The easiest first step is a free 15-minute phone chat.",
      },
      {
        type: "cta",
        label: "Get in touch to arrange one.",
        href: "/contact",
      },
    ],
  },
  {
    slug: "grammar-vs-independent-school-entrance",
    title: "Grammar school vs independent school entrance: what's the difference?",
    metaTitle: "Grammar vs Independent School Entrance: What's the Difference?",
    description:
      "Grammar school vs independent school entrance exams explained for parents — formats, preparation differences, and how to choose your path.",
    publishedAt: "2026-07-12",
    body: [
      {
        type: "paragraph",
        text: "Families often apply to both grammar and independent schools, and the two routes differ more than most parents expect: in exams, timelines, and what \"success\" even means. Here's a clear map.",
      },
      { type: "heading", text: "The headline difference" },
      {
        type: "paragraph",
        text: "Grammar school entry is a pass/fail hurdle followed by an allocation process: your child sits the test (almost always GL Assessment now), receives a standardised score, and places go to qualifying children according to the school's oversubscription rules, which may weigh distance, catchment or score ranking. There's usually no interview and no reference; the number decides.",
      },
      {
        type: "paragraph",
        text: "Independent school entry is a rounder assessment: an exam (school-set papers, or a shared test like the ISEB Common Pre-Test), typically followed by an interview, a reference from the current school, and sometimes a taster day. The exam gets your child to the interview; the whole picture wins the place.",
      },
      { type: "heading", text: "What the exams look like" },
      {
        type: "paragraph",
        text: "Grammar tests are usually one or two sittings covering English, maths and reasoning in multiple-choice format, marked by machine, sat early in Year 6 (often September), with results in October ahead of the local authority application deadline.",
      },
      {
        type: "paragraph",
        text: "Independent school assessments vary by school: some use the online adaptive ISEB Pre-Test sat once and shared between schools, others set their own written papers in the January of Year 6, which often include a composition and longer-form maths where working is marked, not just answers. The 13+ route adds its own variations, with pre-tests sat in Year 6 or 7 for places confirmed later.",
      },
      {
        type: "paragraph",
        text: "Practically, this means preparation overlaps heavily but not completely. Core English, maths and reasoning serve both routes. The independent route adds interview readiness and, for schools with written papers, extended writing; the grammar route puts more weight on multiple-choice speed and accuracy.",
      },
      { type: "heading", text: "The timeline trap" },
      {
        type: "paragraph",
        text: "The grammar timeline is unforgiving in a specific way: registration for the test typically happens in the spring or early summer of Year 5, months before the local authority school application in October. Miss the registration window and the option simply closes. Independent schools set their own deadlines, commonly in the autumn or early winter of Year 6 for 11+ entry, but each school differs. If you're pursuing both routes, a single sheet of paper listing every school, exam date, registration deadline and result date is the most valuable document you'll make all year.",
      },
      { type: "heading", text: "Interviews: the bit grammar families forget" },
      {
        type: "paragraph",
        text: "Children aiming at independent schools should be comfortable talking about themselves, their reading, and their interests with a friendly adult. This isn't about coaching answers, which experienced interviewers spot instantly, but about practice being conversational: expanding answers beyond one word, having a book they can genuinely discuss, showing curiosity. It's a skill built through low-pressure conversation over months, not a script learned the week before.",
      },
      { type: "heading", text: "Choosing your portfolio of schools" },
      {
        type: "paragraph",
        text: "Most families do best with a balanced list: a realistic target or two, an aspiration, and a secure option they'd be happy with. Both routes reward starting from the child rather than the league table; the \"best\" school is the one where your child will be stretched and happy, which isn't always the most selective one that might take them.",
      },
      {
        type: "paragraph",
        text: "If you're weighing up routes and want an honest view of how your child's current level maps onto specific schools, the easiest first step is a free 15-minute phone chat.",
      },
      {
        type: "cta",
        label: "Get in touch to arrange one.",
        href: "/contact",
      },
    ],
  },
  {
    slug: "iseb-common-pre-test-parents-guide",
    title: "The ISEB Common Pre-Test: a parent's guide",
    metaTitle: "ISEB Common Pre-Tests: A Parents' Guide",
    description:
      "What the ISEB Common Pre-Tests involve, which schools use them, and how to prepare your child without unnecessary drilling.",
    publishedAt: "2026-07-12",
    body: [
      {
        type: "paragraph",
        text: "If your target schools are independent senior schools, there's a good chance you'll meet the ISEB Common Pre-Tests. Here's what they are and how to prepare sensibly.",
      },
      { type: "heading", text: "What is it?" },
      {
        type: "paragraph",
        text: "The ISEB Common Pre-Tests are online, adaptive assessments used by many leading independent senior schools to shortlist candidates, usually sat in Year 6 for 11+ entry, and by some schools as an early stage for 13+ entry. \"Adaptive\" means the difficulty adjusts as your child answers: get a question right and the next one is a little harder, get it wrong and the test eases off. This is worth explaining to children in advance, because it means the test is supposed to feel difficult for everyone. A child who expects to find every question comfortable can be rattled by a test designed to find the edge of their ability.",
      },
      { type: "heading", text: "What does it cover?" },
      {
        type: "paragraph",
        text: "Four areas: English, Maths, Verbal Reasoning and Non-Verbal Reasoning, taking around two and a quarter hours in total (often split across sittings, depending on the school's arrangements). The content tracks the national curriculum for English and Maths, while the reasoning sections test pattern-spotting and vocabulary in ways school lessons don't directly teach.",
      },
      { type: "heading", text: "The one-sitting advantage" },
      {
        type: "paragraph",
        text: "A useful feature for families applying to several schools: results are shared. Your child sits the test once, and every participating school you apply to can access the same result. That reduces the exam load considerably compared with sitting separate papers for each school, and it's one reason so many senior schools have adopted it.",
      },
      {
        type: "paragraph",
        text: "It also raises the stakes of that single sitting, which is why calm, familiar preparation matters more than volume.",
      },
      { type: "heading", text: "How to prepare" },
      {
        type: "paragraph",
        text: "Because the test is online and adaptive, some practical points differ from paper exams. Children should practise on a screen, not just on paper: reading comprehension passages on screen and answering with mouse and keyboard is a distinct skill, and the exam shouldn't be the first time they do it. Official familiarisation materials exist, and it's worth using them so the interface holds no surprises.",
      },
      {
        type: "paragraph",
        text: "Beyond format, preparation is the same as for any strong 11+ exam: secure arithmetic, wide reading and vocabulary, comprehension technique, and systematic coverage of verbal and non-verbal reasoning question types. Because the test adapts, there's no pass mark to aim at; the goal is simply for your child to perform at their genuine best, which is mostly a matter of solid foundations and low anxiety.",
      },
      { type: "heading", text: "A note on timing" },
      {
        type: "paragraph",
        text: "Schools set their own deadlines and testing windows, generally running from the autumn of Year 6. Check each target school's admissions page for when they need the test sat by, and register in good time. The schedule is one of the easiest things to get wrong and one of the most stressful, so pin it down early.",
      },
      { type: "heading", text: "Where I fit in" },
      {
        type: "paragraph",
        text: "I prepare children for the ISEB Pre-Tests alongside GL and school-specific exams, covering all four tested areas and, just as importantly, the confidence and technique to handle an adaptive online test calmly. If you'd like to talk through your child's starting point, the easiest first step is a free 15-minute phone chat.",
      },
      {
        type: "cta",
        label: "Get in touch to arrange one.",
        href: "/contact",
      },
    ],
  },
  {
    slug: "reading-habits-that-win-the-11-plus",
    title: "The reading habit: the quiet engine behind every 11+ success",
    metaTitle: "Reading Habits That Win the 11+: A Parents' Guide",
    description:
      "How daily reading builds 11+ vocabulary, comprehension and writing — plus what to do if your child is a reluctant reader.",
    publishedAt: "2026-07-12",
    body: [
      {
        type: "paragraph",
        text: "Ask any experienced tutor to predict which Year 5 children will cope best with the 11+, and they won't reach for a practice paper. They'll ask one question: does the child read? Vocabulary, comprehension, writing style, even verbal reasoning: all of them draw on the same reservoir, and the reservoir is filled by years of reading. Here's how to fill it, including for children who currently wouldn't touch a book.",
      },
      { type: "heading", text: "Why reading beats revision" },
      {
        type: "paragraph",
        text: "Vocabulary is the clearest case. The synonym questions in verbal reasoning, the \"what does this word mean in the passage\" questions in comprehension, and the precision of a child's own writing all depend on word knowledge, and word knowledge is acquired overwhelmingly through encountering words in context, repeatedly, over years. Word lists help at the margin; reading is the main road.",
      },
      {
        type: "paragraph",
        text: "But it goes further. Children who read a lot have met thousands of sentence shapes, so complex passages don't intimidate them. They've absorbed how stories are structured, so their own writing has architecture. They've practised holding a thread across pages, which is exactly the stamina a long comprehension demands. None of this looks like exam preparation. All of it is.",
      },
      { type: "heading", text: "What to read: cast a wide net" },
      {
        type: "paragraph",
        text: "The best reading diet is the one that keeps a child reading. Quality fiction at the right level is the core, and for 11+ purposes it helps to gradually include some older or more classic fiction, because independent school papers in particular love passages with slightly antique vocabulary. But the net should be wide: narrative non-fiction, decent journalism for children, poetry, even well-written comics and graphic novels all build language. A child devouring books about football or space is reading, and reading counts.",
      },
      {
        type: "paragraph",
        text: "The one upgrade worth engineering: stretch. A reader cruising through series books three years below their level is enjoying themselves but not growing. The sweet spot is a book where a handful of words per page are new: enough challenge to build, not so much it breaks the pleasure.",
      },
      { type: "heading", text: "The reluctant reader playbook" },
      {
        type: "paragraph",
        text: "Some children, bright ones included, simply won't read, and force-feeding books poisons the well. What works instead, in rough order of effectiveness: let them choose freely, however unliterary the choice looks; try audiobooks, which build vocabulary and story-sense powerfully and often lead back to print; read to them, well past the age it seems necessary, because a chapter of something slightly too hard read aloud at bedtime is stealth vocabulary training; and be seen reading yourself, because children in reading houses read.",
      },
      {
        type: "paragraph",
        text: "Ten minutes a day, genuinely enjoyed, beats a worthy hour endured on Sundays. Habit first, quality second, level third.",
      },
      { type: "heading", text: "Talk about it" },
      {
        type: "paragraph",
        text: "The multiplier on all of this is conversation. A child who chats about what they're reading (why did she do that? what do you think happens next? what does \"reluctant\" mean, do you reckon?) is doing comprehension practice without a worksheet in sight. One genuine question about their book at dinner is worth a surprising amount of formal preparation.",
      },
      { type: "heading", text: "Where tutoring fits" },
      {
        type: "paragraph",
        text: "Reading builds the reservoir; tutoring teaches a child to draw from it under exam conditions: finding evidence, answering to the marks, writing with control. Both matter, and the earlier the reading habit starts, the more the tutoring has to work with.",
      },
      {
        type: "paragraph",
        text: "If you'd like suggestions pitched to your child's level and interests, or an honest view of how their reading is feeding their exam skills, the easiest first step is a free 15-minute phone chat.",
      },
      {
        type: "cta",
        label: "Get in touch to arrange one.",
        href: "/contact",
      },
    ],
  },
  {
    slug: "ks2-maths-foundations",
    title: "The maths foundations every 11+ child needs (and how to spot the gaps)",
    metaTitle: "KS2 Maths Foundations for 11+ Success",
    description:
      "The KS2 maths foundations that matter most for 11+ — fluency, times tables, problem-solving — and how to build them steadily.",
    publishedAt: "2026-07-12",
    body: [
      {
        type: "paragraph",
        text: "When a child struggles with 11+ maths, the problem is rarely the 11+ material itself. It's almost always a wobble further down: times tables that aren't automatic, place value that was never quite secure, fractions met too fast. Exam-style questions built on shaky foundations produce shaky results, however many papers a child sits. Here's what the foundations actually are, and how to tell whether your child has them.",
      },
      { type: "heading", text: "The non-negotiables" },
      {
        type: "paragraph",
        text: "Times tables, instantly. Not worked out, known. Almost every strand of 11+ maths (division, fractions, ratio, percentages, area) leans on multiplication facts, and a child who pauses to compute 7 × 8 pays that tax on every question. If nothing else on this page gets fixed, fix this: it's the highest-value five minutes a day in primary maths.",
      },
      {
        type: "paragraph",
        text: "The four operations, with a reliable written method for each, including long multiplication and a workable division method, and the number sense to spot when an answer is obviously wrong. Speed matters less than reliability; reliability first, then speed.",
      },
      {
        type: "paragraph",
        text: "Place value, deeply. Multiplying and dividing by 10, 100 and 1000 without moving a finger; understanding what the digits in 3.07 actually mean. Decimals and measurement questions stand or fall here.",
      },
      {
        type: "paragraph",
        text: "Fractions, decimals and percentages as one connected idea. The 11+ loves asking children to compare or convert between them. A child who knows a half, a quarter, three quarters, tenths and fifths in all three costumes, and can find a fraction or percentage of an amount, is equipped for a huge slice of the paper.",
      },
      { type: "heading", text: "The multi-step leap" },
      {
        type: "paragraph",
        text: "The biggest jump from school maths to 11+ maths isn't content, it's steps. School questions tend to ask one thing; entrance exam questions chain two or three. \"A shirt costs £24 in a 25% off sale; what was the original price?\" is arithmetic a Year 5 child can do, arranged in a shape many haven't met.",
      },
      {
        type: "paragraph",
        text: "The skill that unlocks multi-step problems is unglamorous: writing working down. Children resist this, because holding it in your head feels quicker. It is quicker, right up until it isn't, and marks vanish. In sessions I treat working as the method itself: what do I know, what do I need, what's the first step?",
      },
      { type: "heading", text: "How to spot gaps at home" },
      {
        type: "paragraph",
        text: "Skip the practice paper; ask small, direct questions. What's 6 × 7? What's 62 minus 38, in your head? What's a quarter of 60? What's 3.5 × 10? What's 10% of £40? Instant, comfortable answers mean foundations are likely sound and exam preparation can build on them. Hesitation on more than a couple means the gap-filling comes first, and honestly, that's good news: foundations respond quickly to targeted work, and marks improve fast once they're in place.",
      },
      { type: "heading", text: "Little and often wins" },
      {
        type: "paragraph",
        text: "Maths fluency is a fitness, not a fact. Ten minutes daily beats an hour on Sunday, every time. Tables in the car, mental arithmetic over breakfast, real money at the shops, halving recipes: children who meet numbers casually and often stop flinching at them. The exam is then a place to show fluency rather than summon courage.",
      },
      {
        type: "paragraph",
        text: "If you suspect gaps but aren't sure where, a proper diagnosis is exactly what my first sessions are for. The easiest first step is a free 15-minute phone chat.",
      },
      {
        type: "cta",
        label: "Get in touch to arrange one.",
        href: "/contact",
      },
    ],
  },
  {
    slug: "comprehension-technique-11-plus",
    title: "11+ comprehension: why bright readers lose marks, and how to fix it",
    metaTitle: "11+ Comprehension Technique: Why Bright Readers Lose Marks",
    description:
      "Why strong readers lose marks on 11+ comprehension, and the exam techniques that fix it — evidence, mark schemes, question types and timing.",
    publishedAt: "2026-07-12",
    body: [
      {
        type: "paragraph",
        text: "Comprehension is the heart of every 11+ English paper, and it produces the most puzzling results. Children who read fluently and love books can score modestly, while apparently less bookish children who've been taught technique score well. The difference is rarely reading ability. It's exam craft.",
      },
      { type: "heading", text: "Reading the passage is not the skill being tested" },
      {
        type: "paragraph",
        text: "The 11+ tests something more specific than understanding a text: it tests finding, selecting and expressing evidence under time pressure. A child can understand a passage perfectly and still lose marks by answering from memory instead of the text, giving one point where the question's marks demanded two, or retelling the story when asked to explain a feeling.",
      },
      {
        type: "paragraph",
        text: "This is why \"just read more\" doesn't fix comprehension scores, though wide reading remains the foundation underneath everything.",
      },
      { type: "heading", text: "The habits that earn marks" },
      {
        type: "paragraph",
        text: "The strongest technique I teach is answering with your finger on the line: every answer grounded in words actually in the passage, quoted or closely referenced. Vague answers drawn from general impressions are where marks quietly leak away.",
      },
      {
        type: "paragraph",
        text: "Second, use the mark scheme as instructions. Two marks means two points, or a point plus evidence. Children who glance at the number next to the question before answering consistently outscore those who don't.",
      },
      {
        type: "paragraph",
        text: "Third, learn the question families. Retrieval questions (\"What colour was the door?\") want speed and precision. Inference questions (\"How do you think Sam felt, and how do you know?\") want a feeling plus evidence. Vocabulary-in-context questions want the meaning in this passage, not the dictionary's first definition. Writer's-technique questions (\"Why does the author repeat this word?\") want effect on the reader, not just naming the device. Each family has a shape, and knowing the shapes turns a blank page into a routine.",
      },
      { type: "heading", text: "The vocabulary ceiling" },
      {
        type: "paragraph",
        text: "One honest caveat: technique cannot rescue a child from a passage full of words they don't know. Older texts appear regularly in independent school papers, and their vocabulary is the most common wall pupils hit. The fix is long-term: reading that stretches, including some older fiction, and an active habit of collecting unfamiliar words. This is the slowest ingredient to build, which is why comprehension preparation should start with reading habits well before exam technique.",
      },
      { type: "heading", text: "Timing: the silent mark-loser" },
      {
        type: "paragraph",
        text: "Comprehension papers punish perfectionism. A child who spends twelve minutes polishing a two-mark answer has spent ten marks' worth of time earning two. In practice sessions I train pupils to move on and return, because the last questions on the paper are worth the same as the first, and unread questions are guaranteed zeros.",
      },
      { type: "heading", text: "Working on it at home" },
      {
        type: "paragraph",
        text: "The most useful home habit costs nothing: talk about what they read. Ask why a character acted as they did, and follow up with \"what makes you think that?\" That one follow-up question is inference training in disguise, and a child who's used to justifying opinions from the text at the dinner table finds the exam version entirely familiar.",
      },
      {
        type: "paragraph",
        text: "If your child's comprehension marks don't match their reading ability, the easiest first step is a free 15-minute phone chat.",
      },
      {
        type: "cta",
        label: "Get in touch to arrange one.",
        href: "/contact",
      },
    ],
  },
  {
    slug: "creative-writing-11-plus",
    title: "Creative writing for the 11+: what examiners actually reward",
    metaTitle: "11+ Creative Writing: What Examiners Actually Reward",
    description:
      "What examiners look for in 11+ creative writing — control, structure and planning — and how to help your child improve without overwriting.",
    publishedAt: "2026-07-12",
    body: [
      {
        type: "paragraph",
        text: "Many independent school exams, and some grammar schools, include a writing task. It's the paper parents feel least able to help with, because \"make it better\" is hard to act on. Here's what actually earns marks, and what doesn't.",
      },
      { type: "heading", text: "The great misconception: fancier is not better" },
      {
        type: "paragraph",
        text: "The most common problem I see in 11+ writing isn't weak vocabulary. It's over-decorated writing: every noun buried under three adjectives, similes strained past sense, and long words deployed slightly wrongly. Children are often coached into this because it looks impressive at a glance. Examiners, who read hundreds of scripts, see through it immediately.",
      },
      {
        type: "paragraph",
        text: "What strong scripts share is control. Sentences that vary in length deliberately. Punctuation used correctly, including the brave bits like semicolons only where they belong. A paragraph structure that shapes the story rather than arriving at random. One striking, precise image beats five borrowed ones.",
      },
      { type: "heading", text: "What examiners are marking" },
      {
        type: "paragraph",
        text: "Broadly, four things. Accuracy: spelling, punctuation and grammar, which function as a hygiene factor; persistent errors cap the mark whatever the ideas. Sentence control: variety and correctness in how sentences are built. Structure: a beginning that starts in the right place, a middle that develops, an ending that lands rather than stops. And ideas and voice: originality within sensible bounds, and vocabulary that is precise rather than merely long.",
      },
      {
        type: "paragraph",
        text: "Notice what's not on the list: length. A tightly controlled page and a half routinely outscores three rambling pages.",
      },
      { type: "heading", text: "The plan is half the mark" },
      {
        type: "paragraph",
        text: "Under time pressure, most children start writing immediately and discover their story has no ending five minutes before time. The single highest-value habit is a two-minute plan: where does it start, what changes, how does it end. Children who know their ending write toward it with purpose, and it shows in the structure marks.",
      },
      {
        type: "paragraph",
        text: "A related technique that transforms scripts: start close to the action. Not the morning routine, not the car journey, but the moment something happens. Examiners have read ten thousand alarm clocks going off.",
      },
      { type: "heading", text: "How to build this before the exam" },
      {
        type: "paragraph",
        text: "Writing improves through short, frequent, focused practice with feedback, not occasional marathon stories. In my sessions we work on one element at a time: openings one week, dialogue punctuation the next, endings after that. Pupils redraft short pieces rather than always starting new ones, because the redraft is where the learning happens. And we read good writing together and steal its techniques honestly: how did this author show fear without saying \"scared\"?",
      },
      { type: "heading", text: "What you can do at home" },
      {
        type: "paragraph",
        text: "Keep them reading, since every strong writer I've taught reads. Encourage any real writing they enjoy: stories, a diary, comics with captions. When they show you a piece, find one specific thing to praise and, at most, one thing to improve. A child who believes they're a writer improves fast; a child whose every story returns covered in corrections learns to write short and safe.",
      },
      {
        type: "paragraph",
        text: "If you'd like an honest assessment of your child's writing against 11+ standards, the easiest first step is a free 15-minute phone chat.",
      },
      {
        type: "cta",
        label: "Get in touch to arrange one.",
        href: "/contact",
      },
    ],
  },
  {
    slug: "verbal-reasoning-guide",
    title: "Verbal Reasoning: what it is and how to help your child prepare",
    metaTitle: "Verbal Reasoning: What It Is and How to Prepare",
    description:
      "What Verbal Reasoning tests in the 11+, how to learn the question types, and how to build the vocabulary underneath.",
    publishedAt: "2026-07-12",
    body: [
      {
        type: "paragraph",
        text: "Verbal Reasoning is often the part of the 11+ that worries parents most, mainly because it isn't taught at school. The good news: it's also the part where structured preparation makes the most visible difference.",
      },
      { type: "heading", text: "What Verbal Reasoning actually tests" },
      {
        type: "paragraph",
        text: "Despite the name, Verbal Reasoning is really two things wearing one coat: vocabulary and logic. Questions ask children to find synonyms and antonyms, complete word analogies, crack letter codes, spot hidden words, solve letter sequences, and work through short logic puzzles. A child with a rich vocabulary and a systematic approach will thrive; a child guessing at unfamiliar words will struggle no matter how clever they are.",
      },
      {
        type: "paragraph",
        text: "That's why VR is sometimes described as a test of potential. In practice, it rewards exactly two habits that can be built: reading widely, and learning the question types.",
      },
      { type: "heading", text: "The question types are learnable" },
      {
        type: "paragraph",
        text: "Most VR papers draw from a well-established set of question formats. This is genuinely good news, because it means familiarity pays. A child meeting a letter-code question for the first time in the exam hall wastes precious minutes decoding what the question even wants. A child who has done thirty of them recognises it instantly and gets straight to work.",
      },
      {
        type: "paragraph",
        text: "Sensible preparation therefore works through the types systematically: learn how one type works, practise it until the method is automatic, then move to the next. Only once the types are familiar does mixed, timed practice make sense.",
      },
      { type: "heading", text: "Vocabulary is the engine underneath" },
      {
        type: "paragraph",
        text: "Every VR technique in the world fails against a synonym question where the child doesn't know the words. Vocabulary is the single biggest differentiator, and it can't be crammed in a month. The most effective builders are unglamorous: reading good fiction daily, talking about unfamiliar words rather than skipping them, and keeping a simple word book. For children who don't naturally reach for books, short high-quality journalism, narrative non-fiction and even well-written comics all count. The goal is volume and variety of language, however it arrives.",
      },
      { type: "heading", text: "How I teach it" },
      {
        type: "paragraph",
        text: "In sessions, I break VR into its question families and teach an explicit method for each: what to look for, how to lay out working, how to eliminate wrong answers, and when to flag a question and move on. Alongside that, we build vocabulary deliberately, drawing from the words that actually appear in past papers. Closer to the exam, we shift to timed mixed papers, because pacing, not knowledge, is what usually costs marks at the final stage.",
      },
      { type: "heading", text: "What you can do at home" },
      {
        type: "paragraph",
        text: "Three things, none of which need a workbook. Read with them, or ensure they read, every day. Play word games in the car or at dinner: opposites, odd-one-out, \"give me three words that mean big\". And when practice papers do start, review errors together calmly; a wrong answer whose logic gets discussed is worth five right ones that get a tick and no thought.",
      },
      {
        type: "paragraph",
        text: "If you'd like an honest view of where your child's Verbal Reasoning currently stands, the easiest first step is a free 15-minute phone chat.",
      },
      {
        type: "cta",
        label: "Get in touch to arrange one.",
        href: "/contact",
      },
    ],
  },
  {
    slug: "non-verbal-reasoning-guide",
    title: "Non-Verbal Reasoning: a plain guide for parents",
    metaTitle: "Non-Verbal Reasoning: What It Is and How to Prepare",
    description:
      "What Non-Verbal Reasoning tests in the 11+, why practice helps, and how parents can support preparation at home.",
    publishedAt: "2026-07-12",
    body: [
      {
        type: "paragraph",
        text: "Non-Verbal Reasoning is the strangest-looking part of the 11+: pages of shapes, sequences and mirrored patterns that resemble no school subject your child has studied. Parents often assume you either can or can't do it. That's a myth worth retiring.",
      },
      { type: "heading", text: "What it tests" },
      {
        type: "paragraph",
        text: "NVR assesses logical thinking with visual information: spotting what a set of shapes has in common, continuing a sequence, identifying the odd one out, mentally rotating or reflecting figures, and matching analogies drawn in pictures rather than words. Because it doesn't rely on English, it's often described as a test of raw ability that's fair to children regardless of background.",
      },
      {
        type: "paragraph",
        text: "There's some truth in that, but the practical reality is more encouraging: NVR performance improves markedly with the right kind of practice, because most questions turn on a small set of underlying features.",
      },
      { type: "heading", text: "The secret: a checklist, not a stare" },
      {
        type: "paragraph",
        text: "Untrained children look at an NVR question and wait for the answer to jump out. Sometimes it does. When it doesn't, they have nothing to fall back on, and confidence drains fast.",
      },
      {
        type: "paragraph",
        text: "Trained children work through a mental checklist instead: shape, size, number, shading, rotation, reflection, position. What's changing across the sequence? What stays the same? Which single feature separates the odd one out? Once a child has that checklist, an intimidating page of symbols becomes a series of systematic checks. The change in confidence is usually visible within a few weeks.",
      },
      { type: "heading", text: "Why children plateau, and what fixes it" },
      {
        type: "paragraph",
        text: "The common failure mode in NVR is practising volume without method: paper after paper, same score every time. Improvement comes from slowing down on errors. When a question goes wrong, the valuable move is identifying which feature was missed (nine times out of ten it's rotation versus reflection, or counting sides carelessly) and adding that check to the routine. Ten questions reviewed properly beat fifty rushed.",
      },
      {
        type: "paragraph",
        text: "Speed matters eventually, because NVR papers are typically generous in question count and tight in time. But speed is the last thing to add, not the first. Method, then accuracy, then pace.",
      },
      { type: "heading", text: "What preparation looks like with me" },
      {
        type: "paragraph",
        text: "I teach the feature checklist explicitly, work through each question family until the method is automatic, and use errors as the syllabus: whatever a pupil misses tells us exactly what to train next. For 13+ candidates, where NVR appears in several school-specific tests and the ISEB Pre-Test, the same approach applies with harder material.",
      },
      { type: "heading", text: "Helping at home" },
      {
        type: "paragraph",
        text: "NVR responds well to playful practice. Puzzle books, tangrams, spot-the-difference, symmetry drawing and pattern-block toys all build the same visual muscles. For a child who finds the subject dispiriting, ten minutes of \"how is this shape changing?\" chat over a puzzle does more good than a full practice paper endured under protest.",
      },
      {
        type: "paragraph",
        text: "If your child finds NVR baffling, or has hit a plateau that more papers aren't fixing, the easiest first step is a free 15-minute phone chat.",
      },
      {
        type: "cta",
        label: "Get in touch to arrange one.",
        href: "/contact",
      },
    ],
  },
  {
    slug: "exam-day-nerves-11-plus",
    title: "Exam nerves and the 11+: helping your child perform on the day",
    metaTitle: "11+ Exam Nerves: Helping Your Child Perform on the Day",
    description:
      "How to help your child manage 11+ exam nerves — familiarity, what to say, in-exam techniques, and keeping the morning calm.",
    publishedAt: "2026-07-12",
    body: [
      {
        type: "paragraph",
        text: "A year of good preparation can be undersold by one anxious morning. The children who perform closest to their ability on exam day aren't the ones who feel no nerves; they're the ones whose nerves have nowhere to take hold, because the day is familiar, the routines are practised, and the pressure has been kept in proportion. All three of those are buildable.",
      },
      { type: "heading", text: "Nerves are mostly about the unknown" },
      {
        type: "paragraph",
        text: "Children fear exams the way adults fear turbulence: it's the not knowing what's normal. The remedy is familiarity, built gradually. By exam day, your child should have sat several full papers in realistic conditions: timed, at a quiet desk, without help, ideally occasionally somewhere other than home. If the real exam is your child's first experience of exam conditions, the conditions themselves become the test.",
      },
      {
        type: "paragraph",
        text: "Familiarity extends to logistics. Visit the school beforehand if you can, even just the outside. Know the journey, the arrival time, what they can bring. On the day, aim to arrive early enough to be calm and late enough not to marinate in the car park.",
      },
      { type: "heading", text: "What to say, and what not to say" },
      {
        type: "paragraph",
        text: "The most useful sentence a parent can say before an 11+ exam is some version of: \"Whatever happens today, you've worked hard and we're proud of you, and there are several good schools where you'll be happy.\" Children perform worst when they believe a single morning decides their worth or their family's happiness. Deliberately lowering the stakes isn't lying; it's accurate. There genuinely are multiple good outcomes.",
      },
      {
        type: "paragraph",
        text: "Things to avoid in the final week: last-minute cramming, which signals panic and adds nothing; comparisons with siblings, classmates or your own school history; and detailed post-mortems of practice papers. The final week is for light revision, good sleep, exercise and normality.",
      },
      { type: "heading", text: "In-exam techniques that children can actually use" },
      {
        type: "paragraph",
        text: "A few concrete tools I teach pupils, because vague advice to \"stay calm\" helps nobody. The reset breath: when panic flickers, put the pencil down, take one slow breath, and read the question again from the start. The parking habit: a hard question gets a mark in the margin and is left behind without guilt; unread easy questions at the end of the paper are the real enemy. And the mantra for adaptive or hard papers: it's supposed to feel hard, and it feels hard for everyone.",
      },
      {
        type: "paragraph",
        text: "Practising these during mock papers matters, because a technique used for the first time under real pressure isn't a technique, it's a hope.",
      },
      { type: "heading", text: "The morning itself" },
      {
        type: "paragraph",
        text: "Breakfast they'll actually eat, clothes sorted the night before, equipment packed the night before, and a departure time with slack in it. Keep the conversation in the car ordinary. Afterwards, whatever they say about how it went, respond warmly and briefly, and do something nice. Children's post-exam self-reports are famously unreliable in both directions, so don't celebrate or commiserate too hard on the strength of them.",
      },
      { type: "heading", text: "If anxiety runs deeper" },
      {
        type: "paragraph",
        text: "Some children carry anxiety that preparation alone doesn't touch: sleepless nights, tears over practice papers, stomach aches on tutoring days. That's a signal to reduce pressure rather than add polish, and it's worth acting on early. Sometimes the kindest, highest-performing decision a family makes is adjusting the school list. Confidence is a preparation topic in its own right, and in my sessions it gets treated as one.",
      },
      {
        type: "paragraph",
        text: "If exam confidence is the thing you're most worried about, the easiest first step is a free 15-minute phone chat.",
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
