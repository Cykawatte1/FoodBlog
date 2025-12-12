import MainSection from './MainSection.tsx'
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/" element={<App />} />
        </Routes>
      <Header />
      <MainSection />
      <Footer />
    </>
  )
}

