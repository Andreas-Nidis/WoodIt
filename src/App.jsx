import { BrowserRouter as Router, Routes, Route } from 'react-router'
import './App.css'
import Home from './components/Home'
import About from './components/About';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
