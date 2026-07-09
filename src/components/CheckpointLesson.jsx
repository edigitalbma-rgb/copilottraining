import { useState } from 'react'

export default function CheckpointLesson({ lesson, savedAnswer, onSaveAnswer }) {
  const [draft, setDraft] = useState(savedAnswer)

  const handleChange = (e) => {
    const value = e.target.value
    setDraft(value)
    onSaveAnswer(value)
  }

  return (
    <div className="space-y-5">
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
        <p className="text-sm font-semibold uppercase tracking-wider text-amber-700">
          Checkpoint reflection
        </p>
        <p className="mt-2 text-base leading-relaxed text-slate-800">{lesson.question}</p>
      </div>

      <div>
        <label htmlFor="checkpoint-answer" className="mb-2 block text-sm font-semibold text-slate-600">
          Your answer, in your own words
        </label>
        <textarea
          id="checkpoint-answer"
          value={draft}
          onChange={handleChange}
          rows={6}
          placeholder="Type your reflection here; it's saved automatically as you write."
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm leading-relaxed text-slate-800 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20"
        />
        <p className="mt-2 text-xs text-slate-400">
          {draft.trim().length > 0 ? 'Saved to this browser.' : 'Continue unlocks once you type something.'}
        </p>
      </div>
    </div>
  )
}
