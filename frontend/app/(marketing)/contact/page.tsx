import { PageHeader } from "@/components/PageHeader";
import { pageMetadata } from "@/lib/metadata";
import {
  contactEmail,
  contactPhoneDisplay,
  contactPostcode,
} from "@/lib/site";
import { ContactForm } from "./ContactForm";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with Moore Tuition in Lymm, Cheshire by email, phone, or send a message about 7+, 11+ and 13+ tutoring.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        subtitle="Feel free to get in contact to discuss how I can best help your child"
      />
      <section className="px-6 pt-10 pb-14">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-head text-2xl font-semibold text-ink">
                Send a message
              </h2>
              <div className="mt-6">
                <ContactForm />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Your details are only used to reply to your enquiry and are not
                shared with third parties for marketing.
              </p>
            </div>

            <aside className="rounded-card border border-line bg-surface p-8 shadow-soft">
              <h3 className="font-head text-lg font-semibold text-ink">Email</h3>
              <p className="mt-2">
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-blue-deep hover:underline"
                >
                  {contactEmail}
                </a>
              </p>

              <h3 className="mt-6 font-head text-lg font-semibold text-ink">
                Phone
              </h3>
              <p className="mt-2">
                <a
                  href="tel:07782216304"
                  className="text-blue-deep hover:underline"
                >
                  {contactPhoneDisplay}
                </a>
              </p>

              <h3 className="mt-6 font-head text-lg font-semibold text-ink">
                Location
              </h3>
              <p className="mt-2 text-muted">
                Lymm, Cheshire {contactPostcode}
              </p>

              <h3 className="mt-6 font-head text-lg font-semibold text-ink">
                Hours
              </h3>
              <table
                className="mt-2 w-full text-sm text-muted"
                aria-label="Tutoring availability hours"
              >
                <caption className="sr-only">
                  Weekly tutoring availability
                </caption>
                <tbody>
                  <tr>
                    <td className="py-1.5">Monday to Friday</td>
                    <td className="py-1.5 text-right">8:00am to 8:00pm</td>
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
