import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import { CartProvider } from "./context/CartContext"
import Header from "./Components/header"
import Home from "./Components/home"
import Menu from "./Components/menu"
import Order from "./Components/order"
import Contact from "./Components/contact"
import Login from "./Components/login"
import Signup from "./Components/signup"
import Footer from "./Components/footer"
import ShopPage from "./Components/ShopPage"
import "./styles.css"

const MainContent = () => (
  <>
    <Home />
    <Menu />
    <Order />
    <Contact />
  </>
)

const App = () => {
  return (
    <AuthProvider>
    <CartProvider>
    <Router>
      <div className="App">
        <Header />
        <main>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </CartProvider>
    </AuthProvider>
  )
}

export default App

