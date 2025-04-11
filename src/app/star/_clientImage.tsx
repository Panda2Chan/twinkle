// app/star/_client-image.tsx
'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function ClientImage({
  src,
  alt,
}: {
  src: string
  alt: string
}) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative w-full">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse rounded-lg bg-gray-800" />
      )}
      <Image
        src={src}
        alt={alt}
        width={1000}
        height={500}
        className={`w-full transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}
