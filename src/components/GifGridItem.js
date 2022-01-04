import React from 'react';

const GifGridItem = ({ id, url, title }) => {
    return (
        <div className='card animate__animated animate__backInRight'>
            <img src={url} alt={title} />
            <p>{title}</p>
            {/* <p>ID: {id}</p> */}
        </div>
    );
};

export default GifGridItem;
