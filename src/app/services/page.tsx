import { SectionHeading } from "@/components/SectionHeading";

const sections = [
  {
    title: "Residential Electrical",
    description:
      "Safe, clean installations and repairs for single-family homes, condos, and remodels.",
    items: [
      "Service & panel upgrades",
      "EV charger circuits",
      "Lighting, fans, and dimmers",
      "Kitchen & bath remodel wiring",
      "Troubleshooting & repairs",
      "Outdoor & landscape lighting",
    ],
  },
  {
    title: "Commercial Electrical",
    description:
      "Reliable electrical work for tenant improvements, offices, retail, and light industrial.",
    items: [
      "New circuits & distribution",
      "Lighting design & retrofits",
      "Tenant improvements",
      "Equipment connections",
      "Emergency & service calls",
      "Maintenance programs",
    ],
  },
  {
    title: "Specialty & Add-ons",
    description:
      "Support for more complex or future-focused electrical needs.",
    items: [
      "Generator transfer switches",
      "Solar prep & conduit runs",
      "Low-voltage & data",
      "Code corrections & inspections",
      "Surge protection",
      "Smart home integrations",
    ],
  },
];

export default function ServicesPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <SectionHeading
        title="Services"
        subtitle="Angeny Solutions LLC provides full-scope electrical services for residential and commercial projects."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {sections.map((section) => (
          <div
            key={section.title}
            className="rounded-xl border border-slate-800 bg-slate-900/60 p-5"
          >
            <h3 className="text-lg font-semibold text-white">
              {section.title}
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              {section.description}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {section.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-blue" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}