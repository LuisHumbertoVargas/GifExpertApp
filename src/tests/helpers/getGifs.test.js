import { getGifs } from '../../helpers/getGifs';

describe('Pruebas unitarias con getGifs Fetch', () => {
    test('Debe traer 10 elementos', async () => {
        const gifs = await getGifs('Space');
        expect(gifs.length).toBe(10);
    });

    test('Debe de regresar un array vacío sino se envía una categoría en el input', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
});
