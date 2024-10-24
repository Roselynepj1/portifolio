import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Project from './pages/Project'
import NotFound from './pages/NotFound'
import './App.css'
function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects/:id' element={<Project />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App
