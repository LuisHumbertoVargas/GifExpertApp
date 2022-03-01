import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';
import PropTypes from 'prop-types';

describe('Prueba unitaria en el componente <GifGridItem />', () => {
    const title = 'Título del Gif';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('Debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener una etiqueta <img></img> con sus atributos src y alt', () => {
        const img = wrapper.find('img');
        // console.log(img.html());
        // console.log(img.props().src);
        // console.log(img.prop('src'));
        expect(img.prop('alt')).toBe(title);
        expect(img.prop('src')).toBe(url);
    });

    test('Debe de tener una etiqueta <p>con el title</p>', () => {
        const p = wrapper.find('p').text().trim();
        expect(p).toBe(title);
    });

    test('Debe de tener la clase animate__backInRight', () => {
        const div = wrapper.find('div');
        const clase = div.props().className;
        expect(clase.includes('animate__backInRight')).toBe(true);
    });
});

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};
