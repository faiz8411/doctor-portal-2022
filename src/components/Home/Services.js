import React from 'react'
import SingleServices from './SingleServices'

const Services = () => {

    const services=[
        {_id:1,name:"Fluoride Treatment",description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",image:"https://i.ibb.co/52XwKf4/fluoride.png"},
        {_id:2,name:"Cavity Filling",description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",image:"https://i.ibb.co/ydW8qK4/cavity.png"},
        {_id:3,name:"Teeth Whitening",description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",image:"https://i.ibb.co/XkVMPn4/whitening.png"}
    ]
  return (
    <div className='my-28 text-center'>

        <h3 className='text-accent text-xl font-bold'>OUR SERVICES</h3>
        <h2 className='text-4xl font-bold'>Services We Provide</h2>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {
            services.map(service=><SingleServices key={service._id}
            
            service={service}
            >

            </SingleServices>)
        }
        </div>
    </div>
  )
}

export default Services