export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=5cILnocb2iIjFWKML5Jg42gYv9r7bogP&q=${encodeURI(category)}&limit=10`;
    const result = await fetch(url);
    const { data } = await result.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    return gifs;
}