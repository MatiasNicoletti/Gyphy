import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
    const {data, loading} = useFetchGifs(category); 

    return (
        <>
            <h3>{category}</h3>
            {loading ? 'Cargando...':'Data cargada'}
            <div className="card-grid">

                {
                    data.map(img => {
                        return <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    })
                }
            </div>
        </>
    );
};

GifGrid.propTypes = {

};

export default GifGrid;