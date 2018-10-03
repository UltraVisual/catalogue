import React from 'react';
import { Link } from 'react-router-dom';

const Tile = ({ data: {  title, image, link } }) => {
    return (
        <li>
            <h2>{ title }</h2>
            <Link to={ link }>
                <img alt={ title } src={ image }/>
            </Link>
        </li>
    );
};

export default Tile;