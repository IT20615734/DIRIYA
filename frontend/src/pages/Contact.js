import React from 'react'
import first from "../Assets/first.jpg"
import "../pages/DonatorsManagement/movingBanner.css"

function Contact() {
  return (
    <>
    <div className="moving-banner" style={{ marginTop: '0%' }}>
      <h2>Your donations save thousands of families from hunger and help them to alleviate from severe poverty in Sri Lanka | THANK YOU FOR YOUR DONATIONS | Your donations save thousands of families from hunger and help them to alleviate from severe poverty in Sri Lanka | THANK YOU FOR YOUR DONATIONS | Your donations save thousands of families from hunger and help them to alleviate from severe poverty in Sri Lanka | THANK YOU FOR YOUR DONATIONS</h2>
    </div><div className="description">

        <div className="first-des">
          <div className="one-text">
            <h2 style={{ marginTop: 30 }}>How to make the difference?</h2>
            <p style={{ width: 700, fontSize: 20 }}>We recognize that donations from generous Sri Lankans are often distributed unequally, which is why we propose a system that ensures equal distribution of donations. Donators can submit their donations, and village servants of each district can then distribute them among the families under their care based on the need. This will ensure that those who require the most support receive it, and that donations are distributed fairly and effectively.</p>
            <img src={first} style={{ marginLeft: 800, marginTop: -250, width: 650, height: 300 }} />
            <img src={first} style={{ width: 650, height: 300 }} />
            <h2 style={{ marginLeft: 800, marginTop: -250, whiteSpace: 'nowrap' }}>A sustainable solution…</h2>
            <p style={{ marginLeft: 800, width: 650, fontSize: 20 }}>We also believe that sustainable solutions are essential to addressing poverty. That's why we propose collecting minor level job opportunities from various individuals and companies and making them visible to each village servant. This way, the village servants can communicate the opportunities to the underprivileged groups and help them earn an income.</p>
            <h2 style={{ marginTop: 60 }}>Our mission…</h2>
            <p style={{ width: 700, fontSize: 20 }}>We are committed in creating a Sri Lanka without poverty. We believe that by working together, we can make a lasting impact on the lives of millions of people in Sri Lanka. Join us in our mission to feed hunger, eradicate disease, and give everyone a chance to live a productive and prosperous life.</p>
            <img src={first} style={{ marginLeft: 800, marginTop: -200, width: 650, height: 300 }} />
          </div>
        </div>
      </div>
      </>
  )
}

export default Contact