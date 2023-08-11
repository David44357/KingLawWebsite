import React from 'react'
import logo from '../images/logo.png'
import Image from 'next/image'
export function Logomark(props) {
  return (
    // <svg viewBox="0 0 106 40" aria-hidden="true" {...props}>
      <Image src={logo}  alt="logo" />
    // </svg >
  )
}

export function Logo(props) {
  return (
    // <svg viewBox="0 0 106 40" aria-hidden="true" {...props}>
      <Image src={logo} alt="logo" />
    // </svg>
  )
}
