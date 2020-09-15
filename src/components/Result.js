import React from 'react';
import PropTypes from 'prop-types'

const Result = ({ value }) => ( //Es como si haya hecho esto const { value } = props
    <div className='result'>
        {value}
    </div>
)


Result.propTypes = {
    value: PropTypes.string.isRequired,
}
Result.defaultProps = {
    value: '0'  // Este es un valor por defecto en caso de no ponerle nada al componente
}

export default Result;