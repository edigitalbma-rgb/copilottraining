import { useNavigate } from 'react-router-dom'

const SITE_NAME = 'Copilot for Non-Technical Users'
const CONTACT_EMAIL = 'aidataqueries@gmail.com'
const LAST_UPDATED = '11/07/2026'

const sections = [
  {
    heading: 'Who Runs This Site',
    body: (
      <>
        {SITE_NAME} is operated by one developer as a personal project. Contact via{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent-dark underline hover:text-navy">
          {CONTACT_EMAIL}
        </a>
        .
      </>
    ),
  },
  {
    heading: 'What Data Is Collected',
    body:
      'This site collects no data. No analytics, no tracking scripts, no form submissions, and no server-side logging of visitor information. Nothing is recorded when you visit.',
  },
  {
    heading: 'Data Hosting',
    body: (
      <>
        The site is hosted on Netlify. Netlify may log standard server-side request data (such as
        IP address and request path) for infrastructure purposes as part of their hosting service.
        This data is not accessible to or controlled by {SITE_NAME}. See{' '}
        <a
          href="https://www.netlify.com/privacy/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-dark underline hover:text-navy"
        >
          netlify.com/privacy
        </a>{' '}
        for details.
      </>
    ),
  },
  {
    heading: 'Cookies',
    body: 'This site does not use cookies.',
  },
  {
    heading: 'Your Rights',
    body: (
      <>
        Under GDPR you have rights including access, rectification, erasure, and objection. As
        this site holds no personal data about you, there is nothing to act on. If you have any
        questions or concerns, contact via{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent-dark underline hover:text-navy">
          {CONTACT_EMAIL}
        </a>
        .
      </>
    ),
  },
]

export default function PrivacyNotice() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
        >
          ← Back
        </button>
        <p className="text-xs font-semibold uppercase tracking-widest text-accent-dark">
          Privacy Notice
        </p>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-10 md:py-14 animate-fadeIn">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
          <div className="flex flex-wrap items-baseline gap-3">
            <h1 className="text-2xl md:text-3xl font-bold text-navy">Privacy Notice</h1>
            <p className="text-sm text-slate-400">Last updated: {LAST_UPDATED}</p>
          </div>

          <div className="mt-4 border-t border-slate-200" />

          <div className="mt-6 space-y-6">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-accent-dark">
                  {section.heading}
                </h2>
                <p className="mt-2 text-base leading-relaxed text-slate-700">{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
