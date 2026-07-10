import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-btn px-5 py-3 font-head text-lg font-semibold no-underline transition-transform hover:-translate-y-0.5";

  const styles =
    variant === "primary"
      ? "bg-blue text-white shadow-[0_4px_14px_rgba(77,134,197,0.35)] hover:bg-blue-deep"
      : "border-2 border-blue-soft bg-surface text-blue-deep hover:border-blue hover:bg-soft";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
