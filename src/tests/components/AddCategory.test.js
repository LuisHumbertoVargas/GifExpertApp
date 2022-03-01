import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Prueba unitaria en el componente <AddCategory />', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('Debe de retornar un snapshot del componente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de cambiar el estado del input al ingresar texto', () => {
        const input = wrapper.find('#category');
        const value = 'Insert category';
        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text().trim()).toBe(value); // toBe( type: string )
    });

    test('NO debe postear la información cuando se ejecute el submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() {} });
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        // 1.- Simular el inputChange
        const input = wrapper.find('#category');
        const value = 'Space X';
        input.simulate('change', { target: { value } });

        // 2.- Simular el inputSubmit
        const form = wrapper.find('form');
        form.simulate('submit', { preventDefault() {} });

        // 3.- setCategories debe ser llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        // 4.- El valor del input debe de estar vacio ''
        expect(input.prop('value')).toBe('');
    });
});
