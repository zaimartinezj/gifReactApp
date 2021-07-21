import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GitExpertApp = () =>{

    const [categories, setCategories] = useState(['Ariana Grande'])

    return (
        <>
        <h2>GitExpertApp</h2>
        <hr/>
        <AddCategory setCategories={setCategories}/>
        <ul>
            {
            categories.map(category => 
            <GifGrid key={category} category={category} />)
            }
        </ul>
        </>
    )

};

export default GitExpertApp;