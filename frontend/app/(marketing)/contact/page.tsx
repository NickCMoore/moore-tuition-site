import { PageHeader } from "@/components/PageHeader";
import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Moore Tuition in Lymm, Cheshire by email, phone, or send a message about 11+ and 13+ tutoring.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        subtitle="Feel free to get in contact to discuss how I can best help your child"
      />
      <section className="px-6 pt-10 pb-14">
        <div className="mx-auto max-w-5xl">
          <div className="relative mb-12 aspect-[21/9] overflow-hidden rounded-card shadow-soft sm:aspect-[2.4/1]">
            <Image
              src="/images/teacher-student.jpg"
              alt="Working through a textbook together in a tutoring session"
              fill
              className="object-cover object-[center_40%]"
              sizes="100vw"
              priority
            />
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-head text-2xl font-semibold text-ink">
                Send a message
              </h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            <aside className="rounded-card border border-line bg-surface p-8 shadow-soft">
              <h3 className="font-head text-lg font-semibold text-ink">Email</h3>
              <p className="mt-2">
                <a
                  href="mailto:moorenickc@protonmail.com"
                  className="text-blue-deep hover:underline"
                >
                  moorenickc@protonmail.com
                </a>
              </p>

              <h3 className="mt-6 font-head text-lg font-semibold text-ink">Phone</h3>
              <p className="mt-2">
                <a href="tel:07782216304" className="text-blue-deep hover:underline">
                  07782 216304
                </a>
              </p>

              <h3 className="mt-6 font-head text-lg font-semibold text-ink">
                Location
              </h3>
              <p className="mt-2 text-muted">Lymm, Cheshire WA13 0SN</p>

              <h3 className="mt-6 font-head text-lg font-semibold text-ink">Hours</h3>
              <table className="mt-2 w-full text-sm text-muted">
                <tbody>
                  <tr>
                    <td className="py-1.5">Monday to Friday</td>
                    <td className="py-1.5 text-right">8:00am to 8:00pm</td>
                  </tr>
                  <tr>
                    <td className="py-1.5">Saturday</td>
                    <td className="py-1.5 text-right">8:00am to 1:00pm</td>
                  </tr>
                  <tr>
                    <td className="py-1.5">Sunday</td>
                    <td className="py-1.5 text-right">8:00am to 12:00pm</td>
                  </tr>
                </tbody>
              </table>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
