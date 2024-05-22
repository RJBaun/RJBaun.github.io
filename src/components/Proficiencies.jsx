import React from "react";

import "../styles/Proficiencies.scss";

const Proficiencies = () => {
  return (
    <section>
      <a id="proficiencies">
        <h2>Proficiencies</h2>
      </a>
      <div className="icons">
        <div className="row">
          <i className="fa-brands fa-node"></i>
          <i className="fa-brands fa-node-js"></i>
          <i className="fa-brands fa-react"></i>
          <i className="fa-brands fa-css3"></i>
          <i className="fa-brands fa-sass"></i>
          <i className="fa-brands fa-html5"></i>
        </div>
        <div className="row">
          <i className="fa-solid fa-database"></i>
          <i className="fa-brands fa-square-github"></i>
          <i className="fa-brands fa-wix"></i>
          <i className="fa-brands fa-python"></i>
          <i className="fa-brands fa-npm"></i>
          <i className="fa-brands fa-bootstrap"></i>
        </div>
      </div>
      <p className="prof-blurb">
        As mentioned above I am relatively new to the tech space, however I have
        been learning at an incredible speed. I am confident in my abilities
        with a number of languages, frameworks, and libraries.
      </p>
      <p className="prof-list">
        Languages: &nbsp; JavaScript, Ruby on Rails, HTML5, CSS3
      </p>
      <p className="prof-list">
        Frameworks: &nbsp; NodeJS, ReactJS, Ajax, EJS, jQuery, Bootstrap,
        Material UI, SASS
      </p>
      <p className="prof-list">Testing: &nbsp; Cyperss, Jest, Mocha & Chai</p>
      <p className="prof-list">
        Systems and Databases: &nbsp; PostgreSQL, Git (Github)
      </p>
      <p className="prof-list">
        Extras: &nbsp; MS Office365, Teams, Excel, Google Suite, SIGxp
      </p>
    </section>
  );
};

export default Proficiencies;
