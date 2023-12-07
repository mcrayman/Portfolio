import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { FaGithub } from 'react-icons/fa';
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
            src: 'https://github.com/mcrayman/25-5-Clock',
            private: false
        },
        {
            key: 2,
            title: 'Calculator',
            text: 'Performs basic arithmetic functions. It allows users to quickly crunch numbers',
            img: calculator,
            src: 'https://github.com/mcrayman/Calculator',
            private: false
        },
        {
            key: 3,
            title: 'Drum Machine',
            text: 'Lets users create rhythms and beats by programming or playing various drum sounds and percussion samples.',
            img: drummachine,
            src: 'https://github.com/mcrayman/Drum-Machine',
            private: false
        },
        {
            key: 4,
            title: 'Random Quote Machine',
            text: 'Uses an api to randomly return quotes. users have the ability to directly tweet the quote. ',
            img: quotegenerator,
            src: 'https://github.com/mcrayman/Random-Quote-Machine',
            private: false
        },
        {
            key: 5,
            title: 'Markdown Previewer',
            text: 'Displays how text written in markdown language will appear once it\'s rendered or converted into formatted text.',
            img: markdownpreviewer,
            src: 'https://github.com/mcrayman/Markdown-Previewer',
            private: false
        },
        {
            key: 6,
            title: 'Quiz',
            text: 'Users can create profiles and quizzes and add those quizzes to a list.',
            img: rubyquiz,
            src: '',
            private: true
        },
        {
            key: 7,
            title: 'Todo List',
            text: 'Users can add edit and delete from a todo list',
            img: rubytodo,
            src: '',
            private: true
        },
    ]
  return (
<Row id='projects' xs={1} style={{ margin: '75px 150px 0 150px', maxWidth: '1300px', alignSelf: 'center' }} className="row-cols-1 row-cols-md-3 g-2">
  {projects.map((project) => (
    <Col key={project.key} style={{ maxWidth: '600px' }} className="d-flex justify-content-center">
      <Card className="card-projects" style={{ width: '350px', minWidth: '320px', height: '470px', minHeight: '470px', padding: 0, margin: '20px', backgroundColor: '#1C1633', boxShadow: '0 4px 30px 0 #7127BA' }}>
        <Card.Img className="card-img-projects" style={{ height: '250px'}} variant="top" src={project.img} alt='project image'/>
        <Card.Body className='card-body-projects'>
          <Card.Title style={{ color: 'white' }}>{project.title}</Card.Title>
          <Card.Text style={{ color: 'white' }}>{project.text}</Card.Text>
          {project.private !== true ? (
            <Card.Link style={{ position: 'absolute', bottom: '15px' }} href={project.src}><FaGithub className='card-link-github'/></Card.Link>
          ) : (
            <div style={{ color: 'white', position: 'absolute', bottom: '15px' }}>Private 👿</div>
          )}
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

)}

export default Projects