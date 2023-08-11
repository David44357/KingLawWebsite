import React from 'react'
import BannerImg from '@/images/Hero-1.jpg'

const HeroBanner = ({ title }) => {
  return (
    <div
      className="bg-gray-800 bg-cover bg-no-repeat px-5 py-14"
      style={{
        backgroundImage: `linear-gradient(rgb(0 0 0 / 54%), rgb(0 0 0 / 60%)),url(${BannerImg.src})`,
      }}
    >
      <h1 className="text-center text-4xl font-light uppercase text-white">
        {title}
      </h1>
    </div>
  )
}

export default HeroBanner
