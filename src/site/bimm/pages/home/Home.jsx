import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import MainWorks from '../../components/mainWorks/MainWorks'
import News from '../../components/news/News'

const Home = () => {
  return (
    <div>
      <Navbar />
      <MainWorks />
      <News />
      <Footer />
    </div>
  )
}

export default Home
