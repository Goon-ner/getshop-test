import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FirstPage from './Pages/FirstPage'
import LastPage from './Pages/LastPage'
import SecondPage from './Pages/SecondPage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/second" element={<SecondPage />} />
          <Route path="/last" element={<LastPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
