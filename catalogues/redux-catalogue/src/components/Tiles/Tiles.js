import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tile from '../Tile';
import './Tiles.css';

class Tiles extends Component {
    static propTypes() {
        return {
            actions: PropTypes.object.isRequired
        }
    }

    componentWillMount() {
        this.props.actions.getData();
    }

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
