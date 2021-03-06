import React from 'react';
import { CardDeck } from 'react-bootstrap';
import './projects.scss';
import ProjectCard from '../../components/projectCard/projectCard';
// icons
import webIcons from '../../assets/img/skills/html-css-js.svg';
import reactIcon from '../../assets/img/skills/react.svg';
import nodejsIcon from '../../assets/img/skills/nodejs.svg';
import express from '../../assets/img/skills/express.svg';
import mongodbIcon from '../../assets/img/skills/mongodb.svg';
import herokuIcon from '../../assets/img/skills/heroku.svg';
import unityIcon from '../../assets/img/skills/unity.svg';
import csharpIcon from '../../assets/img/skills/c-sharp.svg';
import socketIoIcon from '../../assets/img/skills/socket-io.svg';
import netlifyIcon from '../../assets/img/skills/netlify.svg';

const Projects = [
    {
        name: 'MyMovieList',
        description:
            'MyMovieList is a simple database web app where users can search for movies and review and rate movies, and admins can add, update, or delete movies.',
        github: 'https://www.github.com/ikevinws/MyMovieList',
        visit: 'https://mymovielist-kevin.herokuapp.com/',
        icons: [reactIcon, nodejsIcon, express, mongodbIcon, herokuIcon, webIcons]
    },
    {
        name: 'TypeWars',
        description:
            'Typewars is an online competitive typing game where players can race against each other in real-time.',
        github: 'https://github.com/ikevinws/TypeWars',
        visit: 'https://typewars-kevin.herokuapp.com/',
        icons: [reactIcon, nodejsIcon, express, mongodbIcon, socketIoIcon, herokuIcon, webIcons]
    },
    {
        name: 'Tower of Hanoi',
        description:
            'A full-stack (MERN) web app for the Tower of Hanoi game where players can create accounts, which will allow scores to be posted onto a leaderboard. The game was built in Unity3D and exported as a WebGL.',
        github: 'https://www.github.com/ikevinws/TowerOfHanoi_WebApp',
        visit: 'https://tower-of-hanoi-kevin.herokuapp.com',
        icons: [
            unityIcon,
            csharpIcon,
            reactIcon,
            nodejsIcon,
            express,
            mongodbIcon,
            herokuIcon,
            webIcons
        ]
    },
    {
        name: 'Portfolio',
        description: 'A portfolio web app built with React.',
        github: 'https://github.com/ikevinws/Portfolio',
        visit: 'https://ikevin.netlify.app',
        icons: [reactIcon, netlifyIcon, webIcons]
    }
];
const ProjectsComponent = () => {
    return (
        <section id="projects" className="project section-padding">
            <h1>Projects</h1>
            <CardDeck>
                {Projects.map((project, index) => {
                    // eslint-disable-next-line react/no-array-index-key
                    return <ProjectCard project={project} key={index} />;
                })}
            </CardDeck>
        </section>
    );
};

export default ProjectsComponent;
