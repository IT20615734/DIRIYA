import React from 'react'
import "../components/HeroStyles.css";

function Hero(props) {
  return (
    <>
    <div className={props.cName}>
        <img alt="HeroImg" src={props.heroImg}/>
    </div>

    <div className="hero-text">
        <h1>{props.title}</h1>
        <h2>{props.p}</h2>
    </div>

    </>
  )
}

export default Hero