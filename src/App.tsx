import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import FigmaDemoPage from './pages/FigmaDemoPage'
import Demo2Page from './pages/Demo2Page'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/demo" element={<FigmaDemoPage />} />
        <Route path="/demo2" element={<Demo2Page />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
