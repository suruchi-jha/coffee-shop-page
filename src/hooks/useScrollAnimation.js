"use client"

import { useState, useEffect, useRef } from "react"

const useScrollAnimation = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false)
  const domRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // This will toggle visibility based on intersection
          setIsVisible(entry.isIntersecting)
        })
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "0px",
      },
    )

    const { current } = domRef
    if (current) {
      observer.observe(current)
    }

    return () => {
      if (current) {
        observer.unobserve(current)
      }
    }
  }, [options.threshold, options.rootMargin])

  return [domRef, isVisible]
}

export default useScrollAnimation

