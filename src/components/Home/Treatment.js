import React from 'react'
import treatment from "../../images/images/treatment.png"

const Treatment = () => {
  return (
    <div class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row">
    <img src={treatment} class="max-w-md rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Exceptional Dental <br /> Care, on Your Terms</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded uppercase p-3 font-bold">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Treatment