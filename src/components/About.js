import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div>
      <h2>About</h2>
      <p>Version 1.1
        <Link to='/'>Go Back</Link>
      </p>
    </div>
  )
}

export default About
