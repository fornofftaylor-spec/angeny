import { SectionHeading } from "@/components/SectionHeading";

export default function AboutPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <SectionHeading
        title="About Angeny Solutions LLC"
        subtitle="A licensed, insured electrical contracting company focused on clean, code-compliant work and clear communication."
      />
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4 text-sm text-slate-300">
          <p>
            Angeny Solutions LLC was founded with a simple goal: deliver electrical work
            that homeowners, builders, and business owners can trust—without surprises.
          </p>
          <p>
            From small service calls to full build-outs, we focus on doing the job right
            the first time, keeping work areas clean, and communicating clearly about
            scope, pricing, and timelines.
          </p>
          <p>
            We stay current with electrical codes and best practices so every project is
            safe, reliable, and ready for inspection.
          </p>
        </div>
        <div className="space-y-4 text-sm text-slate-300">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-sm font-semibold text-slate-100 mb-3">
              Why clients choose Angeny Solutions LLC
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>• Licensed & insured electrical contractor</li>
              <li>• Residential and commercial experience</li>
              <li>• Clean, organized, and code-compliant work</li>
              <li>• Clear communication and straightforward pricing</li>
            </ul>
          </div>
          {/* <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-sm font-semibold text-slate-100 mb-3">
              Credentials
            </h3>
            <p className="text-xs text-slate-400">
              Add your license number(s), certifications, and coverage details here.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}