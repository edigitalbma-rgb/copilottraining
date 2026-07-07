import { useMemo } from 'react'
import { getFlatLessons, findLessonIndex, getPhaseById, getTotalPhaseCount } from '../data/curriculum'

// Resolves a phaseId/lessonNum pair (from the URL) into everything a lesson
// screen needs: the lesson itself, its phase, breadcrumb numbers, and the
// prev/next paths for the Back/Continue buttons (falling back to the welcome
// and completion screens at the very start and end of the course).
export function useLessonNav(phaseId, lessonNum) {
  return useMemo(() => {
    const flat = getFlatLessons()
    const index = findLessonIndex(flat, phaseId, lessonNum)
    if (index === -1) {
      return { notFound: true }
    }
    const lesson = flat[index]
    const phase = getPhaseById(phaseId)
    const prevPath = index === 0 ? '/' : flat[index - 1].path
    const nextPath = index === flat.length - 1 ? '/complete' : flat[index + 1].path

    return {
      notFound: false,
      lesson,
      phase,
      prevPath,
      nextPath,
      totalPhases: getTotalPhaseCount(),
      lessonIndexInPhase: lesson.num,
      lessonCountInPhase: phase.lessons.length,
    }
  }, [phaseId, lessonNum])
}
