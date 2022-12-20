import React from 'react'

const PrimaryButton = ({children}) => {
  return (
    <div><button class="bg-gradient-to-r from-sky-500 to-indigo-500 rounded p-4 text-white font-bold uppercase">{children}</button></div>
  )
}

export default PrimaryButton