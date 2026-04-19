import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

const quickServices = [
  "Panel upgrades",
  "EV charger installation",
  "Lighting design & install",
  "Troubleshooting & repairs",
  "Commercial build-outs",
  "Emergency service",
];

export default function HomePage() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-4 py-16 flex flex-col gap-10 md:flex-row md:items-center">
        <div className="flex-1">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-yellow mb-3">
            Electrical Contracting • Residential & Commercial
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Powering your projects with{" "}
            <span className="text-brand-blue">safe, reliable</span> electrical work.
          </h1>
          <p className="mt-4 text-slate-300 max-w-xl">
            Angeny Solutions LLC delivers licensed, insured electrical services for homes,
            businesses, and new construction—done right the first time.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-brand-blue px-6 py-3 text-sm font-medium text-white hover:bg-blue-600 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/services"
              className="rounded-md border border-slate-700 px-6 py-3 text-sm font-medium text-white hover:border-slate-500 transition-colors"
            >
              View Services
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            Licensed & Insured • Serving residential and commercial clients
          </p>
        </div>

        <div className="flex-1">
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-xl">
            <p className="text-sm font-medium text-slate-200 mb-4">
              Common services we handle:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {quickServices.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 text-sm text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs text-slate-500">
              Need something specific? Send details and photos on the{" "}
              <Link href="/contact" className="text-brand-blue hover:underline">
                contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 border-t border-slate-900">
        <SectionHeading
          title="Electrical services built for real-world projects."
          subtitle="From small residential fixes to full commercial build-outs, Angeny Solutions LLC provides clean, code-compliant work."
        />
        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard
            title="Residential"
            items={[
              "Panel upgrades & replacements",
              "EV charger circuits",
              "Lighting & ceiling fans",
              "Remodels & additions",
            ]}
          />
          <ServiceCard
            title="Commercial"
            items={[
              "Tenant improvements",
              "New construction rough-in & trim",
              "Lighting retrofits",
              "Maintenance & service calls",
            ]}
          />
          <ServiceCard
            title="Specialty"
            items={[
              "Generator transfer switches",
              "Low-voltage & data",
              "Solar prep wiring",
              "Code corrections",
            ]}
          />
        </div>
      </section>
    </>
  );
}

function ServiceCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
      <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
      <ul className="space-y-2 text-sm text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}