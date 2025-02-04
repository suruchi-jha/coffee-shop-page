import React from "react"

const Home= () => {
  return (
    <>
      <div className="parallax"></div>
      <div id="home" className="container-lg top-container">
        <div className="row">
          <div className="col-lg-6">
            <p className="display-1 cursive-font">Welcome to</p>
            <p className="cite-font-big">ROASTED RITUALS </p>
            <p className="cite-font-mid">Bakery & CAFE</p>
            <p className="move-up">
            Immerse yourself in the rich aromas and cozy charm of Roasted Rituals Café, 
            where every cup tells a story and every bite feels like home. Whether 
            you're unwinding in our inviting café or exploring new flavors through 
            our signature brews, each sip and taste is crafted to awaken your senses. 
            Let Roasted Rituals elevate your coffee experience, one perfect roast at a time.
            </p>
          </div>
          <div className="col-lg-6 align-center">
            <img src="./assets/image-asset.jpeg" alt="coffee-img" width="100%" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

