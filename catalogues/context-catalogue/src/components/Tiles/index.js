import React, { Component } from 'react';
import Tile from '../Tile';
import './Tiles.css';

class Tiles extends Component {
    render() {
        const { data } = this.props;

        return (
            <ul className='Tiles'>
                {
                    data && data.map((cont, index) => <Tile data={ cont } key={ cont.title + index } />)
                }
            </ul>
        );
    }
}

export default Tiles;
