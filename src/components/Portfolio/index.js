import React from 'react';
import ProjectCards from '../../components/Project'
import portfolio from '../../components/Portfolio'
//import 'bootstrap/dist/css/bootstrap.min.css';

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

function Portfolio() {

    return (
        <section id="portfolio">
            <div className="project">
                <h1 className="title">development portfolio: RahelHailu</h1>
                <hr></hr>
            </div>

            <Wrapper id="card-data">
                {portfolio.map((project) => (
                    <ProjectCards key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} topics={project.topics} />
                ))}
            </Wrapper>
        </section>

    );
}

export default Portfolio;