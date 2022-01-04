export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
        category
    )}&limit=10&api_key=UO333OWdElurJ0e1CXJWgEkTEsa7QSKu`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    // console.log(data);

    const gifs = await data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.original.url,
        };
    });

    // console.log(gifs);
    return gifs;
};
