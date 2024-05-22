import React from "react";

const Education = () => {
  return (
    <section className="education">
      <h2 className="education-title">EDUCATION</h2>
      <a
        href="https://www.lighthouselabs.ca/en/web-development"
        target="_blank"
      >
        <div className="entity">
          <div className="details">
            <p>2024 - 2024</p>
            <p>Diploma - Web Development</p>
            <p>Lighthouse Labs</p>
          </div>
          <div className="description">
            Lighthouse Labs' Web Development Bootcamp was my first formal
            introduction to the world of programming. Over 12 weeks I was able
            to establishe a strong foundation in a variety of languages,
            frameworks and libraries such as Javascript, Node, Ruby on Rails,
            React, jQuery, HTML, CSS/SCSS, Express, and PostgreSQL among others.
          </div>
        </div>
      </a>
      <a
        href="https://www.edwards.usask.ca/programs/undergrad/"
        target="_blank"
      >
        <div className="entity">
          <div className="details">
            <p>2017 - 2021</p>
            <p>Bachelor of Commerce - Finance</p>
            <p>U of S - Edwards School of Business</p>
          </div>
          <div className="description">
            During my time at the University of Saskatchewan I was introduced to
            the world of business, and I took a special interest in the world of
            finance. While I studied all areas including HR, Accounting,
            Operations, Marketing, and Supply Chain management, I majored in
            Corporate Fianance with a large focus on stock valuation and
            analytics. I have used the skills learnt while attaining this degree
            regularly in my professional life.
          </div>
        </div>
      </a>
    </section>
  );
};

export default Education;
