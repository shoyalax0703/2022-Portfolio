import React from "react";
import Me from "../me.jpg";

const AboutMe = () => {
  return (
    <div id="aboutMe" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
<div className="photo-wrap mb-5">

          <img className="profile-img" src={Me} alt="Me..." />
</div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-header">
            about me
          </h1>
          <p>
          Hello! I am Shoya who has a strong passion for talent development and tech. In addition to facilitation and project management, he can use his communication and multi-tasking skills cultivated by various experiences. In a diverse and fast-paced environment, I am capable to execute projects while enjoying open communication. Those performances will be demonstrated in remote and office environments
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
