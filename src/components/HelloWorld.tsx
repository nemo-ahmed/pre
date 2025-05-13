'use client'
import {animate} from 'animejs'
import React, {useEffect, useRef} from 'react'

function HelloWorld() {
  const containerRef = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    animate('span', {
      delay: (_, i) => i * 50, // Function based value
      ease: 'inOutCirc',
      loop: true,
      loopDelay: 1000,
      // Property keyframes
      y: [
        {duration: 600, ease: 'outExpo', to: '-2.75rem'},
        {delay: 100, duration: 800, ease: 'outBounce', to: 0},
      ],
      // Property specific parameters
      // ? This is necessary because the properties order is the animation order
      // eslint-disable-next-line perfectionist/sort-objects
      rotate: {
        delay: 0,
        from: '-1turn',
      },
    })
  }, [])

  return (
    <div className="relative flex h-32 w-full items-end justify-center">
      <h2
        className="absolute flex !h-fit items-center justify-center gap-0 text-xl"
        ref={containerRef}
      >
        <span>H</span>
        <span>E</span>
        <span>L</span>
        <span>L</span>
        <span>O</span>
        <span>&nbsp;</span>
        <span>W</span>
        <span>O</span>
        <span>R</span>
        <span>L</span>
        <span>D</span>
      </h2>
    </div>
  )
}

export default HelloWorld
