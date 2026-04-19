"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

 async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const data = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    address: formData.get("address"),
    serviceType: formData.get("serviceType"),
    description: formData.get("description"),
  };

  const res = await fetch("/api/send-quote", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    setSubmitted(true);
  } else {
    alert("There was an issue sending your request.");
  }
}

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <SectionHeading
        title="Request a quote or service call"
        subtitle="Share a few details about your project or issue. Attach photos if you have them for faster, more accurate estimates."
      />
      <div className="grid gap-10 md:grid-cols-2">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-xl border border-slate-800 bg-slate-900/60 p-6"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Name" required>
              <input
                required
                name="name"
                placeholder="Your name"
                className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
              />
            </Field>
            <Field label="Phone" required>
              <input
                required
                name="phone"
                placeholder="(555) 555-5555"
                className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
              />
            </Field>
          </div>

          <Field label="Email">
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
            />
          </Field>

          <Field label="Address or area">
            <input
              name="address"
              placeholder="City / area or full address"
              className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
            />
          </Field>

          <Field label="Type of service" required>
            <select
              name="serviceType"
              required
              className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
            >
              <option value="">Select one</option>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Other / not sure</option>
            </select>
          </Field>

          <Field label="Describe the issue or project" required>
            <textarea
              required
              name="description"
              placeholder="Tell us what’s going on, what you need done, and any timing constraints."
              className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue min-h-[120px]"
            />
          </Field>

          <Field label="Photos (optional)">
            <input
              type="file"
              name="photos"
              multiple
              className="block w-full text-xs text-slate-400 file:mr-3 file:rounded-md file:border-0 file:bg-brand-blue file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-white hover:file:bg-blue-600"
            />
          </Field>

          <button
            type="submit"
            className="mt-4 w-full rounded-md bg-brand-blue px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-600 transition-colors"
          >
            Submit request
          </button>

          {submitted && (
            <p className="mt-3 text-xs text-emerald-400">
              Thanks—your request has been recorded. Replace this with a real confirmation
              once you wire up the backend.
            </p>
          )}
        </form>

        <div className="space-y-4 text-sm text-slate-300">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-sm font-semibold text-slate-100 mb-2">
              What to include for faster quotes
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>• Photos of the panel, equipment, or area</li>
              <li>• Any existing issues (tripping breakers, flickering lights, etc.)</li>
              <li>• Desired timeline</li>
              <li>• For commercial: plans, load info, or scope if available</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 text-xs text-slate-400">
            <p>
              Add your phone number, email, and service area here so customers can reach
              you directly while you build out automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-xs text-slate-300">
      <span className="mb-1 inline-flex items-center gap-1">
        {label}
        {required && <span className="text-red-400">*</span>}
      </span>
      <div className="mt-1">{children}</div>
    </label>
  );
}