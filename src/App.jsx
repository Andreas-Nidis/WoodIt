import { BrowserRouter as Router, Routes, Route } from 'react-router'
import './App.css'
import Home from './components/Home'
import About from './components/About';
import Request from './components/Request';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/request' element={<Request />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
