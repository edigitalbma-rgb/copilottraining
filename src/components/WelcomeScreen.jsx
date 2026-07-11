import { Link, useNavigate } from 'react-router-dom'
import { welcomeContent } from '../data/curriculum'
import { useProgress } from '../context/ProgressContext'

export default function WelcomeScreen() {
  const navigate = useNavigate()
  const { lastVisited, completedCount } = useProgress()

  const hasProgress = completedCount > 0 && lastVisited
  const resumePath = hasProgress ? lastVisited : '/phase-0/lesson-1'
  const { about } = welcomeContent

  return (
    <div className="flex min-h-screen w-full justify-center overflow-y-auto bg-navy px-6 py-16">
      <div className="w-full max-w-3xl text-center animate-fadeIn">
        <p className="text-sm font-semibold uppercase tracking-widest text-ice">
          Microsoft Copilot Training
        </p>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-white leading-tight">
          {welcomeContent.title}
        </h1>
        <p className="mt-3 text-lg text-ice">{welcomeContent.subtitle}</p>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/80">
          {welcomeContent.intro}
        </p>

        {about && (
          <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 text-left">
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-ice">
              {about.heading}
            </p>

            <div className="mt-5 grid gap-5 sm:grid-cols-3">
              {about.items.map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-ice/80">
                    {item.label}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/80">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-2 border-t border-white/10 pt-5">
              <p className="text-sm leading-relaxed text-white/70">{about.checkpointPolicy}</p>
              <p className="text-sm leading-relaxed text-white/70">{about.appendixNote}</p>
            </div>
          </div>
        )}

        <div className="mt-10 flex flex-col items-center gap-3">
          <button
            onClick={() => navigate('/phase-0/lesson-1')}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-white hover:bg-accent-dark transition-colors"
          >
            {welcomeContent.cta} →
          </button>
          {hasProgress && (
            <button
              onClick={() => navigate(resumePath)}
              className="text-sm font-medium text-ice hover:text-white transition-colors"
            >
              Resume where you left off
            </button>
          )}
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
