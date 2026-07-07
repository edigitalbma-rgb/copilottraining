import { Routes, Route } from 'react-router-dom'
import CourseLayout from './components/CourseLayout'
import WelcomeScreen from './components/WelcomeScreen'
import CompletionScreen from './components/CompletionScreen'
import AppendixList from './components/AppendixList'
import LessonPage from './pages/LessonPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomeScreen />} />
      <Route path="/complete" element={<CompletionScreen />} />
      <Route element={<CourseLayout />}>
        <Route path="/:phaseSeg/:lessonSeg" element={<LessonPage />} />
        <Route path="/appendix" element={<AppendixList />} />
      </Route>
    </Routes>
  )
}
