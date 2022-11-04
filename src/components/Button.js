import React from 'react'
import PropTypes from 'prop-types'
const Button = ({text, onClick, add}) => {
    
  return (
    <button onClick={onClick}
    style={{backgroundColor: add?'red':'blue'}} className="btn">
        {add? 'Close': 'Add' }
    </button>
  );
}
Button.defaultProps={
    color: 'steelblue'
}
Button.propTypes={
    text: PropTypes.string,
    onClick: PropTypes.func
}


export default Button
