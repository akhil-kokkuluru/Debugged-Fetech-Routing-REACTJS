import './index.css'
import {Link} from 'react-router-dom'

const Contact = () => (
  <Link to="/contact">
    <div className="contact-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/contact-blog-img.png"
        alt="contact"
        className="contact-img"
      />
      <h1 className="contact-heading">Contact</h1>
    </div>
  </Link>
)

export default Contact
