import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GiftGridItem } from './GiftGridItem';

export const GifGrid = ({ category }) => {
  
    // const [images, setImages] = useState([]);
    const { data:images, loading } = useFetchGifs( category );

    // getGifs();

    return (
        <>
            <h3 className="animate__animated animate__lightSpeedInRight"> { category } </h3>

            { loading && <p className="animate__animated animate__lightSpeedInLeft">Loading</p> }

            <div className="card-grid">
                
                {
                    images.map( img => (
                        <GiftGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }

            </div>
        </>
  )
}

// Me paso lo mismo, se que ya pasaron 3 meses pero a lo mejor a alguien mas le puede servir la respusta.



// el problema es basicamente esto:

// images.map( img => {
//              <li key={ img.id }>{ img.title }</li>
//            })
// no estas haciendo el retorno explicito que se necesita cuando se hace un callback con las llaves.

// soluciones:

// 1ra solucion. agregar return explicitamente:

// images.map( img => {
//              return <li key={ img.id }>{ img.title }</li>
//           })
// 2da solucion. retornar el li directamente o como lo hace fernando con los parentesis:

// images.map( img => <li key={ img.id }>{ img.title }</li>) 
// images.map( img => (
//            <li key={ img.id }>{ img.title }</li>
//            ))
