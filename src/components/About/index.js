import './index.css'
import {Link} from 'react-router-dom'

const About = () => (
  <Link to="/about">
    <div className="about-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-blog-img.png"
        alt="about"
        className="about-img"
      />
      <h1 className="about-heading">About</h1>
      <p className="about-paragraph">
        I love to create! I am a front-end web developer
      </p>
    </div>
  </Link>
)

export default About
