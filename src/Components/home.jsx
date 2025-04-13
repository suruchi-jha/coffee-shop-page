import { Link } from "react-router-dom"
import AnimatedSection from "./AnimatedSection"

const Home = () => {
  // Category data with actual image paths
  const categories = [
    {
      id: 1,
      name: "Coffee & Beverages",
      image: "/assets/main-coffee.webp",
      description: "Explore our range of handcrafted coffees and refreshing beverages",
    },
    {
      id: 2,
      name: "Bakery",
      image: "/assets/placeholder-bakery.webp",
      description: "Freshly baked pastries, breads, and sweet treats",
    },
    {
      id: 3,
      name: "Specialty Items",
      image: "/assets/speciality-placeholder.webp",
      description: "Unique coffee creations and seasonal specialties",
    },
    {
      id: 4,
      name: "Vegan Options",
      image: "/assets/placeholder-vegan.jpg",
      description: "Plant-based treats and dairy-free alternatives",
    },
  ]

  // Today's specials with actual image paths
  const todaysSpecials = [
    {
      id: 1,
      name: "Caramel Macchiato",
      price: 5.95,
      image: "/assets/caramel-macchiato.webp",
      description: "Rich espresso with vanilla-flavored syrup, topped with caramel",
    },
    {
      id: 2,
      name: "Blueberry Muffin",
      price: 3.95,
      image: "/assets/blueberry-muffin.jpg",
      description: "Moist muffin packed with fresh blueberries",
    },
    {
      id: 3,
      name: "Mocha Frappuccino",
      price: 6.25,
      image: "/assets/mocha-frappuccino.jpg",
      description: "Blended coffee with rich chocolate and whipped cream",
    },
    {
      id: 4,
      name: "Avocado Toast",
      price: 7.95,
      image: "/assets/avocado-toast.jpg",
      description: "Sourdough toast topped with fresh avocado and seasonings",
    },
  ]

  // Fallback image function
  const getPlaceholderImage = (name) => {
    return `/placeholder.svg?height=250&width=400&text=${encodeURIComponent(name)}`
  }

  return (
    <>
      <div id="main-image" className="parallax">
        <h1 className="main-title">Roasted Rituals Cafe</h1>
        <h3 className="tag-line">Relax. Refresh. Rejuvinate.</h3>
      </div>
      <div id="home" className="container-lg top-container">
        <div className="row">
          <div className="col-lg-6">
            <AnimatedSection animation="fade-up">
              <p className="display-1 cursive-font">Welcome to</p>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay="delay-200">
              <p className="cite-font-big">ROASTED RITUALS </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay="delay-300">
              <p className="cite-font-mid">Bakery & CAFE</p>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay="delay-400">
              <p className="move-up">
                Immerse yourself in the rich aromas and cozy charm of Roasted Rituals Café, where every cup tells a
                story and every bite feels like home. Whether you're unwinding in our inviting café or exploring new
                flavors through our signature brews, each sip and taste is crafted to awaken your senses. Let Roasted
                Rituals elevate your coffee experience, one perfect roast at a time.
              </p>
            </AnimatedSection>
          </div>
          <AnimatedSection className="col-lg-6 align-center" animation="fade-left" delay="delay-300">
            <img src="./assets/image-asset.jpeg" alt="coffee-img" width="100%" />
          </AnimatedSection>
        </div>

        {/* Shop by Category Section */}
        <div className="row mt-5 pt-5">
          <div className="col-12 text-center">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title">Shop by Category</h2>
            </AnimatedSection>
          </div>

          {categories.map((category, index) => (
            <div className="col-md-3 col-sm-6" key={category.id}>
              <AnimatedSection animation="fade-up" delay={`delay-${(index + 1) * 100}`}>
                <Link
                  to={`/category/${category.name.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "-")}`}
                  className="text-decoration-none"
                >
                  <div className="category-card">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      onError={(e) => {
                        e.target.onerror = null
                        e.target.src = getPlaceholderImage(category.name)
                      }}
                    />
                    <div className="category-overlay">
                      <h3>{category.name}</h3>
                      <p className="mb-0">{category.description}</p>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            </div>
          ))}

          <div className="col-12 text-center">
            <AnimatedSection animation="fade-up">
              <Link to="/shop" className="view-all-link">
                View All Products
              </Link>
            </AnimatedSection>
          </div>
        </div>

        {/* Today's Specials Section */}
        <div className="row mt-5 pt-3">
          <div className="col-12 text-center">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title">Today's Specials</h2>
            </AnimatedSection>
          </div>

          {todaysSpecials.map((item, index) => (
            <div className="col-md-3 col-sm-6" key={item.id}>
              <AnimatedSection animation="fade-up" delay={`delay-${(index + 1) * 100}`}>
                <Link to="/shop" className="text-decoration-none">
                  <div className="category-card">
                    <div className="special-badge">Special</div>
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      onError={(e) => {
                        e.target.onerror = null
                        e.target.src = getPlaceholderImage(item.name)
                      }}
                    />
                    <div className="category-overlay">
                      <h3>{item.name}</h3>
                      <p>${item.price.toFixed(2)}</p>
                      <p className="mb-0">{item.description}</p>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
