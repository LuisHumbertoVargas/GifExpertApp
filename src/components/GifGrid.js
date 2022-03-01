import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
// import React, { useEffect, useState } from 'react';
// import { getGifs } from '../helpers/getGifs';
import PropTypes from 'prop-types';

const GifGrid = ({ category }) => {
    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     getGifs(category).then(setImages);
    // }, [category]);

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className='animate__animated animate__fadeInTopLeft'>
                {category}
            </h3>
            {loading && (
                <h3 className='animate__animated animate__flash'>Loading...</h3>
            )}
            <div className='card-grid'>
                {images.map((img) => (
                    <GifGridItem key={img.id} {...img} />
                ))}
            </div>
        </>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
};

export default GifGrid;
