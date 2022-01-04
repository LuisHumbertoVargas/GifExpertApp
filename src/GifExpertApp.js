import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Elon Musk']);

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))}
                {/* {console.log(categories)} */}
            </ol>
        </>
    );
};

export default GifExpertApp;
