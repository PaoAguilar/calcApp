import React from 'react';
import PropTypes from 'prop-types'

// Componente funcional
// tyoe = button-log-text
const Button = ({ type, text, clickHandler }) => (
    <button className={type} onClick={() => clickHandler(text)}>
        <span>{text}</span>
    </button>
)

Button.protoType = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired,
}

export default Button;