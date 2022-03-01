import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('handle Submit', inputValue);
        if (inputValue.trim().length > 2) {
            setCategories((categories) => [inputValue, ...categories]);
            setInputValue('');
        }
    };

    const handleMouseDown = () => {
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>Insert category</p>
            <input
                id={'category'}
                type='text'
                value={inputValue}
                onChange={handleInputChange}
                onMouseDown={handleMouseDown}
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
