import React from 'react'
import Hero from '../components/Hero';
import "../Styles/Home.css"

function Home() {
  return (
    <>
    <Hero
    cName="hero"
    heroImg="http://socisdg.com/media/1221/zero-powerty.jpg?width=1170"
    title="Manudamin Perata"
    text="exxxxxxxxx"
    />
  <div className="description">
      <h1>Main Topic</h1>
      <p>sub topic</p>
      <h2>Sub Topic</h2>
    </div>
    </>
  )
}

export default Home;