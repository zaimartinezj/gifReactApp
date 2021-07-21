import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';



export const GifGrid = ({category}) => {

    const {data:imgs, loading} = useFetchGifs(category);
    return (
        <div className='card-grid'>
            <h3 className='category' >{category}</h3>        
                {/* Recordar que es lo mismo que loading ? esto : null */}
            {loading && <p>Loading. . .</p>}
            {
                imgs.map((img)=>
            <GifGridItem key={img.id} {...img}/>)
            }

         </div>
        // /*para no pasar img={img}, se puede pasar
        // las prop con spread operator*/
        
   )}

