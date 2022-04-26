import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>shoya suzuki</h1>
        <Typed
          className="typed-text"
          strings={[
            "Project Manager",
            "Event Planner",
            "Junior Engineer",
            "Lacrosse Coach",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">contact me</a>
      </div>
    </div>
  );
};

export default Header;
