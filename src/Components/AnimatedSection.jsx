import useScrollAnimation from "../hooks/useScrollAnimation"

const AnimatedSection = ({
  children,
  className = "",
  animation = "fade-up",
  delay = "",
  threshold = 0.1,
  once = true,
}) => {
  const [ref, isVisible] = useScrollAnimation({ threshold, once })

  return (
    <div ref={ref} className={`${animation} ${delay} ${isVisible ? "fade-in" : ""} ${className}`}>
      {children}
    </div>
  )
}

export default AnimatedSection
