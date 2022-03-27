import React from 'react'

export const GiftGridItem = ( props ) => {

    console.log( props );

    return (
        <div className="card animate__animated animate__fadeIn">
            {/* { img.title } */}
            <img src={ props.url } alt={ props.title } />
            <p> { props.title } </p>
        </div>
    )
}
