import React from 'react';
import './projectCard.scss';
import { Col, Card, Button, Image } from 'react-bootstrap';
import { FaCode, FaArrowRight } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const ProjectCard = ({ project }) => {
    const { ref, inView } = useInView({
        threshold: 0.75,
        triggerOnce: true
    });
    return (
        <Col md={12} xl={6} ref={ref} className={`p-0 my-2 animated ${inView ? 'fade-up' : ''}`}>
            <Card className="project-card" bg="light">
                <Card.Header as="h4">{project.name}</Card.Header>
                <div className="card-content">
                    <p>{project.description}</p>
                    <div className="card-btns-container">
                        {project.github ? (
                            <Button
                                variant="light"
                                href={project.github}
                                rel="noopener noreferrer"
                                target="_blank"
                                className="card-btn"
                            >
                                <FaCode className="mr-1" />
                                Code
                            </Button>
                        ) : null}

                        {project.visit ? (
                            <Button
                                variant="light"
                                href={project.visit}
                                rel="noopener noreferrer"
                                target="_blank"
                                className="card-btn"
                            >
                                <FaArrowRight className="mr-1" />
                                Visit
                            </Button>
                        ) : null}
                    </div>
                </div>
                <Card.Footer>
                    <div className="flex-center-content flex-wrap">
                        {project.icons.map((icon, index) => {
                            return (
                                <Image
                                    src={icon}
                                    alt="icon"
                                    className="card-icon mr-3"
                                    // eslint-disable-next-line react/no-array-index-key
                                    key={index}
                                />
                            );
                        })}
                    </div>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default ProjectCard;
