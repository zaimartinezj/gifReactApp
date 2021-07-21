//Custom hook: funcionan como functional components
//tienen efectos,estados.. . .
//empieza con use porque quiere decir q es un hook
import {useState, useEffect} from 'react';
import {getGifs} from '../helpers/getGifs'
export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data:[],
        loading: true
    });

    useEffect( ()=>{

        getGifs(category).then((imgs)=>{
            
                 setState(
            {
                data:imgs,
                loading:false
            }
            );
            
           
        }
            
        );

    }, [category]);
    
    return state;

}
