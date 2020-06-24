import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    //const categorias = ['one punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState( ['one punch']);
   /*  const handleAdd = () => {
        //setCategories([...categories, 'HunterXX']);
        setCategories( cats => [...cats, 'HunterXX']);
    } */
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories= { setCategories } />
            <hr/>
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    categories.map( category => (
                        <GifGrid key={ category } category={category} />
                    ))
                }
            </ol>
        </>
    )
}
