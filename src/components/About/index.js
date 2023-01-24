import React from 'react';

function About() {
  return (
    <section className="title">
      <h1 class="name">about: rahelHailu</h1>
      <hr></hr>

      <div className="row justify-content-center">
        <div className="col-10" id="about-section">
          <img class="mb-5" src="https://github.com/ririhailu/my-react-portfolio/raw/master/src/assetscopy/images/rahel-hailu.jpg" alt="Rahel Hailu" />
          <p>

            I recently graduated from Penn LPS web development boot camp. In the class, I was able to create various web
            applications. Some fundamentals utilized in the course are Javascript, HTML, NodeJS, Mern stack, MongoDB
            and React. I have a bachelor degree in Health administration and policy. I'm currently working as a
            optometric technician.
          </p>

          <p>
            View full <a href="#/resume" class="link">resume</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;
