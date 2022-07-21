import React from 'react'
import { Badge, Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/Projects.css'

import bigImg from '../assets/images/chill.jpg'
import ProjectDetailBox from '../components/ProjectDetailBox/ProjectDetailBox'

import foodImg from '../assets/images/projects/gamba-food.png'
import flightImg from '../assets/images/projects/flight-landing.png'
import trackerImg from '../assets/images/projects/tracker-app.png'
import galleryImg from '../assets/images/projects/gallery.jpg'
import flowerImg from '../assets/images/projects/flower.jpg'
import studentImg from '../assets/images/projects/student.png'
import chatbotImg from '../assets/images/projects/chat-app.png'
import museumImg from '../assets/images/projects/museum-login.png'
import museumWebImg from '../assets/images/projects/museum-web.png'

const data = [
  {
    dir: "right",
    img: foodImg,
    title: "Gamba Restaurant",
    badges: ['HTML', 'JavaScript', 'CSS', 'Bootstrap'],
    desc: "A sample for a demo website for an African Restaurant The Gamba Restaurant\n "+ 
          "It worked out as a sample pet project for practising but turned out to be pretty"+
          "good, and liked by many of my associates and friends.",
    link: 'https://github.com/Mayank-141-Shaw/Gamba-Restaurant-Website',
    live: 'https://mayank-141-shaw.github.io/Gamba-Restaurant-Website/'
  },
  {
    dir: "left",
    img: flightImg,
    title: "The GEM Logistics",
    badges: ['HTML', 'JavaScript', 'CSS', 'Bootstrap'],
    desc: "A website design for sample of a airplane and logistics company The GEM\n"+
          "Another mini project that I worked on for improving my skills and understanding"+
          " the base of the front of the website. This provides a full UI of the logistics "+
          "company and how it makes it efficient for it to attract clients and trust.",
    link: 'https://github.com/Mayank-141-Shaw/The-Gem-Flight-Website',
    live: 'https://mayank-141-shaw.github.io/The-Gem-Flight-Website'
  },
  {
    dir: "right",
    img: trackerImg,
    title: "Wildfire Tracker",
    badges: ['HTML', 'CSS', 'ReactJS', 'Google API', 'SQL', 'JavaScript', 'NASA API'],
    desc: "This is a wildfire tracker created using react js. It was created by using data"+
          " from the NASA Api, which nasa provides openly to other users for operations on."+
          " Then ith the help of Google API, we created a google maps canvas that would paint the"+
          " coordinates on the map and show info about each one of the as provided.",
    link: 'https://github.com/Mayank-141-Shaw/Wildfire-Tracker',
    live: 'none'
  },
  {
    dir: "left",
    img: galleryImg,
    title: "Fireshow Gallery",
    badges: ['HTML', 'CSS', 'ReactJS', 'Firebase', 'JavaScript'],
    desc: "This is a gallery application created using ReactJS and Firebase. Its basic function is to et users"+
          " to upload any pictures they want to save in their account and the saved pictures "+
          "will be shown in the gallery in a ordered fashion, like seen in the image. A very good, small but ambitious project.",
    link: 'https://github.com/Mayank-141-Shaw/Fireshow-Gallery',
    live: 'none'
  },
  {
    dir: "right",
    img: flowerImg,
    title: "Flower Classifier App",
    badges: ['Java', 'Tensorflow', 'HTML', 'CSS', 'Firebase'],
    desc: "This is a flower classifier app created using Tensorflow classifier model created using "+
          "classifier model build from Firebase. It accurately predicts among 5 types of flowers defined "+
          "in its model and returns the name with accuracy percentage",
    link: 'https://github.com/Mayank-141-Shaw/Flower-Classifier',
    live: 'none'
  },
  {
    dir: "left",
    img: studentImg,
    title: "Student Management App",
    badges: ['HTML', 'Sql', 'JavaScript', 'CSS', 'Bootstrap', 'Redux'],
    desc: "This is a student management basic app, created using ReactJS which allows to keep tabs/data "
          + "on students and do basic crud operations using React Redux",
    link: 'https://github.com/Mayank-141-Shaw/student-react-app',
    live: 'https://mayank-141-shaw.github.io/student-react-app/'
  },
  {
    dir: "right",
    img: chatbotImg,
    title: "AI Chatbot",
    badges: ['HTML', 'JavaScript', 'CSS', 'React', 'Python', 'Tensorflow', 'Flask', 'Axios', 'Sklearn', 'ML'],
    desc: "This is a chatbot created using microservice architecture. It has two services (react-front, python-back)"+
          " that interact with each other. The user uses the react app, which gets its input and sends it as a get request"+
          " to the flask service, that has a model that parses the message and returns a appropriate response"+
          " from the table of responses that it has stored, in a csv file. The response is then printed to the user"+
          " giving it the interaction of chatting with a bot.",
    link: 'https://github.com/Mayank-141-Shaw/AI-Chat-App',
    live: 'none'
  },
  {
    dir: "left",
    img: museumImg,
    title: "Museum Management System",
    badges: ['HTML', 'MySql', 'JavaScript', 'CSS', 'PHP'],
    desc: "This is a museum management system made in PHP and sql, which is hosted over a local site and does "+
          "all crud operations and manage events and data about items and emloyees of the entire museum, making it hassle free for admins to use.",
    link: 'https://github.com/Mayank-141-Shaw/Museum-Manage-System',
    live: 'none'
  },
  {
    dir: "right",
    img: museumWebImg,
    title: "Museum Website",
    badges: ['HTML', 'JavaScript', 'CSS', 'Bootstrap'],
    desc: "This is a sample website for museum which demonstrates all of its events and features in a very good"+
          " fashion. Made with bootstrap and javascript its a very dynamic website and vibrant.",
    link: 'https://github.com/Mayank-141-Shaw/Museum-Host',
    live: 'https://mayank-141-shaw.github.io/Museum-Host/'
  },
]


function Projects() {

  return (
    <>
      <Container className='text-white'>
        <Row className='text-center'>
          <h1 className='mt-5'>Projects</h1>
          <h5>A brief history of my works and achievements</h5>
        </Row>

        <Container>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
            <Badge
              style={{ display: 'block', width: 'fit-content' }}
              className='year-end'>
              2022
            </Badge>
            <hr style={{ display: 'block', width: '100%', backgroundColor: '#ffffff66' }} />
          </div>

          <ProjectDetailBox info={data[0]} />
          <ProjectDetailBox info={data[1]} />
          <ProjectDetailBox info={data[2]} />
          <ProjectDetailBox info={data[3]} />
          <ProjectDetailBox info={data[4]} />
          <ProjectDetailBox info={data[5]} />
          <ProjectDetailBox info={data[6]} />
          <ProjectDetailBox info={data[7]} />
          <ProjectDetailBox info={data[8]} />

        </Container>

      </Container>
    </>
  )
}

export default Projects