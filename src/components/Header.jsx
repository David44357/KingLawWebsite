import Link from 'next/link'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import React, { useEffect, useState } from 'react';

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink({ children, ...props }) {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    >
      {children}
    </Popover.Button>
  )
}

export function Header() {
  const [userOS, setUserOS] = useState('');
  // INSERT FILES WITHIN THE PUBLIC/FILES DIRECTORY
  // AFTER CHANGING THE LINKS IN THE BELOW FUNCTION YOU'LL NEED TO CHANGE
  // TWO LINKS WITHIN THE RETURN STATEMENT
  useEffect(() => {
    const platform = window.navigator.userAgent.toLowerCase();
    //WHEN YOUR READY CHANGE 
    if (platform.includes('win')) {
      setUserOS('Windows'); //CHANGE HERE FOR WINDOWS
    } else if (platform.includes('mac')) {
      setUserOS('macOS'); // CHANGE HERE FOR MAC
    } else if (platform.includes('linux')) {
      setUserOS('Linux'); // CHANGE HERE FOR LINUX
    } else if (platform.includes('android')) {
      setUserOS('Android'); // CHANGE HERE FOR ANDROID
    } else if (platform.includes('iphone') || platform.includes('ipad') || platform.includes('ipod')) {
      setUserOS('iOS'); // CHANGE HERE FOR IOS
    } else {
      setUserOS('Other'); // CHANGE HERE FOR OTHER
    }
  }, []);

  
  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-3">
          <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            <MobileNavLink href="https://www.kinglawnc.com/prometheus">DIY Apps</MobileNavLink>
                            <MobileNavLink href="https://www.kinglawnc.com/#reviews">Reviews </MobileNavLink>
                            <MobileNavLink href="https://www.kinglawnc.com/#pricing">Pricing</MobileNavLink>
                            <MobileNavLink href="https://www.kinglawnc.com/#about"></MobileNavLink> About Us</MobileNavLink>
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            <Link href="https://www.apps.kinglawnc.com">
                            <Button variant="outline" style={{ maxWidth: '200px' }}>
                              Log in
                            </Button></Link>
                            <Button href="/comingsoon" style={{ maxWidth: '200px' }}>Download the app</Button>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            <Link href="https://www.apps.kinglawnc.com">
            <Button variant="outline" style={{ maxWidth: '200px' }} className="hidden lg:block">
              Log in
            </Button></Link>
            <Button href="comingsoon" className="hidden lg:block">
              Download
            </Button>
          </div>
        </Container>
      </nav>
    </header>
  )
}
