import React from 'react'
import Hero from '../components/Hero';
import "../Styles/Home.css"
import first from "../Assets/first.jpg"
import second from "../Assets/second.jpeg"

function Home() {
  return (
    <>
    <Hero
    cName="hero"
    heroImg="https://scontent.fcmb4-2.fna.fbcdn.net/v/t39.30808-6/294476149_590531945769761_7598775614928024688_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=pGpeOy9he94AX8sxUxD&_nc_ht=scontent.fcmb4-2.fna&oh=00_AfDf9DAWKe977E6IYwV3iE7UCfOCXBrrsjlf37i9VgMQUg&oe=643420E6"
    title="Poverty doesn't discriminate. It affects people of all ages, genders, and backgrounds. "
    p="TOGETHER, WE CAN MAKE A DIFFERENCE!"

    />
  <div className="description">
      <h1>What is DIRIYA?</h1>
      <p>At Diriya, we are committed to fighting poverty and providing opportunities for underprivileged communities in Sri Lanka. Unfortunately, poverty in Sri Lanka has risen from 13% to 25% in 2022. We believe that no one should have to suffer from lack of basic needs such as food, water, and healthcare, and we are dedicated to making a difference.</p>

  <div className="first-des">
    <div className="one-text">
      <h2>How to make the difference?</h2>
      <p>We recognize that donations from generous Sri Lankans are often distributed unequally, which is why we propose a system that ensures equal distribution of donations. Donators can submit their donations, and village servants of each district can then distribute them among the families under their care based on the need. This will ensure that those who require the most support receive it, and that donations are distributed fairly and effectively.</p>
      <h2>A sustainable solution…</h2>
      <p>We also believe that sustainable solutions are essential to addressing poverty. That's why we propose collecting minor level job opportunities from various individuals and companies and making them visible to each village servant. This way, the village servants can communicate the opportunities to the underprivileged groups and help them earn an income.</p>
      <h2>Our mission…</h2>
      <p>We are committed in creating a Sri Lanka without poverty. We believe that by working together, we can make a lasting impact on the lives of millions of people in Sri Lanka. Join us in our mission to feed hunger, eradicate disease, and give everyone a chance to live a productive and prosperous life.</p>
    </div>
    <div className="image">
      <img alt="img" src={first}/>
      <img alt="img" src={second}/>
    </div>
  </div>
  </div>
  </>
  )
}

export default Home;