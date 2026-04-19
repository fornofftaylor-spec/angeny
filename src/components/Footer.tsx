export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Angeny Solutions LLC. All rights reserved.</p>
        <p className="text-xs">
          Licensed & Insured • Residential & Commercial Electrical Contracting
        </p>
      </div>
    </footer>
  );
}