
import Button from './Button'
import PropTypes from 'prop-types'
const Header = (props) => {
 
  return (
    <header className='header'>
        <h1>{props.title}</h1>
        <Button add={props.add}
              color='blue' text={props.add? 'Add': 'Close'} 
              onClick={props.onAddClick} />
    </header>
  )
}
Header.defaultProps = {
    title:"Task Tracking App"
}

Header.prototype = {
  title: PropTypes.string.isRequired
}


export default Header

