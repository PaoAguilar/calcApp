import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button/Button';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const renderButtons = onClickNumber => {
    // var number =0
    // Iterar desde el boton 1 al 0
    // var ArrayComponentes +=
    // <Button text={number.toString()} clickHandler={onClickNumber} />
    const renderButton = number => (
        <Button
            key={number}
            text={number.toString()}
            clickHandler={onClickNumber} />
    )
    return numbers.map(renderButton)
}

const Numbers = ({ onClickNumber }) => ( // props lo desestructuramos tomando la propiedad onClickNumber, por eso solo se deja asi como esta ahorita
    <section className="numbers">
        {
            renderButtons(onClickNumber)
        }
    </section>
)

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired,
};

export default Numbers;