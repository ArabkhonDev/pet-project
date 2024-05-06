import {Routes, Route, BrowserRouter} from 'react-router-dom'
import './App.css'
import NoPages from './pages/home/NoPages';
import Home from './pages/home/Home';
import OurTeam from './pages/ourteam/OurTeam';
import Contact from './pages/contact/Contact';
import Carousel from './components/carousel/Carousel';

function App() {

  return (
    <>
   {/* 
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="blogs" element={<OurTeam />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPages />} />
            </Route>
          </Routes>
      </BrowserRouter> 
      */}
      
      
      <Carousel />
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </>
  )
}

export default App
