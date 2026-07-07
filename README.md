# Copilot for Non-Technical Users — Guided Curriculum

A standalone, step-by-step learning site for a Microsoft Copilot training curriculum aimed at
non-technical business users. Built with Vite + React + Tailwind CSS + React Router. Progress
(completed lessons, checkpoint answers, and last-visited lesson) is saved to `localStorage`, so
learners can close the tab and resume exactly where they left off.

## Running it

```bash
npm install
npm run dev
```

Then open the URL Vite prints (typically `http://localhost:5173`).

To build a production bundle:

```bash
npm run build
npm run preview   # serve the built dist/ folder locally
```

## How the course is structured

- **Welcome screen** (`/`) introduces the course and links into Phase 0, Lesson 1.
- **7 phases** (Phase 0 – Phase 6), each with several lessons, always ending in a **Checkpoint**
  reflection lesson.
- Two lessons (Phase 3 and Phase 5's first items) are **reference tables** instead of modules —
  read-only, no completion gate.
- **Completion screen** (`/complete`) shows after the final checkpoint.
- A separate **Appendix** (`/appendix`) lists advanced/developer topics as a flat reference list,
  outside the linear course flow.

### Navigation

- The left **sidebar** shows the full curriculum outline, highlights the current lesson, and
  checks off completed ones. It collapses into a hamburger-triggered drawer on narrow screens.
- Every lesson has **Back** / **Continue** buttons at the bottom. Continue is disabled until the
  lesson's completion condition is met:
  - Normal lessons: click **Mark as complete**.
  - Reference tables: no gate — always free to continue.
  - Checkpoints: type an answer in the reflection box.
- The sidebar is also directly clickable for non-linear jumping between lessons.
- A slim **progress bar** at the top shows overall percent complete across the whole course.
- URLs are shareable and refresh-safe, e.g. `/phase-2/lesson-3`.

## Editing content

All curriculum content — phase objectives, lesson titles, formats, times, "why it matters" copy,
source module links, reference table contents, checkpoint questions, and the appendix list — lives
in one file:

```
src/data/curriculum.js
```

Component code (`src/components/*`, `src/pages/*`) only renders from this data; it never
hardcodes lesson content. To add, remove, or edit a lesson, edit `curriculum.js` — the sidebar,
routing, breadcrumbs, and progress bar all update automatically since they're derived from the
same array.

## Project structure

```
src/
  data/curriculum.js       # all course content (single source of truth)
  context/ProgressContext.jsx  # localStorage-backed progress state
  hooks/useLessonNav.js    # resolves URL params into lesson/phase/prev/next
  components/
    Sidebar.jsx
    ProgressBar.jsx
    CourseLayout.jsx       # sidebar + progress bar + <Outlet/>
    LessonLayout.jsx       # breadcrumb, title, badge, Back/Continue chrome
    LessonContent.jsx      # normal lesson body (why it matters, module link, mark complete)
    ReferenceTableLesson.jsx
    CheckpointLesson.jsx
    AppendixList.jsx
    WelcomeScreen.jsx
    CompletionScreen.jsx
  pages/
    LessonPage.jsx         # resolves a lesson route and renders the right content component
  App.jsx                  # route definitions
  main.jsx                 # app entry point
```

## Notes on routing

Lesson URLs look like `/phase-2/lesson-3`. Because React Router v6 only matches whole path
segments as params (it can't mix a literal prefix like `phase-` with a param in the same
segment), the route is declared generically as `/:phaseSeg/:lessonSeg` and `LessonPage` strips the
`phase-` / `lesson-` prefixes itself.
