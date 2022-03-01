import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Prueba unitara del componente <GifExpertApp />', () => {
    test('Debe tomar una copia del componente <GifExpertApp />', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar una lista de categorias', () => {
        const categories = ['Elon Musk', 'SpaceX'];
        const wrapper = shallow(
            <GifExpertApp defaultCategories={categories} />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
});
