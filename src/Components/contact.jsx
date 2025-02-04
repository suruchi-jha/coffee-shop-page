import React from "react"
import { useState } from "react"

const Contact= () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the message to your backend
    console.log("Message submitted:", { name, email, subject, content })
  }

  return (
    <div className="container-lg bottom-container" id="contact">
      <div className="row">
        <div className="col col-lg-6 col-md-12 col-12 px-5">
          <h2>GET IN TOUCH</h2>
          <br />
          <p>Thank you for visiting our little coffee shop! Please let us know how we can serve you better!</p>
          <br />
          <p>
            <i className="fa-solid fa-location-dot"></i>
            <a
              style={{ textDecoration: "none", color: "#A64B2A" }}
              href="https://www.google.com/maps/place/Starbucks/@28.5283383,77.2192946,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce18b1d0aa65b:0x5979a8534ee317c9!8m2!3d28.5283383!4d77.2192946!16s%2Fg%2F1hm3hdhvz?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              No G42, 45 & 46, Select Citywalk Mall, Saket District Centre, District Centre, Sector 6, Pushp Vihar, New
              Delhi, Delhi 110017
            </a>
          </p>
          <p>
            <i className="fa-solid fa-phone"></i>
            <a style={{ textDecoration: "none", color: "#A64B2A" }} href="tel: +91 99999 99999">
              +91 99999 99999
            </a>
          </p>
        </div>
        <div className="col col-lg-6 col-md-12 col-12 px-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your name
              </label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="content" className="form-label">
                Content
              </label>
              <textarea
                className="form-control"
                id="content"
                rows={7}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

