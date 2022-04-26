import React from "react";


const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>3-33-7 Tamagawa Setagaya Tokyo city Japan</p>
            </div>
            <div className="d-flex">
              <p>Tell: (+81)90-1266-9004</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Home</a>
                <br/>
                <a className="footer-nav">About me</a>
                <br/>

                <a className="footer-nav">Experiences</a>
                <br/>

                <a className="footer-nav">Contact me</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
