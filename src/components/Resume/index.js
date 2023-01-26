import React from 'react'; 

function Resume() {

return(
<section class="mb-5" id="resume">
    <h1 className="resume">resume: RahelHailu</h1>
        <hr></hr>
        <div class="row justify-content-center" id="resume">
            <div class="mt-5 pl-5 pr-5">
            I recently graduated from Penn LPS web development bootcamp. In the class, I was able to create various web
            applications. I also have a bachelor degree in Health administration and policy.
                
                
                <p class="mt-5">
                
            
                Download my full <a href=" https://github.com/ririhailu/my-react-portfolio/raw/master/src/assets/Resume-RahelHailu.pdf" class="link">resume</a>
                <br></br>  
                </p>
            </div>
        </div>

        <div class="justify-content-center mt-5">
            <div id="front-back">
                <h2>front end experience</h2>
                <p>HTML, CSS (Bootstrap, Bulma), JavaScript, jQuery, React.js, Angular.js</p>
            </div>
    
            <div id="front-back" class="mt-5">
                <h2>back end experience</h2>
                <p>
                Node.js, Express.js, SQL (mySQ), Sequelize, NoSQL (MongoDB, Mongoose), API's (third-party, RESTful, server-side), Templating (Handlebars)
                </p>
            </div>
        </div>
</section>
);
}

export default Resume;