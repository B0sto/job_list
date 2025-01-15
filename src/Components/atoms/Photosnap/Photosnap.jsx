import React from 'react'
import Image from 'next/image'

const Photosnap = ({src, altText }) => {
  return (
    <div>
        <Image src={src} alt={altText} width={88} height={88} />
    </div>
  )
}

export default Photosnap