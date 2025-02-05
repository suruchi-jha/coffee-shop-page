import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import Header from "./Components/header"
import Home from "./Components/home"
import Menu from "./Components/menu"
import Order from "./Components/order"
import Contact from "./Components/contact"
import Login from "./Components/login"
import Signup from "./Components/signup"
import Footer from "./Components/footer"
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
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </AuthProvider>
  )
}

export default App

