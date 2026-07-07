import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getFlatLessons, getLessonKey } from '../data/curriculum'

const STORAGE_KEY = 'copilot-curriculum-progress-v1'

const ProgressContext = createContext(null)

function loadInitialState() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return { completed: {}, answers: {}, lastVisited: null }
    const parsed = JSON.parse(raw)
    return {
      completed: parsed.completed || {},
      answers: parsed.answers || {},
      lastVisited: parsed.lastVisited || null,
    }
  } catch {
    return { completed: {}, answers: {}, lastVisited: null }
  }
}

export function ProgressProvider({ children }) {
  const [state, setState] = useState(loadInitialState)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  const flatLessons = useMemo(() => getFlatLessons(), [])

  const isCompleted = (phaseId, num) => Boolean(state.completed[getLessonKey(phaseId, num)])

  const markComplete = (phaseId, num) => {
    setState((prev) => ({
      ...prev,
      completed: { ...prev.completed, [getLessonKey(phaseId, num)]: true },
    }))
  }

  const getAnswer = (phaseId, num) => state.answers[getLessonKey(phaseId, num)] || ''

  const saveAnswer = (phaseId, num, text) => {
    setState((prev) => ({
      ...prev,
      answers: { ...prev.answers, [getLessonKey(phaseId, num)]: text },
      completed:
        text && text.trim().length > 0
          ? { ...prev.completed, [getLessonKey(phaseId, num)]: true }
          : prev.completed,
    }))
  }

  const setLastVisited = (path) => {
    setState((prev) => ({ ...prev, lastVisited: path }))
  }

  const totalCount = flatLessons.length
  const completedCount = flatLessons.filter((l) => isCompleted(l.phaseId, l.num)).length
  const percentComplete = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100)

  const value = {
    flatLessons,
    isCompleted,
    markComplete,
    getAnswer,
    saveAnswer,
    lastVisited: state.lastVisited,
    setLastVisited,
    percentComplete,
    completedCount,
    totalCount,
  }

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export function useProgress() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used within a ProgressProvider')
  return ctx
}
