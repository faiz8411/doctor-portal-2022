import React from 'react'
import clock from "../../images/icons/clock.svg"
import marker from "../../images/icons/marker.svg"
import phone from "../../images/icons/phone.svg"
import InfoCard from './InfoCard'



const Info = () => {
  
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
   <InfoCard bgTitle="Opening Hours" bgColor="bg-cyan-500 hover:bg-cyan-600" img={clock}/>
   <InfoCard bgTitle="Visit our location" bgColor="bg-slate-600 hover:bg-cyan-600" img={marker}/>
   <InfoCard bgTitle="Contact us now" bgColor="bg-cyan-500 hover:bg-cyan-600" img={phone}/>
   
   </div>
  )
}

export default Info
