export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-slate-400 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}