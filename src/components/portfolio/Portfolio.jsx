import React from 'react';
import IMG1 from '../../assets/Project1.jpg';
import IMG2 from '../../assets/Project3.jpg';
import IMG3 from '../../assets/Project6.jpg';
import IMG4 from '../../assets/Project2.jpg';
import IMG5 from '../../assets/Project5.jpg';
import IMG6 from '../../assets/Project4.jpg';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Tic-Tac-Toe Game',
      img: IMG1,
      description:
        'A "Tic Tac Toe" game that people can play and enjoy with each other',
      technologies: 'Html | CSS | Javascript',
      link: 'https://tic-tac-toe-game-byrasif.netlify.app/',
      github: 'https://github.com/Rasif-Taghizada/Tic-Tac-Toe-Game',
    },
    {
      id: 2,
      title: 'Messaging App',
      img: IMG4,
      description:
        'A messaging app where you can easily chat with your friends',
      technologies: 'React | Redux',
      link: 'https://react-chat-app-byrasif.netlify.app/',
      github: 'https://github.com/Rasif-Taghizada/React-ChatApp',
    },
    {
      id: 3,
      title: 'To-Do-App',
      img: IMG2,
      description: 'User friendly app to plan your day and manage tasks',
      technologies: 'React | Redux',
      link: 'https://react-todoapp-byrasif.netlify.app/',
      github: 'https://github.com/Rasif-Taghizada/React-Todo-App',
    },
    {
      id: 4,
      title: 'Rock-Paper-Scissors Game',
      img: IMG3,
      description:
        'With this game you can race and have fun with the bot in one place',
      technologies: 'Html | CSS | JavaScript',
      link: 'https://rock-paper-scissors-vanillajs-byrasif.netlify.app/',
      github: 'https://github.com/Rasif-Taghizada/Rock-Paper-Scissors',
    },
    {
      id: 5,
      title: 'Speed Typing Test Game',
      img: IMG5,
      description:
        'With the fast typing game, you can test and improve your typing speed on the keyboard',
      technologies: 'Html | CSS | JavaScript',
      link: 'https://speed-typing-test-game.netlify.app/',
      github: 'https://github.com/Rasif-Taghizada/Speed-Typing-Test-Game',
    },
    {
      id: 6,
      title: 'Fs Poster Website',
      img: IMG6,
      description:
        'Real-world group project which is still in progress and will provide educational platform for future young developers',
      technologies: 'Html | Scss | Javascript',
      link: 'https://fs-poster-project.netlify.app/',
      github: 'https://github.com/Rasif-Taghizada/Fs-Poster-Project',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
