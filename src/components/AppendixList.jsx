import { appendixItems } from '../data/curriculum'

const TAG_STYLES = {
  Advanced: 'bg-ice text-navy',
  'Developer/IT': 'bg-slate-200 text-slate-700',
}

export default function AppendixList() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-8 md:py-12 animate-fadeIn">
      <p className="text-sm font-semibold text-accent-dark">Appendix</p>
      <h1 className="mt-2 text-2xl md:text-3xl font-bold text-navy leading-tight">
        Advanced Topics — Awareness Only
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
        These modules go deeper than a non-technical curriculum needs to. You don't need to work
        through them lesson-by-lesson — this page is just a reference list so you know they exist
        and roughly what each one covers, in case you ever need to hand a task to a more technical
        teammate.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {appendixItems.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-sm font-bold text-navy leading-snug">{item.title}</h3>
              <span
                className={`shrink-0 whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                  TAG_STYLES[item.tag] || 'bg-slate-200 text-slate-700'
                }`}
              >
                {item.tag}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
