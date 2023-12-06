import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import calculator from './calculator.png'
import drummachine from './drummachine.png'
import pomofocus from './pomofocus.png'
import markdownpreviewer from './markdownpreviewer.png'
import quotegenerator from './quotegenerator.png'
import rubyquiz from './rubyquiz.png'
import rubytodo from './rubytodo.png'

function Projects() {
    const projects = [
        {
            key: 1,
            title: 'Pomodoro Timer',
            text: 'Splits work into short, focused intervals (usually 25 minutes) followed by brief breaks.',
            img: pomofocus,
            src: 'https://github.com/mcrayman/25-5-Clock'
        },
        {
            key: 2,
            title: 'Calculator',
            text: 'Performs basic arithmetic functions. It allows users to quickly crunch numbers',
            img: calculator,
            src: 'https://github.com/mcrayman/Calculator'
        },
        {
            key: 3,
            title: 'Drum Machine',
            text: 'Lets users create rhythms and beats by programming or playing various drum sounds and percussion samples.',
            img: drummachine,
            src: 'https://github.com/mcrayman/Drum-Machine'
        },
        {
            key: 4,
            title: 'Random Quote Machine',
            text: 'Uses an api to randomly return quotes. users have the ability to directly tweet the quote. ',
            img: quotegenerator,
            src: 'https://github.com/mcrayman/Random-Quote-Machine'
        },
        {
            key: 5,
            title: 'Markdown Previewer',
            text: 'Displays how text written in markdown language will appear once it\'s rendered or converted into formatted text.',
            img: markdownpreviewer,
            src: 'https://github.com/mcrayman/Markdown-Previewer'
        },
        {
            key: 6,
            title: 'Quiz',
            text: 'Users can create and add quizzes to a list',
            img: rubyquiz,
            src: ''
        },
        {
            key: 7,
            title: 'Todo List',
            text: 'Users can add edit and delete from a todo list',
            img: rubytodo,
            src: ''
        },
    ]
  return (
    <Row xs={1} md={2} className="g-4">
    {projects.map((project) => (
      <Col key={project.key}>
        <Card>
          <Card.Img variant="top" src={project.img} alt='project image'/>
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>
              {project.text}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>

)}

export default Projects