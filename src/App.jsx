import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import NimaUchun from './components/NimaUchun/NimaUchun'
import Yonalishlar from './components/Yonalishlar/Yonalishlar'
import MasofaviyTalim from './components/MasofaviyTalim/MasofaviyTalim'
import Litsensiya from './components/Litsensiya/Litsensiya'
import Footer from './components/Footer/Footer'
import HujjatTopshirish from './components/HujjatTopshirish/HujjatTopshirish'

// Home komponenti (barcha komponentlar)
function Home() {
  return (
    <>
      <Main />
      <NimaUchun />
      <Yonalishlar />
      <MasofaviyTalim />
      <Litsensiya />
    </>
  )
}

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hujjat-topshirish" element={<HujjatTopshirish />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}