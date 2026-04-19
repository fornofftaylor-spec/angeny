import { SectionHeading } from "@/components/SectionHeading";

const projects = [
  {
    name: "Residential panel upgrade",
    type: "Residential",
    location: "Single-family home",
    summary:
      "Replaced an undersized, outdated panel with a new 200A service, added dedicated EV charger circuit, and cleaned up existing wiring.",
  },
  {
    name: "Office tenant improvement",
    type: "Commercial",
    location: "Professional office space",
    summary:
      "Installed new lighting layout, receptacles, and dedicated circuits for office equipment, all to current code requirements.",
  },
  {
    name: "Lighting retrofit",
    type: "Commercial",
    location: "Retail space",
    summary:
      "Upgraded existing fixtures to high-efficiency LED, improving light quality and reducing energy usage.",
  },
];

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <SectionHeading
        title="Projects"
        subtitle="A snapshot of the type of work Angeny Solutions LLC delivers for clients."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="rounded-xl border border-slate-800 bg-slate-900/60 p-5"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-brand-yellow mb-2">
              {project.type}
            </p>
            <h3 className="text-lg font-semibold text-white">
              {project.name}
            </h3>
            <p className="mt-1 text-xs text-slate-400">{project.location}</p>
            <p className="mt-3 text-sm text-slate-300">{project.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}