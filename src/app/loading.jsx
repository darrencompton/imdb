import Image from 'next/image'
import React from 'react'

export default function loading() {
  return (
    <div className=''>
      <Image src="spinner.svg" alt="loading ..."  width="100" height="100" />
    </div>
  )
}
