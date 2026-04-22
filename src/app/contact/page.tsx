export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Page Title */}
        <h1 className="text-5xl font-extrabold text-white tracking-tight mb-6">
          Contact Us
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-16">
          Reach out to Angeny Solutions for fast, reliable electrical service.
          Whether you need repairs, installations, or a custom project, we’re here to help.
        </p>

        {/* Contact Card */}
        <div className="bg-slate-900 shadow-xl rounded-2xl p-12 border border-slate-700 max-w-3xl mx-auto text-left">
          <h2 className="text-3xl font-semibold text-white mb-8 text-center">
            Mason Angeny
          </h2>

          <div className="space-y-6 text-lg text-slate-200">
            <p>
              <span className="font-semibold">Owner / Operator</span>
            </p>

            <p>
              <span className="font-semibold">Phone:</span>{" "}
              <a
                href="tel:4802972836"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                480-297-2836
              </a>
            </p>

            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:mason@angenysolutions.com"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                mason@angenysolutions.com
              </a>
            </p>

            <p>
              <span className="font-semibold">Address:</span>
              <br />
              4040 East Houston Ave
              <br />
              Gilbert, AZ 85234
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
