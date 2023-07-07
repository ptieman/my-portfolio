import React from "react";

import GrowSmart from './growsmart1.jpg';
import Ghibli from './ghibli.png';
import Dropdown from './dropdown.png';
import Navigation from './navigation.png';
import Nav from './navbar/navbar';


export default function Projects() {

  const personalProjectsData = [
    {
      id: 1,
      title: 'GrowSmart',
      description: 'A full-stack garden planning web application that helps users manage their gardens with ease. Users can plan crop rotations, and track plant growth and harvest times. The app is built using Django, PostgreSQL, React, CSS, and Bootstrap. ',
      imageUrl: GrowSmart,
      githubUrl: 'https://github.com/ptieman/garden-app-fe'
    },
    {
      id: 2,
      title: 'Ghibli Eats',
      description: 'A Studio Ghibli themed restaurant website built using SCSS and HTML. Features a responsive design, and a user-friendly interface, with a menu, about section, and navigation. Ghibli Eats is a fictional restaurant, and this project is for educational purposes only. Logo and images are from Studio Ghibli. (Kiki is not a real employee.)',
      imageUrl: Ghibli,
      githubUrl: 'https://github.com/ptieman/ghibli-eats'
    },
  ]
  
  const professionalProjectsData = [
    {
      id: 1,
      description: 'A dropdown component that displays the links to Top Image/Video Searches pages for countries that speak the same primary language as the user. Built using React, SCSS, and Ruby on Rails. ',
      imageUrl: Dropdown,
      webUrl: 'https://www.istockphoto.com/most-popular-searches/united-states/images',
    },
    {
      id: 2,
      description: 'Implemented curated content in the top navigation for relevant events and holidays resulting in a 34% year-over-year growth in Google organic clicks and 33% year-over-year growth in impressions. ',
      imageUrl: Navigation,
      webUrl: 'https://www.istockphoto.com/stock-videos/july-4th'
    },
  ]

  return (

    
    <section>
      <Nav />
        <h3 >Professional Contributions</h3>
        {professionalProjectsData.map((project) => (
      <div key={project.id} >
        <div className="image-container">
        {/* <h3 className={styles.title}>{project.title}</h3> */}
        <img src={project.imageUrl} alt={project.description}/>
        </div>
        <p>{project.description}</p>
        <div className="project-button-container">
      <a href={project.webUrl}>
      <button >View on iStock</button>
    </a>
    </div>
      </div> 
    ))}
    <div >
      <h3 className="font-bold text-3xl font-serif">Personal Projects</h3>
      {personalProjectsData.map((project) => (
      <div key={project.id}>
        <div>
        <h3 className="font-bold text-3xl font-serif">{project.title}</h3>
        <img src={project.imageUrl} alt={project.title} />
        </div>
        <p>{project.description}</p>
        <div>
      <a href={project.githubUrl}>
      <button  >View on Github</button>
    </a>
    </div>
      </div> 
    ))}
    </div>
    </section>
  );
}
