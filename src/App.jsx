import { Routes, Route } from 'react-router';
import './App.css'
import ContentArea from './components/ContentArea';
import Header from './components/includes/header/Header';
import Footer from './components/includes/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className='text-sm xl:text-base'>
      <Header />
      <ContentArea>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </ContentArea>  
      <Footer />
    </div>
  )
}

export default App
