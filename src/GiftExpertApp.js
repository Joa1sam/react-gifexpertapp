import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


const GiftExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Death Note']);

    // const handleAdd = () => {
    //     setCategories( [...categories, 'Naruto'] );
    //     // setCategories ( cats => [ ...cats, 'HunterXHunter' ] );
    // }

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            {/* <button onClick={ handleAdd }>Agregar</button> */}

            <ol>
                {
                    categories.map( category => {
                        // return <li key={ category }> { category} </li>
                        return <GifGrid 
                            key={ category }
                            category={ category } 
                        />
                    })
                }
            </ol>

        </>
    )
}

export default GiftExpertApp;