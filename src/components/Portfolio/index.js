import React from "react";
import ProjectCards from "../../components/Project";
//import portfolio from '../../components/Portfolio'
//import 'bootstrap/dist/css/bootstrap.min.css';
import MealGenerator from "../../assets/images/mealgenerator.png";
import NoteTaker from "../../assets/images/notetaker.png";
import PasswordGenerator from "../../assets/images/passwordgenerator.png";
import PasswordTracker from "../../assets/images/passwordTracker.png";
//import TeamProfileGenerator from "../../assets/images/teamprofilegenerator.png";
import WeatherDashboard from "../../assets/images/weatherdashboard.png";
import DareDevilDeals from "../../assets/images/DareDevilDeals.jpg"
function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

function Portfolio() {
  const projects = [
    {
      id: 1,
      image: MealGenerator,
      name: "Meal Generator",
      github: "https://github.com/ririhailu/meal-planner",
      deploy: "https://ririhailu.github.io/meal-planner/",
    },
    {
      id: 2,
      image: NoteTaker,
      name: "Note Taker",
      github: "https://github.com/ririhailu/Easy-Note-Taker",
      deploy: "https://dashboard.heroku.com/apps/rahel-12345",
    },
    {
      id: 3,
      image: PasswordGenerator,
      name: "Password Generator",
      github: "https://github.com/ririhailu/create-password-generator",
      deploy: "https://ririhailu.github.io/create-password-generator/",
    },
    {
      id: 4,
      image: PasswordTracker,
      name: "Password Tracker",
      github: "https://github.com/ririhailu/password-tracker",
      deploy: "https://blooming-lowlands-22066.herokuapp.com",
    },
    {
      id: 5,
      image: DareDevilDeals,
      name: "Dare Devil Deals",
      github: "https://github.com/ririhailu/dare-devil-deal",
      deploy: "https://still-anchorage-78075.herokuapp.com/",
    },
    {
      id: 6,
      image: WeatherDashboard,
      name: "Weather Dashboard",
      github: "https://github.com/ririhailu/check-your-weather-forecast",
      deploy: "https://ririhailu.github.io/check-your-weather-forecast/",
    },
    
  ];
  return (
    <section id="portfolio">
      <div className="project">
        <h1 className="title">development portfolio: RahelHailu</h1>
        <hr></hr>
      </div>

      <Wrapper id="card-data">
        {projects.map((project) => (
          <ProjectCards
            key={project.id}
            image={project.image}
            name={project.name}
            github={project.github}
            deploy={project.deploy}
            topics={project.topics}
          />
        ))}
      </Wrapper>
    </section>
  );
}

export default Portfolio;
