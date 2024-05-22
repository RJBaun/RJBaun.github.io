import React from "react";

import Divi from "./Divi";
import Jungle from "./Jungle";
import Photolabs from "./Photolabs";
import KnowledgeNest from "./KnowledgeNest";
import Tweeter from "./Tweeter";

import "../styles/Projects.scss";

const Projects = () => {
  return (
    <section>
      <a id="portfolio">
        <h2>MY PORTFOLIO</h2>
      </a>
      <p>
        Below you can find a selection of my previous projects. Click on an
        image to learn more and launch the Github repo.
      </p>
      <div className="row">
        <div className="card">
          <h3>DIVI</h3>
          <a href="https://github.com/RJBaun/Divi" target="_blank">
            <Divi></Divi>
          </a>
        </div>
        <div className="card">
          <h3>Jungle</h3>
          <a href="https://github.com/RJBaun/jungle" target="_blank">
            <Jungle></Jungle>
          </a>
        </div>
        <div className="card">
          <h3>Photolabs</h3>
          <a href="https://github.com/RJBaun/photolabs" target="_blank">
            <Photolabs></Photolabs>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="card">
          <h3>Knowledge Nest</h3>
          <a href="https://github.com/RJBaun/knowledge-nest" target="_blank">
            <KnowledgeNest></KnowledgeNest>
          </a>
        </div>
        <div className="card">
          <h3>Tweeter</h3>
          <a href="https://github.com/RJBaun/tweeter" target="_blank">
            <Tweeter></Tweeter>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
