import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'

import { Container } from '@/components/Container'

const reviews = [
  {
    title: 'Thumbtack',
    body: 'David always responses quick and will explain anything I asked.',
    author: 'Michael',
    rating: 5,
  },
  {
    title: 'Thumbtack',
    body: 'He has shown empathy and concerns about my situation and has been willing to help in all the necessary steps.',
    author: 'Andy',
    rating: 5,
  },
  {
    title: 'Thumbtack.',
    body: 'Was extremely professional and handled a particularly stressful legal situation with ease. He made the divorce process easy for me and the value was unmatched for the area. He responded quickly to any question I had and kept me in the loop for the entire process. I strongly recommend Davids services and I will not hesitate to use him again if I have any other legal matters.',
    author: 'William',
    rating: 5,
  },
  {
    title: 'Thumbtack',
    body: 'Mr. King handled my divorce - he responded to every question, was efficient and professional. I would certainly recommend him to others.',
    author: 'Debbie',
    rating: 5,
  },
  {
    title: 'Thumbtack',
    body: 'Very pleasant experience. He handled everything in a quick professional manner. I will definitely hire him again.',
    author: 'Tracey',
    rating: 5,
  },
  {
    title: 'Thumbtack',
    body: 'David made it a breeze. He was quick to explain the whole process with me in detail before I even purchased his services. He always answered my emails promptly and took the time to answer every little question me and my fiance had regarding our prenup. I highly recommend utilizing Davids Prenup Package, or any of his services. Thanks again David!',
    author: 'Izabella',
    rating: 5,
  },
  {
    title: 'Thumbtack',
    body: 'David King has been amazing! Extremely responsive during all times of the day and night. Very knowledgeable and is looking out for your best interest. I couldnt have asked for anyone better.',
    author: 'Alex',
    rating: 5,
  },
  {
    title: 'Thumbtack',
    body: 'Very good experience.',
    author: 'Carolyn',
    rating: 5,
  },
  {
    title: 'Yelp',
    body: 'David was thoughtful and thorough. Great consultation and a plan to help me. Definitely went the extra mile!',
    author: 'Mike',
    rating: 5,
  },
  {
    title: 'Thumbtack',
    body: 'Very good experience.',
    author: 'Carolyn',
    rating: 5,
  },
  {
    title: 'Google',
    body: 'All I can say is a better law group.',
    author: 'Gary',
    rating: 4,
  },


  
]

function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-cyan-500' : 'fill-gray-300'
          )}
        />
      ))}
    </div>
  )
}

function Review({ title, body, author, rating, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg font-semibold leading-6">
          {title}
        </p>
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({
  className,
  reviews,
  reviewClassName = () => {},
  msPerPixel = 0,
}) {
  let columnRef = useRef()
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current.offsetHeight)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration }}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef()
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  columns = [columns[0], columns[1], splitArray(columns[2], 2)]

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...columns[0], ...columns[2].flat(), ...columns[1]]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= columns[0].length + columns[2][0].length &&
                  'md:hidden',
                reviewIndex >= columns[0].length && 'lg:hidden'
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...columns[1], ...columns[2][1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= columns[1].length && 'lg:hidden'
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={columns[2].flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pb-16 pt-20 sm:pb-24 sm:pt-32"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        >
          The reviews are in
        </h2>
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
          
        </p>

        <table class="w-full"><tr>
          <td class="text-center w-1/3">Thumbtack 4.9/5 stars</td>
          <td class="text-center w-1/3">Google 4.5/5 stars</td>
          <td class="text-center w-1/3">Yelp 5/5 stars</td></tr></table>

        <ReviewGrid />
      </Container>
    </section>
  )
}
