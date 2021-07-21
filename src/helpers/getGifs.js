export const getGifs = async (category)=>{
    //encodeURI reemplaza espacios bla bla para q quede perfect
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category)}&api_key=56HXclh0Dp0ET7W2c9JxyGGn6JX4Vsh9`;
    const response = await fetch(url); //peticion->promesa
    const {data} = await response.json(); // traduce el json
    
    const gifs = data.map(gif=>{

       return {id:gif.id,
        title:gif.title,
        url:gif.images?.downsized_medium.url}

    })
     //console.log(gifs);
     return gifs;
    }