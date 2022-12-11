import React from 'react'
import appointmentBack from "../../images/bg.png"
import hero from "../../images/chair.png"
const Banner = () => {
    const appointmentBanner = {
        background: `url(${appointmentBack})`,
        // ,
        backgroundBlendMode: 'darken, luminosity',
       
    }
  return (
    <div style={appointmentBanner} class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={hero} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Your New Smile Starts <br/><span style={{color:"red"}}>Here!</span></h1>
      <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
      <button class="bg-gradient-to-r from-sky-500 to-indigo-500 rounded p-4 text-white font-bold uppercase">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Banner
