import { contactPhoneDisplay } from "@/lib/site";

/** Persistent mobile call CTA — tel: link for one-tap dialling. */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/95 px-4 py-3 backdrop-blur-md md:hidden">
      <a
        href="tel:07782216304"
        className="flex w-full items-center justify-center rounded-btn bg-blue px-4 py-3 font-head text-lg font-semibold text-white no-underline shadow-[0_4px_14px_rgba(77,134,197,0.35)]"
      >
        Call {contactPhoneDisplay}
      </a>
    </div>
  );
}
