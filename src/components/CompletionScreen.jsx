import { Link, useNavigate } from 'react-router-dom'
import { completionContent } from '../data/curriculum'

export default function CompletionScreen() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen items-center justify-center bg-navy px-6">
      <div className="max-w-xl text-center animate-fadeIn">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-3xl text-white">
          ✓
        </div>
        <h1 className="mt-6 text-3xl md:text-4xl font-bold text-white leading-tight">
          {completionContent.headline}
        </h1>
        <p className="mt-6 text-base leading-relaxed text-white/80">{completionContent.copy}</p>

        <div className="mt-8 rounded-xl border border-ice/30 bg-white/5 p-6 text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-ice">
            {completionContent.capstoneLabel}
          </p>
          <p className="mt-2 text-base leading-relaxed text-white">{completionContent.capstone}</p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <a
            href={completionContent.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-white hover:bg-accent-dark transition-colors"
          >
            {completionContent.linkLabel}
          </a>
          <button
            onClick={() => navigate('/phase-0/lesson-1')}
            className="text-sm font-medium text-ice hover:text-white transition-colors"
          >
            Revisit the curriculum
          </button>
        </div>

        <Link
          to="/privacy"
          className="mt-16 inline-block text-xs text-white/40 hover:text-white/70 transition-colors"
        >
          Privacy Notice
        </Link>
      </div>
    </div>
  )
}
