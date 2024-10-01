import Link from 'next/link'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import React, { useEffect, useState } from 'react';
import OsWebAndriodIosButton from './common/Buttons/OsWebAndriodIosButton'
import PopOverOsWebAndriodIosButton from './common/Buttons/PopOver/PopOverOsWebAndriodIosButton'
import PopOverJoinTheBetaListModal from './common/Modals/PopOverJoinTheBetaListModal'

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


function DownloadButton(props) {
  if (props.userOS != 'https://compass.kinglawnc.com' && props.popover == 'True') {
    return (
      <div>
        <Button href={props.userOS}>
          The App
        </Button>
      </div>
    )
  }
  else if (props.userOS == 'https://compass.kinglawnc.com' && props.popover == 'True') {
    return (
      <div>
      <Button href={props.userOS} variant="outline">
        The App
      </Button>
      </div>
      );
  }
  return (
    <div>
    <Button href={props.userOS} variant="outline" className="hidden lg:block">
      Create Account
    </Button>
    </div>
    );
}

export function Header() {
  const [userOS, setUserOS] = useState('');
  const [OS, setOS] = useState('');
  // INSERT FILES WITHIN THE PUBLIC
  // AFTER CHANGING THE LINKS IN THE BELOW FUNCTION YOU'LL NEED TO CHANGE
  // TWO LINKS WITHIN THE RETURN STATEMENT
  useEffect(() => {
    const platform = window.navigator.userAgent.toLowerCase();
    //WHEN YOUR READY CHANGE 
    if (platform.includes('android')) {
      setUserOS('https://compass.kinglawnc.com'); // CHANGE HERE FOR ANDROID
      setOS('android')
    } else {
      setUserOS('https://compass.kinglawnc.com'); // CHANGE HERE FOR OTHER
      setOS('other')
    }
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false)
  }
  const btnOnClickOpenPopopJoinBetaModal = () => {
    setIsOpen(true)
  }


  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between" style={{ height: '70px' }}>
          <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Home">
              <Logo className="h-6 w-auto" />
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
                          // style={{ pointerEvents: "none" }}
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
                          className="max-w-[200px] absolute top-10 right-0 z-0 origin-top rounded-b-2xl rounded-t-2xl bg-gray-50 px-6 pb-6 pt-6 shadow-2xl shadow-gray-900/20"
                          
                        >
                          <div className="space-y-4 max-w-2xl">
                            <MobileNavLink href="https://kinglawnc.com/Compass">
                              DIY Apps
                            </MobileNavLink>
                            <MobileNavLink href="https://kinglawnc.com#about">
                              About Us
                            </MobileNavLink>
                            <MobileNavLink href="https://kinglawnc.com#reviews">
                              Reviews
                            </MobileNavLink>
                            <MobileNavLink href="https://kinglawnc.com#pricing">
                              Pricing
                            </MobileNavLink>
                          </div>
                    
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            {/* TWO BUTTONS HERE */}
            {/* <DownloadButton userOS={userOS} OS={OS}></DownloadButton> */}
      <OsWebAndriodIosButton 
                webBtnClassess={"justify-center rounded-lg  px-3 h-[2.34rem] text-sm  outline-2 outline-offset-2 transition-colors    font-medium px-4 rounded"}
                // webBtnClassess={"justify-center rounded-lg  px-3 h-9 text-sm  outline-2 outline-offset-2 transition-colors    font-medium px-4 rounded"}
                // webBtnClassess={"h-[2.32rem]"}
                
              />
          </div>
        </Container>
      </nav>
      <PopOverJoinTheBetaListModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </header>
  )
}
