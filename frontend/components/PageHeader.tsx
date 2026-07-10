type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="border-b border-line bg-gradient-to-b from-soft/80 to-ground px-6 py-14">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-head text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-3 max-w-2xl text-lg text-muted">{subtitle}</p>
        ) : null}
      </div>
    </div>
  );
}
