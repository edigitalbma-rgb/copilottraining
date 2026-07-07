import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import LessonLayout from '../components/LessonLayout'
import LessonContent from '../components/LessonContent'
import ReferenceTableLesson from '../components/ReferenceTableLesson'
import CheckpointLesson from '../components/CheckpointLesson'
import { useLessonNav } from '../hooks/useLessonNav'
import { useProgress } from '../context/ProgressContext'

const FORMAT_BADGE = {
  lesson: null, // uses lesson.format directly
  reference: 'Reference',
  checkpoint: 'Checkpoint',
}

export default function LessonPage() {
  const { phaseSeg, lessonSeg } = useParams()
  // URL segments look like "phase-2" / "lesson-3"; pull the numbers back out.
  const phaseId = phaseSeg?.replace('phase-', '')
  const lessonNum = lessonSeg?.replace('lesson-', '')
  const nav = useLessonNav(phaseId, lessonNum)
  const { isCompleted, markComplete, getAnswer, saveAnswer, setLastVisited } = useProgress()

  useEffect(() => {
    if (!nav.notFound) {
      setLastVisited(`/phase-${phaseId}/lesson-${lessonNum}`)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phaseId, lessonNum])

  const { lesson, phase } = nav.notFound ? {} : nav

  // Reference lessons carry no completion gate — treat them as complete
  // the moment they're viewed so they count toward overall progress.
  useEffect(() => {
    if (!nav.notFound && lesson.type === 'reference' && !isCompleted(phase.id, lesson.num)) {
      markComplete(phase.id, lesson.num)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nav.notFound, phaseId, lessonNum])

  if (nav.notFound) {
    return <Navigate to="/" replace />
  }

  const completed = isCompleted(phase.id, lesson.num)
  const savedAnswer = getAnswer(phase.id, lesson.num)

  let canContinue = completed
  if (lesson.type === 'reference') canContinue = true
  if (lesson.type === 'checkpoint') canContinue = savedAnswer.trim().length > 0

  const formatBadge = lesson.type === 'lesson' ? lesson.format : FORMAT_BADGE[lesson.type]
  const time = lesson.type === 'lesson' ? lesson.time : null
  const title = lesson.type === 'reference' ? lesson.tableTitle : lesson.title

  return (
    <LessonLayout
      phase={phase}
      totalPhases={nav.totalPhases}
      lessonIndexInPhase={nav.lessonIndexInPhase}
      lessonCountInPhase={nav.lessonCountInPhase}
      title={title}
      formatBadge={formatBadge}
      time={time}
      prevPath={nav.prevPath}
      nextPath={nav.nextPath}
      canContinue={canContinue}
    >
      {lesson.type === 'lesson' && (
        <LessonContent
          lesson={lesson}
          completed={completed}
          onMarkComplete={() => markComplete(phase.id, lesson.num)}
        />
      )}
      {lesson.type === 'reference' && <ReferenceTableLesson lesson={lesson} />}
      {lesson.type === 'checkpoint' && (
        <CheckpointLesson
          lesson={lesson}
          savedAnswer={savedAnswer}
          onSaveAnswer={(text) => saveAnswer(phase.id, lesson.num, text)}
        />
      )}
    </LessonLayout>
  )
}
