import logo from '@/images/Logo.png'

export function Logomark(props) {
  return (
      <image src={logo} />
    
  )
}

export function Logo(props) {
  return (
    <svg viewBox="0 0 106 40" aria-hidden="true" {...props}>
      <image src={logo} />
    </svg>
  )
}
